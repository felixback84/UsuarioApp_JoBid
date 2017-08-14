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
  dataService = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.dataService = this.navParams.get('datos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningPage');
  }
  cleaningInfo(){
    let DataService = {'datos':this.dataService};
  	this.navCtrl.setRoot(CleaningInfoPage,DataService);
  }
}
