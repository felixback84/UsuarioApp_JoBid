import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { AddPaymentMethodPage } from '../add-payment-method/add-payment-method';
/**
 * Generated class for the PaymentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsPage');
  }
  goAddPaymentMethod() {
    this.navCtrl.push(AddPaymentMethodPage);
  }

}
