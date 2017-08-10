import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { NewAddressPage } from '../new-address/new-address';
/**
 * Generated class for the PreHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pre-home',
  templateUrl: 'pre-home.html',
})
export class PreHomePage {
	address : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.address =[
  		{"label":"casa","name":"direccion1"},
		  {"label":"apartamento","name":"direcccion2"},
  	];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreHomePage');
  }

  goShow(item : any){
  	console.log(item);
  }

  goNewAddress(){
    this.navCtrl.push(NewAddressPage);
  }

  goLocation(){

  }

}
