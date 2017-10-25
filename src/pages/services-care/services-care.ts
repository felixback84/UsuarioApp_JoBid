import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CleaningSalePage } from '../cleaning-sale/cleaning-sale';
// import { CareProfessionsService } from '../../services/careProfessions.service';
import { OfferService } from '../../services/offer.service';
import { SaleService } from '../../services/sale.service';

// import { SaleService } from '../../services/sale.service';
/**
 * Generated class for the ServicesCarePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-services-care',
  templateUrl: 'services-care.html',
})
export class ServicesCarePage {
  dataService = [];

  //form show
  booleamChildCare:boolean= false;
  booleamSeniorCare:boolean= false;
  booleamFamilyAsistance:boolean= false;
  booleamDogWalker:boolean= false;
  booleamPersonalShopper:boolean= false;
  //varibles
  subCategory:string;
  //pagetes de datos
  dataInformacion:any;
  //variables para formularios
  FamiliaAsistence:any;

  //datos del formulario
  maxOffer:any;
  maxOffer2:any;
  numChildren:any;
  ageChildren:any;
  timeChildren:any;
  ageSenior:any;
  asistenceFamilia:any;
  raceDog:any;
  numDog:any;
  fotoDog:any='';
  purchaseShopper:any;
  placeShopper:any;
  moreInformation:any;

  //label comments
  labelComments:string="More information";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    // private careProfessionS: CareProfessionsService,
    private offerService: OfferService,
    private saleService:SaleService  
  ) {
    this.dataService = this.navParams.get('datos');
    this.subCategory = this.dataService['Clasificacion']['categoria'];
    //this.getForm(this.subCategory);
    this.getForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesCarePage');
    // console.log(localStorage);
  }
  goCleaningSale(){
    switch(this.subCategory){
      case "Child care":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"numChildren":this.numChildren,"ageChildren":this.ageChildren,"timeChildren":this.timeChildren,"moreInformation":this.moreInformation}];
				break;
			}
			case "Senior care":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"ageSenior":this.ageSenior,"moreInformation":this.moreInformation}];
				break;
			}
			case "Family asistance":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"asistenceFamilia":this.asistenceFamilia,"moreInformation":this.moreInformation}];
				break;
			}
			case "Dog walker":{
        this.dataInformacion=[{"maxOffer":this.maxOffer2,"raceDog":this.raceDog,"numDog":this.numDog,"fotoDog":this.fotoDog,"moreInformation":this.moreInformation}];
				break;
			}
			case "Personal shopper":{
        this.dataInformacion=[{"maxOffer":this.maxOffer,"purchaseShopper":this.purchaseShopper,"placeShopper":this.placeShopper,"moreInformation":this.moreInformation}];
				break;
      }
    }
    this.guardarServicio(this.dataInformacion);
  }
  
  guardarServicio(datos){
    console.log(datos);
    this.dataService['Clasificacion']['informacion']=datos['0'];
    var d = new Date();
    let key = d.getTime();
    var keyOffer = "offer_"+(key);
    console.log(this.dataService);
    //let subCategory=this.dataService['Clasificacion']['categoria'];
    //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
    // this.careProfessionS.newOffer(this.dataService,keyOffer);
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
			case "Child care":{
        this.booleamChildCare = true;
        this.labelComments="Special cares";
				break;
			}
			case "Senior care":{
        this.booleamSeniorCare = true;
        this.labelComments="Special cares";
				break;
			}
			case "Family asistance":{
        this.booleamFamilyAsistance = true;
        this.FamiliaAsistence=[
          // {"value":"Issues","label":"Issues"},
          {"value":"ClimateChange","label":"Climate change"},
          {"value":"ImmigrationReform","label":"Immigration reform"},
          {"value":"EconomicOpportunity","label":"Economic opportunity"},
          {"value":"ExpandingEquality","label":"Expanding equality"},
          {"value":"GunViolencePrevention","label":"Gun violence prevention"},
          {"value":"HealthCare","label":"Health care"},
          {"value":"StandWithWomen","label":"Stand with women"}
        ]; 
        console.log(this.FamiliaAsistence);
				break;
			}
			case "Dog walker":{
        this.booleamDogWalker = true;
				break;
			}
			case "Personal shopper":{
        this.booleamPersonalShopper = true;
				break;
			}
	  }
  }

}
