import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CleaningVotePage } from '../cleaning-vote/cleaning-vote';

import { ProfessionalsService } from '../../services/professionals.service';
import { SaleService } from '../../services/sale.service';
import { OfferService } from '../../services/offer.service';
/**
 * Generated class for the CleaningInfoServicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cleaning-info-service',
  templateUrl: 'cleaning-info-service.html',
})
export class CleaningInfoServicePage {

  //-- default
  imgJobDefault ="assets/img/professions/cleaning.png";
  //-load data
  datasService:any;
  dataService:any;
  keyOffer:any;
  worker:any;
  userActual:any;
  sale:any;
  information:any;
  serviceCode:any;
  //-map
  Userlat:any;
  Userlng:any;
  zom: number = 14;
  providerLatitud:any;
  providerLongitud:any;
  //-datos BD
  status="Waiting for the professional";

  //--load vista
  workerInfo:any;
  ImgJobr:any;
  nameJobr:any;
  certificateJobr:any;
  insuranceJobr:any;
  presentationJobr:any;
  starJobr:any;

  //-tempoaral animaicion
  objNodeTimer:any;
  segundos:any=2;

  //-subs
  saleStatusSubs:any;
  OfferUserLocationSubs:any;
  getOfferProviderLocationSubs:any;
  SubServiceActual:any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public professionalsService : ProfessionalsService,
    private saleService: SaleService , 
    private offerService : OfferService,
  ) {
    this.loadData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningInfoServicePage');
  }

  loadData(){
    this.datasService = this.navParams.get('datos');
    this.dataService = this.datasService['dataService'];
    this.keyOffer = this.datasService['offer']; 
    this.worker = this.datasService['win']; 
    this.userActual = localStorage.getItem('verificacion');
    this.SubServiceActual = localStorage.getItem('SubService');
    this.sale=this.worker['offer'];
    this.information= this.dataService['Clasificacion']['informacion']['moreInformation'];
    this.serviceCode = this.keyOffer.substring(6);
    console.log(this.datasService);
    // console.log(this.dataService);
    // console.log(this.keyOffer);
    // console.log(this.worker);
    // console.log(this.userActual);
    // console.log(localStorage);
    this.getProfessionals(this.worker['id']);
    this.getUsersLocation();
    this.saleStatusSubs= this.saleService.getStatus(this.userActual,this.keyOffer).subscribe((resul)=>{
      // console.log(resul);
      // console.log(resul['$value']);
      this.status = resul['$value'];
      if(resul['$value'] == 'In progress'){
        this.status = 'Service in progress';
      }
      if(resul['$value'] == 'Finalized'){
        this.status = 'Service completed';
        this.startTimer();
      }
    });
  }
  
  goCleaningVote(){
    let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer,"win":this.worker}};
    console.log(DataService);
    this.saleStatusSubs.unsubscribe();
  	this.navCtrl.setRoot(CleaningVotePage,DataService);
  }

  private getProfessionals(keyWork){
    let getProfessionalSubs = this.professionalsService.getProfessional(keyWork).subscribe(
    professional =>{
      if(getProfessionalSubs != undefined){
        this.workerInfo= professional;
        this.mostrarWorkInfo();
        getProfessionalSubs.unsubscribe();
      }
    });
  }
  
  mostrarWorkInfo(){
    console.log(this.workerInfo);
    this.ImgJobr= this.imgJobDefault;
    // let galleryJobr= this.galleryJobDefault;
    this.nameJobr= this.workerInfo['prof_name'];
    let starJobrBD= Math.round(this.workerInfo['prof_star']); 
    let contenido='';
    if(Math.round(starJobrBD) == 5){
      contenido +='cinco';
    }
    if(Math.round(starJobrBD) == 4){
      contenido +='cuatro';
    }
    if(Math.round(starJobrBD) == 3){
      contenido +='tres';
    }
    if(Math.round(starJobrBD) == 2){
      contenido +='dos';
    }
    if(Math.round(starJobrBD) == 1){
      contenido +='one';
    }
    this.starJobr= contenido;
    // this.certificateJobr= this.workerInfo['prof_certificate']; 
    // this.insuranceJobr= this.workerInfo['prof_insurance'];     
    if(this.workerInfo['prof_picture'] && this.workerInfo['prof_picture'] != ''){
      this.ImgJobr = this.workerInfo['prof_picture'];
    }
    //info servicion
    for(let service in this.workerInfo.Service){
      if(this.workerInfo.Service[service].serv_subService == this.SubServiceActual || this.workerInfo.Service[service].serv_subService == 'Full'  ){

        let infoService = this.workerInfo.Service[service];
        // console.log(infoService);
        // console.log(infoService.serv_subService);
        this.certificateJobr= infoService.serv_detail['serv_certificate']; 
        this.insuranceJobr= infoService.serv_detail['serv_insurance']; 
        this.presentationJobr= infoService.serv_detail['serv_moreInformation']; 
        }
      }
    }
 
  //--- timer
  startTimer(){
    this.objNodeTimer=setInterval( () => this.timer(),1000);
  }

  private timer(){
    console.log(this.segundos);
    // console.log(this.status);
    if(this.status == 'Service completed' && this.segundos == 1){ 
        clearInterval(this.objNodeTimer);
        console.log('servicion fin');
        this.goCleaningVote();
    }else{
      if(--this.segundos< 0){
        // this.modificarStatus();
        this.segundos=2;
      }
    }
  }

  getUsersLocation(){
    this.OfferUserLocationSubs = this.offerService.getOfferUserLocation(this.keyOffer).subscribe(
      (LocationUser)=>{
        console.info(LocationUser);        
        this.Userlat =LocationUser.latitud;
        this.Userlng =LocationUser.longitud;
        console.log(this.Userlat);
        console.log(this.Userlng);
        this.OfferUserLocationSubs.unsubscribe();
      }
    );
    this.getOfferProviderLocationSubs = this.offerService.getOfferProviderLocation(this.keyOffer).subscribe(
      (LocationProvider)=>{
        console.info(LocationProvider);        
        this.providerLatitud =LocationProvider.latitud;
        this.providerLongitud =LocationProvider.longitud;
        console.log(this.providerLatitud);
        console.log(this.providerLongitud);
        this.getOfferProviderLocationSubs.unsubscribe();
      }
    );
  }
}
