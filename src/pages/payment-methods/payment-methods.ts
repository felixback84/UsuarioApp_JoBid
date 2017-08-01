import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PayinfoPage } from '../payinfo/payinfo';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentMethodsPage');
  }
  goPayInfo(){
  	this.navCtrl.push(PayinfoPage);
  }
}
