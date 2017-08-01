import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IndexPage } from '../index/index';
/**
 * Generated class for the CleaningOkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cleaning-ok',
  templateUrl: 'cleaning-ok.html',
})
export class CleaningOkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningOkPage');
  }
  goIndex(){
 		this.navCtrl.setRoot(IndexPage);
 	}
}
