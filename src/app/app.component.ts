import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { Facebook } from '@ionic-native/facebook';

import { HomePage } from '../pages/home/home';

//import { CleaningContractorPage } from '../pages/cleaning-contractor/cleaning-contractor';
//import { CleaningPage } from '../pages/cleaning/cleaning';
//import { PreHomePage } from '../pages/pre-home/pre-home';

import { CleaningSalePage } from '../pages/cleaning-sale/cleaning-sale';
import { PaymentMethodsPage } from '../pages/payment-methods/payment-methods';
// import { CleaningSalePage } from '../pages/cleaning-sale/cleaning-sale';

import { AngularFireAuth } from 'angularfire2/auth';

import { ShowPage } from '../pages/show/show';
import { JobWithUsPage } from '../pages/job-with-us/job-with-us';
import { PoliciesPage } from '../pages/policies/policies';
import { PreHomePage } from '../pages/pre-home/pre-home';
import { PaymentsPage } from '../pages/payments/payments';
import { AddPaymentMethodPage } from '../pages/add-payment-method/add-payment-method';
import { EditUserPage } from '../pages/edit-user/edit-user';
import { MyServicesPage } from '../pages/my-services/my-services';

import { UserService } from '../services/user.service';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  userName: string = 'hola logeado';
  srcUser: string = 'assets/img/user.png';
  star:any = '3';
   //rootPage: any = PreHomePage;
  // rootPage: any = CleaningSalePage;
  rootPage: any = HomePage;
  // rootPage: any = PaymentMethodsPage;
  
  userMenu:any;
  pages: Array<{title: string, component: any}>;
  menu_is_enabled:boolean=true;
  userDataUpdate:any;
  constructor(  public platform: Platform,  public statusBar: StatusBar, 
                public splashScreen: SplashScreen, private afAuth :  AngularFireAuth,
                private userService : UserService,
              ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Edit', component: EditUserPage },
      { title: 'Menu', component: ShowPage },
      { title: 'My services', component: MyServicesPage },
      { title: 'Address', component: PreHomePage },
      { title: 'Payments', component: AddPaymentMethodPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.usuarioLogeado();
    });
   
  }

  usuarioLogeado(){
    let userDBLoad:any;
    let goPagePrehomeLoad = false;
    this.afAuth.authState.subscribe( userAuth => {
      //console.log('find user menu');
      //console.log(userAuth);
      if (userAuth){
        //if(user.providerData["0"].providerId == "facebook.com"){
            console.info('find user menu');
            let email=  userAuth.providerData["0"].email;
            let Userexists= this.userService.getUserEmailPerfil(email).subscribe( (User) => {
              console.log('User Logueado');
              console.log(User);
              if(Userexists != undefined){
                if(User['0']){
                  this.loadViewUser(User['0']);
                }
              }
              // Userexists.unsubscribe();
            });
            //console.log(email);
            // let Userexists= this.userService.getUserEmailPerfil(email);
            // Userexists.forEach((users) => {
            //   //console.log('user1');
            //   //console.log(users);
            //   users.forEach((user) =>{
            //     if(user != undefined && user != null){
            //         //console.log('usuario load data');
            //         //console.log(user);
            //         // userDBLoad = user;
            //         this.userMenu = { "email":user['user_email'],"name":user['user_name'],"pais":user['user_pais'],"password":user['user_password'],"picture":user['user_picture'],"state":user['user_state'],"tel":user['user_tel'],"username":user['user_username'],"verificacion":user['$key'],"zipcode":user['user_zipcode']};
            //         this.userName= user['user_username'];
            //         if(user['user_picture'] && user['user_picture'] != '' && user['user_picture'] != null && user['user_picture'] != undefined){
            //           this.srcUser= user['user_picture'];
            //         }
            //         if(user['user_star'] && user['user_star'] != '' && user['user_star'] != null && user['user_star'] != undefined){
            //           this.star= Math.round(user['user_star']);
            //         }

            //         // goPagePrehomeLoad= true;
            //         // console.log(goPagePrehomeLoad);
            //         // if(goPagePrehomeLoad){
            //         //   ---this.goNextPagePrehomeFace(userDBLoad);
            //         // }
            //     }
            //   });
            // });
      } else {
        console.info('find user menu - no');
      }
    });
  }

  loadViewUser(user){
    this.userMenu = { "email":user['user_email'],"name":user['user_name'],"pais":user['user_pais'],"password":user['user_password'],"picture":user['user_picture'],"state":user['user_state'],"tel":user['user_tel'],"username":user['user_username'],"verificacion":user['$key'],"zipcode":user['user_zipcode']};
    this.userName= user['user_username'];
    if(user['user_picture'] && user['user_picture'] != '' && user['user_picture'] != null && user['user_picture'] != undefined){
      this.srcUser= user['user_picture'];
    }
    if(user['user_star'] && user['user_star'] != '' && user['user_star'] != null && user['user_star'] != undefined){
      this.star= Math.round(user['user_star']);
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(this.userMenu && this.userMenu != undefined){
      let Data = {'datos':this.userMenu};
      this.nav.setRoot(page.component,Data);
    }else{
      this.nav.setRoot(page.component);
    }
    
  }

  cerrarSeccion(){
    this.afAuth.auth.signOut().then((value)=>{
      console.log(value);
      this.nav.setRoot(HomePage);
    }).catch((error) => console.info(error));
    // this.statusBar.styleDefault();
    // this.splashScreen.hide();
    //antiguo facebook native
    // this.facebook.getLoginStatus().then( data=>{
    //       alert(JSON.stringify(data.status));
    //       if(data.status === 'connected'){
    //               alert('estoy logeado');
    //               this.facebook.logout().then((response) => {
    //                 console.log('Login out Facebook!', response);
    //                 alert('response:'+JSON.stringify(response));
    //                 alert('estoy des-logeado');
    //                 this.nav.push(HomePage);
    //               })
    //               .catch(e => {
    //                 console.log('Error logging into Facebook', e);
    //                 });
    //           }else{
    //               alert('no estoy logeado');
    //       }
    //   }).catch(e => {
    //     console.log('Error logging into Facebook', e);
    //     alert('error if login');
    //     });
    
  }
  goJobWithUs(){
    this.nav.push(JobWithUsPage);
  }
  goPolicies(){
    this.nav.push(PoliciesPage);
  }

  
  
}
