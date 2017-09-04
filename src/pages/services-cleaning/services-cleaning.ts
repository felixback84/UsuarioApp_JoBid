import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CleaningSalePage } from '../cleaning-sale/cleaning-sale';
import { CleaningProfessionsService } from '../../services/cleaningProfessions.service';

//import { SaleService } from '../../services/sale.service';
/**
 * Generated class for the ServicesCleaningPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-services-cleaning',
  templateUrl: 'services-cleaning.html',
})
export class ServicesCleaningPage {
  dataService = [];
  
    //form show
    booleanMaids:boolean=false;
    booleanCarWashers:boolean=false;
    booleanPressureCleaning:boolean=false;
    booleanCarpetCleaning:boolean=false;

    //varibles
    subCategory:string;
    //pagetes de datos
    dataInformacion:any;
    //variables para formularios
    FamiliaAsistence:any;

    //datos del formulario
    maxOffer:any;
    placeMaid:any;
    roomMaid:any;
    batMaid:any;
    typeCar:any;
    brandCar:any;
    placeClean:any;
    mtsClean:any;
    typeCarpet:any;
    mtsCarpet:any;
    foto:any='';
    moreInformation:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cleanProfessionS: CleaningProfessionsService,
    //private saleService:SaleService    
  ) {
    this.dataService = this.navParams.get('datos');
    this.subCategory = this.dataService['Clasificacion']['categoria'];
    //this.getForm(this.subCategory);
    this.getForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesCleaningPage');
  }
  goCleaningSale(){
    switch(this.subCategory){
      case "Maids":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"placeMaid":this.placeMaid,"roomMaid":this.roomMaid,"batMaid":this.batMaid,"foto":this.foto,"moreInformation":this.moreInformation}];
        break;
      }
      case "Car washers":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"typeCar":this.typeCar,"brandCar":this.brandCar,"foto":this.foto,"moreInformation":this.moreInformation}];
        break;
      }
      case "Pressure cleaning":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"placeClean":this.placeClean,"mtsClean":this.mtsClean,"foto":this.foto,"moreInformation":this.moreInformation}];
        break;
      }
      case "Carpet & upholstery cleaning":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"typeCarpet":this.typeCarpet,"mtsCarpet":this.mtsCarpet,"foto":this.foto,"moreInformation":this.moreInformation}];
        break;
      }	
    }
    this.guardarServicio(this.dataInformacion);
  }
  
  guardarServicio(datos){
    // console.log(datos);
    this.dataService['Clasificacion']['informacion']=datos['0'];
    let subCategory=this.dataService['Clasificacion']['categoria'];
    var d = new Date();
    let key = d.getTime();
    var keyOffer = "offer_"+(key);
    console.log(this.dataService);

    //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
    //this.saleService.newSale();
    
    this.cleanProfessionS.newOffer(this.dataService,keyOffer);
    let DataService = {'datos':this.dataService};
    this.navCtrl.setRoot(CleaningSalePage);
  }
  
  getForm(){
    switch(this.subCategory){
      case "Maids":{
        this.booleanMaids=true;
        break;
      }
      case "Car washers":{
        this.booleanCarWashers=true;
        break;
      }
      case "Pressure cleaning":{
        this.booleanPressureCleaning=true;
        break;
      }
      case "Carpet & upholstery cleaning":{
        this.booleanCarpetCleaning=true;
        break;
      }
	  }
  }
}
