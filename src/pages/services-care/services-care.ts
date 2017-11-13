import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { CleaningSalePage } from '../cleaning-sale/cleaning-sale';
// import { CareProfessionsService } from '../../services/careProfessions.service';
import { OfferService } from '../../services/offer.service';
import { SaleService } from '../../services/sale.service';


import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';

import * as firebase from 'firebase/app';
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
  foto:any='';
  purchaseShopper:any;
  placeShopper:any;
  moreInformation:any;

  //label comments
  labelComments:string="More information";
  
  private ServiceCare : FormGroup;
  userActual:any;
  keyOffer:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder,
    // private careProfessionS: CareProfessionsService,
    private offerService: OfferService,
    private saleService:SaleService,
    private camera : Camera,
  ) {
    this.dataService = this.navParams.get('datos');
    this.subCategory = this.dataService['Clasificacion']['categoria'];
    //this.getForm(this.subCategory);
    this.userActual = localStorage.getItem('verificacion');
    var d = new Date();
    let key = d.getTime();
    this.keyOffer = "offer_"+(key);
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
        this.dataInformacion=[{"maxOffer":this.maxOffer2,"raceDog":this.raceDog,"numDog":this.numDog,"foto":this.foto,"moreInformation":this.moreInformation}];
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
    
    console.log(this.dataService);
    //let subCategory=this.dataService['Clasificacion']['categoria'];
    //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
    // this.careProfessionS.newOffer(this.dataService,keyOffer);
    this.offerService.newOffer(this.dataService,this.keyOffer);

    // console.log(localStorage);
    let maxOffer=datos['0']['maxOffer'];
    // let userLocal = localStorage.getItem('verificacion');
    this.saleService.newSale(this.userActual,this.keyOffer,maxOffer);
    // console.log(userLocal);
    // console.log(keyOffer);
    // console.log(maxOffer);
    let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer}};
    console.log(DataService);
    this.navCtrl.setRoot(CleaningSalePage,DataService);
  }
  
  getForm(){
    switch(this.subCategory){
			case "Child care":{
        this.booleamChildCare = true;
        this.labelComments="Special cares";
        this.ServiceCare = this.formBuilder.group({
          maxOffer : ['', Validators.required],
          maxOffer2: [''],
          foto: [''],
          numChildren: ['', Validators.required],
          ageChildren: ['', Validators.required],
          timeChildren: ['', Validators.required],
          ageSenior: [''],
          asistenceFamilia: [''],
          raceDog: [''],
          numDog : [''],
          purchaseShopper : [''],
          placeShopper : [''],
          moreInformation : ['', Validators.required],
        });
				break;
			}
			case "Senior care":{
        this.booleamSeniorCare = true;
        this.labelComments="Special cares";
        this.ServiceCare = this.formBuilder.group({
          maxOffer : ['', Validators.required],
          maxOffer2: [''],
          foto: [''],
          numChildren: [''],
          ageChildren: [''],
          timeChildren: [''],
          ageSenior: ['', Validators.required],
          asistenceFamilia: [''],
          raceDog: [''],
          numDog : [''],
          purchaseShopper : [''],
          placeShopper : [''],
          moreInformation : ['', Validators.required],
        });
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
        this.ServiceCare = this.formBuilder.group({
          maxOffer : ['', Validators.required],
          maxOffer2: [''],
          foto: [''],
          numChildren: [''],
          ageChildren: [''],
          timeChildren: [''],
          ageSenior: [''],
          asistenceFamilia: ['', Validators.required],
          raceDog: [''],
          numDog : [''],
          purchaseShopper : [''],
          placeShopper : [''],
          moreInformation : ['', Validators.required],
        });
				break;
			}
			case "Dog walker":{
        this.booleamDogWalker = true;
        this.ServiceCare = this.formBuilder.group({
          maxOffer : [''],
          maxOffer2: ['', Validators.required],
          foto: [''],
          numChildren: [''],
          ageChildren: [''],
          timeChildren: [''],
          ageSenior: [''],
          asistenceFamilia: [''],
          raceDog: ['', Validators.required],
          numDog : ['', Validators.required],
          purchaseShopper : [''],
          placeShopper : [''],
          moreInformation : ['', Validators.required],
        });
				break;
			}
			case "Personal shopper":{
        this.booleamPersonalShopper = true;
        this.ServiceCare = this.formBuilder.group({
          maxOffer : ['', Validators.required],
          maxOffer2: [''],
          foto: [''],
          numChildren: [''],
          ageChildren: [''],
          timeChildren: [''],
          ageSenior: [''],
          asistenceFamilia: [''],
          raceDog: [''],
          numDog : [''],
          purchaseShopper : ['', Validators.required],
          placeShopper : ['', Validators.required],
          moreInformation : ['', Validators.required],
        });
				break;
			}
	  }
  }

  async  camaraFoto(){
    let file = this.userActual+'/'+this.keyOffer+'/foto';
    console.log('clickCamara');
    try{
      const options: CameraOptions = {
        quality: 60,
        // targetHeight: 100,
        // targetWidth: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      const result = await this.camera.getPicture(options);
      const image = 'data:image/jpeg;base64,' + result;
      const picture = storage().ref(file);
      let UploadTask = picture.putString(image,'data_url');
      UploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>  {
          let url = UploadTask.snapshot.downloadURL;
          console.log(url);
          this.foto = url;
        },
        (error) => { console.log(error)  },
        // () => { 
        // }
      );
    } catch(e){ console.error(e);}
  }

}
