import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';

//--page
import { OfferService } from '../../services/offer.service';
import { SaleService } from '../../services/sale.service';

//--service
import { CleaningSalePage } from '../cleaning-sale/cleaning-sale';
/**
 * Generated class for the ServicesBeautyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-services-beauty',
  templateUrl: 'services-beauty.html',
})
export class ServicesBeautyPage {
  dataService = [];

  //form show
  booleanPersonaTrainer: boolean = false;
  booleanHairCut: boolean = false;
  booleanMenicure: boolean = false;
  booleanMekeup: boolean = false;
  booleanMassage: boolean = false;
  //varibles
  subCategory: string;
  //pagetes de datos
  dataInformacion: any;
  //variables para formularios
  peinados: any;
  barbas: any;
  typeMenicure: any;
  nailMenicure: any;
  styleMenicure: any;
  styleMekeup: any;
  styleMassage: any;

  //datos del formulario
  foto: any = '';
  maxOffer: any;
  exerciseTrainer: any;
  timeTrainer: any;
  peinadosCut: any;
  timeCut: any;
  barbaCut: any;
  tipoMenicure: any;
  unaMenicure: any;
  estiloMenicure: any;
  estiloMeke: any;
  timeMassage: any;
  estiloMassage: any;
  moreInformation: any;

  //data
  userActual: any;
  keyOffer: any;

  private beautyForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder,
    private offerService: OfferService,
    private saleService: SaleService,
    private camera: Camera,
  ) {
    this.dataService = this.navParams.get('datos');
    console.log(this.dataService);
    this.subCategory = this.dataService['Clasificacion']['categoria'];
    //this.getForm(this.subCategory);
    var d = new Date();
    let key = d.getTime();
    this.keyOffer = "offer_" + (key);
    this.userActual = localStorage.getItem('verificacion');
    this.getForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesBeautyPage');
  }

  goCleaningSale() {
    console.log(this.subCategory);
    switch (this.subCategory) {

      case "Personal trainer": {
        this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "exerciseTrainer": this.exerciseTrainer, "timeTrainer": this.timeTrainer, "moreInformation": this.moreInformation }];
        break;
      }
      case "Haircut and DIY": {
        this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "peinadosCut": this.peinadosCut, "timeCut": this.timeCut, "barbaCut": this.barbaCut, "moreInformation": this.moreInformation }];
        break;
      }
      case "Manicure and pedicure": {
        this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "tipoMenicure": this.tipoMenicure, "unaMenicure": this.unaMenicure, "estiloMenicure": this.estiloMenicure, "moreInformation": this.moreInformation }];
        break;
      }
      case "Makeup": {
        this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "estiloMeke": this.estiloMeke, "moreInformation": this.moreInformation }];
        break;
      }
      case "Massage": {
        this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "estiloMassage": this.estiloMassage, "timeMassage": this.timeMassage, "moreInformation": this.moreInformation }];
        break;
      }

    }
    console.log(this.dataInformacion);
    this.guardarServicio(this.dataInformacion);
  }

  guardarServicio(datos) {
    console.log(datos);
    console.log(this.dataService);
    this.dataService['Clasificacion']['informacion'] = datos['0'];
    console.log(this.dataService);

    // let subCategory=this.dataService['Clasificacion']['categoria'];
    //this.careProfessionS.newOffer(this.dataService,subCategory,this.keyOffer);
    //this.saleService.newSale();

    this.offerService.newOffer(this.dataService, this.keyOffer);
    // console.log(localStorage);
    let maxOffer = datos['0']['maxOffer'];
    this.saleService.newSale(this.userActual, this.keyOffer, maxOffer);
    // console.log(this.userActual);
    // console.log(this.keyOffer);
    // console.log(maxOffer);
    let DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer } };
    console.log(DataService);
    this.navCtrl.setRoot(CleaningSalePage, DataService);
  }

  getForm() {
    switch (this.subCategory) {
      case "Personal trainer": {
        this.booleanPersonaTrainer = true;
        this.beautyForm = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          exerciseTrainer: ['', Validators.required],
          timeTrainer: ['', Validators.required],
          peinadosCut: [''],
          timeCut: [''],
          barbaCut: [''],
          tipoMenicure: [''],
          unaMenicure: [''],
          estiloMenicure: [''],
          estiloMeke: [''],
          timeMassage: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Haircut and DIY": {
        this.booleanHairCut = true;
        this.peinados = [
          { "value": "hairstyle", "label": "Hairstyle" },
          { "value": "brushed", "label": "Brushed" },
          { "value": "hairstyleAndBrushed", "label": "Hairstyle and brushed" }
        ];
        this.barbas = [
          { "value": "beard", "label": "Beard" },
          { "value": "Moustache", "label": "Moustache" },
          { "value": "beardAndMoustache", "label": "Beard and Moustache" }
        ];
        this.beautyForm = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          exerciseTrainer: [''],
          timeTrainer: [''],
          peinadosCut: ['', Validators.required],
          timeCut: ['', Validators.required],
          barbaCut: ['', Validators.required],
          tipoMenicure: [''],
          unaMenicure: [''],
          estiloMenicure: [''],
          estiloMeke: [''],
          timeMassage: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Manicure and pedicure": {
        this.booleanMenicure = true;
        this.typeMenicure = [
          { "value": "Manicure", "label": "Manicure" },
          { "value": "Pedicure", "label": "Pedicure" },
          { "value": "manicureAndPedicure", "label": "Manicure and pedicure" }
        ];
        this.nailMenicure = [
          { "value": "naturalNail", "label": "Natural nail" },
          { "value": "toenail", "label": "Toenail" }
        ];
        this.styleMenicure = [
          { "value": "Si", "label": "With style" },
          { "value": "No", "label": "Without style" }
        ];
        this.beautyForm = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          exerciseTrainer: [''],
          timeTrainer: [''],
          peinadosCut: [''],
          timeCut: [''],
          barbaCut: [''],
          tipoMenicure: ['', Validators.required],
          unaMenicure: ['', Validators.required],
          estiloMenicure: ['', Validators.required],
          estiloMeke: [''],
          timeMassage: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Makeup": {
        // this.styleMekeup=[
        //   {"value":"Basic","label":"Basic"},
        //   {"value":"Masks","label":"Masks"}
        // ]; 
        this.booleanMekeup = true;
        this.beautyForm = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          exerciseTrainer: [''],
          timeTrainer: [''],
          peinadosCut: [''],
          timeCut: [''],
          barbaCut: [''],
          tipoMenicure: [''],
          unaMenicure: [''],
          estiloMenicure: [''],
          estiloMeke: ['', Validators.required],
          timeMassage: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Massage": {
        this.booleanMassage = true;
        this.styleMassage = [
          { "value": "Full", "label": "Full" },
          { "value": "Arm", "label": "Arm" },
          { "value": "Neck", "label": "Neck" },
          { "value": "Back", "label": "Back" },
          { "value": "Hand", "label": "Hand" },
          { "value": "Leg", "label": "Leg" },
          { "value": "feet", "label": "feet" }
        ];
        this.beautyForm = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          exerciseTrainer: [''],
          timeTrainer: [''],
          peinadosCut: [''],
          timeCut: [''],
          barbaCut: [''],
          tipoMenicure: [''],
          unaMenicure: [''],
          estiloMenicure: [''],
          estiloMeke: [''],
          estiloMassage: ['', Validators.required],
          timeMassage: ['', Validators.required],
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