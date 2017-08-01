import { Component } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
//import UsaStates from 'usa-states';
import cities from 'cities';
import STATE_UTILS from 'states-utils';


import { VerifyYourPhonePage } from '../verify-your-phone/verify-your-phone';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the SingupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {
  responseData :any;
  userData = {"username":"","password":"","email":"","name":"","city":""};
  ciudad: any =  [];
  SelectCities : string;
  zipCode:string;
  // constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider) {
  // }
  constructor(public navCtrl: NavController, public authServiceProvider: AuthServiceProvider) {
    //var ciudad :{ name = string; zipcode = number;} =  [];
      // var usStates = new UsaStates();
      // console.log(usStates.states);
      //var UsaStates = require('usa-states').UsaStates;
      //alert(cities.findByState('NJ'));
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SingupPage');
    //console.dir(lodash);
    //console.dir(lodash.capitalize('myStringToCapitalize'));
    // var usStates = new UsaStates();
    // console.log(usStates.states);
    var someArray = cities.findByState('NJ');
    for (let entry of someArray) {
      //var city= entry['city'];
      if (typeof entry['city'] !== 'undefined' && entry['city'] !== null && entry['city'] !== '') {
         //console.log(entry['city']); // 1, "string", false
         this.ciudad.push({'name':entry['city'],'zipcode':entry['zipcode']});
      }
      
    }
    //console.log(this.ciudad);
    console.log(STATE_UTILS.getStates());
  }
  goPhoneV(){

  	this.navCtrl.push(VerifyYourPhonePage);
    console.log(this.userData);
    this.authServiceProvider.postData(this.userData,'signup').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(VerifyYourPhonePage);
    }, (err) => {
      // Error log
    });
  }

  setZipCode(){
    //alert('select other item');
    //console.log (this.userData.city);
    this.zipCode = this.userData.city;
    console.log('zip:'+this.zipCode);
  }
}
