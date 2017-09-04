import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OfferService } from '../../services/offer.service';

import { CleaningSalePage } from '../cleaning-sale/cleaning-sale';

/**
 * Generated class for the ServicesJanotorialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-services-janotorial',
  templateUrl: 'services-janotorial.html',
})
export class ServicesJanotorialPage {
  dataService = [];
  
    //form show
    booleanHandyman:boolean=false;
    booleanPluming:boolean=false;
    booleanElectrician:boolean=false;
    booleanPoolSleaning:boolean=false;
    booleanLuckSmith:boolean=false;
    //varibles
    subCategory:string;
    //pagetes de datos
    dataInformacion:any;
    //variables para formularios
    Jobs:any;

    //datos del formulario
    maxOffer:any;
    maxOffer2:any;
    jobHand:any;
    mtsHand:any;
    roomPluming:any;
    mtsPluming:any;
    roomElec:any;
    mtsElect:any;
    typePool:any;
    mtsPool:any;
    lockLuck:any;
    foto:any='';
    moreInformation:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
            private offerService:OfferService  
  ) {
    this.dataService = this.navParams.get('datos');
    
    console.log(this.dataService);
    this.subCategory = this.dataService['Clasificacion']['categoria'];
    //this.getForm(this.subCategory);
    this.getForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesJanotorialPage');
  }

  goCleaningSale(){
    console.log(this.subCategory);
    switch(this.subCategory){
      
        case "Handyman":{
          this.dataInformacion=[{"maxOffer":this.maxOffer2,"jobHand":this.jobHand,"mtsHand":this.mtsHand,"foto":this.foto,"moreInformation":this.moreInformation,
         }];
          break;
        }
        case "Pluming":{
          this.dataInformacion=[{"maxOffer":this.maxOffer2,"roomPluming":this.roomPluming,"mtsPluming":this.mtsPluming,"foto":this.foto,"moreInformation":this.moreInformation,
         }];
          break;
        }
        case "Electrician":{
          this.dataInformacion=[{"maxOffer":this.maxOffer2,"roomElec":this.roomElec,"mtsElect":this.mtsElect,"foto":this.foto,"moreInformation":this.moreInformation,
         }];
          break;
        }
        case "Pool cleaning":{
          this.dataInformacion=[{"maxOffer":this.maxOffer2,"typePool":this.typePool,"mtsPool":this.mtsPool,"foto":this.foto,"moreInformation":this.moreInformation,
         }];
          break;
        }
        case "Luck smith":{
          this.dataInformacion=[{"maxOffer":this.maxOffer,"lockLuck":this.lockLuck,"moreInformation":this.moreInformation,
         }];
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
    let subCategory=this.dataService['Clasificacion']['categoria'];
    var d = new Date();
    let key = d.getTime();
    var keyOffer = "offer_"+(key);
    console.log(this.dataService);

    //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
    //this.saleService.newSale();
    
    this.offerService.newOffer(this.dataService,keyOffer);
    let DataService = {'datos':this.dataService};
    this.navCtrl.setRoot(CleaningSalePage);
  }

  getForm(){
    switch(this.subCategory){
      case "Handyman":{
        this.booleanHandyman=true;
        this.Jobs=[
          {"value":"Mowing","label":"Mowing"},
          {"value":"CleanGutters","label":"Clean gutters"}
        ]; 
        console.log(this.Jobs);
        break;
      }
      case "Pluming":{
        this.booleanPluming=true;
        break;
      }
      case "Electrician":{
        this.booleanElectrician=true;
        break;
      }
      case "Pool cleaning":{
        this.booleanPoolSleaning=true;
        break;
      }
      case "Luck smith":{
        this.booleanLuckSmith=true;
        break;
      }
     
	  }
  }
}
