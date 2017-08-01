import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PaymentMethodsPage } from '../payment-methods/payment-methods';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyYourPhonePage');
  }
  goPayMethod(){
  	this.navCtrl.push(PaymentMethodsPage);
  }
}
