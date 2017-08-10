import { Component } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';
import { NavController, AlertController} from 'ionic-angular';

//import { ShowPage } from '../show/show';
//import { HomePage } from '../home/home';
import { PreHomePage } from '../pre-home/pre-home';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
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
  responseData :any;
  userData = {"username":"","password":"","email":"","name":"","city":"","state":""};
  userAndEmail: string = '';
  	constructor(public navCtrl: NavController, public authServiceProvider: AuthServiceProvider,public alertCtrl: AlertController) {
  	}
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
      this.userData.email = this.userData.username;
      //console.log('email'+this.userData.email );
      //console.log(this.userData['username']);
      this.authServiceProvider.postData(this.userData,'login').then((result) => {
      this.responseData = result;
      
      
      if(!this.responseData['error']){
        //console.log(cont);
        localStorage.setItem('userData', JSON.stringify(this.responseData));
        //console.log('userData'+JSON.stringify(this.responseData));
        this.navCtrl.setRoot(PreHomePage);
      }else{
        //this.navCtrl.push(HomePage);
        this.showAlert();
      }
      
    }, (err) => {
      // Error log
      console.log('error login'+err);
    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'login failed',
      subTitle: 'Bad request wrong username and password',
      buttons: ['OK']
    });
    alert.present();
  }

}
