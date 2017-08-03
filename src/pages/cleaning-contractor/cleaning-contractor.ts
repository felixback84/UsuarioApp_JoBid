import { Component } from '@angular/core';
import { NavController, NavParams , AlertController} from 'ionic-angular';

import { CleaningInfoServicePage } from '../cleaning-info-service/cleaning-info-service';
import { ShowPage } from '../show/show';

/**
 * Generated class for the CleaningContractorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cleaning-contractor',
  templateUrl: 'cleaning-contractor.html',
})
export class CleaningContractorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningContractorPage');
  }
  goCleaningInfoService(){
  	this.navCtrl.setRoot(CleaningInfoServicePage);
  }
  // goIndex(){
  // 	this.navCtrl.setRoot(ShowPage);
  // }

   goIndex() {
    let confirm = this.alertCtrl.create({
      title: 'You want to cancel the service?',
      message: 'The cancellation will be charged with 5% of the value of the offer',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.setRoot(ShowPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
