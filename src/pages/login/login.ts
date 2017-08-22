import { Component } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';
import { NavController, AlertController, NavParams} from 'ionic-angular';

//import { ShowPage } from '../show/show';
//import { HomePage } from '../home/home';
import { PreHomePage } from '../pre-home/pre-home';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



import { EncriptyService } from '../../services/encripty.service';
//import { StorageService } from '../../services/storage.service';
import { UserService } from '../../services/user.service';

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
      private encriptyService : EncriptyService,
      //private storageService : StorageService,
      private userService : UserService,
    ) {
      this.pass ="mi clave";
  	}
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
      let estoyLogueado:boolean = false;
      //console.log(this.userData);
      let passWordEncript = this.encriptyService.GenerateEncripty(this.userData['password']);
      //console.log(passWordEncript);
      //console.log(this.userData['password']);
      //this.userService.getUserLogin(this.userData["password"],this.userData["username"]);
      //let estado=this.userService.getUserLogin(this.userData["password"],this.userData["username"]);
      this.userService.getUserLogin(this.userData["username"],this.userData["password"])
      .subscribe( (value) => {
        //console.dir(value);
        for (let key in value){
          //console.log(value);
          if(value[key] != undefined){
            //console.log('hola user'+value[key]['user_name']);
            this.goNextPagePrehome(value[key]);
            estoyLogueado= true;
          }
        }
        if(!estoyLogueado){
          this.showAlert();
        }
      });
      
      /* this.authServiceProvider.postData(this.userData,'login').then((result) => {
      if(!result['error']){
        //console.log(cont);
        //console.log(result);
        //console.log(result['userData']);
        this.userDataUpdate = {"username":result['userData']['user_username'],"email":result['userData']['user_email'],"name":result['userData']['user_name'],"zipcode":result['userData']['user_zipcode'],"state":result['userData']['user_state'],"picture":result['userData']['user_picture'],"verificacion":result['userData']['user_id'],"pais":result['userData']['user_pais'],"tel":result['userData']['user_tel']};
  
        //console.log(this.userDataUpdate);
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
    }); */
  }

  goNextPagePrehome(datos:any){
    //console.log(datos);
    //console.log(datos['$key']);
    this.userDataUpdate ={ "email":datos['user_email'],"name":datos['user_name'],"pais":datos['user_pais'],"password":datos['user_password'],"picture":datos['user_picture'],"state":datos['user_state'],"tel":datos['user_tel'],"username":datos['user_username'],"verificacion":datos['$key'],"zipcode":datos['user_zipcode']};
    //console.log(this.userDataUpdate);
    let Data = {'datos':this.userDataUpdate}
    this.navCtrl.setRoot(PreHomePage,Data);
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
