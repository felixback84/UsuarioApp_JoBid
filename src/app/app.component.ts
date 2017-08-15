import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';

import { HomePage } from '../pages/home/home';

//import { CleaningContractorPage } from '../pages/cleaning-contractor/cleaning-contractor';
//import { CleaningPage } from '../pages/cleaning/cleaning';
//import { CleaningSalePage } from '../pages/cleaning-sale/cleaning-sale';
//import { PreHomePage } from '../pages/pre-home/pre-home';

import { ShowPage } from '../pages/show/show';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  userName: string = 'hola logeado';
  srcUser: string = 'assets/img/user.png';
  //rootPage: any = PreHomePage;
  rootPage: any = HomePage;
  mensage : string = '';

  pages: Array<{title: string, component: any}>;

  constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private facebook:  Facebook ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: ShowPage },
      { title: 'Login out', component: HomePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  cerrarSeccion(){
    this.facebook.getLoginStatus().then( data=>{
          alert(JSON.stringify(data.status));
          if(data.status === 'connected'){
                  alert('estoy logeado');
                  this.facebook.logout().then((response) => {
                    console.log('Login out Facebook!', response);
                    alert('response:'+JSON.stringify(response));
                    alert('estoy des-logeado');
                    this.nav.push(HomePage);
                  })
                  .catch(e => {
                    console.log('Error logging into Facebook', e);
                    });
              }else{
                  alert('no estoy logeado');
          }
      }).catch(e => {
        console.log('Error logging into Facebook', e);
        alert('error if login');
        });
  }
}
