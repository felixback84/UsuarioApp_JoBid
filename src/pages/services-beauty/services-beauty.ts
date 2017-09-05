import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OfferService } from '../../services/offer.service';

import { CleaningSalePage } from '../cleaning-sale/cleaning-sale';
import { SaleService } from '../../services/sale.service';

/**
 * Generated class for the ServicesBeautyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-services-beauty',
  templateUrl: 'services-beauty.html',
})
export class ServicesBeautyPage {
  dataService = [];
  
    //form show
    booleanPersonaTrainer:boolean= false;
    booleanHairCut:boolean= false;
    booleanMenicure:boolean= false;
    booleanMekeup:boolean= false;
    booleanMassage:boolean= false;
    //varibles
    subCategory:string;
    //pagetes de datos
    dataInformacion:any;
    //variables para formularios
    peinados:any;
    barbas:any;
    typeMenicure:any;
    nailMenicure:any;
    styleMenicure:any;
    styleMekeup:any;
    styleMassage:any;

    //datos del formulario
    maxOffer:any;
    exerciseTrainer:any;
    timeTrainer:any;
    peinadosCut:any;
    typeCut:any;
    barbaCut:any;
    tipoMenicure:any;
    unaMenicure:any;
    estiloMenicure:any;
    estiloMeke:any;
    estiloMassage:any;
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
    console.log('ionViewDidLoad ServicesBeautyPage');
  }

  goCleaningSale(){
    console.log(this.subCategory);
    switch(this.subCategory){
      
      case "Personal trainer":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"exerciseTrainer":this.exerciseTrainer,"timeTrainer":this.timeTrainer,"moreInformation":this.moreInformation}];
        break;
      }
      case "Hair cut and DIY":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"peinadosCut":this.peinadosCut,"typeCut":this.typeCut,"barbaCut":this.barbaCut,"moreInformation":this.moreInformation}];
        break;
      }
      case "Manicure and pedicure":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"tipoMenicure":this.tipoMenicure,"unaMenicure":this.unaMenicure,"estiloMenicure":this.estiloMenicure,"moreInformation":this.moreInformation}];
        break;
      }
      case "Makeup":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"estiloMeke":this.estiloMeke,"moreInformation":this.moreInformation}];
        break;
      }
      case "Massage":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"estiloMassage":this.estiloMassage,"moreInformation":this.moreInformation}];
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
      case "Persona trainer":{
        this.booleanPersonaTrainer=true;
        break;
      }
      case "Hair cut and DIY":{
        this.booleanHairCut=true;
        this.peinados=[
          {"value":"hairstyle","label":"Hairstyle"},
          {"value":"brushed","label":"Brushed"},
          {"value":"hairstyleAndBrushed","label":"Hairstyle and brushed"}
        ]; 
        this.barbas=[
          {"value":"beard","label":"Beard"},
          {"value":"Moustache","label":"Moustache"},
          {"value":"beardAndMoustache","label":"Beard and Moustache"}
        ]; 
        break;
      }
      case "Menicure and pedicure":{
        this.booleanMenicure=true;
        this.typeMenicure=[
          {"value":"Manicure","label":"Manicure"},
          {"value":"Pedicure","label":"Pedicure"},
          {"value":"manicureAndPedicure","label":"Manicure and pedicure"}
        ]; 
        this.nailMenicure=[
          {"value":"naturalNail","label":"Natural nail"},
          {"value":"toenail","label":"Toenail"}
        ]; 
        this.styleMenicure=[
          {"value":"Si","label":"With style"},
          {"value":"No","label":"Without style"}
        ]; 
        break;
      }
      case "Mekeup":{
        this.styleMekeup=[
          {"value":"Basic","label":"Basic"},
          {"value":"Masks","label":"Masks"}
        ]; 
        this.booleanMekeup=true;
        break;
      }
      case "Massage":{
        this.booleanMassage=true;
        this.styleMassage=[
          {"value":"Full","label":"Full"},
          {"value":"Arm","label":"Arm"},
          {"value":"Neck","label":"Neck"},
          {"value":"Back","label":"Back"},
          {"value":"Hand","label":"Hand"},
          {"value":"Leg","label":"Leg"},
          {"value":"feet","label":"feet"}
        ];
        break;
      }
    }
  }
}