import { Component } from '@angular/core';
import { NavController, NavParams , AlertController } from 'ionic-angular';

import { PaymentMethodsPage } from '../payment-methods/payment-methods';

//import { EmailComposer } from '@ionic-native/email-composer';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

//import { EncriptyService } from '../../services/encripty.service';
//import { StorageService } from '../../services/storage.service';
import { UserService } from '../../services/user.service';

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
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public authServiceProvider: AuthServiceProvider,
    public alertCtrl: AlertController,
    //private encriptyService : EncriptyService,
    //private storageService : StorageService,
    private userService : UserService,
  ) {
    //alert(this.navParams.get('username'));
    this.userData = this.navParams.get('datos');
    console.log(this.userData);
    //alert(JSON.stringify(this.navParams.get('datos')));
    console.log(this.navParams.get('datos'));
    this.verificacion = this.userData['verificacion'];
    console.log(this.verificacion);
    this.showAlert();
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyYourPhonePage');
    //this.CorreoVerificacion();

  }
   
  goPayMethod(){
    if(this.verificacion == this.codVerificacion){

      console.log(this.userData);
      //this.traerPost();
     
      this.userService.newUser(this.userData);
      this.navCtrl.push(PaymentMethodsPage);

    }else{
      alert('codigo no es el mismo');
    }
  }

  // traerPost(){
  //   this.authServiceProvider.postData(this.userData,'signup').then((result) => {
  //     this.responseData = result;
  //     console.log(this.responseData['userData']['user_id']);
  //     //alert('userData'+ JSON.stringify(this.responseData));
  //         console.log('code:'+this.userData);
  //         console.log(this.userData);
  //         console.log('se registro');
  //         //alert('code:'+JSON.stringify(this.userData));
  //         //alert('se registro');
  //         this.userData['verificacion'] = this.responseData['userData']['user_id'];
  //     //localStorage.setItem('userData', JSON.stringify(this.userData));
  //         this.navCtrl.push(PaymentMethodsPage);
  //     }, (err) => {
  //     // Error log
  //     //console.log('error '.err);
  //     alert('error registro');
  //   });
  // }

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
