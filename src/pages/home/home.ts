import { Facebook } from '@ionic-native/facebook';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

//--page
import { PreHomePage } from '../pre-home/pre-home';
import { LoginPage } from '../login/login';
import { SingupPage } from '../singup/singup';

//--service
import { UserService } from '../../services/user.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userData = null;
  mensage: string = '';
  displayName;
  providerFaceBook: any;
  userDataUpdate: any;
  correoVerificado: any;

  //sub
  userLogeadoSub: any;
  Userexists: any;

  //contador
  consultaFirebaseLogin: number = 1;
  constructor(
    public navCtrl: NavController,
    private fb: Facebook,
    private userService: UserService,
    public afAuth: AngularFireAuth,
  ) {
    //-identifica y redirecciona usuario logeado.
    this.usuarioLogeado();

  }
  ionViewDidLoad() {
    // let userDBLoad:any;
    // let goPagePrehomeLoad = false;
    console.log('ionViewDidLoad homePage');
    // this.afAuth.authState.forEach ( data => {
    //   console.info('find User facebook');
    //   this.userService.getUsers()
    //   .forEach((users) => {
    //     users.forEach((user) =>{
    //       if(data.providerData["0"].providerId == "facebook.com"){
    //           if(user['user_email'] == data.providerData["0"].email){
    //           console.log(data.providerData["0"].email);
    //             console.log(user);
    //             console.log('user existen');
    //             userDBLoad = user;
    //             goPagePrehomeLoad= true;
    //           }
    //       }
    //     });
    //     //console.log(userDB);
    //     // console.log(goPagePrehome);
    //     if(goPagePrehomeLoad){
    //       this.goNextPagePrehomeFace(userDBLoad);
    //     }
    //   });
    //   //---

    // });
    // let currentUserAuth = this.afAuth.auth.currentUser;
    // console.log(currentUserAuth);

    // if(this.afAuth.auth){
    //    console.log('user logeadoCurren')
    // }
    // console.dir(this.afAuth.auth);
    // console.dirxml(this.afAuth.auth);
    // let statusAuth= this.afAuth.auth;
    // console.dir(statusAuth.currentUser);
    //this.afAuth.auth.signOut();
  }

  // googleir() {
  //   this.navCtrl.setRoot(PreHomePage);
  //   //this.navCtrl.pop();
  //   //this.navCtrl.push(PreHomePage); 
  // }

  facebookir() {
    // let goPagePrehome:boolean = false;
    // let userDB:any;
    this.fb.login(['email'])
      .then((res) => {
        console.log('Logged into Facebook!', res);
        // alert(JSON.stringify(res));
        let credencial = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        firebase.auth().signInWithCredential(credencial).then(
          (info) => {
            // alert(JSON.stringify(info));
            // alert(JSON.stringify(info.providerData['0']['email']));
            // alert(JSON.stringify(info.providerData));
            // console.log(info);
            // console.log(info.providerData.email);
            // console.log(info.providerData);
            // if(info.providerData['0']['email'] != undefined){
            // this.userService.getUserEmailPerfil(info.providerData['0']['email']).subscribe(
            //   (emailBD)=>{
            //     alert(JSON.stringify(emailBD));
            //     if(emailBD == info.providerData.email){
            //     }
            //   });
            // this.userService.getUsers()
            // .forEach((users) => {
            //   //console.log(users);
            //   users.forEach((user) =>{
            //     //console.log(user);
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
            //   });
            //   //console.log(userDB);
            //   if(!goPagePrehome){
            //     //   this.goNextPagePrehome(userDB);
            //     // }else{
            //       this.singup();
            //     }
            // });
            this.singup();
            // }
          }
        ).catch();
      })
      .catch(e => {
        console.log('Error zing into Facebook', e)
        alert(JSON.stringify(e));
      });
  }

  // facebookir(){
  //   let goPagePrehome:boolean = false;
  //   let userDB:any;
  //   var provider = new firebase.auth.FacebookAuthProvider();
  //   provider.addScope('email');
  //   firebase.auth().signInWithPopup(provider)
  //     .then(res => {
  //       //console.log(res.user.email);
  //       console.log(res);
  //       console.info(JSON.stringify(res));
  //       //console.log(res);
  //       this.userService.getUsers()
  //       .forEach((users) => {
  //         //console.log(users);
  //         users.forEach((user) =>{
  //           //console.log(user);
  //           // if(user['user_email'] == res.user.email){
  //           //     // console.log('res.user.email');
  //           //     // console.log(user);
  //           //     userDB = user;
  //           //     goPagePrehome= true;
  //           // }
  //           //dentro de res.user -> hay otros datos de usuario -> email?
  //           //if(user.providerData["0"].providerId == "facebook.com"){
  //               if(user['user_email'] == res.additionalUserInfo.profile.email){
  //                 // console.log('res.additionalUserInfo.profile.email');
  //                 // console.log(user);
  //                 userDB = user;
  //                 goPagePrehome= true;
  //               }
  //           //}
  //         });
  //         //console.log(userDB);
  //         //console.log(goPagePrehome);
  //         if(!goPagePrehome){
  //         //   this.goNextPagePrehome(userDB);
  //         // }else{
  //           this.singup();
  //         }
  //       });
  //     });
  // }

  login() {
    this.navCtrl.push(LoginPage);
    this.desSubcribir();
  }
  singup(UserDB?: any) {
    this.navCtrl.push(SingupPage);
    this.desSubcribir();
  }


  usuarioLogeado() {
    if (this.consultaFirebaseLogin == 1) {
      this.consultaFirebaseLogin = 2;
      console.log('contadorLoging' + this.consultaFirebaseLogin);
      this.userLogeadoSub = this.afAuth.authState.subscribe(userAuth => {
        //let homeStatus=this.afAuth.authState.subscribe( userAuth => {
        console.log('userLogeado');
        if (userAuth) {
          if (userAuth != null) {
            console.info('find user home login');
            if (userAuth.providerData["0"].providerId == 'password') {
              let email = userAuth.providerData["0"].email;
              console.log(email);

              this.Userexists = this.userService.getUserEmailPerfil(email).subscribe((User) => {
                console.log('User Logueado');
                // console.log(User);
                // console.log(this.Userexists);
                if (User['0']) {
                  if (User['0']['login'] != undefined) {
                    this.correoVerificado = User['0']['login'];
                  } else {
                    this.correoVerificado = false;
                  }
                  this.goNextPagePrehome(User['0']);
                  // if(this.Userexists != undefined){
                  this.userLogeadoSub.unsubscribe();
                  this.Userexists.unsubscribe();
                  console.log('unsubscribe');
                  // }
                }
              });
            } else {
              let faceUid = userAuth.uid;
              console.log(faceUid);
              this.Userexists = this.userService.getUserUidFace(faceUid).subscribe((User) => {
                console.log('User Logueado');
                // console.log(this.Userexists);
                // console.log(User);
                if (User['0']) {
                  if (User['0']['login'] != undefined) {
                    this.correoVerificado = true;
                  }
                  this.goNextPagePrehome(User['0']);
                  // if(this.Userexists != undefined){
                  this.userLogeadoSub.unsubscribe();
                  this.Userexists.unsubscribe();
                  console.log('unsubscribe');
                  // }
                }
              });
            }
          } else {
            this.userLogeadoSub.unsubscribe();
            console.log('unsubscribe');
          }
        } else {
          this.userLogeadoSub.unsubscribe();
          console.log('unsubscribe');
          console.info('find user home login - no');
        }
      });
      // homeStatus.unsubscribe();
    }
  }

  goNextPagePrehome(datos: any) {
    console.log(this.userDataUpdate);
    console.log(this.afAuth.auth.currentUser.emailVerified);
    console.log(this.afAuth.auth.currentUser);
    console.log(this.correoVerificado);

    this.userDataUpdate = { "email": datos['user_email'], "name": datos['user_name'], "pais": datos['user_pais'], "password": datos['user_password'], "picture": datos['user_picture'], "state": datos['user_state'], "tel": datos['user_tel'], "username": datos['user_username'], "verificacion": datos['$key'], "zipcode": datos['user_zipcode'] };
    if (this.correoVerificado == false) {
      if (this.afAuth.auth.currentUser != null) {

        if (this.afAuth.auth.currentUser.emailVerified != false) {
          console.info('cambio estado login base de datos');

          this.userService.setLogin(datos['$key'], true);
          localStorage.setItem('verificacion', datos['$key']);
          let Data = { 'datos': this.userDataUpdate };
          this.navCtrl.setRoot(PreHomePage, Data);

        } else {
          // this.showAlertCorreoNoVerificado();
          this.cerrarSeccion();
        }
      }
    } else {
      localStorage.setItem('verificacion', datos['$key']);
      let Data = { 'datos': this.userDataUpdate };
      this.navCtrl.setRoot(PreHomePage, Data);
    }

    // localStorage.setItem('verificacion', datos['$key']);
    // let Data = { 'datos': this.userDataUpdate };
    // this.navCtrl.setRoot(PreHomePage, Data);
    this.desSubcribir();
  }

  desSubcribir() {
    if (this.userLogeadoSub != undefined) { this.userLogeadoSub.unsubscribe(); }
    if (this.Userexists != undefined) { this.Userexists.unsubscribe(); }
  }

  cerrarSeccion() {
    this.afAuth.auth.signOut().then((value) => {
      console.log(value);
    }).catch((error) => console.info(error));
    localStorage.removeItem('verificacion');
  }
}
