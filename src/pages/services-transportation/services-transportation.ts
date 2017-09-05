import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OfferService } from '../../services/offer.service';

import { CleaningSalePage } from '../cleaning-sale/cleaning-sale';
import { SaleService } from '../../services/sale.service';
/**
 * Generated class for the ServicesTransportationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-services-transportation',
  templateUrl: 'services-transportation.html',
})
export class ServicesTransportationPage {
  dataService = [];
  
    //form show

    booleanDayVIPChofer:boolean=false;
    booleanTaxi:boolean=false;
    booleanCarPool:boolean=false;
    booleanMovingServices:boolean=false;
    booleanDelivery:boolean=false;
    //varibles
    subCategory:string;
    //pagetes de datos
    dataInformacion:any;
    //variables para formularios
    FamiliaAsistence:any;

    //datos del formulario
    maxOffer:any;
    carVip:any;
    timeVip:any;
    distanceTaxi:any;
    addressTaxi:any;
    carPool:any;
    passePool:any;
    distancePool:any;
    distanceMovil:any;
    boxMovil:any;
    furniMovil:any;
    objDelivery:any;
    addressDelivery:any;
    moreInformation:any;

    constructor(public navCtrl: NavController, public navParams: NavParams,
      private offerService:OfferService,
      private saleService:SaleService    
) {
this.dataService = this.navParams.get('datos');

console.log(this.dataService);
this.subCategory = this.dataService['Clasificacion']['categoria'];
//this.getForm(this.subCategory);
this.getForm();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesTransportationPage');
  }

 

  goCleaningSale(){
    console.log(this.subCategory);
    switch(this.subCategory){

      case "Day VIP chofer":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"carVip":this.carVip,"timeVip":this.timeVip,"moreInformation":this.moreInformation}];
        break;
      }
      case "Taxi":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"distanceTaxi":this.distanceTaxi,"addressTaxi":this.addressTaxi,"moreInformation":this.moreInformation}];
        break;
      }
      case "Car pool":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"carPool":this.carPool,"passePool":this.passePool,"distancePool":this.distancePool,"moreInformation":this.moreInformation}];
        break;
      }
      case "Moving services":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"distanceMovil":this.distanceMovil,"boxMovil":this.boxMovil,"furniMovil":this.furniMovil,"moreInformation":this.moreInformation}];
        break;
      }
      case "Delivery":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"objDelivery":this.objDelivery,"addressDelivery":this.addressDelivery,"moreInformation":this.moreInformation}];
        break;
      }
    }
    console.log(this.dataInformacion);
    this.guardarServicio(this.dataInformacion);
  }
  
  guardarServicio(datos){
    console.log(datos);
    console.log(this.dataService);
    this.dataService['Clasificacion']['informacion']=datos['0'];
    var d = new Date();
    let key = d.getTime();
    var keyOffer = "offer_"+(key);
    console.log(this.dataService);
    
    // let subCategory=this.dataService['Clasificacion']['categoria'];
    //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
    //this.saleService.newSale();
    
    this.offerService.newOffer(this.dataService,keyOffer);
     // console.log(localStorage);
     let maxOffer=datos['0']['maxOffer'];
     let userLocal = localStorage.getItem('verificacion');
     this.saleService.newSale(userLocal,keyOffer,maxOffer);
     // console.log(userLocal);
     // console.log(keyOffer);
     // console.log(maxOffer);
     let DataService = {'datos':{"dataService":this.dataService,"offer":keyOffer}};
     console.log(DataService);
     this.navCtrl.setRoot(CleaningSalePage,DataService);
  }

  getForm(){
    switch(this.subCategory){
      case "Day VIP chofer":{
        this.booleanDayVIPChofer=true;
        break;
      }
      case "Taxi":{
        this.booleanTaxi=true;
        break;
      }
      case "Car pool":{
        this.booleanCarPool=true;
        break;
      }
      case "Moving services":{
        this.booleanMovingServices=true;
        break;
      }
      case "Delivery":{
        this.booleanDelivery=true;
        break;
      }
	  }
  }

}
