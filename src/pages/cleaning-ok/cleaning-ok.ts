import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ShowPage } from '../show/show';

//---services
import { BraintreeService } from '../../services/braintree.service';

/**
 * Generated class for the CleaningOkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cleaning-ok',
  templateUrl: 'cleaning-ok.html',
})
export class CleaningOkPage {

  //-data
  datasService:any;
  keyOffer:any;
  worker:any;
  userActual:any;
  dataService:any;

  //-vista
  offer:any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private braintreeService:BraintreeService,
  ) {
    this.loadData();
    this.pagar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningOkPage');
  }
  goIndex(){
 		this.navCtrl.setRoot(ShowPage);
  }
   
  loadData(){
    this.datasService = this.navParams.get('datos');
    this.dataService = this.datasService['dataService'];
    this.keyOffer = this.datasService['offer']; 
    this.worker = this.datasService['win']; 
    this.offer = this.worker['offer'];
    this.userActual = localStorage.getItem('verificacion');
    console.log(this.datasService);
    console.log(this.dataService);
    console.log(this.keyOffer);
    console.log(this.worker);
    console.log(this.userActual);
    
  }

  pagar(){
    console.log('service pagado');
    this.braintreeService.CrearSaleCustomer(this.userActual,this.offer,this.worker['id'],this.keyOffer,this.dataService.Clasificacion.categoria);
  }
}
