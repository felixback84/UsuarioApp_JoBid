import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import cities from 'cities';
import STATE_UTILS from 'states-utils';

//import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

//import { PreHomePage } from '../pre-home/pre-home';
/**
 * Generated class for the NewAddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-address',
  templateUrl: 'new-address.html',
})
export class NewAddressPage {

DirecA: any; DirecB: any; DirecC: any; DirecD: any; state: any; zipcode:any;
estados: any = []; ciudades:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	var stateName = STATE_UTILS.getStates();
    var stateNameShort = STATE_UTILS.getUSPSCodes();
    for (var i = 0; stateName.length > i; i++) {
      this.estados.push({'name':stateName[i],'nameShort':stateNameShort[i]});
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAddressPage');
  }

  goPreHome(){
  	var direccion = this.DirecA+' '+this.DirecB+','+this.DirecC+','+this.DirecD ;
  	console.log(direccion);
  	this.navCtrl.pop();
  }

   setCity(){
    this.zipcode = undefined;
    var someArray = undefined;
    this.ciudades =  [];
    someArray = cities.findByState(this.state);
    for (let entry of someArray) {
      //var city= entry['city'];
      if (typeof entry['city'] !== 'undefined' && entry['city'] !== null && entry['city'] !== '') {
         //console.log(entry['city']); // 1, "string", false
         this.ciudades.push({'name':entry['city'],'zipcode':entry['zipcode']});
      }
      
    }
  }
  
  setZipCode(){
    this.DirecD = this.state+' '+this.zipcode;
  }

}
