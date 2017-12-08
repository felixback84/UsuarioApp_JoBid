import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
//service
import { SaleService } from '../../services/sale.service';
import { OfferService } from '../../services/offer.service';
//page
import { MyserviceinfoPage } from '../myserviceinfo/myserviceinfo';
/**
 * Generated class for the MyServicesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-services',
  templateUrl: 'my-services.html',
})
export class MyServicesPage {
  userActual:any;
  keyOffer:any=[];
  OffersList:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private saleService: SaleService,  
    private offerService: OfferService,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyServicesPage');
    this.userActual = localStorage.getItem('verificacion');
    console.log(this.userActual);
    this.getOffer();
  }
  getOffer(){
    console.info('get offer');
    let OfferServiceGet:any;
    let SaleServiceGet=this.saleService.getSales(this.userActual)
    .subscribe((value)=>{
      this.OffersList=[];
      // console.log('saleServiceGet');
      // console.log(value);
      // console.log('get saleKey');
      // value.forEach((data) =>{
        //   console.log(data);
        // });
        for(let key in value){
          // console.log(key);
          if('$value' == key){  
          //   //alert('User does not have services');
            this.showAlertNoServices();
          }else{
          // this.offerService.getOffer(key);
          // this.keyOffer.push(key);
          // console.log(key);
          OfferServiceGet = this.offerService.getOffer(key)
          .subscribe((datos) =>{
            // console.log(datos);
            // if(datos['$value'] == null){

            // }else{
              // console.info('get offerKey');
              if(datos.sale == null || datos.sale == undefined){
                datos['sale'] = datos.Clasificacion.informacion.maxOffer
              }
              this.OffersList.push(datos);
            // }
          });
        }
      }
      // OfferServiceGet.unsubscribe();
      SaleServiceGet.unsubscribe();
    });
    
    // console.log(this.OffersList);
    // for(let valueOffer of this.keyOffer){
    //   console.log('this.keyOffer');
    //   console.log(this.keyOffer);
    //   console.log(valueOffer);
    // }
  }
  goInfoService(obj){
    console.log(obj);
    let DataService = {'datos':obj};
    console.log(DataService);
    this.navCtrl.push(MyserviceinfoPage,DataService);
  }

  showAlertNoServices() {
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: 'User does not have services',
      buttons: ['OK']
    });
    alert.present();
  }
}
