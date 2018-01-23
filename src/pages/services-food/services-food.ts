import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';

//pages
import { CleaningSalePage } from '../cleaning-sale/cleaning-sale';

//services
import { OfferService } from '../../services/offer.service';
import { SaleService } from '../../services/sale.service';

/**
 * Generated class for the ServicesFoodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-services-food',
  templateUrl: 'services-food.html',
})
export class ServicesFoodPage {
  dataService = [];

  //form show

  booleanBartenders: boolean = false;
  booleanWaitress: boolean = false;
  booleanChef: boolean = false;
  booleanRunners: boolean = false;
  booleanValetParking: boolean = false;
  booleanHostess: boolean = false;
  //varibles
  subCategory: string;
  //pagetes de datos
  dataInformacion: any;
  //variables para formularios
  FamiliaAsistence: any;


  //datos del formulario
  foto: any = '';
  maxOffer: any
  typeBart: any
  eventBart: any
  tiemBart: any
  eventWaiter: any
  timeWaiter: any
  eventChef: any
  menuChef: any
  dinersChef: any
  eventRunners: any
  tiemRunners: any
  eventParking: any
  placeParking: any
  timeParking: any
  eventHostess: any
  placeHostess: any
  timeHostess: any
  moreInformation: any

  //data
  userActual: any;
  keyOffer: any;

  private ServiceFood: FormGroup;
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
    this.getForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesFoodPage');
  }

  goCleaningSale() {
    console.log(this.subCategory);
    switch (this.subCategory) {

      case "Bartenders": {
        this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "typeBart": this.typeBart, "eventBart": this.eventBart, "tiemBart": this.tiemBart, "moreInformation": this.moreInformation }];
        break;
      }
      case "Waitress": {
        this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "eventWaiter": this.eventWaiter, "timeWaiter": this.timeWaiter, "moreInformation": this.moreInformation }];
        break;
      }
      case "Chef": {
        this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "eventChef": this.eventChef, "menuChef": this.menuChef, "dinersChef": this.dinersChef, "moreInformation": this.moreInformation }];
        break;
      }
      case "Runners": {
        this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "eventRunners": this.eventRunners, "tiemRunners": this.tiemRunners, "moreInformation": this.moreInformation }];
        break;
      }
      case "Valet parking": {
        this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "eventParking": this.eventParking, "placeParking": this.placeParking, "moreInformation": this.moreInformation }];
        break;
      }
      case "Hostess": {
        this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "eventHostess": this.eventHostess, "placeHostess": this.placeHostess, "timeHostess": this.timeHostess, "moreInformation": this.moreInformation }];
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
    // let subCategory=this.dataService['Clasificacion']['categoria'];
    var d = new Date();
    let key = d.getTime();
    this.keyOffer = "offer_" + (key);
    console.log(this.dataService);

    //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
    //this.saleService.newSale();

    console.log(JSON.stringify(this.dataService));
    console.log('IniNewOffer');
    this.offerService.newOffer(this.dataService, this.keyOffer);
    // console.log('finNewOffer');
    // console.log(localStorage);
    // console.log(JSON.stringify(localStorage));
    // console.log(keyOffer);
    let maxOffer = datos['0']['maxOffer'];
    console.log(maxOffer);
    this.userActual = localStorage.getItem('verificacion');
    // console.log(JSON.stringify(userLocal));
    // console.log(userLocal);
    // console.log('IniNewSale');
    this.saleService.newSale(this.userActual, this.keyOffer, maxOffer);
    // console.log('FinNewSale');
    // console.log(userLocal);
    // console.log(keyOffer);
    // console.log(maxOffer);
    // console.log(JSON.stringify(userLocal));
    // console.log(JSON.stringify(this.dataService));
    // console.log('preGData');
    let DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer } };
    console.log(DataService);
    this.navCtrl.setRoot(CleaningSalePage, DataService);
  }
  getForm() {

    switch (this.subCategory) {
      case "Bartenders": {
        this.booleanBartenders = true;
        this.ServiceFood = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          typeBart: ['', Validators.required],
          eventBart: ['', Validators.required],
          tiemBart: ['', Validators.required],
          eventWaiter: [''],
          timeWaiter: [''],
          eventChef: [''],
          menuChef: [''],
          dinersChef: [''],
          eventRunners: [''],
          tiemRunners: [''],
          eventParking: [''],
          placeParking: [''],
          timeParking: [''],
          eventHostess: [''],
          placeHostess: [''],
          timeHostess: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Waitress": {
        this.booleanWaitress = true;
        this.ServiceFood = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          typeBart: [''],
          eventBart: [''],
          tiemBart: [''],
          eventWaiter: ['', Validators.required],
          timeWaiter: ['', Validators.required],
          eventChef: [''],
          menuChef: [''],
          dinersChef: [''],
          eventRunners: [''],
          tiemRunners: [''],
          eventParking: [''],
          placeParking: [''],
          timeParking: [''],
          eventHostess: [''],
          placeHostess: [''],
          timeHostess: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Chef": {
        this.booleanChef = true;
        this.ServiceFood = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          typeBart: [''],
          eventBart: [''],
          tiemBart: [''],
          eventWaiter: [''],
          timeWaiter: [''],
          eventChef: ['', Validators.required],
          menuChef: ['', Validators.required],
          dinersChef: ['', Validators.required],
          eventRunners: [''],
          tiemRunners: [''],
          eventParking: [''],
          placeParking: [''],
          timeParking: [''],
          eventHostess: [''],
          placeHostess: [''],
          timeHostess: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Runners": {
        this.booleanRunners = true;
        this.ServiceFood = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          typeBart: [''],
          eventBart: [''],
          tiemBart: [''],
          eventWaiter: [''],
          timeWaiter: [''],
          eventChef: [''],
          menuChef: [''],
          dinersChef: [''],
          eventRunners: ['', Validators.required],
          tiemRunners: ['', Validators.required],
          eventParking: [''],
          placeParking: [''],
          timeParking: [''],
          eventHostess: [''],
          placeHostess: [''],
          timeHostess: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Valet parking": {
        this.booleanValetParking = true;
        this.ServiceFood = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          typeBart: [''],
          eventBart: [''],
          tiemBart: [''],
          eventWaiter: [''],
          timeWaiter: [''],
          eventChef: [''],
          menuChef: [''],
          dinersChef: [''],
          eventRunners: [''],
          tiemRunners: [''],
          eventParking: ['', Validators.required],
          placeParking: ['', Validators.required],
          timeParking: ['', Validators.required],
          eventHostess: [''],
          placeHostess: [''],
          timeHostess: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Hostess": {
        this.booleanHostess = true;
        this.ServiceFood = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          typeBart: [''],
          eventBart: [''],
          tiemBart: [''],
          eventWaiter: [''],
          timeWaiter: [''],
          eventChef: [''],
          menuChef: [''],
          dinersChef: [''],
          eventRunners: [''],
          tiemRunners: [''],
          eventParking: [''],
          placeParking: [''],
          timeParking: [''],
          eventHostess: ['', Validators.required],
          placeHostess: ['', Validators.required],
          timeHostess: ['', Validators.required],
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
