import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CleaningInfoPage } from '../cleaning-info/cleaning-info';

import { ProfessionsService } from '../../services/professions.service';
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
  dataCategoria = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private professionsService:ProfessionsService) {
     this.dataService = this.navParams.get('datos');
     console.log(this.dataService['name']);
     this.categoryByProfession(this.dataService['name']);
  }
 
  categoryByProfession(nameService = ""){
    this.dataCategoria=this.professionsService.getCategoryByProfession(nameService);
    console.log(this.dataCategoria);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningPage');
  }
  cleaningInfo(){
    let DataService = {'datos':this.dataService};
  	this.navCtrl.push(CleaningInfoPage,DataService);
  }
}
