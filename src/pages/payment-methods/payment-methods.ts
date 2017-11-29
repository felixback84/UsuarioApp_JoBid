import { Component } from '@angular/core';
import { NavController, NavParams , AlertController, LoadingController} from 'ionic-angular';
//import * as braintree from "braintree-web";
import * as dropin from 'braintree-web-drop-in';

//--pages
import { PreHomePage } from '../pre-home/pre-home';

//--services
import { BraintreeService } from '../../services/braintree.service';

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
  UserActual:any;
  //- create dron in
  CreateErr:any;
  Instance:any;

  booleanCreateErr:boolean=false;
  booleanInstance:boolean=false;

  //- serve
  gateway:any;

  //--timer
  objNodeTimer:any;
  segundos:number = 5;
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams,
    private braintreeService : BraintreeService,
    public loadingCtrl: LoadingController,
  ) {
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad PaymentMethodsPage');
      this.userData = this.navParams.get('datos');
      console.log(this.userData);
      console.log(this.userData['verificacion']);
      console.log(this.navParams.get('datos'));
      this.UserActual = this.userData['verificacion'];
      
      console.log(this.UserActual);
      this.crearCustomer();
      this.showAlert();
      this.presentLoading();
      // this.dropin();
      //this.newGateWay();
      // this.setTokenClient();
    }
    // newGateWay(){
    //     this.gateway = braintree.connect({
    //       environment:  braintree.Environment.Sandbox,
    //       merchantId:   'xg698xhxgkr3z5wx',
    //       publicKey:    '6xhx6fnr7szs5nmb',
    //       privateKey:   '04a0e14ca769b7ed5176df62f462200c'
    //   });
    // }
  //   setTokenClient(){
  //     this.gateway.clientToken.generate({}, function (err, response) {
  //       // res.send(response.clientToken);
  //       console.log(response);
  //       console.log(err);
  //     });
  // }
  
  goPayInfo(){
    if(this.booleanCreateErr){
      this.showAlertPay();
    }
    if(this.booleanInstance){
      this.startTimer();
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

  crearCustomer(){
    this.braintreeService.CrearCustomer(this.UserActual).then(
      (value)=>{
        console.log('valueo');
        console.log(value);
        this.CallToken();
      }
    ).catch(
      (error)=>{
        console.log('error');
        console.log(error);
      }
    );;
  }

  CallToken(){
    // let token ='sandbox_gmhv57wq_xg698xhxgkr3z5wx';
    // let token:any = undefined;
    this.braintreeService.CrearTokenCustomer(this.UserActual).then(
      (value)=>{
        console.log(value);
        this.dropin(value);
      }
          ).catch(
      (error)=>{
      console.log(error);
      }
      );
    }
  
  //--- timer
  startTimer(){
    this.objNodeTimer=setInterval( () => this.timer(),1000);
  }

  private timer(){
    if(this.segundos == 1){ 
        clearInterval(this.objNodeTimer);
        this.goPrehome();
    }else{
      if(--this.segundos< 0){}
    }
    console.log(this.segundos);
  }

  dropin(token){
    // var button = document.querySelector('#submit-button');
    dropin.create({
      authorization:token ,
      // authorization: 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJlYTk4MzYzMmNkYzNlOTViY2Q4MmIxYzNlNmZkNDEwYTk4ODdlNmIyNTk5YzVmZDg2MzNlZjU5YWE2NzBlYzI5fGNyZWF0ZWRfYXQ9MjAxNy0wOS0xNFQyMDozOToyMi4zODkzMjUxMjQrMDAwMFx1MDAyNm1lcmNoYW50X2lkPXhnNjk4eGh4Z2tyM3o1d3hcdTAwMjZwdWJsaWNfa2V5PTZ4aHg2Zm5yN3N6czVubWIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMveGc2OTh4aHhna3IzejV3eC9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbImN2diJdLCJlbnZpcm9ubWVudCI6InNhbmRib3giLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMveGc2OTh4aHhna3IzejV3eC9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9jbGllbnQtYW5hbHl0aWNzLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20veGc2OTh4aHhna3IzejV3eCJ9LCJ0aHJlZURTZWN1cmVFbmFibGVkIjp0cnVlLCJwYXlwYWxFbmFibGVkIjp0cnVlLCJwYXlwYWwiOnsiZGlzcGxheU5hbWUiOiJHSUcgLyBHRU5FU0lTIElOVkVTVE1FTlQgR1JPVVAgTExDIiwiY2xpZW50SWQiOiJBZUdHZEM3RXFBWWk3aklYSGJnNml4RlZmRzF2Wmp5d1lQam9leC1WLWRmdC0yZXFtSVBYVXRzc1lfVzJHbjFkcGtXX3Zab0g4ekp4UW5nZyIsInByaXZhY3lVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vcHAiLCJ1c2VyQWdyZWVtZW50VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3RvcyIsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImFsbG93SHR0cCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOmZhbHNlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImdpZ2dlbmVzaXNpbnZlc3RtZW50Z3JvdXBsbGMiLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwibWVyY2hhbnRJZCI6InhnNjk4eGh4Z2tyM3o1d3giLCJ2ZW5tbyI6Im9mZiJ9',
      //-- token inventado para probar que DropIn Ui no permite cualquier clave authorization: 'eyJ2ZXJzaW9uIjoyXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJlYTk4MzYzMmNkYzNlOTViY2Q4MmIxYzNlNmZkNDEwYTk4ODdlNmIyNTk5YzVmZDg2MzNlZjU5YWE2NzBlYzI5fGNyZWF0ZWRfYXQ9MjAxNy0wOS0xNFQyMDozOToyMi4zODkzMjUxMjQrMDAwMFx1MDAyNm1lcmNoYW50X2lkPXhnNjk4eGh4Z2tyM3o1d3hcdTAwMjZwdWJsaWNfa2V5PTZ4aHg2Zm5yN3N6czVubWIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMveGc2OTh4aHhna3IzejV3eC9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbImN2diJdLCJlbnZpcm9ubWVudCI6InNhbmRib3giLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMveGc2OTh4aHhna3IzejV3eC9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9jbGllbnQtYW5hbHl0aWNzLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20veGc2OTh4aHhna3IzejV3eCJ9LCJ0aHJlZURTZWN1cmVFbmFibGVkIjp0cnVlLCJwYXlwYWxFbmFibGVkIjp0cnVlLCJwYXlwYWwiOnsiZGlzcGxheU5hbWUiOiJHSUcgLyBHRU5FU0lTIElOVkVTVE1FTlQgR1JPVVAgTExDIiwiY2xpZW50SWQiOiJBZUdHZEM3RXFBWWk3aklYSGJnNml4RlZmRzF2Wmp5d1lQam9leC1WLWRmdC0yZXFtSVBYVXRzc1lfVzJHbjFkcGtXX3Zab0g4ekp4UW5nZyIsInByaXZhY3lVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vcHAiLCJ1c2VyQWdyZWVtZW50VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3RvcyIsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImFsbG93SHR0cCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOmZhbHNlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImdpZ2dlbmVzaXNpbnZlc3RtZW50Z3JvdXBsbGMiLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwibWVyY2hhbnRJZCI6InhnNjk4eGh4Z2tyM3o1d3giLCJ2ZW5tbyI6Im9mZiJ9',
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

  goPrehome(){
    let Data = {'datos':this.userData};
    this.navCtrl.setRoot(PreHomePage,Data);
  } 
  //-show alert
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

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000
    });
    loader.present();
  }
}
