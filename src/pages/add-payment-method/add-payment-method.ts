import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

// import * as braintree from "braintree";
import * as braintree from "braintree-web";
import * as dropin from 'braintree-web-drop-in';
/**
 * Generated class for the AddPaymentMethodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-payment-method',
  templateUrl: 'add-payment-method.html',
})
export class AddPaymentMethodPage {
  //-datos Dropin
  CreateErr:any;
  Instance:any;
  //-booleanDropIN
  booleanCreateErr:boolean=false;
  booleanInstance:boolean=false;
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPaymentMethodPage');
    this.dropin();
  }

  goSavePaymentMethod(){
    if(this.booleanCreateErr){
      this.showAlertPay();
    }
    if(this.booleanInstance){
      this.Instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
        if(requestPaymentMethodErr){ 
          console.log(requestPaymentMethodErr); 
        }
        if(payload){ 
          console.log(payload);
        }
      });
      // console.log(this.userData);
      // let Data = {'datos':this.userData};
      // this.navCtrl.push(PayinfoPage,Data);

    }
  }

  dropin(){
    // var button = document.querySelector('#submit-button');
    dropin.create({
      authorization: 'sandbox_gmhv57wq_xg698xhxgkr3z5wx',
      container: '#dropin-container',
      paypal: {
        flow: 'vault'
      }
    }, (createErr, instance)  => {
      if(createErr){
        console.log(createErr);
        this.CreateErr = createErr; this.booleanCreateErr=true;}
        if(instance){
          console.log(instance);
         this.Instance = instance; this.booleanInstance=true;}
     
    });
   
  }

  showAlertPay() {
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: 'verify the payment method information',
      buttons: ['OK']
    });
    alert.present();
  }
}
