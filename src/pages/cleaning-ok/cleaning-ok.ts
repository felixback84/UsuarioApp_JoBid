import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ShowPage } from '../show/show';
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

  //-data
  datasService:any;
  keyOffer:any;
  worker:any;
  userActual:any;

  //-vista
  offer:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loadData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningOkPage');
  }
  goIndex(){
 		this.navCtrl.setRoot(ShowPage);
  }
   
  loadData(){
    this.datasService = this.navParams.get('datos');
    this.keyOffer = this.datasService['offer']; 
    this.worker = this.datasService['win']; 
    this.userActual = localStorage.getItem('verificacion');
    this.offer= this.worker['offer'];
    console.log(this.datasService);
    console.log(this.keyOffer);
    console.log(this.worker);
    console.log(this.userActual);
  }
}
