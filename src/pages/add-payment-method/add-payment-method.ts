import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

// import * as braintree from "braintree";
import * as braintree from "braintree-web";
import * as dropin from 'braintree-web-drop-in';

//---services
import { BraintreeService } from '../../services/braintree.service';

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
  //-braintree
  token:any;
  //-data
  UserActual:any;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams,
    private braintreeService : BraintreeService,
    public loadingCtrl: LoadingController,
  ) {
      // console.log(localStorage);
      this.UserActual = localStorage.getItem('verificacion');
      console.log(this.UserActual);
      this.crearCustomer();
      this.CallToken();
      this.presentLoading();
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad AddPaymentMethodPage');
  }

  crearCustomer(){
    this.braintreeService.CrearCustomer(this.UserActual).then(
      (value)=>{
        console.log('valueo');
        console.log(value);
      }
    ).catch(
      (error)=>{
        console.log('error');
        console.log(error);
      }
    );;
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
     
    });
   
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
  //- alert
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
