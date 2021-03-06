import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';

//-import page
import { CleaningSalePage } from '../cleaning-sale/cleaning-sale';

//-import service
import { SaleService } from '../../services/sale.service';
import { OfferService } from '../../services/offer.service';

//-import firebase storage
import { storage } from 'firebase';

// import * as firebase from 'firebase/app';
/**
 * Generated class for the ServicesJanotorialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-services-janotorial',
  templateUrl: 'services-janotorial.html',
})
export class ServicesJanotorialPage {
  dataService = [];

  //form show
  booleanHandyman: boolean = false;
  booleanPluming: boolean = false;
  booleanElectrician: boolean = false;
  booleanPoolSleaning: boolean = false;
  booleanLuckSmith: boolean = false;
  //varibles
  subCategory: string;
  //pagetes de datos
  dataInformacion: any;
  //variables para formularios
  Jobs: any;

  //datos del formulario
  maxOffer: any;
  maxOffer2: any;
  jobHand: any;
  mtsHand: any;
  roomPluming: any;
  mtsPluming: any;
  roomElec: any;
  mtsElect: any;
  typePool: any;
  mtsPool: any;
  lockLuck: any;
  foto: any = '';
  moreInformation: any;

  private ServiceJanotorial: FormGroup;
  userActual: any;
  keyOffer: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder,
    private offerService: OfferService,
    private saleService: SaleService,
    private camera: Camera,
  ) {
    this.dataService = this.navParams.get('datos');

    // console.log(this.dataService);
    this.subCategory = this.dataService['Clasificacion']['categoria'];
    //this.getForm(this.subCategory);
    this.userActual = localStorage.getItem('verificacion');
    var d = new Date();
    let key = d.getTime();
    this.keyOffer = "offer_" + (key);
    this.getForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesJanotorialPage');
  }

  goCleaningSale() {
    // console.log(this.subCategory);
    switch (this.subCategory) {

      case "Handyman": {
        this.dataInformacion = [{
          "maxOffer": this.maxOffer, "jobHand": this.jobHand, "mtsHand": this.mtsHand, "foto": this.foto, "moreInformation": this.moreInformation,
        }];
        break;
      }
      case "Plumbing": {
        // this.dataInformacion=[{"maxOffer":this.maxOffer,"roomPluming":this.roomPluming,"mtsPluming":this.mtsPluming,"foto":this.foto,"moreInformation":this.moreInformation,
        this.dataInformacion = [{
          "maxOffer": this.maxOffer, "foto": this.foto, "moreInformation": this.moreInformation,
        }];
        break;
      }
      case "Electrician": {
        // this.dataInformacion=[{"maxOffer":this.maxOffer,"roomElec":this.roomElec,"mtsElect":this.mtsElect,"foto":this.foto,"moreInformation":this.moreInformation,
        this.dataInformacion = [{
          "maxOffer": this.maxOffer, "foto": this.foto, "moreInformation": this.moreInformation,
        }];
        break;
      }
      case "Pool Cleaner": {
        // this.dataInformacion=[{"maxOffer":this.maxOffer,"typePool":this.typePool,"mtsPool":this.mtsPool,"foto":this.foto,"moreInformation":this.moreInformation,
        this.dataInformacion = [{
          "maxOffer": this.maxOffer, "foto": this.foto, "moreInformation": this.moreInformation,
        }];
        break;
      }
      case "Luck smith": {
        this.dataInformacion = [{
          "maxOffer": this.maxOffer, "lockLuck": this.lockLuck, "foto": this.foto, "moreInformation": this.moreInformation,
        }];
        break;
      }
    }
    // console.log(this.dataInformacion);
    this.guardarServicio(this.dataInformacion);
  }

  guardarServicio(datos) {
    // console.log(datos);
    // console.log(this.dataService);
    this.dataService['Clasificacion']['informacion'] = datos['0'];
    // var d = new Date();
    // let key = d.getTime();
    // var keyOffer = "offer_"+(key);
    // console.log(this.dataService);

    // let subCategory=this.dataService['Clasificacion']['categoria'];
    //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
    //this.saleService.newSale();

    this.offerService.newOffer(this.dataService, this.keyOffer);
    // console.log(localStorage);
    let maxOffer = datos['0']['maxOffer'];
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
      case "Handyman": {
        this.booleanHandyman = true;
        this.Jobs = [
          { "value": "Mowing", "label": "Mowing" },
          { "value": "CleanGutters", "label": "Clean gutters" }
        ];
        // console.log(this.Jobs);
        this.ServiceJanotorial = this.formBuilder.group({
          maxOffer: ['', Validators.required],
          foto: [''],
          jobHand: ['', Validators.required],
          mtsHand: ['', Validators.required],
          // roomPluming: [''],
          // mtsPluming: [''],
          // roomElec: [''],
          // mtsElect: [''],
          // typePool: [''],
          // mtsPool: [''],
          lockLuck: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Plumbing": {
        this.booleanPluming = true;
        this.ServiceJanotorial = this.formBuilder.group({
          maxOffer: ['', Validators.required],
          foto: [''],
          jobHand: [''],
          mtsHand: [''],
          // roomPluming: ['', Validators.required],
          // mtsPluming: ['', Validators.required],
          // roomElec: [''],
          // mtsElect: [''],
          // typePool: [''],
          // mtsPool: [''],
          lockLuck: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Electrician": {
        this.booleanElectrician = true;
        this.ServiceJanotorial = this.formBuilder.group({
          maxOffer: ['', Validators.required],
          foto: [''],
          jobHand: [''],
          mtsHand: [''],
          // roomPluming: [''],
          // mtsPluming: [''],
          // roomElec: ['', Validators.required],
          // mtsElect: ['', Validators.required],
          // typePool: [''],
          // mtsPool: [''],
          lockLuck: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Pool Cleaner": {
        this.booleanPoolSleaning = true;
        this.ServiceJanotorial = this.formBuilder.group({
          maxOffer: ['', Validators.required],
          foto: [''],
          // jobHand: [''],
          // mtsHand: [''],
          // roomPluming: [''],
          // mtsPluming: [''],
          // roomElec: [''],
          // mtsElect: [''],
          // typePool: ['', Validators.required],
          // mtsPool: ['', Validators.required],
          lockLuck: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Luck smith": {
        this.booleanLuckSmith = true;
        this.ServiceJanotorial = this.formBuilder.group({
          maxOffer: ['', Validators.required],
          foto: [''],
          jobHand: [''],
          mtsHand: [''],
          // roomPluming: [''],
          // mtsPluming: [''],
          // roomElec: [''],
          // mtsElect: [''],
          // typePool: [''],
          // mtsPool: [''],
          lockLuck: ['', Validators.required],
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
