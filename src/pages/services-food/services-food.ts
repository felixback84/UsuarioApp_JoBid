import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OfferService } from '../../services/offer.service';

import { CleaningSalePage } from '../cleaning-sale/cleaning-sale';
import { SaleService } from '../../services/sale.service';

/**
 * Generated class for the ServicesFoodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-services-food',
  templateUrl: 'services-food.html',
})
export class ServicesFoodPage {
  dataService = [];
  
    //form show

    booleanBartenders:boolean=false;
    booleanWaitress:boolean=false;
    booleanChef:boolean=false;
    booleanRunners:boolean=false;
    booleanValetParking:boolean=false;
    booleanHostess:boolean=false;
    //varibles
    subCategory:string;
    //pagetes de datos
    dataInformacion:any;
    //variables para formularios
    FamiliaAsistence:any;


    //datos del formulario
    maxOffer:any
    typeBart:any
    eventBart:any
    tiemBart:any
    eventWaiter:any
    timeWaiter:any
    eventChef:any
    menuChef:any
    dinersChef:any
    eventRunners:any
    tiemRunners:any
    eventParking:any
    placeParking:any
    timeParking:any
    eventHostess:any
    placeHostess:any
    timeHostess:any
    moreInformation:any

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
    console.log('ionViewDidLoad ServicesFoodPage');
  }

  goCleaningSale(){
    console.log(this.subCategory);
    switch(this.subCategory){

      case "Bartenders":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"typeBart":this.typeBart,"eventBart":this.eventBart,"tiemBart":this.tiemBart,"moreInformation":this.moreInformation}];
        break;
      }
      case "Waitress":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"eventWaiter":this.eventWaiter,"timeWaiter":this.timeWaiter,"moreInformation":this.moreInformation}];
        break;
      }
      case "Chef":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"eventChef":this.eventChef,"menuChef":this.menuChef,"dinersChef":this.dinersChef,"moreInformation":this.moreInformation}];
        break;
      }
      case "Runners":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"eventRunners":this.eventRunners,"tiemRunners":this.tiemRunners,"moreInformation":this.moreInformation}];
        break;
      }
      case "Valet parking":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"eventParking":this.eventParking,"placeParking":this.placeParking,"moreInformation":this.moreInformation}];
        break;
      }
      case "Hostess":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"eventHostess":this.eventHostess,"placeHostess":this.placeHostess,"timeHostess":this.timeHostess,"moreInformation":this.moreInformation}];
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
    // let subCategory=this.dataService['Clasificacion']['categoria'];
    var d = new Date();
    let key = d.getTime();
    var keyOffer = "offer_"+(key);
    console.log(this.dataService);
    
    //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
    //this.saleService.newSale();
    
    console.log(JSON.stringify(this.dataService));
    console.log('IniNewOffer');
    this.offerService.newOffer(this.dataService,keyOffer);
    console.log('finNewOffer');
    console.log(localStorage);
    console.log(JSON.stringify(localStorage));
    console.log(keyOffer);
    let maxOffer=datos['0']['maxOffer'];
    console.log(maxOffer);
    let userLocal = localStorage.getItem('verificacion');
    console.log(JSON.stringify(userLocal));
    console.log(userLocal);
    console.log('IniNewSale');
    this.saleService.newSale(userLocal,keyOffer,maxOffer);
    console.log('FinNewSale');
    console.log(userLocal);
    console.log(keyOffer);
    console.log(maxOffer);
    console.log(JSON.stringify(userLocal));
    console.log(JSON.stringify(this.dataService));
    console.log('preGData');
     let DataService = {'datos':{"dataService":this.dataService,"offer":keyOffer}};
     console.log(DataService);
     this.navCtrl.setRoot(CleaningSalePage,DataService);
  }
  getForm(){

    switch(this.subCategory){
      case "Bartenders":{
        this.booleanBartenders=true;
        break;
      }
      case "Waitress":{
        this.booleanWaitress=true;
        break;
      }
      case "Chef":{
        this.booleanChef=true;
        break;
      }
      case "Runners":{
        this.booleanRunners=true;
        break;
      }
      case "Valet parking":{
        this.booleanValetParking=true;
        break;
      }
      case "Hostess":{
        this.booleanHostess=true;
        break;
      }
      
	  }
  }

}