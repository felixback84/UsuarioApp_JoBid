import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

//page
import { PreHomePage } from '../pre-home/pre-home';
//import { ShowPage } from '../show/show';
//import { HomePage } from '../home/home';

//service
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UserService } from '../../services/user.service';
//import { EncriptyService } from '../../services/encripty.service';
//import { StorageService } from '../../services/storage.service';
//import { ListPage } from '../list/list';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData = { "username": "", "password": "" };
  userDataUpdate: any = [];
  userAndEmail: string = '';
  pass: any;
  correoVerificado: any;
  //-form
  private todo: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider,
    public alertCtrl: AlertController,
    //private encriptyService : EncriptyService,
    //private storageService : StorageService,
    private userService: UserService,
    public afAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private fb: Facebook,
  ) {
    this.pass = "mi clave";
    this.todo = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    console.log(this.userData['password']);
    let userPromesa = this.userService.getUserLoginPwd(this.userData["password"]).subscribe((value) => {
      // console.log('success');
      console.log('userPromesa-S login');
      console.log(value);
      for (let key in value) {
        // console.log(value[key]);
        if (value[key]) {
          // console.log(value['0']['prof_username']);
          // console.log(value['0']['prof_email']);
          if ((this.userData["username"] == value[key]['user_username']) || (this.userData["username"] == value[key]['user_email'])) {
            console.info('existeUserPwd');
            console.info(value[key]['login']);
            if (value[key]['login'] != undefined) {
              this.correoVerificado = value[key]['login'];
            } else {
              this.correoVerificado = false;
            }
            this.goNextPagePrehome(value[key]);
          }
        } else {
          this.showAlertLogin();
          console.error('-usuario no se encuentra en base de datos');
        }
      }
      console.log('userPromesa-US login');
      userPromesa.unsubscribe();
    });
  }

  goNextPagePrehome(datos: any) {
    console.log(datos);
    //console.log(datos['$key']);

    if (firebase.auth().currentUser != null) {
      console.log(firebase.auth().currentUser);
    }
    this.userDataUpdate = { "email": datos['user_email'], "name": datos['user_name'], "pais": datos['user_pais'], "password": datos['user_password'], "picture": datos['user_picture'], "state": datos['user_state'], "tel": datos['user_tel'], "username": datos['user_username'], "verificacion": datos['$key'], "zipcode": datos['user_zipcode'] };
    //console.log(this.userDataUpdate);
    try {
      this.afAuth.auth.signInWithEmailAndPassword(datos['user_email'], datos['user_password'])
        .then((result) => {
          console.log(result);
          if (result) {

            console.log(this.afAuth.auth.currentUser);
            console.log(this.afAuth.auth.currentUser.emailVerified);
            console.log(this.correoVerificado);

            if (this.correoVerificado == false) {
              if (this.afAuth.auth.currentUser.emailVerified != false) {
                console.info('cambio estado login base de datos');

                this.userService.setLogin(datos['$key'], true);
                let Data = { 'datos': this.userDataUpdate };
                this.navCtrl.setRoot(PreHomePage, Data);

              } else {
                this.showAlertCorreoNoVerificado();
              }
            } else {
              let Data = { 'datos': this.userDataUpdate };
              this.navCtrl.setRoot(PreHomePage, Data);
            }



            // let Data = { 'datos': this.userDataUpdate }
            // this.navCtrl.setRoot(PreHomePage, Data);
          }
        })
        .catch((error) => {
          this.showAlertLogin();
        });

    } catch (e) { console.error(e); }
  }

  //-facebook
  facebookir() {
    this.fb.login(['email'])
      .then((res) => {
        console.log('Logged into Facebook!', res);
        // alert(JSON.stringify(res));
        let credencial = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        firebase.auth().signInWithCredential(credencial).then(
          (info) => {
            //     // if(user['user_email'] == res.user.email){
            //     //     // console.log('res.user.email');
            //     //     // console.log(user);
            //     //     userDB = user;
            //     //     goPagePrehome= true;
            //     // }
            //     //dentro de res.user -> hay otros datos de usuario -> email?
            //     //if(user.providerData["0"].providerId == "facebook.com"){
            //         if(user['user_email'] == info.providerData['0']['email']){
            //           // console.log('res.additionalUserInfo.profile.email');
            //           // console.log(user);
            //           userDB = user;
            //           goPagePrehome= true;
            //         }
            //     //}
            if (info.uid) {
              let userBD = this.userService.getUserUidFace(info.uid).subscribe(
                (value) => {
                  console.info(JSON.stringify(value));
                  // alert(JSON.stringify(value));
                  console.log('userService-S login');
                  for (let key in value) {
                    // console.log(value[key]);
                    if (value[key]) {
                      console.log(value[key]);
                      console.info(JSON.stringify(value[key]));
                      console.info(value[key]['login']);
                      if (value[key]['login'] != undefined) {
                        this.correoVerificado = value[key]['login'];
                      } else {
                        this.correoVerificado = false;
                      }
                      this.goNextPagePrehomeFace(value[key]);
                    }
                  }
                  console.log('userService-US login');
                  userBD.unsubscribe();
                }
              );
            }
          }
        ).catch();
      })
      .catch(e => {
        console.log('Error logging into Facebook', e)
        alert(JSON.stringify(e));
      });
  }
  goNextPagePrehomeFace(datos: any) {
    //console.log(datos);
    //console.log(datos['$key']);
    this.userDataUpdate = { "email": datos['user_email'], "name": datos['user_name'], "pais": datos['user_pais'], "password": datos['user_password'], "picture": datos['user_picture'], "state": datos['user_state'], "tel": datos['user_tel'], "username": datos['user_username'], "verificacion": datos['$key'], "zipcode": datos['user_zipcode'] };
    //console.log(this.userDataUpdate);
    console.log(this.afAuth.auth.currentUser);
    console.log(this.afAuth.auth.currentUser.emailVerified);
    console.log(this.correoVerificado);

    if (this.correoVerificado == false) {
      if (this.afAuth.auth.currentUser.emailVerified == false) {
        this.showAlertCorreoNoVerificadoFacebook();
      }
    } else {
      let Data = { 'datos': this.userDataUpdate };
      this.navCtrl.setRoot(PreHomePage, Data);
    }

    // let Data = { 'datos': this.userDataUpdate }
    // this.navCtrl.setRoot(PreHomePage, Data);
  }

  //-alert
  showAlertLogin() {
    let alert = this.alertCtrl.create({
      title: 'login failed',
      subTitle: 'Bad request wrong username or email and password',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertCorreoNoVerificado() {
    let alert = this.alertCtrl.create({
      title: 'login failed',
      subTitle: 'Verify your email address for this application',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertCorreoNoVerificadoFacebook() {
    let alert = this.alertCtrl.create({
      title: 'login failed',
      subTitle: 'Verify your email address for this application and login once for the form',
      buttons: ['OK']
    });
    alert.present();
  }
}
