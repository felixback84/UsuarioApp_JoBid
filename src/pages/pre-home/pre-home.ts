import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';


import { NewAddressPage } from '../new-address/new-address';
import { ShowPage } from '../show/show';

//import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UserService } from '../../services/user.service';
import { Geolocation } from '@ionic-native/geolocation';

// import * as geonames from 'search-geonames';

// import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';

//provider create googleMaps
import { GeocodeServiceProvider } from '../../providers/geocode-service';

import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
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
  userName = '';
  //-- geoLocation
  lat: number= 37.09024;
  lng: number= -95.71289100000001;
  zom: number = 17;
  //-data
  ObjAddress:any =[];
  constructor(  
      public navCtrl: NavController, 
      public navParams: NavParams, 
      //public authServiceProvider: AuthServiceProvider,
      private userService: UserService,
      private geo: Geolocation, private platform: Platform,
      public afAuth: AngularFireAuth,
      // private nativeGeocoder: NativeGeocoder,
      private geocodeServiceProvider: GeocodeServiceProvider
    
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
      this.userName = this.userData['username'];
      localStorage.setItem('userData', JSON.stringify(this.userData));
      localStorage.setItem('verificacion', this.userData['verificacion']);
      //console.log(this.userName);
      // console.log(this.userData);
      console.log(this.userActual);
      //this.getUrlDataAddres(); 
      this.getAddressUser(this.userActual);
      // this.afAuth.authState.forEach( data => console.log(data));
      // let user:any = firebase.auth().currentUser;
      // console.log(user);
      // if (user.isEmailVerified()) {
      //   console.log('user verificado');
      // }else{
      //   console.log('user no verificado');
      // }
      // geonames.findNearBy(this.lat, this.lng, callback, options);
      

  }

  goShow(item : any){
  	//console.log(item);
    let DataItem = {'datos':item};
    localStorage.setItem('address', JSON.stringify(item));
    //console.log(DataItem);  
    this.navCtrl.setRoot(ShowPage,DataItem);
  }

  goNewAddress(){
    let DataItem = {'datos':this.userData};
    this.navCtrl.push(NewAddressPage,DataItem);
  }

  goLocation(){
    // this.getUserLocation();
    this.getUserLocationGeolocation();
    // this.getNames();
    // this.getNamesDireccion();
    // this.getNameAddress();
  }
  // getNames(){
  //   // you can use Geonames options to manage result format
  //   var options = {
  //     language: ''
  //   };
  //   geonames.findNearBy(4.5510497999999995, -74.0984553, (err, result)=>{
  //     // geonames.findNearBy(this.lat, this.lng, (err, result)=>{
  //       if (err) {
  //         console.log("There was an error resolving coordinates.");
  //         console.log(err);
  //         return;
  //       }
        
  //       console.log("Result: " + JSON.stringify(result));
  //       console.log('result findNearBy');
  //       console.log(result);
  //     },'en');
  //   }
    
  //   getNamesDireccion(){

  //     //no disponible para browser
  //     this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818)
  //     .then((result: NativeGeocoderReverseResult) => console.log(JSON.stringify(result)))
  //     .catch((error: any) => console.log(error));
  //   }
    
    getNameAddress(){
      this.geocodeServiceProvider.GeoCodificationInversa(this.lat,this.lng)
      // this.geocodeServiceProvider.GeoCodificationInversa('4.5510497999999995','-74.0984553')
      .then( (result) => {
        // console.log(result);
        this.guardarDireccionGeo(result);
      })
      .catch( (error) => { console.log(error); console.log('error geoCdoficiacion'); });
    }

  getAddressUser(userId: string ){
    this.userService.getAddress(userId)
    //.forEach( datosUsuario =>{
    .subscribe( datosUsuario =>{
    //console.log(datosUsuario);
    let cont:number= 1;
      for(let usuario in datosUsuario){
        //console.log(usuario);
        //console.log(datosUsuario[usuario]);
        
        this.address.push({"label":datosUsuario[usuario]['addr_label'],"name":datosUsuario[usuario]['addr_info']});
        if(cont == 1){
          if(!localStorage.getItem('address')){
            localStorage.setItem('address', JSON.stringify({"label":datosUsuario[usuario]['addr_label'],"name":datosUsuario[usuario]['addr_info']}));
            cont += 1;
          }
        }
        //console.log(this.address);
      }
      //console.log(datosUsuario);
    });
    // console.info(localStorage);
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
  
  // private getUserLocation() {
  //   /// locate the user
  //   // console.info('get User location2');
  //   // console.info(navigator);
  //   //console.info(navigator.geolocation);
  //   //console.info(JSON.stringify(navigator));
  //   //console.info(JSON.stringify(navigator.geolocation));
  //   var geolocationz = navigator.geolocation;
  //   console.log(geolocationz);
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       console.log('Location');
  //       this.lat = position.coords.latitude;
  //       this.lng = position.coords.longitude;
  //       console.info(position.coords.latitude);
  //       console.info(position.coords.longitude);
  //     });
  //   }
  // }

  private getUserLocationGeolocation(){
    this.platform.ready().then(() => {
      var options = {
        timeout: 5000
      };
      this.geo.getCurrentPosition(options).then(resp => {
        console.info('geoLocation');
        // console.log(resp);
        // console.log(resp.coords);
        // console.info(JSON.stringify(resp));
        // console.info(resp.coords.latitude);
        // console.info(resp.coords.longitude);
        // alert(resp.coords.latitude);
        // alert(resp.coords.longitude);
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        this.getNameAddress();
      }).catch(() => {
        console.log("Error to get location");
        // alert('e get location');
        this.getUserLocation();
      });
    });
  }

  private getUserLocation() {
    /// locate the user
    // console.info('get User location2');
    // alert('get User location2');
    // console.info(navigator);
    //console.info(navigator.geolocation);
    //console.info(JSON.stringify(navigator));
    //console.info(JSON.stringify(navigator.geolocation));
    // if (navigator) {
    //   console.log('soportado2');
    //   console.log(navigator);
    // } else {
    //   console.log('no soportado');
    //   /* geolocation IS NOT available */
    // }
    // console.log(geolocationz);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.info('Location');
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        // console.info(position.coords.latitude);
        // console.info(position.coords.longitude);
        // alert('pos-lat:'+position.coords.latitude);
        // alert('pos-lng:'+position.coords.longitude);
        this.getNameAddress();
      });
    }
  }

  guardarDireccionGeo(geoDireccion){
    let booleanGuardarDireccion :boolean = true;
    let label = 'My Address';
    this.ObjAddress.push({"label":label,"name":geoDireccion});
    //console.log(DataItem);  
    // console.log(this.ObjAddress);
    // console.log(this.ObjAddress['0']);
    for(let key in this.address){
      // console.log(this.address[key]['name']);
      if(this.address[key]['name'] ==  geoDireccion){
        booleanGuardarDireccion=false;
      }
    }
    if(booleanGuardarDireccion != false){
      // console.log(JSON.stringify(this.ObjAddress['0']));
      this.userService.newAddress(this.userActual,this.ObjAddress);
      localStorage.setItem('address',JSON.stringify({"label":label,"name":geoDireccion}));
      this.navCtrl.setRoot(ShowPage);
    }else{
      localStorage.setItem('address',JSON.stringify({"label":label,"name":geoDireccion}));
      this.navCtrl.setRoot(ShowPage);
    }
    // console.info(localStorage);
  }
}
