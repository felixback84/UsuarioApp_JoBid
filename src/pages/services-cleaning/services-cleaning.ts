import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { CleaningSalePage } from '../cleaning-sale/cleaning-sale';


import { OfferService } from '../../services/offer.service';
import { SaleService } from '../../services/sale.service';


import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';

// import * as firebase from 'firebase/app';
/**
 * Generated class for the ServicesCleaningPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-services-cleaning',
  templateUrl: 'services-cleaning.html',
})
export class ServicesCleaningPage {
  dataService = [];

  //form show
  booleanMaids: boolean = false;
  booleanCarWashers: boolean = false;
  booleanPressureCleaning: boolean = false;
  booleanCarpetCleaning: boolean = false;

  //varibles
  subCategory: string;
  //pagetes de datos
  dataInformacion: any;
  //variables para formularios
  FamiliaAsistence: any;

  //datos del formulario
  maxOffer: any;
  placeMaid: any;
  roomMaid: any;
  batMaid: any;
  typeCar: any;
  brandCar: any;
  placeClean: any;
  mtsClean: any;
  typeCarpet: any;
  mtsCarpet: any;
  foto: any = '';
  moreInformation: any;

  //-form
  private ServiceCleaning: FormGroup;
  userActual: any;
  keyOffer: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder,
    private offerService: OfferService,
    private saleService: SaleService,
    private camera: Camera,
  ) {
    this.dataService = this.navParams.get('datos');
    this.subCategory = this.dataService['Clasificacion']['categoria'];
    //this.getForm(this.subCategory);
    this.userActual = localStorage.getItem('verificacion');
    var d = new Date();
    let key = d.getTime();
    this.keyOffer = "offer_" + (key);
    this.getForm();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesCleaningPage');
  }
  goCleaningSale() {
    switch (this.subCategory) {
      case "Maids": {
        this.dataInformacion = [{ "maxOffer": this.maxOffer, "placeMaid": this.placeMaid, "roomMaid": this.roomMaid, "batMaid": this.batMaid, "foto": this.foto, "moreInformation": this.moreInformation }];
        break;
      }
      case "Car washers": {
        this.dataInformacion = [{ "maxOffer": this.maxOffer, "typeCar": this.typeCar, "brandCar": this.brandCar, "foto": this.foto, "moreInformation": this.moreInformation }];
        break;
      }
      case "Pressure cleaning": {
        this.dataInformacion = [{ "maxOffer": this.maxOffer, "placeClean": this.placeClean, "mtsClean": this.mtsClean, "foto": this.foto, "moreInformation": this.moreInformation }];
        break;
      }
      case "Carpet & upholstery cleaning": {
        this.dataInformacion = [{ "maxOffer": this.maxOffer, "typeCarpet": this.typeCarpet, "mtsCarpet": this.mtsCarpet, "foto": this.foto, "moreInformation": this.moreInformation }];
        break;
      }
    }
    this.guardarServicio(this.dataInformacion);
  }

  guardarServicio(datos) {
    // console.log(datos);
    this.dataService['Clasificacion']['informacion'] = datos['0'];
    // var d = new Date();
    // let key = d.getTime();
    // var keyOffer = "offer_"+(key);
    // console.log(this.dataService);
    // let subCategory=this.dataService['Clasificacion']['categoria'];
    //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
    // this.cleanProfessionS.newOffer(this.dataService,keyOffer);
    this.offerService.newOffer(this.dataService, this.keyOffer);
    // console.log(localStorage);
    let maxOffer = datos['0']['maxOffer'];
    // let userLocal = localStorage.getItem('verificacion');
    this.saleService.newSale(this.userActual, this.keyOffer, maxOffer);
    // console.log(userLocal);
    // console.log(keyOffer);
    // console.log(maxOffer);

    let DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer } };
    console.log(DataService);
    this.navCtrl.setRoot(CleaningSalePage, DataService);
  }

  getForm() {
    switch (this.subCategory) {
      case "Maids": {
        this.booleanMaids = true;
        this.ServiceCleaning = this.formBuilder.group({
          maxOffer: ['', Validators.required],
          foto: [''],
          placeMaid: ['', Validators.required],
          roomMaid: ['', Validators.required],
          batMaid: ['', Validators.required],
          typeCar: [''],
          brandCar: [''],
          placeClean: [''],
          mtsClean: [''],
          typeCarpet: [''],
          mtsCarpet: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Car washers": {
        this.booleanCarWashers = true;
        this.ServiceCleaning = this.formBuilder.group({
          maxOffer: ['', Validators.required],
          foto: [''],
          placeMaid: [''],
          roomMaid: [''],
          batMaid: [''],
          typeCar: ['', Validators.required],
          brandCar: ['', Validators.required],
          placeClean: [''],
          mtsClean: [''],
          typeCarpet: [''],
          mtsCarpet: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Pressure cleaning": {
        this.booleanPressureCleaning = true;
        this.ServiceCleaning = this.formBuilder.group({
          maxOffer: ['', Validators.required],
          foto: [''],
          placeMaid: [''],
          roomMaid: [''],
          batMaid: [''],
          typeCar: [''],
          brandCar: [''],
          placeClean: ['', Validators.required],
          mtsClean: ['', Validators.required],
          typeCarpet: [''],
          mtsCarpet: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Carpet & upholstery cleaning": {
        this.booleanCarpetCleaning = true;
        this.ServiceCleaning = this.formBuilder.group({
          maxOffer: ['', Validators.required],
          foto: [''],
          placeMaid: [''],
          roomMaid: [''],
          batMaid: [''],
          typeCar: [''],
          brandCar: [''],
          placeClean: [''],
          mtsClean: [''],
          typeCarpet: ['', Validators.required],
          mtsCarpet: ['', Validators.required],
          moreInformation: ['', Validators.required],
        });
        break;
      }
    }
  }

  async  camaraFoto() {
    let file = this.userActual + '/' + this.keyOffer + '/foto';
    console.log('clickCamara');
    try {
      const options: CameraOptions = {
        quality: 60,
        targetHeight: 300,
        targetWidth: 300,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      const result = await this.camera.getPicture(options);
      const image = 'data:image/jpeg;base64,' + result;
      const picture = storage().ref(file);
      picture.putString(image, 'data_url').then(
        (snapshot: storage.UploadTaskSnapshot) => {
          this.foto = snapshot.downloadURL;
          // alert(this.foto);
        },
        (error) => { console.log(error) },
      ).catch((errorUploadTask) => {
        // alert('errorUploadTask');
        // alert(JSON.stringify(errorUploadTask));
      });
    } catch (e) { console.error(e); }
  }

}
