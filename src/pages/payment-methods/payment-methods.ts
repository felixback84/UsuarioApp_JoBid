import { Component } from '@angular/core';
import { NavController, NavParams , AlertController} from 'ionic-angular';
import { PayinfoPage } from '../payinfo/payinfo';
/**
 * Generated class for the PaymentMethodsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment-methods',
  templateUrl: 'payment-methods.html',
})
export class PaymentMethodsPage {
  userData:any;
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentMethodsPage');
    this.userData = this.navParams.get('datos');
    console.log(this.userData);
    console.log(this.navParams.get('datos'));
    this.showAlert();
  }
  goPayInfo(){
    console.log(this.userData);
    let Data = {'datos':this.userData};
  	this.navCtrl.push(PayinfoPage,Data);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: 'An email has been sent to verify your acount',
      buttons: ['OK']
    });
    alert.present();
  }
}
