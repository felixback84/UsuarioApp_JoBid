import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';

//page
import { CleaningSalePage } from '../cleaning-sale/cleaning-sale';

//service
import { OfferService } from '../../services/offer.service';
import { SaleService } from '../../services/sale.service';
/**
 * Generated class for the ServicesTransportationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-services-transportation',
  templateUrl: 'services-transportation.html',
})
export class ServicesTransportationPage {
  dataService = [];
  
  //form show
  
  booleanDayVIPChofer:boolean=false;
  booleanTaxi:boolean=false;
  booleanCarPool:boolean=false;
  booleanMovingServices:boolean=false;
  booleanDelivery:boolean=false;
  //varibles
  subCategory:string;
  //pagetes de datos
  dataInformacion:any;
  //variables para formularios
  FamiliaAsistence:any;
  
  //datos del formulario
  foto:any='';
  maxOffer:any;
  carVip:any;
  timeVip:any;
  addressIniTaxi:any;
  addressFinTaxi:any;
  carPool:any;
  passePool:any;
  distancePool:any;
  deliveryAddressMovil:any;
  distanceMovil:any;
  boxMovil:any;
  furniMovil:any;
  objDelivery:any;
  addressDelivery:any;
  moreInformation:any;
  
  //data
  userActual:any;
  keyOffer:any;
  
  //form
  private ServiceTransportation : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder,
    private offerService:OfferService,
    private saleService:SaleService,    
    private camera : Camera,
  ) {
    this.dataService = this.navParams.get('datos');

    console.log(this.dataService);
    this.subCategory = this.dataService['Clasificacion']['categoria'];
    //this.getForm(this.subCategory);
    var d = new Date();
    let key = d.getTime();
    this.keyOffer = "offer_"+(key);
    this.userActual = localStorage.getItem('verificacion');
    this.getForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesTransportationPage');
  }

 

  goCleaningSale(){
    console.log(this.subCategory);
    switch(this.subCategory){

      case "Day VIP chofer":{
        this.dataInformacion=[{"foto":this.foto,"maxOffer":this.maxOffer,"carVip":this.carVip,"timeVip":this.timeVip,"moreInformation":this.moreInformation}];
        break;
      }
      case "Taxi":{
        this.dataInformacion=[{"foto":this.foto,"maxOffer":this.maxOffer,"addressIniTaxi":this.addressIniTaxi,"addressFinTaxi":this.addressFinTaxi,"moreInformation":this.moreInformation}];
        break;
      }
      case "Car pool":{
        this.dataInformacion=[{"foto":this.foto,"maxOffer":this.maxOffer,"carPool":this.carPool,"passePool":this.passePool,"distancePool":this.distancePool,"moreInformation":this.moreInformation}];
        break;
      }
      case "Moving services":{
        this.dataInformacion=[{"foto":this.foto,"maxOffer":this.maxOffer,"deliveryAddressMovil":this.deliveryAddressMovil,"distanceMovil":this.distanceMovil,"boxMovil":this.boxMovil,"furniMovil":this.furniMovil,"moreInformation":this.moreInformation}];
        break;
      }
      case "Delivery":{
        this.dataInformacion=[{"foto":this.foto,"maxOffer":this.maxOffer,"objDelivery":this.objDelivery,"addressDelivery":this.addressDelivery,"moreInformation":this.moreInformation}];
        break;
      }
    }
    console.log(this.dataInformacion);
    this.guardarServicio(this.dataInformacion);
  }
  
  guardarServicio(datos){
    console.log(datos);
    console.log(this.dataService);
    this.dataService['Clasificacion']['informacion']=datos['0'];
    // var d = new Date();
    // let key = d.getTime();
    // var keyOffer = "offer_"+(key);
    console.log(this.dataService);
    
    // let subCategory=this.dataService['Clasificacion']['categoria'];
    //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
    //this.saleService.newSale();
    
    this.offerService.newOffer(this.dataService,this.keyOffer);
     // console.log(localStorage);
     let maxOffer=datos['0']['maxOffer'];
    //  let userLocal = localStorage.getItem('verificacion');
     this.saleService.newSale(this.userActual,this.keyOffer,maxOffer);
     // console.log(userLocal);
     // console.log(keyOffer);
     // console.log(maxOffer);
     let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer}};
     console.log(DataService);
     this.navCtrl.setRoot(CleaningSalePage,DataService);
  }

  getForm(){
    switch(this.subCategory){
      case "Day VIP chofer":{
        this.booleanDayVIPChofer=true;
        this.ServiceTransportation = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          carVip: ['', Validators.required],
          timeVip: ['', Validators.required],
          addressIniTaxi: [''],
          addressFinTaxi: [''],
          carPool: [''],
          passePool: [''],
          distancePool: [''],
          deliveryAddressMovil: [''],
          distanceMovil: [''],
          boxMovil: [''],
          furniMovil: [''],
          objDelivery: [''],
          addressDelivery: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Taxi":{
        this.booleanTaxi=true;
        this.ServiceTransportation = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          carVip: [''],
          timeVip: [''],
          addressIniTaxi: ['', Validators.required],
          addressFinTaxi: ['', Validators.required],
          carPool: [''],
          passePool: [''],
          distancePool: [''],
          deliveryAddressMovil: [''],
          distanceMovil: [''],
          boxMovil: [''],
          furniMovil: [''],
          objDelivery: [''],
          addressDelivery: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Car pool":{
        this.booleanCarPool=true;
        this.ServiceTransportation = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          carVip: [''],
          timeVip: [''],
          addressIniTaxi: [''],
          addressFinTaxi: [''],
          carPool: ['', Validators.required],
          passePool: ['', Validators.required],
          distancePool: ['', Validators.required],
          deliveryAddressMovil: [''],
          distanceMovil: [''],
          boxMovil: [''],
          furniMovil: [''],
          objDelivery: [''],
          addressDelivery: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Moving services":{
        this.booleanMovingServices=true;
        this.ServiceTransportation = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          carVip: [''],
          timeVip: [''],
          addressIniTaxi: [''],
          addressFinTaxi: [''],
          carPool: [''],
          passePool: [''],
          distancePool: [''],
          deliveryAddressMovil: ['', Validators.required],
          distanceMovil: ['', Validators.required],
          boxMovil: ['', Validators.required],
          furniMovil: ['', Validators.required],
          objDelivery: [''],
          addressDelivery: [''],
          moreInformation: ['', Validators.required],
        });
        break;
      }
      case "Delivery":{
        this.booleanDelivery=true;
        this.ServiceTransportation = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          carVip: [''],
          timeVip: [''],
          addressIniTaxi: [''],
          addressFinTaxi: [''],
          carPool: [''],
          passePool: [''],
          distancePool: [''],
          deliveryAddressMovil: [''],
          distanceMovil: [''],
          boxMovil: [''],
          furniMovil: [''],
          objDelivery: ['', Validators.required],
          addressDelivery: ['', Validators.required],
          moreInformation: ['', Validators.required],
        });
        break;
      }
	  }
  }

  async  camaraFoto(){
    let file = this.userActual+'/'+this.keyOffer+'/foto';
    console.log('clickCamara');
    try{
      const options: CameraOptions = {
        quality: 60,
        targetHeight: 500,
        targetWidth: 500,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      const result = await this.camera.getPicture(options);
      const image = 'data:image/jpeg;base64,' + result;
      const picture = storage().ref(file);
      let UploadTask = picture.putString(image,'data_url');
      UploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>  {
          let url = UploadTask.snapshot.downloadURL;
          console.log(url);
          this.foto = url;
        },
        (error) => { console.log(error)  },
        // () => { 
        // }
      );
    } catch(e){ console.error(e);}
  }
}
