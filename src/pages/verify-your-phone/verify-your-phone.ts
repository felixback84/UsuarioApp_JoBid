import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PaymentMethodsPage } from '../payment-methods/payment-methods';

//import { EmailComposer } from '@ionic-native/email-composer';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the VerifyYourPhonePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-verify-your-phone',
  templateUrl: 'verify-your-phone.html',
})
export class VerifyYourPhonePage {
  responseData :any;
  userData = [];
  verificacion: any;
  codVerificacion: any;
  //constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider) {
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyYourPhonePage');
    //this.CorreoVerificacion();
    //alert(this.navParams.get('username'));
    //alert(JSON.stringify(this.navParams.get('datos')));
    this.userData = this.navParams.get('datos');
    this.verificacion = this.userData['verificacion'];

  }
   
  goPayMethod(){

    if(this.userData['verificacion'] == this.codVerificacion){
    // this.navCtrl.push(VerifyYourPhonePage);
    // console.log(this.userData);
    // this.authServiceProvider.postData(this.userData,'signup').then((result) => {
    //   this.responseData = result;
    //   console.log(this.responseData);
    //   alert('userData', JSON.stringify(this.responseData));
    //   localStorage.setItem('userData', JSON.stringify(this.responseData));
    //       alert('code:'+this.userData);
          alert('se registro');
          this.navCtrl.push(PaymentMethodsPage);
    // }, (err) => {
    //   // Error log
    //   //console.log('error '.err);
    //   alert('error ');
    // });

    }else{
      alert('codigo no es el mismo');
    }
    //this.navCtrl.push(PaymentMethodsPage);
  }

  

  CorreoVerificacion(){
    // this.emailComposer.isAvailable().then((available: boolean) =>{
    //  if(available) {
      //   alert('correo enviado');
      //   let email = {
      //   to: 'angellg1990@gmail.com',
      //   subject: 'Correo de verificacion',
      //   body: 'How are you? Nice greetings from Leipzig',
      //   isHtml: true
      // };
      // this.emailComposer.open(email);
     // }else{
     //  alert('correo no enviado');
     // }
    // });
  }
  
}
