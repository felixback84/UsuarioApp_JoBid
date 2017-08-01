import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { IndexPage } from '../index/index';
/**
 * Generated class for the PayinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-payinfo',
  templateUrl: 'payinfo.html',
})
export class PayinfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayinfoPage');
  }
  goIndex(){
  	this.navCtrl.setRoot(IndexPage);
  }
}
