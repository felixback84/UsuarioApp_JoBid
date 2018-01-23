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
  dataOffer: any;
  //-default
  imgJobDefault = "assets/img/professions/cleaning.png";
  //-informacion service
  serviceCode: any;
  status: any;
  sale: any;
  information: any;
  address: any;
  //-informacion service job
  ImgJobr: any;
  nameJobr: any;
  idJobr: any;
  certificateJobr: any = 'false';
  insuranceJobr: any = 'false';
  booleanJob: boolean = false;
  //-data
  Jober: any;
  workerInfo: any;
  starJobr: any;
  SubServiceActual: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private professionalsService: ProfessionalsService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyserviceinfoPage');
    this.dataOffer = this.navParams.get('datos');
    console.log(this.dataOffer);
    this.serviceCode = this.dataOffer['$key'].substring(6);
    this.sale = this.dataOffer.sale;
    this.status = this.dataOffer.status;
    if (this.dataOffer.status == 'In progress') {
      this.status = 'Service in progress';
    }
    if (this.dataOffer.status == 'Finalized') {
      this.status = 'Service completed';
    }
    this.information = this.dataOffer.Clasificacion.informacion.moreInformation;
    this.address = this.dataOffer.Address.name;
    if (this.dataOffer.Profession && this.dataOffer.Profession != undefined && this.dataOffer.Profession != null) {
      this.booleanJob = true;
      this.getProfesional();
    }
  }
  getProfesional() {
    let Jober = this.dataOffer.Profession;
    this.SubServiceActual = this.dataOffer.Clasificacion.categoria;
    console.log(Jober);
    this.professionalsService.getProfessional(Jober).subscribe((value) => {
      console.log(value);
      this.workerInfo = value;
      this.mostrarWorkInfo();
      if (value['prof_picture'] && value['prof_picture'] != '') {
        this.ImgJobr = value['prof_picture'];
      }
    });
    // let galleryJobr= this.galleryJobDefault;
  }

  mostrarWorkInfo() {
    console.log(this.workerInfo);
    this.ImgJobr = this.imgJobDefault;
    // let galleryJobr= this.galleryJobDefault;
    this.nameJobr = this.workerInfo['prof_name'];
    this.idJobr = this.workerInfo['$key'];
    let starJobrBD = Math.round(this.workerInfo['prof_star']);
    let contenido = '';
    if (Math.round(starJobrBD) == 5) {
      contenido += 'cinco';
    }
    if (Math.round(starJobrBD) == 4) {
      contenido += 'cuatro';
    }
    if (Math.round(starJobrBD) == 3) {
      contenido += 'tres';
    }
    if (Math.round(starJobrBD) == 2) {
      contenido += 'dos';
    }
    if (Math.round(starJobrBD) == 1) {
      contenido += 'one';
    }
    this.starJobr = contenido;
    // this.certificateJobr= this.workerInfo['prof_certificate']; 
    // this.insuranceJobr= this.workerInfo['prof_insurance'];     
    if (this.workerInfo['prof_picture'] && this.workerInfo['prof_picture'] != '') {
      this.ImgJobr = this.workerInfo['prof_picture'];
    }
    //info servicion
    for (let service in this.workerInfo.Service) {
      if (this.workerInfo.Service[service].serv_subService == this.SubServiceActual || this.workerInfo.Service[service].serv_subService == 'Full') {

        let infoService = this.workerInfo.Service[service];
        console.log(infoService);
        // console.log(infoService.serv_subService);
        this.certificateJobr = infoService.serv_detail['serv_certificate'];
        this.insuranceJobr = infoService.serv_detail['serv_insurance'];
        console.log(this.certificateJobr);
        console.log(this.insuranceJobr);

        // this.presentationJobr= infoService.serv_detail['serv_moreInformation']; 
      }
    }
  }
}
