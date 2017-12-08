import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';

//page
import { OfferService } from '../../services/offer.service';

//service
import { CleaningSalePage } from '../cleaning-sale/cleaning-sale';
import { SaleService } from '../../services/sale.service';
/**
 * Generated class for the ServicesLegalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-services-legal',
  templateUrl: 'services-legal.html',
})
export class ServicesLegalPage {
  dataService = [];
  
  //form show
  booleanNotary:boolean=false;
  //varibles
  subCategory:string;
  //pagetes de datos
  dataInformacion:any;
  //variables para formularios
  FamiliaAsistence:any;
  
  //datos del formulario
  foto:any='';
  maxOffer:any;
  documentNotary:any;
  eventNotary:any;
  moreInformation:any;
  
  //data
  userActual:any;
  keyOffer:any;
  
  //form
  private ServiceLegal : FormGroup;
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
    console.log('ionViewDidLoad ServicesLegalPage');
  }

  goCleaningSale(){
    console.log(this.subCategory);
    switch(this.subCategory){
      case "Notary":{
        this.dataInformacion=[{"foto":this.foto,"maxOffer":this.maxOffer,"documentNotary":this.documentNotary,"eventNotary":this.eventNotary,"moreInformation":this.moreInformation}];
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
    console.log(this.dataService);
    
    // let subCategory=this.dataService['Clasificacion']['categoria'];
    //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
    //this.saleService.newSale();
    
    this.offerService.newOffer(this.dataService,this.keyOffer);
     // console.log(localStorage);
     let maxOffer=datos['0']['maxOffer'];
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
      case "Notary":{
        this.booleanNotary=true;
        this.ServiceLegal = this.formBuilder.group({
          foto: [''],
          maxOffer: ['', Validators.required],
          documentNotary: ['', Validators.required],
          eventNotary: ['', Validators.required],
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
        // targetHeight: 100,
        // targetWidth: 100,
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