import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProfessionalsService } from '../../services/professionals.service';
/**
 * Generated class for the MyserviceinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-myserviceinfo',
  templateUrl: 'myserviceinfo.html',
})
export class MyserviceinfoPage {
  dataOffer:any;
  //-default
  imgJobDefault ="assets/img/professions/cleaning.png";
  //-informacion service
  serviceCode:any;
  status:any;
  sale:any;
  information:any;
  //-informacion service job
  ImgJobr:any;
  nameJobr:any;
  certificateJobr:any;
  insuranceJobr:any;
  booleanJob:boolean= false;
  //-data
  Jober:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private professionalsService:ProfessionalsService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyserviceinfoPage');
    this.dataOffer = this.navParams.get('datos');
    console.log(this.dataOffer);
    this.serviceCode= this.dataOffer['$key'].substring(6);
    this.sale=this.dataOffer.sale;
    this.status=this.dataOffer.status;
    if(this.dataOffer.status == 'In progress'){
      this.status = 'Service in progress';
    }
    if(this.dataOffer.status == 'Finalized'){
      this.status = 'Service completed';
    }
    this.information= this.dataOffer.Clasificacion.informacion.moreInformation;
    if(this.dataOffer.Profession && this.dataOffer.Profession != undefined && this.dataOffer.Profession != null){
      this.booleanJob= true;
      this.getProfesional();
    }
  }
  getProfesional(){
    let Jober= this.dataOffer.Profession;
    console.log(Jober);
    this.professionalsService.getProfessional(Jober).subscribe((value)=>{
        console.log(value);
        this.ImgJobr= this.imgJobDefault;
        this.nameJobr= value['prof_name']; 
        this.certificateJobr= value['prof_certificate']; 
        this.insuranceJobr= value['prof_insurance'];     
        if(value['prof_picture'] && value['prof_picture'] != ''){
          this.ImgJobr = value['prof_picture'];
        }
    });
    // let galleryJobr= this.galleryJobDefault;
  }
}
