import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CleaningSalePage } from '../cleaning-sale/cleaning-sale';
/**
 * Generated class for the CleaningInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cleaning-info',
  templateUrl: 'cleaning-info.html',
})
export class CleaningInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningInfoPage');
  }
  goCleaningSale(){
  	this.navCtrl.setRoot(CleaningSalePage);
  }

}
