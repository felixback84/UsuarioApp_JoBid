import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { LoginPage } from '../login/login';
//import { ProfessionPage } from '../profession/profession';

import { CleaningPage } from '../cleaning/cleaning';
//import {MyApp}  from '../../app/app.component';

import { ProfessionsService } from '../../services/professions.service';

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
  professions: any = [] ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public professionsService : ProfessionsService) {
    //this.direccion = this.navParams.get('datos');
    //console.log(this.direccion);
    this.professions = this.professionsService.getProfessions();
    console.log(this.professions);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPage');
    //console.log(localStorage);
    this.direccion = JSON.parse(localStorage.getItem('address'));
    //console.log(this.direccion);
    // MyApp.userName = 'soy nuevo';
    //console.log(MyApp);
  }

 	// profession(){
 	// 	//this.navCtrl.push(LoginPage);
 	// 	this.navCtrl.setRoot(ProfessionPage);
 	// }

  Cleaning(item : any){
    console.log(item);
    let DataService = {'datos':item};
    this.navCtrl.push(CleaningPage,DataService);
  }
  

}
