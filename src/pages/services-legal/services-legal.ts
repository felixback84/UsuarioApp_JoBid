import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OfferService } from '../../services/offer.service';

import { CleaningSalePage } from '../cleaning-sale/cleaning-sale';
/**
 * Generated class for the ServicesLegalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-services-legal',
  templateUrl: 'services-legal.html',
})
export class ServicesLegalPage {
  dataService = [];
  
    //form show
    booleanNotary:boolean=false;
    //varibles
    subCategory:string;
    //pagetes de datos
    dataInformacion:any;
    //variables para formularios
    FamiliaAsistence:any;

    //datos del formulario
    maxOffer:any;
    documentNotary:any;
    eventNotary:any;
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
    console.log('ionViewDidLoad ServicesLegalPage');
  }

  goCleaningSale(){
    console.log(this.subCategory);
    switch(this.subCategory){
      case "Notary":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"documentNotary":this.documentNotary,"eventNotary":this.eventNotary,"moreInformation":this.moreInformation}];
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
      case "Notary":{
        this.booleanNotary=true;
        break;
      }
    }
  }
}