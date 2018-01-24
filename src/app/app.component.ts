import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
//import { Facebook } from '@ionic-native/facebook';

//--page
import { HomePage } from '../pages/home/home';
import { ShowPage } from '../pages/show/show';
import { JobWithUsPage } from '../pages/job-with-us/job-with-us';
import { PoliciesPage } from '../pages/policies/policies';
import { PreHomePage } from '../pages/pre-home/pre-home';
import { AddPaymentMethodPage } from '../pages/add-payment-method/add-payment-method';
import { EditUserPage } from '../pages/edit-user/edit-user';
import { MyServicesPage } from '../pages/my-services/my-services';
//import { CleaningContractorPage } from '../pages/cleaning-contractor/cleaning-contractor';
//import { CleaningPage } from '../pages/cleaning/cleaning';
//import { PreHomePage } from '../pages/pre-home/pre-home';
//import { CleaningSalePage } from '../pages/cleaning-sale/cleaning-sale';
//import { PaymentMethodsPage } from '../pages/payment-methods/payment-methods';
//import { PaymentsPage } from '../pages/payments/payments';
// import { CleaningSalePage } from '../pages/cleaning-sale/cleaning-sale';

//-service
import { UserService } from '../services/user.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  userName: string = 'hola logeado';
  srcUser: string = 'assets/img/user.png';
  imgApp: string = 'assets/icon.png';
  star: any = '3';
  starUser: any;

  //rootPage: any = PreHomePage;
  // rootPage: any = CleaningSalePage;
  rootPage: any = HomePage;
  // rootPage: any = PaymentMethodsPage;

  userMenu: any;
  pages: Array<{ title: string, component: any }>;
  menu_is_enabled: boolean = true;
  userDataUpdate: any;
  mostrarUsuarioLogeado: boolean = false;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen, private afAuth: AngularFireAuth,
    private userService: UserService,
    private inAppBrowser: InAppBrowser,
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

  usuarioLogeado() {
    //let userDBLoad:any;
    //let goPagePrehomeLoad = false;
    this.afAuth.authState.subscribe(userAuth => {
      //console.log('find user menu');
      console.log(userAuth);
      if (userAuth) {
        // let email=  userAuth.providerData["0"].email;
        if (userAuth.providerData["0"].providerId == 'password') {
          let email = userAuth.providerData["0"].email;
          console.log(email);

          let Userexists = this.userService.getUserEmailPerfil(email).subscribe((User) => {
            console.log('User Logueado');
            console.log(User);
            if (User['0']) {
              if (User['0']['login'] == undefined || User['0']['login'] == false) {
                if (this.afAuth.auth.currentUser.emailVerified != false) {
                  console.info('cambio estado login base de datos');
                  this.mostrarUsuarioLogeado = true;
                  this.loadViewUser(User['0']);
                }
              } else {
                this.loadViewUser(User['0']);
                this.mostrarUsuarioLogeado = true;
              }
              if (Userexists != undefined) {
                Userexists.unsubscribe();
              }
            }
          });
        } else {
          let faceUid = userAuth.uid;
          console.log(faceUid);
          let Userexists = this.userService.getUserUidFace(faceUid).subscribe((User) => {
            console.log('User Logueado');
            console.log(User);
            if (User['0']) {
              this.loadViewUser(User['0']);
              this.mostrarUsuarioLogeado = true;
              if (Userexists != undefined) {
                Userexists.unsubscribe();
              }
            }
          });
        }
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
        this.mostrarUsuarioLogeado = false;
      }
    });
  }

  loadViewUser(user) {
    if (user != undefined) {
      this.userMenu = { "email": user['user_email'], "name": user['user_name'], "pais": user['user_pais'], "password": user['user_password'], "picture": user['user_picture'], "state": user['user_state'], "tel": user['user_tel'], "username": user['user_username'], "verificacion": user['$key'], "zipcode": user['user_zipcode'] };
      this.userName = user['user_username'];
      if (user['user_picture'] && user['user_picture'] != '' && user['user_picture'] != null && user['user_picture'] != undefined) {
        this.srcUser = user['user_picture'];
      }
      if (user['user_star'] && user['user_star'] != '' && user['user_star'] != null && user['user_star'] != undefined) {
        this.star = Math.round(user['user_star']);
        let contenido = '';
        if (Math.round(this.star) == 5) {
          contenido += 'cinco';
        }
        if (Math.round(this.star) == 4) {
          contenido += 'cuatro';
        }
        if (Math.round(this.star) == 3) {
          contenido += 'tres';
        }
        if (Math.round(this.star) == 2) {
          contenido += 'dos';
        }
        if (Math.round(this.star) == 1) {
          contenido += 'one';
        }
        this.starUser = contenido;
      }
    } else {
      this.userName = 'hola logeado';
      this.srcUser = 'assets/img/user.png';
      this.star = '1';
      this.starUser = 'one';
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (this.userMenu && this.userMenu != undefined) {
      let Data = { 'datos': this.userMenu };
      this.nav.setRoot(page.component, Data);
    } else {
      this.nav.setRoot(page.component);
    }

  }

  cerrarSeccion() {
    this.afAuth.auth.signOut().then((value) => {
      console.log(value);
      this.nav.setRoot(HomePage);
    }).catch((error) => console.info(error));
    localStorage.removeItem('verificacion');
    this.loadViewUser(undefined);
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
  goJobWithUs() {
    this.nav.push(JobWithUsPage);
  }
  goPolicies() {
    this.nav.push(PoliciesPage);
  }

  pagina() {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    const browser = this.inAppBrowser.create('http://www.lamaletadefelix.com', '_self', options);
  }



}
