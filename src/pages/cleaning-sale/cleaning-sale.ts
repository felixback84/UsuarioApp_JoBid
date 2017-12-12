import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController,Platform} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeAudio } from '@ionic-native/native-audio';
// import * as GeoFire from 'geofire';

//--page
import { CleaningContractorPage } from '../cleaning-contractor/cleaning-contractor';
import { ShowPage } from '../show/show';
// import { HomePage } from '../home/home';

//--service
import { UserService } from '../../services/user.service';
import { OfferService } from '../../services/offer.service';
import { SaleService } from '../../services/sale.service';
//import { OfferService } from '../../services/offer.service';
import { ProfessionalsService } from '../../services/professionals.service';
import { NotificacionService } from '../../services/notificacion.service';
import { GeocodeServiceProvider } from '../../providers/geocode-service';
// import { log } from 'util';

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
  WorkersMap:any=[];
  dataService:any;
  arrayIdProveder:any=[];
  //--datas
  userActual:any;
  SubServiceActual:any;
  professionals = [];
  professsional = [];
  
  //--timer
  segundos:number = 0;
  // minutos:number = 2;
  minutos:number = 3;
  contador:string;
  showContador: boolean = true;
  objNodeTimer:any;
  NumeroContador:number = 1;
  StaringLabel = true;
  
  //-- geoLocation
  lat: number= 37.09024;
  lng: number= -95.71289100000001;
  zom: number = 14;

  //-Subs
  saleSubs:any;
  userNameSubs:any;

  constructor(
    public navCtrl: NavController,public navParams: NavParams,public alertCtrl: AlertController, 
    public professionalsService : ProfessionalsService,private saleService: SaleService,  private offerService: OfferService, private userService: UserService,
    private geo: Geolocation, private platform: Platform,private geocodeServiceProvider: GeocodeServiceProvider,  
    private notificacionService: NotificacionService,
    private nativeAudio : NativeAudio,
  ) {
    this.contador = '0'+this.minutos+':'+'0'+this.segundos;
    this.startTimer();
      // this.getProfessionals();
    }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningSalePage');

    //--Ini-comentado para evitar mas creaciones
    this.dataOffer = this.navParams.get('datos');
    console.log(this.dataOffer);
    this.dataService = this.dataOffer['dataService'];
    this.keyOffer = this.dataOffer['offer']; 
    this.userActual = localStorage.getItem('verificacion');
    this.maxOffer = this.dataService['Clasificacion']['informacion']['maxOffer'];
    this.SubServiceActual = localStorage.getItem('SubService');
    console.log(this.dataOffer);
    console.log(JSON.stringify(this.dataOffer));
        
    //--Fin-comentado para evitar mas creaciones
    
    //-
    // this.userActual = "user_1509139021478";
    // localStorage.setItem('verificacion',this.userActual);
    // this.keyOffer = "offer_1512998956021"; 
    // this.SubServiceActual = "Electrician";
    // this.dataService = {"name":"Janotorial","class":"orange","img":"assets/img/services/Janitorial.png","Clasificacion":{"categoria":"Electrician","certificacion":"true","seguro":"true","distancia":"4M","experiencia":"2Y","informacion":{"maxOffer":"125","foto":"","moreInformation":"5info"}},"status":"Published","User":"user_1509139021478","Address":{"label":"My Address","name":"134 azxc,cqe,CA 90001","keyAddress":"addr_1509139021502"},"Star":1};
    // this.userActual = "user_1509139021478";
    // this.maxOffer = 189;
    // --Fin-comentado para tener flujo normal

    // this.getUserLocation();
    console.log(this.dataService);
    console.log(this.keyOffer);
    
    this.getUserLocationGeolocation();
    this.getSale();
  
  }

  goCleaningContractor(ganador){
    console.info('goCleaningContractor');
    // console.log(ganador);
    let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer,"win":ganador}};
    // console.log(DataService);
    this.offerService.dropTimer(this.keyOffer);

    this.saleSubs.unsubscribe();
  	this.navCtrl.setRoot(CleaningContractorPage,DataService);
  }

  goIndex(){
    
    //--set status offer y sale
    console.info('Offer -Cancelled');
    this.saleService.setStatus(this.userActual,this.keyOffer,'Cancelled');
    this.offerService.setStatus(this.keyOffer,'Cancelled');
    this.offerService.dropTimer(this.keyOffer);
    clearInterval(this.objNodeTimer);
    this.saleSubs.unsubscribe();
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
          // console.log(this.WorkersInfo[index]);
          // console.log(this.WorkersInfo[index].Service);
          
          //-info basic
          let nameJobr= this.WorkersInfo[index]['prof_name']; 
          let starJobr= this.WorkersInfo[index]['prof_star']; 
          if(this.WorkersInfo[index]['prof_picture'] && this.WorkersInfo[index]['prof_picture'] != ''){
            ImgJobr = this.WorkersInfo[index]['prof_picture'];
          }
          //info servicion
          for(let service in this.WorkersInfo[index].Service){
            if(this.WorkersInfo[index].Service[service].serv_subService == this.SubServiceActual || this.WorkersInfo[index].Service[service].serv_subService == 'Full'  ){

              let infoService = this.WorkersInfo[index].Service[service];
              // console.log(infoService);
              // console.log(infoService.serv_detail.serv_moreInformation);
              // console.log(infoService.serv_detail.serv_gallery.prof_galleryA);
              presentationJobr = infoService.serv_detail.serv_moreInformation;
              // console.log(infoService.serv_subService);
              certificateJobr= (infoService.serv_detail['serv_certificate'] == 'true')?true:false;
              insuranceJobr= (infoService.serv_detail['serv_insurance'] == 'true')?true:false;
              // console.log(certificateJobr);
              // console.log(insuranceJobr);
              if(infoService.serv_detail.serv_gallery){
                if(infoService.serv_detail.serv_gallery.prof_galleryA && infoService.serv_detail.serv_gallery.prof_galleryA != ''){
                  galleryAJobr = infoService.serv_detail.serv_gallery.prof_galleryA;
                }
                if(infoService.serv_detail.serv_gallery.prof_galleryB && infoService.serv_detail.serv_gallery.prof_galleryB != ''){
                  galleryBJobr = infoService.serv_detail.serv_gallery.prof_galleryB;
                }
                if(infoService.serv_detail.serv_gallery.prof_galleryC && infoService.serv_detail.serv_gallery.prof_galleryC != ''){
                  galleryCJobr = infoService.serv_detail.serv_gallery.prof_galleryC;
                }
                if(infoService.serv_detail.serv_gallery.prof_galleryD && infoService.serv_detail.serv_gallery.prof_galleryD != ''){
                  galleryDJobr = infoService.serv_detail.serv_gallery.prof_galleryD;
                }
              }
            }
          }
          
          //-info comentarios
          let commentsJobr= this.WorkersInfo[index]['prof_comments']; 
          // console.log(commentsJobr);

          //-mapear alert
          var contenido='';
          contenido +='<div class="col-40"><img src="'+ImgJobr+'"></div>';
          contenido +='<div class="col-60"><h4>'+nameJobr+'</h4>';
          if(Math.round(starJobr) == 5){
            contenido +='<p class="Calificacion cinco">';
          }
          if(Math.round(starJobr) == 4){
            contenido +='<p class="Calificacion cuatro">';
          }
          if(Math.round(starJobr) == 3){
            contenido +='<p class="Calificacion tres">';
          }
          if(Math.round(starJobr) == 2){
            contenido +='<p class="Calificacion dos">';
          }
          if(Math.round(starJobr) == 1){
            contenido +='<p class="Calificacion one">';
          }
          contenido +='<label for="radio1">&#9733;</label><label for="radio2">&#9733;</label><label for="radio3">&#9733;</label><label for="radio4">&#9733;</label><label for="radio5">&#9733;</label></p>';
          // contenido +='<h4>'+starJobr+'</h4>';
          contenido +='<p>'
          if(certificateJobr == true){
            contenido +='<span class="ItemPService"><img src="assets/img/okBlue.png"> <span> Certificate</span>,';
          }
          if(insuranceJobr == true){
            contenido +='<span class="ItemPService"><img src="assets/img/okBlue.png"> <span>  Insurance</span></span>';
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
          if(commentsJobr != null && commentsJobr != undefined){
            for(let key in commentsJobr){
              if(cont == 0){
                contenido +='<h5>Comments</h5>';
                cont+=1;
              }
              // console.log(commentsJobr[key]);
                this.userNameSubs = this.userService.getUser(commentsJobr[key]['user_username']).subscribe(
                (UserBD)=>{
                  if(UserBD){
                    if(this.userNameSubs != undefined){
                      // console.log(this.userNameSubs);
                      // console.log('userNameSubs S - sale');
                      // console.log(UserBD);
                      // console.log(UserBD['user_username']);
                      if(UserBD['user_username']){
                        // listCommentsJobr.push(commentsJobr[key]);
                        contenido +='<div class="comments">';
                        contenido +='<h6 class="nameUser">'+UserBD['user_username']+'</h6>';
                        // contenido +=Math.round(commentsJobr[key]['comm_qualification'])+'';
                        if(Math.round(commentsJobr[key]['comm_qualification']) == 5){
                          contenido +='<p class="Calificacion cinco">';
                        }
                        if(Math.round(commentsJobr[key]['comm_qualification']) == 4){
                          contenido +='<p class="Calificacion cuatro">';
                        }
                        if(Math.round(commentsJobr[key]['comm_qualification']) == 3){
                          contenido +='<p class="Calificacion tres">';
                        }
                        if(Math.round(commentsJobr[key]['comm_qualification']) == 2){
                          contenido +='<p class="Calificacion dos">';
                        }
                        if(Math.round(commentsJobr[key]['comm_qualification']) == 1){
                          contenido +='<p class="Calificacion one">';
                        }
                        contenido +='<label for="radio1">&#9733;</label><label for="radio2">&#9733;</label><label for="radio3">&#9733;</label><label for="radio4">&#9733;</label><label for="radio5">&#9733;</label></p>';
                        contenido +='<p>'+commentsJobr[key]['comm_description']+'</p>';
                        contenido +='</div>';
                      }
                      // console.log('userNameSubs US - sale');
                      this.userNameSubs.unsubscribe();
                    }
                  }
                }
              );
              // console.log(listCommentsJobr);
              // console.log(commentsJobr[key]['user_username']);
              // console.log(listCommentsJobr[key]['comm_qualification']);
              // // if(cont > 2){
              //   // console.log(listCommentsJobr[key]['comm_description']);
              //   contenido +='<div class="comments">';
              //   contenido +='<h6>'+listCommentsJobr[key]['user_username']+'</h6>';
              //   contenido +='<p>'+Math.round(listCommentsJobr[key]['comm_qualification'])+'</p>';
              //   contenido +='<p>'+listCommentsJobr[key]['comm_description']+'</p>';
              //   contenido +='</div>';
              // }
            }  
          }
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
    // if(this.minutos == 1 && this.segundos == 50 ){ 
      //this.showContador = false;
      if(this.NumeroContador == 2){
        this.showContador = false;
        this.notificacionSaleTimeOver();
        clearInterval(this.objNodeTimer);
        this.ganador();
        // this.audio();
      }else{
        // this.audio();
        this.notificacionProviderWaitTimeOver();
        this.ProviderInSale();
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
      // console.log('contador: ',this.contador);
    }
  }
  
  //--- Functions
  ProviderInSale(){
    console.info('provider in sale');
    if(this.Workers.length != 0){
      console.info('Sale with providers');
      this.minutos = 2;
      this.segundos = 0;
      this.NumeroContador = 2;
      this.StaringLabel = false;
      this.saleService.setStatus(this.userActual,this.keyOffer,'Start');
      this.offerService.setStatus(this.keyOffer,'Start');
    }else{
      this.goServiceSinOff();
    }
  }
  
  getSale(){
    this.MenosPrecio= undefined;
    // let finRegistro:boolean= false;
    this.saleSubs= this.saleService.getSale(this.userActual,this.keyOffer)
    .subscribe((result) =>{
      // console.log(this.saleSubs);
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
    this.Workers = [];
    this.WorkersInfo =[];
    this.WorkersMap=[];
    for(let trabajador in trabajadores){
      console.log(trabajador);
      //verifica que es un nuevo proveedro y manda la notificacion
      if( this.arrayIdProveder.indexOf(trabajador) == -1){
        this.notificacionNewProvider();
        this.arrayIdProveder.push(trabajador);
      }
      // console.log(this.arrayIdProveder);

      if(this.MenosPrecio > Number(trabajadores[trabajador]['offer']) ) { this.MenosPrecio= Number(trabajadores[trabajador]['offer']);}
      let userSubs =this.professionalsService.getProfessional(trabajador).subscribe(
        (user) =>{
          let img = this.imgJobDefault;
          this.WorkersInfo.push(user);
          if(user.prof_picture && user.prof_picture != undefined && user.prof_picture != ''){
            img = user.prof_picture;
          }
          try {
            if(trabajadores[trabajador]['UserLocacion']['latitud'] && trabajadores[trabajador]['UserLocacion']['longitud']){
              if(trabajadores[trabajador]['UserLocacion']['latitud'] != undefined && trabajadores[trabajador]['UserLocacion']['longitud'] != undefined && trabajadores[trabajador]['UserLocacion']['latitud'] != null && trabajadores[trabajador]['UserLocacion']['longitud'] != null){
                this.WorkersMap.push({"latitud":trabajadores[trabajador]['UserLocacion']['latitud'], "longitud":trabajadores[trabajador]['UserLocacion']['longitud'],"imagen":img});
              }
            }
          } catch (error) {
            // console.log(error);
            console.info('experando localizacion user');
          }
          this.Workers.push({"id":trabajador,"offer":trabajadores[trabajador]['offer'],"img":img,"name":user.prof_name});
          userSubs.unsubscribe();
        });
    }
    // console.log(this.WorkersInfo);
    // console.log(this.WorkersMap);
    // let estadoUser= this.Workers;
    // console.log(estadoUser);
  }

  ganador(){
    console.info('ganador');
    let contWorkWin = 0;
    // console.log(this.Workers.length);
    // console.log('this.Workers.length');
    if(this.Workers.length != 0){
      for(let index in this.Workers){
        // console.log(index);
        console.log(this.MenosPrecio);
        console.log(this.Workers[index]);
        if(this.MenosPrecio == Number(this.Workers[index]['offer']) ){
          contWorkWin = 1;
          this.goCleaningContractor(this.Workers[index]);
          this.saleService.setStatus(this.userActual,this.keyOffer,'Evaluation');
          this.offerService.setStatus(this.keyOffer,'Evaluation');
          this.offerService.dropTimer(this.keyOffer);
          this.showAlertFinOffer();
          console.info('provider with offer');
        }
      }
      if( contWorkWin == 0 ){
        console.info('providers without offers');
        this.goServiceSinOff();
      }
    }else{
      console.info('Without providers');
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
    this.saleSubs.unsubscribe();
    this.navCtrl.setRoot(ShowPage);
  }
  private dobleCifra(num:number):any{
    if(num<10){ return '0'+num;
    }else{ return ''+num;}
  }

  private getUserLocationGeolocation(){
    this.platform.ready().then(() => {
      var options = {
        timeout: 5000
      };
      this.geo.getCurrentPosition(options).then(resp => {
        console.info('geoLocation');
        // console.info(resp.coords.latitude);
        // console.info(resp.coords.longitude);
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
        // console.log(result);
        console.info('name Location');
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
      subTitle: 'The bid ended',
      buttons: ['OK']
    });
    alert.present();
  }

  //-audio
  audio(){
    this.nativeAudio.preloadSimple('uniqueId1', 'assets/timbre.mp3').then(this.onSuccess, this.onError);
    this.nativeAudio.play('uniqueId1').then(this.onSuccess, this.onError);
  }
  onSuccess(){
    console.log(' success');
  }
  onError(){
    console.log('error');
  }
  //-notificacion
  notificacionNewProvider(){
    console.info('Nota: A new provider has entered the bid');
    this.notificacionService.mostrar('A new provider has entered the bid',1);
  } 
  notificacionProviderWaitTimeOver(){
    console.info('Nota: Providers waiting time is over');
    this.notificacionService.mostrarSale('Providers waiting time is over',2);
  } 
  notificacionSaleTimeOver(){
    console.info('Nota: The bid is over');
    this.notificacionService.mostrarSale('The bid is over',3);
  } 
}
