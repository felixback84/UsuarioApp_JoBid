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
  userActual: any;
  keyOffer: any = [];
  OffersList: any = [];

  //sub
  OfferServiceGetSub: any;
  SaleServiceGetSub: any;

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

  getOffer() {
    console.info('get offer');
    this.SaleServiceGetSub = this.saleService.getSales(this.userActual)
      .subscribe((value) => {
        this.OffersList = [];
        // console.log('saleServiceGet');
        console.log(value);
        for (let key in value) {
          // console.log(key);
          if ('$value' == key) {
            //alert('User does not have services');
            this.showAlertNoServices();
            console.log('professionalsService-US my-services');
            this.SaleServiceGetSub.unsubscribe();
          } else {
            // this.offerService.getOffer(key);
            // this.keyOffer.push(key);
            // console.log(key);
            this.OfferServiceGetSub = this.offerService.getOffer(key)
              .subscribe((datos) => {
                // console.log(datos);
                if (datos) {
                  if (datos != undefined) {
                    if (datos.sale == null || datos.sale == undefined) {
                      datos['sale'] = datos.Clasificacion.informacion.maxOffer
                    }
                    this.OffersList.push(datos);
                  } else {
                    this.OfferServiceGetSub.unsubscribe();
                    this.SaleServiceGetSub.unsubscribe();
                  }
                } else {
                  this.OfferServiceGetSub.unsubscribe();
                  this.SaleServiceGetSub.unsubscribe();
                }
                // console.info('get offerKey');
                // }
              });
          }
        }
        // OfferServiceGet.unsubscribe();
        this.SaleServiceGetSub.unsubscribe();
      });
  }

  goInfoService(obj) {
    console.log(obj);
    let DataService = { 'datos': obj };
    console.log(DataService);
    this.navCtrl.push(MyserviceinfoPage, DataService);
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
