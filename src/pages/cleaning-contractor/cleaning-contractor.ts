import { Component ,ElementRef} from '@angular/core';
import { NavController, NavParams , AlertController} from 'ionic-angular';

import { CleaningInfoServicePage } from '../cleaning-info-service/cleaning-info-service';
import { ShowPage } from '../show/show';

import { ProfessionalsService } from '../../services/professionals.service';
import { SaleService } from '../../services/sale.service';
import { OfferService } from '../../services/offer.service';

/**
 * Generated class for the CleaningContractorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-cleaning-contractor',
  templateUrl: 'cleaning-contractor.html',
})
export class CleaningContractorPage {
  //- default parametros
  imgJobDefault ="assets/img/professions/cleaning.png";
  galleryJobDefault ="assets/img/gallery.png";
  //-datos traidos de anterior page
  datasService:any;
  dataService:any;
  keyOffer:any;
  worker:any;
  userActual:any;
  SubServiceActual:any;

  //-datos vista
ImgJobr:any;
galleryAJobr:any;
galleryBJobr:any;
galleryCJobr:any;
galleryDJobr:any;
nameJobr:any;
certificateJobr:any;
insuranceJobr:any;
presentationJobr:any;
commentsJobr:any;
keyComments:any=[];
sale:any;
starJobr:number;

  //-subs
  profeSuns:any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public professionalsService : ProfessionalsService,
    private saleService: SaleService , private offerService: OfferService,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningContractorPage');
    this.datasService = this.navParams.get('datos');
    this.dataService = this.datasService['dataService'];
    this.keyOffer = this.datasService['offer']; 
    this.worker = this.datasService['win']; 
    this.userActual = localStorage.getItem('verificacion');
    this.SubServiceActual = localStorage.getItem('SubService');
    this.sale=this.worker['offer'];
    // console.log(this.datasService);
    // console.log(this.dataService);
    // console.log(this.keyOffer);
    // console.log(this.worker);
    // console.log(this.userActual);
    console.log(this.SubServiceActual);
    this.getProfessionals(this.worker['id']);

    //-comentar si sale 
    this.SubServiceActual = "Electrician";
    //-comentar si sale -fin
  }
  goCleaningInfoService(){
    console.info('goCleaningContractor');
    //--set status offer y sale
    this.saleService.setStatus(this.userActual,this.keyOffer,'Waiting for the professional');
    this.offerService.setStatus(this.keyOffer,'Waiting for the professional');
    //--set datos
    this.saleService.setSale(this.userActual,this.keyOffer,this.sale);
    this.offerService.setSale(this.keyOffer,this.sale);
    //- saved user in offer
    this.offerService.setUser(this.keyOffer,this.userActual);
    //- saved provider contract
    this.offerService.setProvider(this.keyOffer,this.worker.id);
    this.saleService.setProvider(this.userActual,this.keyOffer,this.worker.id);
    let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer,"win":this.worker}};
    console.log(DataService);
  	this.navCtrl.setRoot(CleaningInfoServicePage,DataService);
  }
  // goIndex(){
  // 	this.navCtrl.setRoot(ShowPage);
  // }

   goIndex() {
    let confirm = this.alertCtrl.create({
      title: 'You want to cancel the service?',
      message: 'The cancellation will be charged with 5% of the value of the offer',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            console.log('Agree clicked');
            //--set status offer y sale
            this.saleService.setStatus(this.userActual,this.keyOffer,'Cancelled');
            this.offerService.setStatus(this.keyOffer,'Cancelled');
            this.navCtrl.setRoot(ShowPage);
          }
        }
      ]
    });
    confirm.present();
  }

  private getProfessionals(keyWork){
    console.log(keyWork);
    this.profeSuns = this.professionalsService.getProfessional(keyWork).subscribe(
      (professional) =>{
        // console.log(professional);
        this.mostrarWorkInfo(professional);
      });
  }
  
  mostrarWorkInfo(workerInfo){
    console.log(workerInfo);
    this.ImgJobr= this.imgJobDefault;
    this.galleryAJobr = this.galleryJobDefault;
    this.galleryBJobr = this.galleryJobDefault;
    this.galleryCJobr = this.galleryJobDefault;
    this.galleryDJobr = this.galleryJobDefault;
    
    //-info basic
    this.nameJobr= workerInfo['prof_name']; 
    this.worker['star'] = workerInfo['prof_star'];
    this.starJobr= Math.round(workerInfo['prof_star']); 
    // console.log(this.starJobr); 
    if(workerInfo['prof_picture'] && workerInfo['prof_picture'] != ''){
      this.ImgJobr =workerInfo['prof_picture'];
    }
    //info servicion
    for(let service in workerInfo.Service){
      if(workerInfo.Service[service].serv_subService == this.SubServiceActual || workerInfo.Service[service].serv_subService == 'Full'  ){

        let infoService = workerInfo.Service[service];
        // console.log(infoService);
        // console.log(infoService.serv_subService);
        this.certificateJobr= infoService.serv_detail['serv_certificate']; 
        this.insuranceJobr= infoService.serv_detail['serv_insurance']; 
        this.presentationJobr= infoService.serv_detail['serv_moreInformation']; 

        if(infoService.serv_detail.serv_gallery){
          if(infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryA'] && infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryA'] != ''){
            this.galleryAJobr = infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryA'];
          }
          if(infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryB'] && infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryB'] != ''){
            this.galleryBJobr = infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryB'];
          }
          if(infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryC'] && infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryC'] != ''){
            this.galleryCJobr = infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryC'];
          }
          if(infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryD'] && infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryD'] != ''){
            this.galleryDJobr = infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryD'];
          }
        }
      }
    }

  } 


}