import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import cities from 'cities';
import STATE_UTILS from 'states-utils';

import { UserService } from '../../services/user.service';

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

DirecA: any; DirecB: any; DirecC: any; DirecD: any; state: any; zipcode:any; label:any;
estados: any = []; ciudades:any = [];
ObjAddress: any = [];
userData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private userService: UserService) {
  	var stateName = STATE_UTILS.getStates();
    var stateNameShort = STATE_UTILS.getUSPSCodes();
    for (var i = 0; stateName.length > i; i++) {
      this.estados.push({'name':stateName[i],'nameShort':stateNameShort[i]});
    }
    this.userData = this.navParams.get('datos');
    console.log( this.userData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAddressPage');
  }

  goPreHome(){
  	var direccion = this.DirecA+' '+this.DirecB+','+this.DirecC+','+this.DirecD ;
  	console.log(direccion);
    this.ObjAddress.push({"label":this.label,"name":direccion});
    console.log(this.ObjAddress);
    //consultar ultimo registro
    var ultimoRegistro;
    this.userService.getAddress(this.userData)
    .subscribe( datosUsuario =>{
      //console.log(datosUsuario.length);
      ultimoRegistro = datosUsuario.length;
    });
    console.log(ultimoRegistro);
    //-----verificiar la key que envia
    var newKeyAddres = "addr_"+(ultimoRegistro++);
    //crear registro
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
