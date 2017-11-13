import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { LoginPage } from '../login/login';
//import { ProfessionPage } from '../profession/profession';

import { CleaningPage } from '../cleaning/cleaning';
//import {MyApp}  from '../../app/app.component';

import { ProfessionsService } from '../../services/professions.service';

// import { Media, MediaObject } from '@ionic-native/media';
import { NativeAudio } from '@ionic-native/native-audio';

/**
 * Generated class for the ShowPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {
  direccion: any = [];
  professions: any = [] ;

  //-tempo
  // file: MediaObject;
  constructor(
    public navCtrl: NavController, public navParams: NavParams, public professionsService : ProfessionsService,
    // private media: Media, 
    private nativeAudio: NativeAudio,
  ) {
    this.showProfessionals();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPage');
    // console.log(localStorage);
    this.direccion = JSON.parse(localStorage.getItem('address'));
    
    // const  file = this.media.create('assets/timbre.mp3');

    // console.log(file);
    
    // to listen to plugin events:
    // console.log(file.statusCallback.toString());
    // file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes

    // file.onSuccess.subscribe(() => console.log('Action is successful'));

    // file.onError.subscribe(error => console.log('Error!', error));

    // play the file
    // file.play();
    // this.nativeAudio.preloadSimple('uniqueId1', 'http://www.elongsound.com/images/mp3/llenandovasoconaguaytirandolopordesague_1.mp3').then(this.onSuccess, this.onError);

    // this.nativeAudio.play('uniqueId1').then(this.onSuccess, this.onError);

    // let audioAsset = new Audio('http://www.elongsound.com/images/mp3/llenandovasoconaguaytirandolopordesague_1.mp3');
    // audioAsset.play();
    // this.nativeAudio.preloadSimple('uniqueId1', 'assets/timbre.mp3').then(this.onSuccess, this.onError);

    // this.nativeAudio.play('uniqueId1').then(this.onSuccess, this.onError);

    // let audioAsset = new Audio('assets/timbre.mp3');
    // audioAsset.play();

  }

  onSuccess(){
    console.log(' success');
  }
  onError(){
    console.log('error');
  }

  Cleaning(item : any){
    // console.log(item);
    let DataService = {'datos':item};
    this.navCtrl.push(CleaningPage,DataService);
  }

  showProfessionals(){
    this.professions = this.professionsService.getProfessions();
    console.log(this.professions);
  }
  

}
