import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

// import { CleaningInfoPage } from '../cleaning-info/cleaning-info';

import { ProfessionsService } from '../../services/professions.service';

import { ServicesCarePage } from '../services-care/services-care';
import { ServicesCleaningPage } from '../services-cleaning/services-cleaning';
import { ServicesJanotorialPage } from '../services-janotorial/services-janotorial';
import { ServicesTransportationPage } from '../services-transportation/services-transportation';
import { ServicesFoodPage } from '../services-food/services-food';
import { ServicesLegalPage } from '../services-legal/services-legal';
import { ServicesBeautyPage } from '../services-beauty/services-beauty';

/**
 * Generated class for the CleaningPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cleaning',
  templateUrl: 'cleaning.html',
})
export class CleaningPage {

  //-vista
  estrellas:any;

  dataService = [];
  dataCategoria = [];
  nameService:any;
  case:any;
  //fil form
  // categoria:any;
  certificacion:any="";
  seguro:any="";
  // distancia:any;
  // experiencia:any;
  dataClasificaion = {"categoria":"","certificacion":"","seguro":"","distancia":"","experiencia":""};

  private service : FormGroup;
  constructor(
    public navCtrl: NavController, public navParams: NavParams, 
    private professionsService:ProfessionsService, private formBuilder: FormBuilder,
  ) {
     this.dataService = this.navParams.get('datos');
    //  console.log(this.dataService['name']);
     this.categoryByProfession(this.dataService['name']);
    //  console.log(localStorage);
    this.service = this.formBuilder.group({
      categoria: ['', Validators.required],
      certificacio: [''],
      seguro: [''],
      distancia: [''],
      experiencia: ['', Validators.required],
      estrellas: [''],
    });
  }
 
  categoryByProfession(nameService = ""){
    this.nameService=nameService;
    this.dataCategoria=this.professionsService.getCategoryByProfession(nameService);
    // console.log(this.dataCategoria);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningPage');
  }
  cleaningInfo(){
    // this.dataService['subCategoria']=this.categoria;
    localStorage.setItem('SubService',this.dataClasificaion['categoria']);

    if(this.certificacion != ""){
      this.dataClasificaion['certificacion']="true";
    }else{
      this.dataClasificaion['certificacion']="false";
    }
    if(this.seguro != ""){
      this.dataClasificaion['seguro']="true";
    }else{
      this.dataClasificaion['seguro']="false";
    }

    if(this.estrellas == undefined || this.estrellas == null || this.estrellas == ""){
      this.estrellas = 1;
    }

    if( this.dataClasificaion['distancia'] == undefined || this.dataClasificaion['distancia'] == null || this.dataClasificaion['distancia'] == ""){
      this.dataClasificaion['distancia'] = '3M';
    }
    // this.dataService['distancia']=this.distancia;
    // this.dataService['experiencia']=this.experiencia;
    this.dataService['Clasificacion']=this.dataClasificaion;
    this.dataService['status']='Published';
    let userLocal = localStorage.getItem('verificacion');
    this.dataService['User']=userLocal;
    let userLocalAddress =JSON.parse(localStorage.getItem('address'));
    // console.log(userLocalAddress);
    this.dataService['Address']=userLocalAddress;
    // console.log(this.dataService);
    let DataService = {'datos':this.dataService};
    //this.navCtrl.push(CleaningInfoPage,DataService);
    // console.log(this.estrellas);
    this.dataService['Star']=this.estrellas;
    console.log(this.dataService);
    switch(this.nameService){
      case "Care" :{
       //this.dataCategoria = ["Child care","Senior care","Family asistance","Dog walker","Personal shopper"];
       this.navCtrl.push(ServicesCarePage,DataService);
       break;
      }
      case "Cleaning" :{
        this.navCtrl.push(ServicesCleaningPage,DataService);
       //this.dataCategoria = ["Maids","Car washers","Pressure cleaning","Carpet & upholstery cleaning"];

       break;
      }
      case "Janotorial" :{
        this.navCtrl.push(ServicesJanotorialPage,DataService);
       //this.dataCategoria = ["Handyman","Pluming","Electrician","Pool cleaning ","Luck smith" ];

       break;
      }
      case "Transportation" :{
        this.navCtrl.push(ServicesTransportationPage,DataService);
       //this.dataCategoria = ["Day VIP chofer","Taxi","Car pool","Moving services","Delivery" ];

       break;
      }
      case "Food & Beverage" :{
        this.navCtrl.push(ServicesFoodPage,DataService);
       //this.dataCategoria = ["Bartenders","Waitress","Chef","Runners","Valet parking","Hostess"];

       break;
      }
      case "Legal services" :{
        this.navCtrl.push(ServicesLegalPage,DataService);
       //this.dataCategoria = ["Notary"];

       break;
      }
      case "Beauty" :{
        this.navCtrl.push(ServicesBeautyPage,DataService);
        //this.dataCategoria = ["Persona trainer","Hair cut and DIY","Menicure and pedicure","Mekeup","Massage"];
       break;
      }
      default: { 
         console.log("Invalid choice"); 
         break;              
      }
    }
  }
}
