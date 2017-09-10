import { Component } from '@angular/core';
import { NavController, NavParams , AlertController} from 'ionic-angular';
import { PayinfoPage } from '../payinfo/payinfo';

// import * as braintree from "braintree";
import * as braintree from "braintree-web";
import * as dropin from 'braintree-web-drop-in';
/**
 * Generated class for the PaymentMethodsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment-methods',
  templateUrl: 'payment-methods.html',
})
export class PaymentMethodsPage {
  userData:any;

  //- create dron in
  CreateErr:any;
  Instance:any;

  booleanCreateErr:boolean=false;
  booleanInstance:boolean=false;

  //- serve
  gateway:any;
  constructor(
    public alertCtrl: AlertController,
    public navCt0rl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad PaymentMethodsPage');
      this.userData = this.navParams.get('datos');
      console.log(this.userData);
      console.log(this.navParams.get('datos'));
      this.showAlert();
      this.dropin();
      //this.newGateWay();
      // this.setTokenClient();
    }
    newGateWay(){
        this.gateway = braintree.connect({
          environment:  braintree.Environment.Sandbox,
          merchantId:   'xg698xhxgkr3z5wx',
          publicKey:    '6xhx6fnr7szs5nmb',
          privateKey:   '04a0e14ca769b7ed5176df62f462200c'
      });
    }
    setTokenClient(){
      this.gateway.clientToken.generate({}, function (err, response) {
        // res.send(response.clientToken);
        console.log(response);
        console.log(err);
      });
  }
  
  goPayInfo(){
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

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: 'An email has been sent to verify your acount',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlertPay() {
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: 'verify the payment method information',
      buttons: ['OK']
    });
    alert.present();
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
      // button.addEventListener('click', function () {
      //   instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
      //     // Submit payload.nonce to your server
      //   });
      // });
    });
    // braintree.dropin.create({
    //   authorization: 'sandbox_gmhv57wq_xg698xhxgkr3z5wx',
    //   container: '#dropin-container'
    // }, function (createErr, instance) {
    //   button.addEventListener('click', function () {
    //     instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
    //       // Submit payload.nonce to your server
    //     });
    //   });
    // });
  }
}
