import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController,Platform} from 'ionic-angular';

import { CleaningContractorPage } from '../cleaning-contractor/cleaning-contractor';
//import { ShowPage } from '../show/show';
import { HomePage } from '../home/home';

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
  professionals = [];
  professsional = [];
  segundos:number = 0;
  minutos:number = 2;
  contador:string;
  showContador: boolean = true;
  objNodeTimer:any;

  lat: number= 37.09024;
  lng: number= -95.71289100000001;
  zom: number = 16;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController, 
    public professionalsService : ProfessionalsService,
    private geo: Geolocation, private platform: Platform) {
      this.contador = '0'+this.minutos+':'+'0'+this.segundos;
      this.startTimer();
      this.professionalsService.getProfessionals()
        .forEach(professionals =>{
          this.professionals = professionals;
        });
      console.log(this.professionals);

    }
    
    ionViewDidLoad() {
      console.log('ionViewDidLoad CleaningSalePage');
      this.getUserLocation();
      this.platform.ready().then(() => {
        var options = {
          timeout: 5000
        };
        this.geo.getCurrentPosition(options).then(resp => {
          console.log(resp.coords.latitude);
          console.log(resp.coords.longitude);
          this.lat = resp.coords.latitude;
          this.lng = resp.coords.longitude;
        }).catch(() => {
          console.log("Error to get location");
        });
      });
  }
  goCleaningContractor(){
  	this.navCtrl.setRoot(CleaningContractorPage);
  }
  showInfoCleaning(id: any = "prof_1"){
    //console.log(this.professionalsService.getProfessional(id));
    this.professionalsService.getProfessional("prof_1")
    .forEach(professional =>{
      this.professsional = professional;
    });
    console.log(this.professionals);
    var contenido='';
    contenido +='<div class="col-40"><img src="assets/img/professions/cleaning.png"></div>';
    contenido +='<div class="col-60"><h4>Estefania lorem</h4><img src="assets/img/Estrellas.png">';
    contenido +='<p><span class="ItemPService"><img src="assets/img/okBlue.png"> <span> Certificate</span>,</span><span class="ItemPService"><img src="assets/img/okBlue.png"> <span>  Insurance</span></span></p></div>';
    contenido += "<h5>Presentation</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui necessitatibus consectetur atque at accusantium sequi, ipsum ut! Excepturi, alias porro, laboriosam fugit doloribus quisquam quia autem est quos voluptatibus. Consequatur vel porro animi quae quam recusandae dignissimos quos quaerat illo eaque sed saepe libero incidunt autem ab veritatis id magni perferendis, amet ex deleniti? Quo autem, sit, non, saepe aperiam magnam nisi, impedit modi ab nihil eum tempore maxime aspernatur optio ratione iste! Alias porro molestiae quod, incidunt, exercitationem facilis id perferendis distinctio natus delectus, voluptas sunt ullam tempore ad necessitatibus nobis ipsam omnis consequuntur vitae labore ipsa voluptatem autem aperiam officiis? Totam doloremque, minus fuga distinctio aperiam non perspiciatis dolorum. Culpa facere sint modi? Dolore doloribus labore velit quidem corrupti, corporis, culpa quam ipsam necessitatibus numquam. Pariatur at qui ducimus, similique, delectus repellendus commodi incidunt nulla ex illo, sed a accusamus, quam quaerat ab libero earum praesentium enim numquam exercitationem dolorum nihil. Natus qui illo ipsa quaerat totam iste fugit id, fugiat, commodi iure porro amet non sint quod earum quo. Ex beatae ea suscipit sapiente dolorem earum, dicta soluta qui cumque debitis aliquam laborum molestias et error eos eaque at aperiam, hic nemo saepe nisi modi officiis. Quod eius aperiam tenetur rerum corrupti, repellat asperiores nihil laborum facere sequi porro molestias repellendus. Eligendi cumque repudiandae adipisci, eveniet delectus tempora iure, amet culpa beatae maiores veritatis odio quisquam eum illum recusandae soluta. Voluptate suscipit accusantium, iure non cum autem, laborum illum eveniet pariatur. Illum dolorum eos reprehenderit, voluptatum atque repellat asperiores dignissimos modi quia nobis cumque ducimus maiores deserunt quibusdam! Iusto rem voluptates sit delectus vitae animi, harum sed, unde atque in odio cumque eaque dolorum placeat sequi porro, itaque incidunt. Ducimus quibusdam natus placeat repellat sit eaque, nisi rerum soluta delectus nemo facilis dolor sequi suscipit dolorum, qui.</p>";
    contenido += id+'';
    contenido +='<h5>Gallery</h5>';
    contenido +='<img src="assets/img/gallery.png" alt="" class="imagen50">';
    contenido +='<img src="assets/img/gallery.png" alt="" class="imagen50">';
    contenido +='<img src="assets/img/gallery.png" alt="" class="imagen50">';
    contenido +='<img src="assets/img/gallery.png" alt="" class="imagen50">';
    contenido +='<h5>Comments</h5><div class="comments">';
    contenido +='<h6>Luis Lorem <img src="assets/img/Estrellas.png" alt=""></h6>';
    contenido +='<p>Odit, cupiditate. Quibusdam ducimus minus incidunt voluptas consequatur odit, adipisci eveniet laborum obcaecati labore! Sapiente repellat ipsum in autem fuga sint enim recusandae incidunt tenetur corporis neque totam, quam sequi placeat cupiditate, inventore! Alias repudiandae ducimus laudantium nemo quisquam, quod sint et quam, id ipsum magnam veniam amet sit a voluptatibus, similique ipsa voluptatem voluptates velit quo. Quidem odio a nemo sit illum. </p>';
    contenido +='</div><div class="comments">';
    contenido +='<h6>Melisa Lorem <img src="assets/img/Estrellas.png" alt=""></h6>';
    contenido +='<p>Odit, cupiditate. Quibusdam ducimus minus incidunt voluptas consequatur odit, adipisci eveniet laborum obcaecati labore! Sapiente repellat ipsum in autem fuga sint enim recusandae incidunt tenetur corporis neque totam, quam sequi placeat cupiditate, inventore! Alias repudiandae ducimus laudantium nemo quisquam, quod sint et quam, id ipsum magnam veniam amet sit a voluptatibus, similique ipsa voluptatem voluptates velit quo. Quidem odio a nemo sit illum. </p>';
    contenido +='</div>';
    
    let alert = this.alertCtrl.create({
      // title: 'Estefania Lorem',
      message: contenido,
      buttons: ['OK']
    });
    alert.present();
  }
  
    goIndex(){
      clearInterval(this.objNodeTimer);
      this.navCtrl.setRoot(HomePage);
    }
  startTimer(){
    this.objNodeTimer=setInterval( () => this.timer(),1000);
  }

  private timer(){
    if(this.minutos == 0 && this.segundos == 1){ 
      //this.showContador = false;
        clearInterval(this.objNodeTimer);
         this.showContador = false;
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

  private dobleCifra(num:number):any{
    if(num<10){ return '0'+num;
    }else{ return ''+num;}
  }

  private getUserLocation() {
    /// locate the user
    console.info('get User location2');
    console.info(navigator);
    console.info(navigator.geolocation);
    console.info(JSON.stringify(navigator));
    console.info(JSON.stringify(navigator.geolocation));

    if (navigator) {
      console.log('soportado2');
      console.log(navigator);
    } else {
      console.log('no soportado');
      /* geolocation IS NOT available */
    }
    // if ("geolocation" in navigator) {
    //   console.log('soportado');
    //   console.log(navigator);
    // } else {
    //   console.log('no soportado');
    //   /* geolocation IS NOT available */
    // }
    var geolocationz = navigator.geolocation;
    console.log(geolocationz);
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      });
    }
  }
  
}
