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

  //-datos BD
  status="Waiting for the professional";

  //--load vista
  workerInfo:any;
  ImgJobr:any;
  nameJobr:any;
  certificateJobr:any;
  insuranceJobr:any;
  presentationJobr:any;

  //-tempoaral animaicion
  objNodeTimer:any;
  segundos:any=10;
  cont=1;
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public professionalsService : ProfessionalsService,
    private saleService: SaleService , private offerService : OfferService,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningInfoServicePage');
    this.datasService = this.navParams.get('datos');
    this.dataService = this.datasService['dataService'];
    this.keyOffer = this.datasService['offer']; 
    this.worker = this.datasService['win']; 
    this.userActual = localStorage.getItem('verificacion');
    this.sale=this.worker['offer'];
    this.information= this.dataService['Clasificacion']['informacion']['moreInformation'];
    this.serviceCode = this.keyOffer.substring(6);
    console.log(this.datasService);
    console.log(this.dataService);
    console.log(this.keyOffer);
    console.log(this.worker);
    console.log(this.userActual);
    this.getProfessionals(this.worker['id']);
    this.saleService.getStatus(this.userActual,this.keyOffer).subscribe((resul)=>{
      console.log(resul);
      console.log(resul['$value']);
      this.status = resul['$value'];
      if(resul['$value'] == 'In progress'){
        this.status = 'Service in progress';
      }
      if(resul['$value'] == 'Finalized'){
        this.status = 'Service completed';
      }
    });
    //-provicional
    this.startTimer()
  }
  goCleaningVote(){
    let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer,"win":this.worker}};
    console.log(DataService);
  	this.navCtrl.setRoot(CleaningVotePage,DataService);
  }

  private getProfessionals(keyWork){
    this.professionalsService.getProfessional(keyWork)
    .forEach(professional =>{
      this.workerInfo= professional;
    });
    this.mostrarWorkInfo();
  }
  
  mostrarWorkInfo(){
    console.log(this.workerInfo);
    this.ImgJobr= this.imgJobDefault;
    // let galleryJobr= this.galleryJobDefault;
    this.nameJobr= this.workerInfo['prof_name']; 
    this.certificateJobr= this.workerInfo['prof_certificate']; 
    this.insuranceJobr= this.workerInfo['prof_insurance'];     
    if(this.workerInfo['prof_picture'] && this.workerInfo['prof_picture'] != ''){
      this.ImgJobr = this.workerInfo['prof_picture'];
    }
  }
  
  // //-temporal
  // modificarStatus(){
  //   if(this.cont == 2){
  //     this.saleService.setStatus(this.userActual,this.keyOffer,'Finalized');
  //     this.offerService.setStatus(this.keyOffer,'Finalized');
  //   }
  //   if(this.cont == 1){
  //     this.saleService.setStatus(this.userActual,this.keyOffer,'In progress');
  //     this.offerService.setStatus(this.keyOffer,'In progress');
  //     this.cont = 2;
  //   }

  // }

  //--- timer
  startTimer(){
    this.objNodeTimer=setInterval( () => this.timer(),1000);
  }

  private timer(){
    // console.log(this.segundos);
    // console.log(this.status);
    if(this.status == 'Service completed' && this.segundos == 1){ 
        clearInterval(this.objNodeTimer);
        console.log('servicion fin');
        this.goCleaningVote();
    }else{
      if(--this.segundos< 0){
        // this.modificarStatus();
        this.segundos=10;
      }
    }
  }
}
