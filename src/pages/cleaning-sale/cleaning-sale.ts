import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController,Platform} from 'ionic-angular';

import { CleaningContractorPage } from '../cleaning-contractor/cleaning-contractor';
import { SaleService } from '../../services/sale.service';
import { OfferService } from '../../services/offer.service';

import { ShowPage } from '../show/show';
// import { HomePage } from '../home/home';

//import { OfferService } from '../../services/offer.service';
import { ProfessionalsService } from '../../services/professionals.service';

//-geoCodeInverse
import { GeocodeServiceProvider } from '../../providers/geocode-service';

import { Geolocation } from '@ionic-native/geolocation';
import * as GeoFire from 'geofire';

import { Media, MediaObject } from '@ionic-native/media';
/**
 * Generated class for the CleanigSalePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cleaning-sale',
  templateUrl: 'cleaning-sale.html',
})
export class CleaningSalePage {

  //--valiables por defecto
  imgJobDefault ="assets/img/professions/cleaning.png";
  galleryJobDefault ="assets/img/gallery.png";
  MenosPrecio:any;
  //--sale
  dataOffer:any;
  maxOffer:any;
  keyOffer:any;
  Workers:any=[];
  WorkersInfo:any=[];
  dataService:any;
  //--datas
  userActual:any;
  SubServiceActual:any;
  professionals = [];
  professsional = [];
  
  //--timer
  segundos:number = 0;
  minutos:number = 3;
  contador:string;
  showContador: boolean = true;
  objNodeTimer:any;
  NumeroContador:number = 1;
  StaringLabel = true;
  
  //-- geoLocation
  lat: number= 37.09024;
  lng: number= -95.71289100000001;
  zom: number = 16;

  //-Subs
  saleSubs:any;

  //-file
  file: MediaObject;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController, 
    public professionalsService : ProfessionalsService,
    private geo: Geolocation, private platform: Platform,
    private saleService: SaleService,  
    private offerService: OfferService,  
    private geocodeServiceProvider: GeocodeServiceProvider,  
    private media: Media,
  ) {
    this.contador = '0'+this.minutos+':'+'0'+this.segundos;
    this.startTimer();
    this.file = this.media.create('assets/timbre.mp3');
    this.file.play();
      // this.getProfessionals();
    }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningSalePage');
    //--Ini-comentado para evitar mas creaciones
    
    this.dataOffer = this.navParams.get('datos');
    this.maxOffer = this.dataOffer['dataService']['Clasificacion']['informacion']['maxOffer'];
    this.dataService = this.dataOffer['dataService'];
    this.keyOffer = this.dataOffer['offer']; 
    this.userActual = localStorage.getItem('verificacion');
    this.SubServiceActual = localStorage.getItem('SubService');
    console.log(this.dataOffer);
    console.log(JSON.stringify(this.dataService));
    
    //--Fin-comentado para evitar mas creaciones
    
    //--Ini-comentado para tener flujo normal
    // this.userActual = "user_1504881933094";
    // this.keyOffer = "offer_1507673673537"; 
    // this.dataService = {"name":"Janotorial","class":"orange","Clasificacion":{"categoria":"Electrician","certificacion":"true","seguro":"true","distancia":"4M","experiencia":"3Y","informacion":{"maxOffer":"189","roomElec":"1","mtsElect":"2","foto":"","moreInformation":"more information. fads"}},"status":"Published","User":"user_1504881933094","Star":"3"};
    // this.maxOffer = 189;
    // this.SubServiceActual = "Electrician";
    // --Fin-comentado para tener flujo normal

    // this.getUserLocation();
    this.getUserLocationGeolocation();
    this.getSale();
  
  }

  goCleaningContractor(ganador?){
    console.info('goCleaningContractor');
    // console.log(ganador);
    this.saleSubs.unsubscribe();
    let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer,"win":ganador}};
    // console.log(DataService);
    this.offerService.dropTimer(this.keyOffer);
  	this.navCtrl.setRoot(CleaningContractorPage,DataService);
  }

  goIndex(){
    
  //--set status offer y sale
  console.info('Offer -Cancelled');
  this.saleService.setStatus(this.userActual,this.keyOffer,'Cancelled');
  this.offerService.setStatus(this.keyOffer,'Cancelled');
  this.offerService.dropTimer(this.keyOffer);
    clearInterval(this.objNodeTimer);
    this.navCtrl.setRoot(ShowPage);
  }

  showInfoCleaning(id: any = "prof_1"){
    let index:any;
    //--imagenes por defecto
    let ImgJobr= this.imgJobDefault;
    let galleryAJobr = this.galleryJobDefault;
    let galleryBJobr = this.galleryJobDefault;
    let galleryCJobr = this.galleryJobDefault;
    let galleryDJobr = this.galleryJobDefault;
    let presentationJobr='';
    let certificateJobr = true;
    let insuranceJobr = true;

    for(index in this.WorkersInfo){
        if(this.WorkersInfo[index]['$key'] == id){
          console.log(this.WorkersInfo[index]);
          console.log(this.WorkersInfo[index].Service);
          
          //-info basic
          let nameJobr= this.WorkersInfo[index]['prof_name']; 
          if(this.WorkersInfo[index]['prof_picture'] && this.WorkersInfo[index]['prof_picture'] != ''){
            ImgJobr = this.WorkersInfo[index]['prof_picture'];
          }
          //info servicion
          for(let service in this.WorkersInfo[index].Service){
            if(this.WorkersInfo[index].Service[service].serv_subService == this.SubServiceActual || this.WorkersInfo[index].Service[service].serv_subService == 'Full'  ){

              let infoService = this.WorkersInfo[index].Service[service];
              console.log(infoService);
              console.log(infoService.serv_subService);
              certificateJobr= infoService.serv_detail['serv_certificate']; 
              insuranceJobr= infoService.serv_detail['serv_insurance']; 
              presentationJobr= infoService.serv_detail['serv_moreInformation']; 
              if(infoService.serv_detail.serv_gallery){
                if(infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryA'] && infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryA'] != ''){
                  galleryAJobr = infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryA'];
                }
                if(infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryB'] && infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryB'] != ''){
                  galleryBJobr = infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryB'];
                }
                if(infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryC'] && infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryC'] != ''){
                  galleryCJobr = infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryC'];
                }
                if(infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryD'] && infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryD'] != ''){
                  galleryDJobr = infoService.serv_detail.serv_gallery.prof_galleryA['prof_galleryD'];
                }
              }
            }
          }
          
          //-info comentarios
          let commentsJobr= this.WorkersInfo[index]['prof_comments']; 
          console.log(commentsJobr);

          //-mapear alert
          var contenido='';
          contenido +='<div class="col-40"><img src="'+ImgJobr+'"></div>';
          contenido +='<div class="col-60"><h4>'+nameJobr+'</h4><img src="assets/img/Estrellas.png">';
          contenido +='<p>'
          if(certificateJobr == true){
            contenido +='<span class="ItemPService"><img src="assets/img/okBlue.png"> <span> Certificate</span>,';
          }
          if(insuranceJobr == true){
            contenido +='</span><span class="ItemPService"><img src="assets/img/okBlue.png"> <span>  Insurance</span></span>';
          }
          contenido +='</p></div>';
          contenido += "<h5>Presentation</h5><p>"+presentationJobr+"</p>";
          // contenido += id+'';
          contenido +='<h5>Gallery</h5>';
          contenido +='<img src="'+galleryAJobr+'" alt="" class="imagen50">';
          contenido +='<img src="'+galleryBJobr+'" alt="" class="imagen50">';
          contenido +='<img src="'+galleryCJobr+'" alt="" class="imagen50">';
          contenido +='<img src="'+galleryDJobr+'" alt="" class="imagen50">';
          
          // console.log('commentsJobr');
          // console.log(commentsJobr);
          let cont=0;
          for(let key in commentsJobr){
            // console.log(commentsJobr[key]);
            // console.log(commentsJobr[key]['user_username']);
            console.log(commentsJobr[key]['comm_qualification']);
            if(cont == 0){
              contenido +='<h5>Comments</h5>';
              cont=1;
            }
            // console.log(commentsJobr[key]['comm_description']);
            contenido +='<div class="comments">';
            contenido +='<h6>'+commentsJobr[key]['user_username']+' <img src="assets/img/Estrellas.png" alt=""></h6>';
            contenido +='<p>'+commentsJobr[key]['comm_description']+'</p>';
            contenido +='</div>';
          }
          // contenido +='<div class="comments">';
          // contenido +='<h6>Melisa Lorem <img src="assets/img/Estrellas.png" alt=""></h6>';
          // contenido +='<p>Odit, cupiditate. Quibusdam ducimus minus incidunt voluptas consequatur odit, adipisci eveniet laborum obcaecati labore! Sapiente repellat ipsum in autem fuga sint enim recusandae incidunt tenetur corporis neque totam, quam sequi placeat cupiditate, inventore! Alias repudiandae ducimus laudantium nemo quisquam, quod sint et quam, id ipsum magnam veniam amet sit a voluptatibus, similique ipsa voluptatem voluptates velit quo. Quidem odio a nemo sit illum. </p>';
          // contenido +='</div>';
          
          let alert = this.alertCtrl.create({
            // title: 'Estefania Lorem',
            message: contenido,
            buttons: ['OK']
          });
          alert.present();
    }
  }
}  

  //--- timer
  startTimer(){
    this.objNodeTimer=setInterval( () => this.timer(),1000);
  }

  private timer(){
    // if(this.minutos == 0 && this.segundos == 1){ 
    if(this.minutos == 1 && this.segundos == 50 ){ 
      //this.showContador = false;
      if(this.NumeroContador == 2){
        clearInterval(this.objNodeTimer);
        this.showContador = false;
        this.ganador();
      }else{
        this.minutos = 2;
        this.segundos = 0;
        this.NumeroContador = 2;
        this.StaringLabel = false;this.saleService.setStatus(this.userActual,this.keyOffer,'Start');
        this.offerService.setStatus(this.keyOffer,'Start');
      }
    }else{
      if(--this.segundos< 0){
        this.segundos = 59;
        if(--this.minutos< 0){
          //this.minutos = 59;
          //if( (this.segundos = 0) && (this.minutos = 0)){ this.showContador = false;}
        }
      }
      this.contador = this.dobleCifra(this.minutos)+':'+this.dobleCifra(this.segundos);
      this.offerService.setTimer(this.keyOffer,this.contador);
    }
  }
  
  //--- Functions

  getSale(){
    this.MenosPrecio= undefined;
    // let finRegistro:boolean= false;
    this.saleSubs= this.saleService.getSale(this.userActual,this.keyOffer)
    .subscribe((result) =>{
      this.Workers = [];
      this.WorkersInfo =[];
      this.MenosPrecio = undefined;
      //console.log(result);
      //console.log(result.sale);
      if(this.MenosPrecio ==  undefined){
        this.MenosPrecio = Number(result.sale);
      }
      //console.log(result.providers);
      this.getProviders(result.providers);
      // finRegistro = true;
    });
  }

  getProviders(trabajadores){
    for(let trabajador in trabajadores){
      console.log(trabajador);
      if(this.MenosPrecio > Number(trabajadores[trabajador]['offer']) ) { this.MenosPrecio= Number(trabajadores[trabajador]['offer']);}
      let userSubs =this.professionalsService.getProfessional(trabajador).subscribe(
        (user) =>{
          let img = this.imgJobDefault;

          this.WorkersInfo.push(user);
          
          if(user.prof_picture && user.prof_picture != undefined && user.prof_picture != ''){
            img = user.prof_picture;
          }
          this.Workers.push({"id":trabajador,"offer":trabajadores[trabajador]['offer'],"img":img,"name":user.prof_name});
          userSubs.unsubscribe();
        });
    }

    console.log(this.WorkersInfo);
    // let estadoUser= this.Workers;
    // console.log(estadoUser);
  }

  ganador(){
    console.info('ganador');
    
    // console.log(this.Workers.length);
    // console.log('this.Workers.length');
    if(this.Workers.length != 0){
      for(let index in this.Workers){
        console.log(index);
        //console.log(this.Workers[index]);
        if(this.MenosPrecio == this.Workers[index]['offer']){
          this.goCleaningContractor(this.Workers[index]);
          this.saleService.setStatus(this.userActual,this.keyOffer,'Evaluation');
          this.offerService.setStatus(this.keyOffer,'Evaluation');
          this.showAlertFinOffer();
        }
      }
    }else{
          this.goServiceSinOff();
    }
  }

  goServiceSinOff(){
     //--set status offer y sale
     console.info('Sin Offer');
     this.showAlertSinOffer();
    this.saleService.setStatus(this.userActual,this.keyOffer,'Saved');
    this.offerService.setStatus(this.keyOffer,'Saved');
    this.offerService.dropTimer(this.keyOffer);
    clearInterval(this.objNodeTimer);
    this.navCtrl.setRoot(ShowPage);
  }
  private dobleCifra(num:number):any{
    if(num<10){ return '0'+num;
    }else{ return ''+num;}
  }

  private getUserLocation() {
    /// locate the user
    // console.info('get User location2');
    // console.info(navigator);
    //console.info(navigator.geolocation);
    //console.info(JSON.stringify(navigator));
    //console.info(JSON.stringify(navigator.geolocation));
    // if (navigator) {
    //   console.log('soportado2');
    //   console.log(navigator);
    // } else {
    //   console.log('no soportado');
    //   /* geolocation IS NOT available */
    // }
    var geolocationz = navigator.geolocation;
    // console.log(geolocationz);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('Location');
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.info(position.coords.latitude);
        console.info(position.coords.longitude);
      });
    }
  }

  private getUserLocationGeolocation(){
    this.platform.ready().then(() => {
      var options = {
        timeout: 5000
      };
      this.geo.getCurrentPosition(options).then(resp => {
        console.log('geoLocation');
        console.info(resp.coords.latitude);
        console.info(resp.coords.longitude);
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        this.getNameAddress();
      }).catch(() => {
        console.log("Error to get location");
      });
    });
  }
  
  getNameAddress(){
      this.geocodeServiceProvider.GeoCodificationInversa(this.lat,this.lng)
      // this.geocodeServiceProvider.GeoCodificationInversa('4.5510497999999995','-74.0984553')
      .then( (result) => {
        console.log(result);
        this.offerService.setOfferUserLocation(this.keyOffer,{'latitud':this.lat,'longitud':this.lng,'nameAddress':result});
      })
      .catch( (error) => { console.log(error); console.log('error geoCdoficiacion');});
    }
  
  showAlertSinOffer() {
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: 'No offers',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlertFinOffer() {
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: 'The sale ended',
      buttons: ['OK']
    });
    alert.present();
  }
  
}
