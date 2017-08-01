import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CleaningInfoPage } from '../cleaning-info/cleaning-info';

/**
 * Generated class for the CleaningPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cleaning',
  templateUrl: 'cleaning.html',
})
export class CleaningPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningPage');
  }
  cleaningInfo(){
  	this.navCtrl.setRoot(CleaningInfoPage);
  }
}
