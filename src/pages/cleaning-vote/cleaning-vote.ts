import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CleaningOkPage } from '../cleaning-ok/cleaning-ok';

//-service
import { ProfessionalsService } from '../../services/professionals.service';
import { NotificacionService } from '../../services/notificacion.service';

/**
 * Generated class for the CleaningVotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cleaning-vote',
  templateUrl: 'cleaning-vote.html',
})
export class CleaningVotePage {
  //-data
  datasService: any;
  dataService: any;
  keyOffer: any;
  worker: any;
  userActual: any;

  //-view
  vote: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private professionalsService: ProfessionalsService,
    private notificacionService: NotificacionService,
  ) {
    this.datasService = this.navParams.get('datos');
    this.dataService = this.datasService['dataService'];
    this.keyOffer = this.datasService['offer'];
    this.worker = this.datasService['win'];
    this.userActual = localStorage.getItem('verificacion');
    this.notificacionVoteProvider();
    // console.log(this.datasService);
    // console.log(this.dataService);
    // console.log(this.keyOffer);
    // console.log(this.worker);
    // console.log(this.userActual);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CleaningVotePage');
  }

  goCleaningOk() {
    console.log(this.vote);
    this.vote['userId'] = this.userActual;
    let DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer, "win": this.worker } };
    console.log(DataService);

    this.professionalsService.setComment(this.worker['id'], this.vote);

    //-cambiar calificacion proveedor
    let calificacion = (Number(this.vote.estrellas) + Number(this.worker['star'])) / 2;
    console.log(calificacion);
    this.professionalsService.setStar(this.worker['id'], calificacion);

    this.navCtrl.setRoot(CleaningOkPage, DataService);
  }
  //-notification
  notificacionVoteProvider() {
    console.info('Nota: Do not forget to rate your provider');
    this.notificacionService.mostrar('Do not forget to rate your provider', 4);
  }
}
