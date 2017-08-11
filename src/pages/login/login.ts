import { Component } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';
import { NavController, AlertController, NavParams} from 'ionic-angular';

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
  userData = {"username":"","password":""};
  userDataUpdate: any =[];
  userAndEmail: string = '';
  	constructor(public navCtrl: NavController , public navParams: NavParams, public authServiceProvider: AuthServiceProvider,public alertCtrl: AlertController) {
  	}
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
      //console.log(this.userData);
      this.authServiceProvider.postData(this.userData,'login').then((result) => {
      if(!result['error']){
        //console.log(cont);
        console.log(result);
        console.log(result['userData']);
        this.userDataUpdate = {"username":result['userData']['user_username'],"email":result['userData']['user_email'],"name":result['userData']['user_name'],"zipcode":result['userData']['user_zipcode'],"state":result['userData']['user_state'],"picture":result['userData']['user_picture'],"verificacion":result['userData']['user_id'],"pais":result['userData']['user_pais'],"tel":result['userData']['user_tel']};
  
        console.log(this.userDataUpdate);
        let Data = {'datos':this.userDataUpdate};
        //localStorage.setItem('userData', JSON.stringify(result));
        //console.log('userData'+JSON.stringify(result));
        this.navCtrl.setRoot(PreHomePage,Data);
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
      subTitle: 'Bad request wrong username or email and password',
      buttons: ['OK']
    });
    alert.present();
  }

}
