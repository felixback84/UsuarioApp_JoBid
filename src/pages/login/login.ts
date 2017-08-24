import { Component } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';
import { NavController, AlertController, NavParams} from 'ionic-angular';

//import { ShowPage } from '../show/show';
//import { HomePage } from '../home/home';
import { PreHomePage } from '../pre-home/pre-home';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



//import { EncriptyService } from '../../services/encripty.service';
//import { StorageService } from '../../services/storage.service';
import { UserService } from '../../services/user.service';

import { AngularFireAuth } from 'angularfire2/auth';
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
  userData = {"username":"","password":""};
  userDataUpdate: any =[];
  userAndEmail: string = '';
  pass:any;
    constructor(public navCtrl: NavController , 
      public navParams: NavParams, 
      public authServiceProvider: AuthServiceProvider,
      public alertCtrl: AlertController,
      //private encriptyService : EncriptyService,
      //private storageService : StorageService,
      private userService : UserService,
      public afAuth: AngularFireAuth  
    ) {
      this.pass ="mi clave";
  	}
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
      let estoyLogueado:boolean = false;
      console.log(this.userData);
      this.userService.getUserLogin(this.userData["username"],this.userData["password"])
      .forEach( (value) => {
        console.dir(value);
        for (let key in value){
          //console.log(value);
          if(value[key] != undefined){
            //console.log('hola user'+value[key]['user_name']);
            this.goNextPagePrehome(value[key]);
            estoyLogueado= true;
          }
        }
        if(!estoyLogueado){
          this.showAlertLogin();
        }
      });

    //   value.forEach((user) =>{
    //     if(user != undefined && user != null){
    //       //console.log(user);
    //       //if(user['user_email'] == user.email){
    //         //console.log(user);
    //         userDB = user;
    //         estoyLogueado= true;
    //       // }
    //     }
    //   // for (let key in value){
    //   //   //console.log(value);
    //   //   if(value[key] != undefined){
    //   //     //console.log('hola user'+value[key]['user_name']);
    //   //     this.goNextPagePrehome(value[key]);
    //   //     estoyLogueado= true;
    //   //   }
    //   // }
    //   })
    //   if(!estoyLogueado){
    //     this.showAlertLogin();
    //   }
    // }).unsubscribe();
  }

  async goNextPagePrehome(datos:any){
    //console.log(datos);
    //console.log(datos['$key']);

    this.userDataUpdate = { "email":datos['user_email'],"name":datos['user_name'],"pais":datos['user_pais'],"password":datos['user_password'],"picture":datos['user_picture'],"state":datos['user_state'],"tel":datos['user_tel'],"username":datos['user_username'],"verificacion":datos['$key'],"zipcode":datos['user_zipcode']};
    //console.log(this.userDataUpdate);
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(datos['user_email'],datos['user_password']);
      result.catch( (error) =>{
        this.showAlertLogin();
      });
      console.log(result);
      if(result){
        let Data = {'datos':this.userDataUpdate}
        this.navCtrl.setRoot(PreHomePage,Data);
      }
      
    }catch(e){ console.error(e);}
  }
  showAlertLogin() {
    let alert = this.alertCtrl.create({
      title: 'login failed',
      subTitle: 'Bad request wrong username or email and password',
      buttons: ['OK']
    });
    alert.present();
  } 



}
