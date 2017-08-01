import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CleaningVotePage } from '../cleaning-vote/cleaning-vote';

/**
 * Generated class for the CleaningInfoServicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cleaning-info-service',
  templateUrl: 'cleaning-info-service.html',
})
export class CleaningInfoServicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningInfoServicePage');
  }
  goCleaningVote(){
  	this.navCtrl.setRoot(CleaningVotePage);
  }
}
