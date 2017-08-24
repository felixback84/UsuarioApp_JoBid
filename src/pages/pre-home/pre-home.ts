import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { NewAddressPage } from '../new-address/new-address';
import { ShowPage } from '../show/show';

//import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UserService } from '../../services/user.service';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
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
  //userData = {"username":"Angel","password":"12345","email":"angellg1990@gmail.com","name":"Angel","zipcode":"90003","state":"CA","picture":"","verificacion":"20","pais":"USA","direccion":"1234 ave,bogota,CA 90003","tel":"(408)1234567"};
	address : any = [];
  userData: any  = [];
  userActual = "user_1";
  constructor(  
      public navCtrl: NavController, 
      public navParams: NavParams, 
      //public authServiceProvider: AuthServiceProvider,
      private userService: UserService,
      public afAuth: AngularFireAuth  
    ) {
  	// this.address =[
  	// 	{"label":"casa","name":"direccion1"},
		 //  {"label":"apartamento","name":"direcccion2"},
  	// ];
    
    // this.userService.getUser(this.userActual)
    // .forEach( datosUsuario =>{
      //   console.log(datosUsuario);
      // });
      //console.log(this.userService.getAddress('angellg1990@gmail.com'));
    }
    
    ionViewDidLoad() {
      console.log('ionViewDidLoad PreHomePage');
      this.userData = this.navParams.get('datos');
      this.userActual = this.userData['verificacion'];
      console.log(this.userData);
      console.log(this.userActual);
      //this.getUrlDataAddres(); 
      this.getAddressUser(this.userActual);
      this.afAuth.authState.forEach( data => console.log(data));
  }

  goShow(item : any){
  	//console.log(item);
    let DataItem = {'datos':item};
    //console.log(DataItem);  
    this.navCtrl.setRoot(ShowPage,DataItem);
  }

  goNewAddress(){
    let DataItem = {'datos':this.userData};
    this.navCtrl.push(NewAddressPage,DataItem);
  }

  goLocation(){

  }

  getAddressUser(userId: string ){
    this.userService.getAddress(userId)
    //.forEach( datosUsuario =>{
    .subscribe( datosUsuario =>{
    //console.log(datosUsuario);
      for(let usuario in datosUsuario){
        //console.log(usuario);
        //console.log(datosUsuario[usuario]);
        this.address.push({"label":datosUsuario[usuario]['addr_label'],"name":datosUsuario[usuario]['addr_info']});
        //console.log(this.address);
      }
      //console.log(datosUsuario);
    });
  }

  getUrlDataAddres(){
     // this.authServiceProvider.postData(this.userData,'userAddres').then((result) => {
      
    //  //console.log(result);
    //  //console.log(result['userAddres']['0']);
    //  //this.address.push(result['userAddres']['0']);
    //  this.address.push({"label":result['userAddres']['0']['dic_name'],"name":result['userAddres']['0']['dic_direccion']});
    //  }, (err) => {
    //     // Error log
    //     //console.log('error '.err);
    //     alert('error userAddres');
    //   });
    // this.userService.getUser()
    // .subscribe( datosUsuario =>{
    //   for(let usuario of datosUsuario){
    //     console.log(usuario);
    //   }
    // });
  }

}
