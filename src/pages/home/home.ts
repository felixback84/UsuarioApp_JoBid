import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { IndexPage } from '../index/index';
import { LoginPage } from '../login/login';
import { SingupPage } from '../singup/singup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  googleir(){
 		this.navCtrl.setRoot(IndexPage);
 		//this.navCtrl.pop();
 		//this.navCtrl.push(IndexPage);	
 	}
 	facebookir(){
 		this.navCtrl.setRoot(IndexPage);
 		//this.navCtrl.push(IndexPage);
 	}
 	login(){
 		this.navCtrl.push(LoginPage);
 	}
 	singup(){
 		this.navCtrl.push(SingupPage);
 	}
}
