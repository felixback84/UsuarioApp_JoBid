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
  //-data
  datasService:any;
  dataService:any;
  keyOffer:any;
  worker:any;
  userActual:any;

  //-view
  vote:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningVotePage');
    this.datasService = this.navParams.get('datos');
    this.dataService = this.datasService['dataService'];
    this.keyOffer = this.datasService['offer']; 
    this.worker = this.datasService['win']; 
    this.userActual = localStorage.getItem('verificacion');
    console.log(this.datasService);
    console.log(this.dataService);
    console.log(this.keyOffer);
    console.log(this.worker);
    console.log(this.userActual);
  }

  goCleaningOk(){
    console.log(this.vote);
    let DataService = {'datos':{"offer":this.keyOffer,"win":this.worker}};
    console.log(DataService);
  	// this.navCtrl.setRoot(CleaningOkPage,DataService);
  }

}
