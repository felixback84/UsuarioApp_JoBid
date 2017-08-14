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
  direccion: any = [];
  professions = [
                {name:'profesion 1',class:'red'},
                {name:'profesion 2',class:'yellow'},
                {name:'profesion 3',class:'orange'},
                {name:'profesion 4',class:'green'},
                {name:'profesion 5',class:'purple'},
                {name:'profesion 6',class:'blue'},
                ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.direccion = this.navParams.get('datos');
    console.log(this.direccion);
    console.log(this.professions);
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

  Cleaning(item : any){
    console.log(item);
    let DataService = {'datos':item};
    this.navCtrl.setRoot(CleaningPage,DataService);
  }
  

}
