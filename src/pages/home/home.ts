import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { ShowPage } from '../show/show';
import { PreHomePage } from '../pre-home/pre-home';
import { LoginPage } from '../login/login';
import { SingupPage } from '../singup/singup';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
userData = null;
mensage :string = '';
  constructor(public navCtrl: NavController, private facebook:  Facebook) {
    
  }
ionViewDidLoad() {
    console.log('ionViewDidLoad homePage');
  	 this.facebook.getLoginStatus().then( data=>{
        //alert(JSON.stringify(data.status));
        if(data.status === 'connected'){
                //alert('estoy logeado');
                this.navCtrl.setRoot(PreHomePage);
            }else{
                //alert('no estoy logeado');
        }
    }).catch(e => {
      //console.log('Error logging into Facebook', e);
      //alert('error if login');
      });
  }

    googleir(){
    this.navCtrl.setRoot(PreHomePage);
    //this.navCtrl.pop();
    //this.navCtrl.push(PreHomePage); 
  }

  facebookir(){
    // this.facebook.getLoginStatus().then(
      
    // )
  
    this.facebook.login(['email','public_profile'])
    .then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)',[]).then(profile => {
        this.userData = {email: profile['email'], name : profile['first_name'], picture :profile['picture_large']['data']['url'], username : profile['name'] };
        // ej datos == userData = {"username":"","password":"","email":"","name":"","city":"","state":"","picture":""};
        console.log('Logged into Facebook!', response);
        this.navCtrl.setRoot(PreHomePage);
      });
      // this.facebook.getAccessToken(function(token) {
   //       console.log("Token: " + token);
  	// 		});
			
 		}).catch(e => console.log('Error logging into Facebook', e));
 		//this.navCtrl.setRoot(PreHomePage);
 		//this.navCtrl.push(PreHomePage);
 	}
 	login(){
 		this.navCtrl.push(LoginPage);
 	}
 	singup(){
 		this.navCtrl.push(SingupPage);
 	}
}
