import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController,Platform} from 'ionic-angular';

import { CleaningContractorPage } from '../cleaning-contractor/cleaning-contractor';
import { SaleService } from '../../services/sale.service';

import { ShowPage } from '../show/show';
// import { HomePage } from '../home/home';

//import { OfferService } from '../../services/offer.service';
import { ProfessionalsService } from '../../services/professionals.service';
import { Geolocation } from '@ionic-native/geolocation';
import * as GeoFire from 'geofire';
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
  professionals = [];
  professsional = [];
  //--timer
  segundos:number = 0;
  minutos:number = 2;
  contador:string;
  showContador: boolean = true;
  objNodeTimer:any;
  //-- geoLocation
  lat: number= 37.09024;
  lng: number= -95.71289100000001;
  zom: number = 16;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController, 
    public professionalsService : ProfessionalsService,
    private geo: Geolocation, private platform: Platform,
    private saleService: SaleService  
  ) {
      this.contador = '0'+this.minutos+':'+'0'+this.segundos;
      this.startTimer();
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
    console.log(this.dataOffer);
    
    //--Fin-comentado para evitar mas creaciones
    
    //--Ini-comentado para tener flujo normal
    // this.userActual = "user_1504538580518";
    // this.keyOffer = "offer_1504561188712"; 
    // this.dataService = { "Clasificacion" : {  "categoria" : "Car washers", "certificacion" : "true",  "distancia" : "4M","esperiencia" : "3Y","informacion" : {"brandCar" : "323","foto" : "","maxOffer" : "453","moreInformation" : "dsads","typeCar" : "fas"},"seguro" : "true"},"class" : "yellow","name" : "Cleaning"}; 
    //--Fin-comentado para tener flujo normal
    this.getUserLocation();
    this.getUserLocationGeolocation();
    this.getSale();
  }

  goCleaningContractor(ganador?){
    console.info('goCleaningContractor');
    console.log(ganador);
    let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer,"win":ganador}};
    console.log(DataService);
  	this.navCtrl.setRoot(CleaningContractorPage,DataService);
  }

  goIndex(){
    clearInterval(this.objNodeTimer);
    this.navCtrl.setRoot(ShowPage);
  }

  showInfoCleaning(id: any = "prof_1"){
    let index:any;
    for(index in this.WorkersInfo){
        if(this.WorkersInfo[index]['$key'] == id){
          // console.log(this.WorkersInfo[index]);
          //--imagenes por defecto
          let ImgJobr= this.imgJobDefault;
          let galleryAJobr = this.galleryJobDefault;
          let galleryBJobr = this.galleryJobDefault;
          let galleryCJobr = this.galleryJobDefault;
          let galleryDJobr = this.galleryJobDefault;
          // let galleryJobr= this.galleryJobDefault;
          let nameJobr= this.WorkersInfo[index]['prof_name']; 
          let certificateJobr= this.WorkersInfo[index]['prof_certificate']; 
          let insuranceJobr= this.WorkersInfo[index]['prof_insurance']; 
          let commentsJobr= this.WorkersInfo[index]['prof_comments']; 
          let presentationJobr= this.WorkersInfo[index]['prof_presentation']; 

          if(this.WorkersInfo[index]['prof_picture'] && this.WorkersInfo[index]['prof_picture'] != ''){
            ImgJobr = this.WorkersInfo[index]['prof_picture'];
          }
          if(this.WorkersInfo[index]['prof_galleryA'] && this.WorkersInfo[index]['prof_galleryA'] != ''){
            galleryAJobr = this.WorkersInfo[index]['prof_galleryA'];
          }
          if(this.WorkersInfo[index]['prof_galleryB'] && this.WorkersInfo[index]['prof_galleryB'] != ''){
            galleryBJobr = this.WorkersInfo[index]['prof_galleryB'];
          }
          if(this.WorkersInfo[index]['prof_galleryC'] && this.WorkersInfo[index]['prof_galleryC'] != ''){
            galleryCJobr = this.WorkersInfo[index]['prof_galleryC'];
          }
          if(this.WorkersInfo[index]['prof_galleryD'] && this.WorkersInfo[index]['prof_galleryD'] != ''){
            galleryDJobr = this.WorkersInfo[index]['prof_galleryD'];
          }
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
          contenido +='<h5>Comments</h5>';
          
          // console.log('commentsJobr');
          // console.log(commentsJobr);
          for(let key in commentsJobr){
            // console.log(commentsJobr[key]);
            // console.log(commentsJobr[key]['user_username']);
            console.log(commentsJobr[key]['comm_qualification']);
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
    if(this.minutos == 0 && this.segundos == 1){ 
    // if(this.minutos == 1 && this.segundos == 58 ){ 
      //this.showContador = false;
        clearInterval(this.objNodeTimer);
         this.showContador = false;
         this.ganador();
    }else{
      if(--this.segundos< 0){
        this.segundos = 59;
        if(--this.minutos< 0){
          //this.minutos = 59;
          //if( (this.segundos = 0) && (this.minutos = 0)){ this.showContador = false;}
        }
      }
      this.contador = this.dobleCifra(this.minutos)+':'+this.dobleCifra(this.segundos);
    }
  }
  
  //--- Functions

  async getSale(){
    this.MenosPrecio= undefined;
    let finRegistro:boolean= false;
    this.saleService.getSale(this.userActual,this.keyOffer)
    .subscribe((result) =>{
      this.Workers = [];
      this.WorkersInfo =[];
      this.MenosPrecio = undefined;
      //console.log(result);
      //console.log(result.sale);
      //console.log(result.providers);
      if(this.MenosPrecio ==  undefined){
        this.MenosPrecio = Number(result.sale);
      }
      let trabajadores = result.providers;
      for(let trabajador in trabajadores){
        // console.log(trabajadores);
        // console.log(trabajadores[trabajador]);
        //console.log(trabajadores[trabajador]['offer']);
        // console.log(trabajador);
        if(this.MenosPrecio > Number(trabajadores[trabajador]['offer']) ) { this.MenosPrecio= Number(trabajadores[trabajador]['offer']);}
        let PromiseUser =this.professionalsService.getProfessional(trabajador);
        // console.log(PromiseUser);
        PromiseUser.subscribe((user) =>{
          //console.log(user);
          this.WorkersInfo.push(user);
          let img = this.imgJobDefault;
          if(user.prof_picture && user.prof_picture != undefined && user.prof_picture != ''){
            img = user.prof_picture;
          }
          this.Workers.push({"id":trabajador,"offer":trabajadores[trabajador]['offer'],"img":img,"name":user.prof_name});
        });
      }
      finRegistro = true;
      console.log(this.Workers);
      console.log(this.WorkersInfo);
      console.log(this.MenosPrecio);
      let estadoUser= this.Workers;
      console.log(estadoUser);
      // for(let jobs in estadoUser){
      //   console.log('jobs');
      //   console.log(jobs);
      //   console.log(estadoUser[jobs]);
      // }
      // console.log('verifcar la informacion');

    });
    // this.Workers=[
    //   {"icon":false,"img":"assets/img/professions/cleaning.png","name":"Loren","offer":"$89","id":"1"},
    //   {"icon":true,"img":"assets/img/professions/cleaning.png","name":"Espera","offer":"$83","id":"2"},
    // ];

    // if(await finRegistro){
    //   this.llemarTrabajadores();
    // }
    
  }

  ganador(){
    console.info('ganador');
    for(let index in this.Workers){
      //console.log(index);
      //console.log(this.Workers[index]);
      if(this.MenosPrecio == this.Workers[index]['offer']){
        this.goCleaningContractor(this.Workers[index]);
      }
    }
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
      }).catch(() => {
        console.log("Error to get location");
      });
    });
  }

  // private getProfessionals(){
  //   this.professionalsService.getProfessionals()
  //   .forEach(professionals =>{
  //     this.professionals = professionals;
  //   });
  // console.log(this.professionals);
  // }
  
}
