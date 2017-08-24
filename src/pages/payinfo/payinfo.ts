import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { PreHomePage } from '../pre-home/pre-home';
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
  userData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayinfoPage');
    this.userData = this.navParams.get('datos');
    console.log(this.userData);
    console.log(this.navParams.get('datos'));
  }
  goIndex(){
    let Data = {'datos':this.userData};
  	this.navCtrl.setRoot(PreHomePage,Data);
  }
}
