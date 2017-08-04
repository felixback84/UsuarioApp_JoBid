import { Component } from '@angular/core';
import { NavController, NavParams , AlertController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider,public alertCtrl: AlertController) {
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyYourPhonePage');
    //this.CorreoVerificacion();
    //alert(this.navParams.get('username'));
    this.userData = this.navParams.get('datos');
    //alert(JSON.stringify(this.navParams.get('datos')));
    console.log(this.navParams.get('datos'));
    this.verificacion = this.userData['verificacion'];
    console.log(this.verificacion);
    this.showAlert();

  }
   
  goPayMethod(){

    if(this.verificacion == this.codVerificacion){
      console.log(this.userData);
      this.authServiceProvider.postData(this.userData,'signup').then((result) => {
        this.responseData = result;
        console.log(this.responseData);
        //alert('userData'+ JSON.stringify(this.responseData));
        //localStorage.setItem('userData', JSON.stringify(this.responseData));
            console.log('code:'+this.userData);
            console.log(this.userData);
            console.log('se registro');
            //alert('code:'+JSON.stringify(this.userData));
            //alert('se registro');
            this.navCtrl.push(PaymentMethodsPage);
        }, (err) => {
        // Error log
        //console.log('error '.err);
        alert('error registro');
      });

    }else{
      alert('codigo no es el mismo');
    }
    //this.navCtrl.push(PaymentMethodsPage);
  }

   showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Información',
      subTitle: 'Se a enviado un correo con un codigo de verificacion',
      buttons: ['OK']
    });
    alert.present();
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
