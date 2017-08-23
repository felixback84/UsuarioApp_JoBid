import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { ShowPage } from '../show/show';
import { PreHomePage } from '../pre-home/pre-home';
import { LoginPage } from '../login/login';
import { SingupPage } from '../singup/singup';

import { UserService } from '../../services/user.service';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
userData = null;
mensage :string = '';
displayName;  
providerFaceBook:any;
userDataUpdate:any;
  constructor(
    public navCtrl: NavController, 
    private facebook:  Facebook,
    private userService : UserService,
    public afAuth: AngularFireAuth  
  ) {
    
  }
ionViewDidLoad() {
    console.log('ionViewDidLoad homePage');
  	//  this.facebook.getLoginStatus().then( data=>{
    //     //alert(JSON.stringify(data.status));
    //     if(data.status === 'connected'){
    //             //alert('estoy logeado');
    //             this.navCtrl.setRoot(PreHomePage);
    //         }else{
    //             //alert('no estoy logeado');
    //     }
    // }).catch(e => {
    //   //console.log('Error logging into Facebook', e);
    //   //alert('error if login');
    //   });
      //console.log(this.afAuth.auth['currentUser']);
      this.afAuth.authState.subscribe ( data => console.log(data));
      if(this.afAuth.auth){
         console.log('user logeadoCurren')
      }
      console.dir(this.afAuth.auth);
      console.dirxml(this.afAuth.auth);
      let statusAuth= this.afAuth.auth;
      console.dir(statusAuth.currentUser);
      //this.afAuth.auth.signOut();
  }

  googleir(){
    this.navCtrl.setRoot(PreHomePage);
    //this.navCtrl.pop();
    //this.navCtrl.push(PreHomePage); 
  }

  facebookir(){
    let goPagePrehome:boolean = false;
    let userDB:any;
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        //console.log(res);
        //console.log(res.user.email);
        this.userService.getUsers()
        .subscribe((users) => {
          //console.log(users);
          users.forEach((user) =>{
            if(user['user_email'] == res.user.email){
              //console.log(user);
              userDB = user;
              goPagePrehome= true;
            }
          });
          //console.log(userDB);
          //console.log(goPagePrehome);
          if(goPagePrehome){
            this.goNextPagePrehome(userDB);
          }else{
            this.singup();
          }
        });
      });
   }
   goNextPagePrehome(datos:any){
    //console.log(datos);
    //console.log(datos['$key']);
    this.userDataUpdate ={ "email":datos['user_email'],"name":datos['user_name'],"pais":datos['user_pais'],"password":datos['user_password'],"picture":datos['user_picture'],"state":datos['user_state'],"tel":datos['user_tel'],"username":datos['user_username'],"verificacion":datos['$key'],"zipcode":datos['user_zipcode']};
    //console.log(this.userDataUpdate);
    let Data = {'datos':this.userDataUpdate}
    this.navCtrl.setRoot(PreHomePage,Data);
  }

 
 	login(){
 		this.navCtrl.push(LoginPage);
 	}
 	singup(){
 		this.navCtrl.push(SingupPage);
 	}
}
