import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { LoginPage } from '../login/login';
//import { ProfessionPage } from '../profession/profession';

import { CleaningPage } from '../cleaning/cleaning';
import {MyApp}  from '../../app/app.component';

/**
 * Generated class for the ShowPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPage');
    console.log(localStorage);
    // MyApp.userName = 'soy nuevo';
    console.log(MyApp);
  }

 	// profession(){
 	// 	//this.navCtrl.push(LoginPage);
 	// 	this.navCtrl.setRoot(ProfessionPage);
 	// }

 	Cleaning(){
 		this.navCtrl.setRoot(CleaningPage);
 	}
}
