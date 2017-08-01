import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { CleaningOkPage } from '../cleaning-ok/cleaning-ok';
/**
 * Generated class for the CleaningVotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cleaning-vote',
  templateUrl: 'cleaning-vote.html',
})
export class CleaningVotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningVotePage');
  }

  goCleaningOk(){
  	this.navCtrl.setRoot(CleaningOkPage);
  }

}
