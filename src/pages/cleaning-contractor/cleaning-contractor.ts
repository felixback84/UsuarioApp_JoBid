import { Component } from '@angular/core';
import { NavController, NavParams , AlertController} from 'ionic-angular';

import { CleaningInfoServicePage } from '../cleaning-info-service/cleaning-info-service';
import { ShowPage } from '../show/show';

import { ProfessionalsService } from '../../services/professionals.service';
import { SaleService } from '../../services/sale.service';

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

  //-datos consultados
  workerInfo:any;
  //
  constructor(
    public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public professionalsService : ProfessionalsService,
    private saleService: SaleService  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningContractorPage');
    this.datasService = this.navParams.get('datos');
    this.dataService = this.datasService['dataService'];
    this.keyOffer = this.datasService['offer']; 
    this.worker = this.datasService['win']; 
    this.userActual = localStorage.getItem('verificacion');
    this.sale=this.worker['offer'];
    console.log(this.datasService);
    console.log(this.dataService);
    console.log(this.keyOffer);
    console.log(this.worker);
    console.log(this.userActual);
    this.getProfessionals(this.worker['id']);
  }
  goCleaningInfoService(){
    console.info('goCleaningContractor');
    let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer,"win":this.worker}};
    console.log(DataService);
    this.saleService.setStatus(this.keyOffer,'Waiting for the professional');
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
            this.navCtrl.setRoot(ShowPage);
          }
        }
      ]
    });
    confirm.present();
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
    this.galleryAJobr = this.galleryJobDefault;
    this.galleryBJobr = this.galleryJobDefault;
    this.galleryCJobr = this.galleryJobDefault;
    this.galleryDJobr = this.galleryJobDefault;
    // let galleryJobr= this.galleryJobDefault;
    this.nameJobr= this.workerInfo['prof_name']; 
    this.certificateJobr= this.workerInfo['prof_certificate']; 
    this.insuranceJobr= this.workerInfo['prof_insurance']; 
    this.presentationJobr= this.workerInfo['prof_presentation']; 

    this.commentsJobr= this.workerInfo['prof_comments'];
    
    if(this.workerInfo['prof_picture'] && this.workerInfo['prof_picture'] != ''){
      this.ImgJobr = this.workerInfo['prof_picture'];
    }
    if(this.workerInfo['prof_galleryA'] && this.workerInfo['prof_galleryA'] != ''){
      this.galleryAJobr = this.workerInfo['prof_galleryA'];
    }
    if(this.workerInfo['prof_galleryB'] && this.workerInfo['prof_galleryB'] != ''){
      this.galleryBJobr = this.workerInfo['prof_galleryB'];
    }
    if(this.workerInfo['prof_galleryC'] && this.workerInfo['prof_galleryC'] != ''){
      this.galleryCJobr = this.workerInfo['prof_galleryC'];
    }
    if(this.workerInfo['prof_galleryD'] && this.workerInfo['prof_galleryD'] != ''){
      this.galleryDJobr = this.workerInfo['prof_galleryD'];
    }
    for(let key in this.commentsJobr){
        console.log(this.commentsJobr[key]);
        // console.log(commentsJobr[key]['user_username']);
        // console.log(commentsJobr[key]['comm_qualification']);
        // // console.log(commentsJobr[key]['comm_description']);
        // this.keyComments.push(key);
        this.keyComments.push({"user":this.commentsJobr[key]['user_username'],qualification:this.commentsJobr[key]['comm_qualification'],"description":this.commentsJobr[key]['comm_description']});
      }
      this.commentsJobr= this.workerInfo['prof_comments']; 
      // this.keyComments = Object.keys(this.commentsJobr);
      console.log(this.keyComments);
  }

}

