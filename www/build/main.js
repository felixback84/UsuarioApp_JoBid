webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_show_show__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, facebook) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.facebook = facebook;
        this.userName = 'hola logeado';
        this.srcUser = 'assets/img/user.png';
        //rootPage: any = PreHomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.mensage = '';
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_show_show__["a" /* ShowPage */] },
            { title: 'Login out', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.cerrarSeccion = function () {
        var _this = this;
        this.facebook.getLoginStatus().then(function (data) {
            alert(JSON.stringify(data.status));
            if (data.status === 'connected') {
                alert('estoy logeado');
                _this.facebook.logout().then(function (response) {
                    console.log('Login out Facebook!', response);
                    alert('response:' + JSON.stringify(response));
                    alert('estoy des-logeado');
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
                })
                    .catch(function (e) {
                    console.log('Error logging into Facebook', e);
                });
            }
            else {
                alert('no estoy logeado');
            }
        }).catch(function (e) {
            console.log('Error logging into Facebook', e);
            alert('error if login');
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <div class="center">\n        <img src="{{srcUser}}" alt="userLogo">\n      </div>\n      <p class="center">{{userName}}</p>\n    </ion-list>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button ion-item (click)="cerrarSeccion()">\n        Login out\n      </button> \n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]) === "function" && _e || Object])
], MyApp);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pre_home_pre_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__singup_singup__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ShowPage } from '../show/show';



var HomePage = (function () {
    function HomePage(navCtrl, facebook) {
        this.navCtrl = navCtrl;
        this.facebook = facebook;
        this.userData = null;
        this.mensage = '';
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad homePage');
        this.facebook.getLoginStatus().then(function (data) {
            //alert(JSON.stringify(data.status));
            if (data.status === 'connected') {
                //alert('estoy logeado');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pre_home_pre_home__["a" /* PreHomePage */]);
            }
            else {
                //alert('no estoy logeado');
            }
        }).catch(function (e) {
            //console.log('Error logging into Facebook', e);
            //alert('error if login');
        });
    };
    HomePage.prototype.googleir = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pre_home_pre_home__["a" /* PreHomePage */]);
        //this.navCtrl.pop();
        //this.navCtrl.push(PreHomePage); 
    };
    HomePage.prototype.facebookir = function () {
        // this.facebook.getLoginStatus().then(
        var _this = this;
        // )
        this.facebook.login(['email', 'public_profile'])
            .then(function (response) {
            _this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                _this.userData = { email: profile['email'], name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
                // ej datos == userData = {"username":"","password":"","email":"","name":"","city":"","state":"","picture":""};
                console.log('Logged into Facebook!', response);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pre_home_pre_home__["a" /* PreHomePage */]);
            });
            // this.facebook.getAccessToken(function(token) {
            //       console.log("Token: " + token);
            // 		});
        }).catch(function (e) { return console.log('Error logging into Facebook', e); });
        //this.navCtrl.setRoot(PreHomePage);
        //this.navCtrl.push(PreHomePage);
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.singup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__singup_singup__["a" /* SingupPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/home/home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n <!--  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n  <button ion-button secondary menuToggle>Toggle Menu</button> -->\n \n  <ion-card *ngIf="userData" >\n    <ion-card-header> {{userData.username}} </ion-card-header>\n    <img [src]= "userData.picture">\n    <ion-card-content>\n      <p>Email: {{ userData.email}}</p>\n      <p>Name: {{ userData.name}}</p>\n    </ion-card-content>\n  </ion-card>\n  <img src="assets/img/LogoJoBid.png" >\n    <h5 id="home-heading1" style="">Sing up or Log in</h5>\n    <div padding>\n      <button ion-button block color="danger" (click)="googleir()">Log in with Google</button>\n      <button ion-button block (click)="facebookir()">Log in with Faceook</button>\n    </div>\n\n    <ion-grid class="tabMenu">\n     <ion-row>\n      <ion-col>\n        <button ion-button block color="light" (click)="singup()">\n          <ion-grid>\n            <ion-row>\n              <ion-icon name="contact"></ion-icon>\n            </ion-row>  \n            <ion-row> \n             <p>sing up</p>\n            </ion-row>\n          </ion-grid> \n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block color="light"(click)="login()">\n        <ion-grid>\n            <ion-row>\n              <ion-icon name="lock"></ion-icon>\n            </ion-row>  \n            <ion-row> \n             <p>login</p>\n            </ion-row>\n          </ion-grid> \n        </button>\n      </ion-col>\n     </ion-row>\n    </ion-grid>  \n      \n\n      \n</ion-content>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__["a" /* Facebook */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cities__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_states_utils__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_states_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_states_utils__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { PreHomePage } from '../pre-home/pre-home';
/**
 * Generated class for the NewAddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NewAddressPage = (function () {
    function NewAddressPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.estados = [];
        this.ciudades = [];
        var stateName = __WEBPACK_IMPORTED_MODULE_3_states_utils___default.a.getStates();
        var stateNameShort = __WEBPACK_IMPORTED_MODULE_3_states_utils___default.a.getUSPSCodes();
        for (var i = 0; stateName.length > i; i++) {
            this.estados.push({ 'name': stateName[i], 'nameShort': stateNameShort[i] });
        }
    }
    NewAddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewAddressPage');
    };
    NewAddressPage.prototype.goPreHome = function () {
        var direccion = this.DirecA + ' ' + this.DirecB + ',' + this.DirecC + ',' + this.DirecD;
        console.log(direccion);
        this.navCtrl.pop();
    };
    NewAddressPage.prototype.setCity = function () {
        this.zipcode = undefined;
        var someArray = undefined;
        this.ciudades = [];
        someArray = __WEBPACK_IMPORTED_MODULE_2_cities___default.a.findByState(this.state);
        for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
            var entry = someArray_1[_i];
            //var city= entry['city'];
            if (typeof entry['city'] !== 'undefined' && entry['city'] !== null && entry['city'] !== '') {
                //console.log(entry['city']); // 1, "string", false
                this.ciudades.push({ 'name': entry['city'], 'zipcode': entry['zipcode'] });
            }
        }
    };
    NewAddressPage.prototype.setZipCode = function () {
        this.DirecD = this.state + ' ' + this.zipcode;
    };
    return NewAddressPage;
}());
NewAddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-address',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/new-address/new-address.html"*/'<!--\n  Generated template for the NewAddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>joBit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<img src="assets/img/LogoJoBid.png">\n<h3 class="tittle">New Address</h3>\n<form id="signup-form3" class="list" padding>\n<ion-item>\n <ion-icon name="flag" item-start></ion-icon>\n  <ion-select class="mitad" [(ngModel)]="state" name="state" (ngModelChange)="setCity()"> \n    <ion-option selected>State</ion-option>\n    <ion-option *ngFor="let states of estados" value="{{states.nameShort}}">{{states.name}}</ion-option>\n  </ion-select>\n  <ion-select  class="mitad" [(ngModel)]="zipcode" name="zipcode" (ngModelChange)="setZipCode()"> <!--[(ngModel)]="gaming"-->\n    <ion-option selected>....</ion-option>\n    <ion-option *ngFor="let city of ciudades" value="{{city.zipcode}}">{{city.name}} - {{city.zipcode}}</ion-option>\n  </ion-select>\n</ion-item>\n<ion-item>\n  <ion-icon name="home" item-start></ion-icon>\n  <ion-input type="number" placeholder="1234" class="mitad" [(ngModel)]="DirecA" name="DirecA"></ion-input>\n  <ion-input type="text" placeholder="avenue" value="" class="mitad" [(ngModel)]="DirecB" name="DirecB"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-input type="text" placeholder="City" class="mitad spaceIcons" [(ngModel)]="DirecC" name="DirecC" ></ion-input>\n  <ion-input type="text" placeholder="NJ 0000" value="{{DirecD}}" class="mitad" [(ngModel)]="DirecD" name="DirecD"></ion-input>\n</ion-item>\n	<div class="btnBottom">\n	   <button  ion-button block color="danger" (click)="goPreHome()" >Enter<ion-icon name="arrow-dropright"></ion-icon></button> \n    </div>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/new-address/new-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], NewAddressPage);

//# sourceMappingURL=new-address.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pre_home_pre_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController, NavParams } from 'ionic-angular';

//import { ShowPage } from '../show/show';
//import { HomePage } from '../home/home';


//import { ListPage } from '../list/list';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authServiceProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.alertCtrl = alertCtrl;
        this.userData = { "username": "", "password": "" };
        this.userDataUpdate = [];
        this.userAndEmail = '';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        //console.log(this.userData);
        this.authServiceProvider.postData(this.userData, 'login').then(function (result) {
            if (!result['error']) {
                //console.log(cont);
                console.log(result);
                console.log(result['userData']);
                _this.userDataUpdate = { "username": result['userData']['user_username'], "email": result['userData']['user_email'], "name": result['userData']['user_name'], "zipcode": result['userData']['user_zipcode'], "state": result['userData']['user_state'], "picture": result['userData']['user_picture'], "verificacion": result['userData']['user_id'], "pais": result['userData']['user_pais'], "tel": result['userData']['user_tel'] };
                console.log(_this.userDataUpdate);
                var Data = { 'datos': _this.userDataUpdate };
                //localStorage.setItem('userData', JSON.stringify(result));
                //console.log('userData'+JSON.stringify(result));
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pre_home_pre_home__["a" /* PreHomePage */], Data);
            }
            else {
                //this.navCtrl.push(HomePage);
                _this.showAlert();
            }
        }, function (err) {
            // Error log
            console.log('error login' + err);
        });
    };
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'login failed',
            subTitle: 'Bad request wrong username or email and password',
            buttons: ['OK']
        });
        alert.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <img src="assets/img/LogoJoBid.png">\n    <h5 id="login-heading1">Log in</h5>\n    <ion-list padding>\n	  <ion-item>\n      <ion-icon name="person" item-start></ion-icon>\n      <ion-input type="text" placeholder="User / Email" [(ngModel)]="userData.username" name="username" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="home" item-start></ion-icon>\n      <ion-input type="password" placeholder="Password" [(ngModel)]="userData.password" name="password"></ion-input>\n	  </ion-item>\n    <div class="btnBottom">\n	   <button  ion-button block color="danger" (click)="login()" >Enter<ion-icon name="arrow-dropright"></ion-icon></button> \n    </div>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
], LoginPage);

var _a, _b, _c, _d;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cities__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_states_utils__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_states_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_states_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verify_your_phone_verify_your_phone__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController, NavParams } from 'ionic-angular';

//import { Http , Response, Headers, RequestOptions} from '@angular/http';
//import UsaStates from 'usa-states';




/**
 * Generated class for the SingupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// Import RxJs required methods
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
var SingupPage = (function () {
    function SingupPage(navCtrl, navParams, authServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.codeAreaEstadoSelect = [];
        this.userData = { "username": "", "password": "", "email": "", "name": "", "zipcode": "", "state": "", "picture": "", "verificacion": "", "pais": "", "direccion": "", "tel": "" };
        this.ciudades = [];
        this.ciudad = undefined;
        this.stateZipcode = undefined;
        this.estados = [];
        // }
        //constructor(public navCtrl: NavController, public navParams: NavParams) {
        var stateName = __WEBPACK_IMPORTED_MODULE_3_states_utils___default.a.getStates();
        var stateNameShort = __WEBPACK_IMPORTED_MODULE_3_states_utils___default.a.getUSPSCodes();
        this.pagesUrl = '../assets/lib/codeAreaUsa.json';
        for (var i = 0; stateName.length > i; i++) {
            this.estados.push({ 'name': stateName[i], 'nameShort': stateNameShort[i] });
        }
        //console.log(this.estados);
        //var ciudad :{ name = string; zipcode = number;} =  [];
        // var usStates = new UsaStates();
        // console.log(usStates.states);
        //var UsaStates = require('usa-states').UsaStates;
        //alert(cities.findByState('NJ'));
        this.codeAreaDefi();
    }
    SingupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SingupPage');
        //console.dir(lodash);
        //console.dir(lodash.capitalize('myStringToCapitalize'));
        // var usStates = new UsaStates();
        // console.log(usStates.states);
        //console.log(this.ciudad);
        //console.log(STATE_UTILS.getStates());
    };
    SingupPage.prototype.goPhoneV = function () {
        var _this = this;
        this.userData.direccion = this.DirecA + ' ' + this.DirecB + ',' + this.DirecC + ',' + this.DirecD;
        this.userData.tel = '(' + this.telA + ')' + this.telB;
        console.log(JSON.stringify(this.userData));
        this.authServiceProvider.postData(this.userData, 'user').then(function (resultUser) {
            //this.responseDataUser = resultUser;
            console.log(resultUser['ok']);
            if (resultUser['ok']) {
                console.log('el usuario esta disponible');
                _this.userData.verificacion = '' + Math.floor((Math.random() * 99999) + 11111);
                //alert('code:'+this.userData.verificacion);
                _this.authServiceProvider.postData(_this.userData, 'code').then(function (result) {
                    //this.responseData = result;
                    //console.log(result);
                    //alert('userData'+ JSON.stringify(this.responseData));
                    //localStorage.setItem('userData', JSON.stringify(this.responseData));
                    var Data = { 'datos': _this.userData };
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__verify_your_phone_verify_your_phone__["a" /* VerifyYourPhonePage */], Data);
                    //this.navCtrl.push(VerifyYourPhonePage);
                }, function (err) {
                    //   // Error log
                    //console.log('error '.err);
                    //   alert('error correo');
                });
            }
            else {
                console.log('el usuario registado');
            }
            //this.navCtrl.push(VerifyYourPhonePage);
        }, function (err) {
            //Error log
            //console.log('error '.err);
            alert('error verificacion usuario existente');
        });
    };
    //this.navCtrl.push(VerifyYourPhonePage, Data);
    SingupPage.prototype.setCity = function () {
        //console.log(this.userData.state);
        this.userData.zipcode = undefined;
        var someArray = undefined;
        this.ciudades = [];
        someArray = __WEBPACK_IMPORTED_MODULE_2_cities___default.a.findByState(this.userData.state);
        for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
            var entry = someArray_1[_i];
            //var city= entry['city'];
            if (typeof entry['city'] !== 'undefined' && entry['city'] !== null && entry['city'] !== '') {
                //console.log(entry['city']); // 1, "string", false
                this.ciudades.push({ 'name': entry['city'], 'zipcode': entry['zipcode'] });
            }
        }
        this.findCodeEstado(__WEBPACK_IMPORTED_MODULE_3_states_utils___default.a.getStateName(this.userData.state));
    };
    SingupPage.prototype.setZipCode = function () {
        //alert('select other item');
        //console.log (this.userData.city);
        //var numero = this.ciudades.indexOf(this.userData.city);
        //console.log(numero);
        //var  num = 07946;
        //console.log(cities.zip_lookup('07946'));
        //let data = cities.zip_lookup(this.userData.city);
        //console.log(data);
        //this.ciudad = data['city'];
        //this.ciudad = cities.zip_lookup(this.userData.zipcode);
        this.DirecD = this.userData.state + ' ' + this.userData.zipcode;
    };
    SingupPage.prototype.findCodeEstado = function (estado) {
        //console.log(this.callCodeArea());
        //console.log(this.codeAreaList);
        var codeAreaList = this.codeAreaList;
        //console.log(this.codeAreaList.find(this.findEstado));
        for (var _i = 0, codeAreaList_1 = codeAreaList; _i < codeAreaList_1.length; _i++) {
            var entry = codeAreaList_1[_i];
            //var city= entry['city'];
            if (entry['estado'] == estado) {
                //console.log(entry['estado']); // 1, "string", false
                this.codeAreaEstadoSelect.push({ 'code': entry['code'] });
            }
        }
        // for (var j = 0; codeAreaList.length > j; j++) {
        //   //console.log(this.codeAreaList[j]['estado']);
        //   if(this.codeAreaList[j]['estado'] == 'Texas'){
        //     console.log(codeAreaList[j]['estado']);
        //     this.codeAreaEstadoSelect.push({'code':codeAreaList[j]['code'],'estado':codeAreaList[j]['estado']});
        //     }
        // }
        //console.log(this.codeAreaEstadoSelect);
    };
    SingupPage.prototype.codeAreaDefi = function () {
        this.codeAreaList = [
            { code: "201", estado: "New Jersey" },
            { code: "202", estado: "District of Columbia" },
            { code: "203", estado: "Connecticut" },
            { code: "204", estado: "Manitoba" },
            { code: "205", estado: "Alabama" },
            { code: "206", estado: "Washington" },
            { code: "207", estado: "Maine" },
            { code: "208", estado: "Idaho" },
            { code: "209", estado: "California" },
            { code: "210", estado: "Texas" },
            { code: "212", estado: "New York" },
            { code: "213", estado: "California" },
            { code: "214", estado: "Texas" },
            { code: "215", estado: "Pennsylvania" },
            { code: "216", estado: "Ohio" },
            { code: "217", estado: "Illinois" },
            { code: "218", estado: "Minnesota" },
            { code: "219", estado: "Indiana" },
            { code: "224", estado: "Illinois" },
            { code: "225", estado: "Louisiana" },
            { code: "228", estado: "Mississippi" },
            { code: "229", estado: "Georgia" },
            { code: "231", estado: "Michigan" },
            { code: "234", estado: "Ohio" },
            { code: "239", estado: "Florida" },
            { code: "240", estado: "Maryland" },
            { code: "242", estado: "Bahamas" },
            { code: "246", estado: "Barbados" },
            { code: "248", estado: "Michigan" },
            { code: "250", estado: "British Columbia" },
            { code: "251", estado: "Alabama" },
            { code: "252", estado: "North Carolina" },
            { code: "253", estado: "Washington" },
            { code: "254", estado: "Texas" },
            { code: "256", estado: "Alabama" },
            { code: "260", estado: "Indiana" },
            { code: "262", estado: "Wisconsin" },
            { code: "264", estado: "Anguilla" },
            { code: "267", estado: "Pennsylvania" },
            { code: "268", estado: "Antigua/Barbuda" },
            { code: "269", estado: "Michigan" },
            { code: "270", estado: "Kentucky" },
            { code: "276", estado: "Virginia" },
            { code: "281", estado: "Texas" },
            { code: "284", estado: "British Virgin Islands" },
            { code: "289", estado: "Ontario" },
            { code: "301", estado: "Maryland" },
            { code: "302", estado: "Delaware" },
            { code: "303", estado: "Colorado" },
            { code: "304", estado: "West Virginia" },
            { code: "305", estado: "Florida" },
            { code: "306", estado: "Saskatchewan" },
            { code: "307", estado: "Wyoming" },
            { code: "308", estado: "Nebraska" },
            { code: "309", estado: "Illinois" },
            { code: "310", estado: "California" },
            { code: "312", estado: "Illinois" },
            { code: "313", estado: "Michigan" },
            { code: "314", estado: "Missouri" },
            { code: "315", estado: "New York" },
            { code: "316", estado: "Kansas" },
            { code: "317", estado: "Indiana" },
            { code: "318", estado: "Louisiana" },
            { code: "319", estado: "Iowa" },
            { code: "320", estado: "Minnesota" },
            { code: "321", estado: "Florida" },
            { code: "323", estado: "California" },
            { code: "325", estado: "Texas" },
            { code: "330", estado: "Ohio" },
            { code: "334", estado: "Alabama" },
            { code: "336", estado: "North Carolina" },
            { code: "337", estado: "Louisiana" },
            { code: "339", estado: "Massachusetts" },
            { code: "340", estado: "US Virgin Islands" },
            { code: "345", estado: "Cayman Islands" },
            { code: "347", estado: "New York" },
            { code: "351", estado: "Massachusetts" },
            { code: "352", estado: "Florida" },
            { code: "360", estado: "Washington" },
            { code: "361", estado: "Texas" },
            { code: "386", estado: "Florida" },
            { code: "401", estado: "Rhode Island" },
            { code: "402", estado: "Nebraska" },
            { code: "403", estado: "Alberta" },
            { code: "404", estado: "Georgia" },
            { code: "405", estado: "Oklahoma" },
            { code: "406", estado: "Montana" },
            { code: "407", estado: "Florida" },
            { code: "408", estado: "California" },
            { code: "409", estado: "Texas" },
            { code: "410", estado: "Maryland" },
            { code: "412", estado: "Pennsylvania" },
            { code: "413", estado: "Massachusetts" },
            { code: "414", estado: "Wisconsin" },
            { code: "415", estado: "California" },
            { code: "416", estado: "Ontario" },
            { code: "417", estado: "Missouri" },
            { code: "418", estado: "Quebec" },
            { code: "419", estado: "Ohio" },
            { code: "423", estado: "Tennessee" },
            { code: "425", estado: "Washington" },
            { code: "430", estado: "Texas" },
            { code: "432", estado: "Texas" },
            { code: "434", estado: "Virginia" },
            { code: "435", estado: "Utah" },
            { code: "440", estado: "Ohio" },
            { code: "441", estado: "Bermuda" },
            { code: "443", estado: "Maryland" },
            { code: "450", estado: "Quebec" },
            { code: "456", estado: "NANP area" },
            { code: "469", estado: "Texas" },
            { code: "473", estado: "Grenada" },
            { code: "478", estado: "Georgia" },
            { code: "479", estado: "Arkansas" },
            { code: "480", estado: "Arizona" },
            { code: "484", estado: "Pennsylvania" },
            { code: "501", estado: "Arkansas" },
            { code: "502", estado: "Kentucky" },
            { code: "503", estado: "Oregon" },
            { code: "504", estado: "Louisiana" },
            { code: "505", estado: "New Mexico" },
            { code: "506", estado: "New Brunswick" },
            { code: "507", estado: "Minnesota" },
            { code: "508", estado: "Massachusetts" },
            { code: "509", estado: "Washington" },
            { code: "510", estado: "California" },
            { code: "512", estado: "Texas" },
            { code: "513", estado: "Ohio" },
            { code: "514", estado: "Quebec" },
            { code: "515", estado: "Iowa" },
            { code: "516", estado: "New York" },
            { code: "517", estado: "Michigan" },
            { code: "518", estado: "New York" },
            { code: "519", estado: "Ontario" },
            { code: "520", estado: "Arizona" },
            { code: "530", estado: "California" },
            { code: "540", estado: "Virginia" },
            { code: "541", estado: "Oregon" },
            { code: "551", estado: "New Jersey" },
            { code: "559", estado: "California" },
            { code: "561", estado: "Florida" },
            { code: "562", estado: "California" },
            { code: "563", estado: "Iowa" },
            { code: "567", estado: "Ohio" },
            { code: "570", estado: "Pennsylvania" },
            { code: "571", estado: "Virginia" },
            { code: "573", estado: "Missouri" },
            { code: "574", estado: "Indiana" },
            { code: "580", estado: "Oklahoma" },
            { code: "585", estado: "New York" },
            { code: "586", estado: "Michigan" },
            { code: "601", estado: "Mississippi" },
            { code: "602", estado: "Arizona" },
            { code: "603", estado: "New Hampshire" },
            { code: "604", estado: "British Columbia" },
            { code: "605", estado: "South Dakota" },
            { code: "606", estado: "Kentucky" },
            { code: "607", estado: "New York" },
            { code: "608", estado: "Wisconsin" },
            { code: "609", estado: "New Jersey" },
            { code: "610", estado: "Pennsylvania" },
            { code: "612", estado: "Minnesota" },
            { code: "613", estado: "Ontario" },
            { code: "614", estado: "Ohio" },
            { code: "615", estado: "Tennessee" },
            { code: "616", estado: "Michigan" },
            { code: "617", estado: "Massachusetts" },
            { code: "618", estado: "Illinois" },
            { code: "619", estado: "California" },
            { code: "620", estado: "Kansas" },
            { code: "623", estado: "Arizona" },
            { code: "626", estado: "California" },
            { code: "630", estado: "Illinois" },
            { code: "631", estado: "New York" },
            { code: "636", estado: "Missouri" },
            { code: "641", estado: "Iowa" },
            { code: "646", estado: "New York" },
            { code: "647", estado: "Ontario" },
            { code: "649", estado: "Turks & Caicos Islands" },
            { code: "650", estado: "California" },
            { code: "651", estado: "Minnesota" },
            { code: "660", estado: "Missouri" },
            { code: "661", estado: "California" },
            { code: "662", estado: "Mississippi" },
            { code: "664", estado: "Montserrat" },
            { code: "670", estado: "CNMI" },
            { code: "671", estado: "Guam" },
            { code: "678", estado: "Georgia" },
            { code: "682", estado: "Texas" },
            { code: "701", estado: "North Dakota" },
            { code: "702", estado: "Nevada" },
            { code: "703", estado: "Virginia" },
            { code: "704", estado: "North Carolina" },
            { code: "705", estado: "Ontario" },
            { code: "706", estado: "Georgia" },
            { code: "707", estado: "California" },
            { code: "708", estado: "Illinois" },
            { code: "709", estado: "Newfoundland" },
            { code: "710", estado: "US" },
            { code: "712", estado: "Iowa" },
            { code: "713", estado: "Texas" },
            { code: "714", estado: "California" },
            { code: "715", estado: "Wisconsin" },
            { code: "716", estado: "New York" },
            { code: "717", estado: "Pennsylvania" },
            { code: "718", estado: "New York" },
            { code: "719", estado: "Colorado" },
            { code: "720", estado: "Colorado" },
            { code: "724", estado: "Pennsylvania" },
            { code: "727", estado: "Florida" },
            { code: "731", estado: "Tennessee" },
            { code: "732", estado: "New Jersey" },
            { code: "734", estado: "Michigan" },
            { code: "740", estado: "Ohio" },
            { code: "754", estado: "Florida" },
            { code: "757", estado: "Virginia" },
            { code: "758", estado: "St. Lucia" },
            { code: "760", estado: "California" },
            { code: "763", estado: "Minnesota" },
            { code: "765", estado: "Indiana" },
            { code: "767", estado: "Dominica" },
            { code: "770", estado: "Georgia" },
            { code: "772", estado: "Florida" },
            { code: "773", estado: "Illinois" },
            { code: "774", estado: "Massachusetts" },
            { code: "775", estado: "Nevada" },
            { code: "778", estado: "British Columbia" },
            { code: "780", estado: "Alberta" },
            { code: "781", estado: "Massachusetts" },
            { code: "784", estado: "St. Vincent & Grenadines" },
            { code: "785", estado: "Kansas" },
            { code: "786", estado: "Florida" },
            { code: "787", estado: "Puerto Rico" },
            { code: "801", estado: "Utah" },
            { code: "802", estado: "Vermont" },
            { code: "803", estado: "South Carolina" },
            { code: "804", estado: "Virginia" },
            { code: "805", estado: "California" },
            { code: "806", estado: "Texas" },
            { code: "807", estado: "Ontario" },
            { code: "808", estado: "Hawaii" },
            { code: "809", estado: "Dominican Republic" },
            { code: "810", estado: "Michigan" },
            { code: "812", estado: "Indiana" },
            { code: "813", estado: "Florida" },
            { code: "814", estado: "Pennsylvania" },
            { code: "815", estado: "Illinois" },
            { code: "816", estado: "Missouri" },
            { code: "817", estado: "Texas" },
            { code: "818", estado: "California" },
            { code: "819", estado: "Quebec" },
            { code: "828", estado: "North Carolina" },
            { code: "830", estado: "Texas" },
            { code: "831", estado: "California" },
            { code: "832", estado: "Texas" },
            { code: "843", estado: "South Carolina" },
            { code: "845", estado: "New York" },
            { code: "847", estado: "Illinois" },
            { code: "848", estado: "New Jersey" },
            { code: "850", estado: "Florida" },
            { code: "856", estado: "New Jersey" },
            { code: "857", estado: "Massachusetts" },
            { code: "858", estado: "California" },
            { code: "859", estado: "Kentucky" },
            { code: "860", estado: "Connecticut" },
            { code: "862", estado: "New Jersey" },
            { code: "863", estado: "Florida" },
            { code: "864", estado: "South Carolina" },
            { code: "865", estado: "Tennessee" },
            { code: "867", estado: "Yukon, NW Terr., Nunavut" },
            { code: "868", estado: "Trinidad & Tobago" },
            { code: "869", estado: "St. Kitts & Nevis" },
            { code: "870", estado: "Arkansas" },
            { code: "876", estado: "Jamaica" },
            { code: "878", estado: "Pennsylvania" },
            { code: "880", estado: "NANP area" },
            { code: "881", estado: "NANP area" },
            { code: "882", estado: "NANP area" },
            { code: "901", estado: "Tennessee" },
            { code: "902", estado: "Nova Scotia" },
            { code: "903", estado: "Texas" },
            { code: "904", estado: "Florida" },
            { code: "905", estado: "Ontario" },
            { code: "906", estado: "Michigan" },
            { code: "907", estado: "Alaska" },
            { code: "908", estado: "New Jersey" },
            { code: "909", estado: "California" },
            { code: "910", estado: "North Carolina" },
            { code: "912", estado: "Georgia" },
            { code: "913", estado: "Kansas" },
            { code: "914", estado: "New York" },
            { code: "915", estado: "Texas" },
            { code: "916", estado: "California" },
            { code: "917", estado: "New York" },
            { code: "918", estado: "Oklahoma" },
            { code: "919", estado: "North Carolina" },
            { code: "920", estado: "Wisconsin" },
            { code: "925", estado: "California" },
            { code: "928", estado: "Arizona" },
            { code: "931", estado: "Tennessee" },
            { code: "936", estado: "Texas" },
            { code: "937", estado: "Ohio" },
            { code: "939", estado: "Puerto Rico" },
            { code: "940", estado: "Texas" },
            { code: "941", estado: "Florida" },
            { code: "947", estado: "Michigan" },
            { code: "949", estado: "California" },
            { code: "952", estado: "Minnesota" },
            { code: "954", estado: "Florida" },
            { code: "956", estado: "Texas" },
            { code: "970", estado: "Colorado" },
            { code: "971", estado: "Oregon" },
            { code: "972", estado: "Texas" },
            { code: "973", estado: "New Jersey" },
            { code: "978", estado: "Massachusetts" },
            { code: "979", estado: "Texas" },
            { code: "980", estado: "North Carolina" },
            { code: "985", estado: "Louisiana" },
            { code: "989", estado: "Michigan" },
        ];
    };
    return SingupPage;
}());
SingupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-singup',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/singup/singup.html"*/'<!--\n  Generated template for the SingupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar  class="force-back-button">\n    <ion-title>singup</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n    <img src="assets/img/LogoJoBid.png">\n    <h5 id="signup-heading2" style="">Fill out the form </h5>\n    <form id="signup-form3" class="list" padding>\n      <ion-list id="signup-list3">\n        <ion-item>\n          <ion-icon name="person" item-start></ion-icon>\n          <ion-input type="text" placeholder="Name" [(ngModel)]="userData.name"  name="name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="pin" item-start></ion-icon>\n          <ion-select [(ngModel)]="userData.pais" name="pais">\n            <ion-option value="USA" selected>U.S.A</ion-option>\n          </ion-select>\n         </ion-item>\n        <ion-item>\n            <ion-icon name="flag" item-start></ion-icon>\n          <ion-select class="mitad" [(ngModel)]="userData.state" name="state" (ngModelChange)="setCity()"> \n            <ion-option selected>State</ion-option>\n            <ion-option *ngFor="let state of estados" value="{{state.nameShort}}">{{state.name}}</ion-option>\n          </ion-select>\n          <ion-select  class="mitad" [(ngModel)]="userData.zipcode" name="zipcode" (ngModelChange)="setZipCode()"> <!--[(ngModel)]="gaming"-->\n            <ion-option selected>....</ion-option>\n            <ion-option *ngFor="let city of ciudades" value="{{city.zipcode}}">{{city.name}} - {{city.zipcode}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="home" item-start></ion-icon>\n          <ion-input type="number" placeholder="1234" class="mitad" [(ngModel)]="DirecA" name="DirecA"></ion-input>\n          <ion-input type="text" placeholder="avenue" value="" class="mitad" [(ngModel)]="DirecB" name="DirecB"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="City" class="mitad spaceIcons" [(ngModel)]="DirecC" name="DirecC" ></ion-input>\n          <ion-input type="text" placeholder="NJ 0000" value="{{DirecD}}" class="mitad" [(ngModel)]="DirecD" name="DirecD"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="mail" item-start></ion-icon>\n          <ion-input type="email" placeholder="Mail" [(ngModel)]="userData.email" name="email" ></ion-input>\n         </ion-item>\n        <ion-item>\n          <ion-icon name="contact" item-start></ion-icon>\n          <ion-input type="text" placeholder="User" [(ngModel)]="userData.username"  name="username"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="lock" item-start></ion-icon>\n          <ion-input type="password" placeholder="Password" [(ngModel)]="userData.password" name="password"></ion-input>\n        </ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-4>\n              <ion-item>\n                <ion-icon name="call" item-start></ion-icon>this.codeAreaEstadoSelect\n                 <ion-select [(ngModel)]="telA" name="telA">\n                  <ion-option *ngFor="let stateCod of codeAreaEstadoSelect" value="{{stateCod.code}}">{{stateCod.code}}</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n            <ion-col col-8>\n              <ion-item>\n                <ion-input type="tel" placeholder="Phone #" [(ngModel)]="telB" name="telB"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <div class="btnBottom">\n          <button ion-button color="danger" block (click)="goPhoneV()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n        </div>\n      </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/singup/singup.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _c || Object])
], SingupPage);

var _a, _b, _c;
//# sourceMappingURL=singup.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyYourPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_methods_payment_methods__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the VerifyYourPhonePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VerifyYourPhonePage = (function () {
    //constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
    function VerifyYourPhonePage(navCtrl, navParams, authServiceProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.alertCtrl = alertCtrl;
        this.userData = [];
    }
    VerifyYourPhonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifyYourPhonePage');
        //this.CorreoVerificacion();
        //alert(this.navParams.get('username'));
        this.userData = this.navParams.get('datos');
        console.log(this.userData);
        //alert(JSON.stringify(this.navParams.get('datos')));
        console.log(this.navParams.get('datos'));
        this.verificacion = this.userData['verificacion'];
        console.log(this.verificacion);
        this.showAlert();
    };
    VerifyYourPhonePage.prototype.goPayMethod = function () {
        var _this = this;
        if (this.verificacion == this.codVerificacion) {
            console.log(this.userData);
            this.authServiceProvider.postData(this.userData, 'signup').then(function (result) {
                _this.responseData = result;
                console.log(_this.responseData['userData']['user_id']);
                //alert('userData'+ JSON.stringify(this.responseData));
                console.log('code:' + _this.userData);
                console.log(_this.userData);
                console.log('se registro');
                //alert('code:'+JSON.stringify(this.userData));
                //alert('se registro');
                _this.userData['verificacion'] = _this.responseData['userData']['user_id'];
                //localStorage.setItem('userData', JSON.stringify(this.userData));
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_methods_payment_methods__["a" /* PaymentMethodsPage */]);
            }, function (err) {
                // Error log
                //console.log('error '.err);
                alert('error registro');
            });
        }
        else {
            alert('codigo no es el mismo');
        }
        //this.navCtrl.push(PaymentMethodsPage);
    };
    VerifyYourPhonePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Información',
            subTitle: 'Se a enviado un correo con un codigo de verificacion',
            buttons: ['OK']
        });
        alert.present();
    };
    VerifyYourPhonePage.prototype.CorreoVerificacion = function () {
        // this.emailComposer.isAvailable().then((available: boolean) =>{
        //  if(available) {
        //   alert('correo enviado');
        //   let email = {
        //   to: 'angellg1990@gmail.com',
        //   subject: 'Correo de verificacion',
        //   body: 'How are you? Nice greetings from Leipzig',
        //   isHtml: true
        // };
        // this.emailComposer.open(email);
        // }else{
        //  alert('correo no enviado');
        // }
        // });
    };
    return VerifyYourPhonePage;
}());
VerifyYourPhonePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-verify-your-phone',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/verify-your-phone/verify-your-phone.html"*/'<!--\n  Generated template for the VerifyYourPhonePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>verifyYourPhone</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <img src="assets/img/LogoJoBid.png">\n    <h5 id="verifyYourPhone-heading3">Verify your phone </h5>\n    <div id="verifyYourPhone-markdown3" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">Enter the confirmation number </p>\n    </div>\n    <form id="verifyYourPhone-form4" class="list" padding>\n     <ion-list>\n        <ion-item class="iconJunto">\n          <ion-icon name="lock" item-start></ion-icon>\n          <ion-input type="text" placeholder="Confirmation number" [(ngModel)]="codVerificacion" name="codVerificacion"></ion-input>\n        </ion-item>\n     </ion-list>\n    </form>\n    <div class="spacer"></div>\n    <div class="btnBottom" padding>\n      <button id="verifyYourPhone-button6" ion-button block color="danger" (click)="goPayMethod()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/verify-your-phone/verify-your-phone.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
], VerifyYourPhonePage);

var _a, _b, _c, _d;
//# sourceMappingURL=verify-your-phone.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentMethodsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payinfo_payinfo__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PaymentMethodsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PaymentMethodsPage = (function () {
    function PaymentMethodsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentMethodsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentMethodsPage');
    };
    PaymentMethodsPage.prototype.goPayInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payinfo_payinfo__["a" /* PayinfoPage */]);
    };
    return PaymentMethodsPage;
}());
PaymentMethodsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment-methods',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/payment-methods/payment-methods.html"*/'<!--\n  Generated template for the PaymentMethodsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>paymentMethods</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<img src="assets/img/LogoJoBid.png">\n    <h5 id="paymentMethods-heading4">Welcome </h5>\n    <h5 id="paymentMethods-heading5">User </h5>\n    <div class="spacer"></div>\n    <h4 id="paymentMethods-heading6">Payment Method</h4>\n    <h5 id="paymentMethods-heading7">Select your paymenth method </h5>\n    <form id="paymentMethods-form5" class="list" padding>\n    <ion-list>\n        <ion-item>\n          <ion-checkbox id="paymentMethods-checkbox2">Credit Card</ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <ion-checkbox id="paymentMethods-checkbox3">Pay</ion-checkbox>\n        </ion-item>\n        <div class="btnBottom">\n          <button ion-button color="danger" block (click)="goPayInfo()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n        </div>\n    </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/payment-methods/payment-methods.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PaymentMethodsPage);

//# sourceMappingURL=payment-methods.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_show__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PayinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PayinfoPage = (function () {
    function PayinfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PayinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayinfoPage');
    };
    PayinfoPage.prototype.goIndex = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__show_show__["a" /* ShowPage */]);
    };
    return PayinfoPage;
}());
PayinfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payinfo',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/payinfo/payinfo.html"*/'<!--\n  Generated template for the PayinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>payinfo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n	<img src="assets/img/LogoJoBid.png">\n    <h5 id="payinfo1">Payment information </h5>\n    <h6 id="payinfo2">Complete the next form with all data requeried</h6>\n    <div class="spacer"></div>\n    <form id="formPayinfo" class="list" padding>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-10>\n            <ion-list>\n              <ion-item>\n                <ion-icon name="card" item-start></ion-icon>\n                <ion-input type="text" placeholder="Card number"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n          <ion-col col-2 id="btn-camera">\n              <button ion-button color="danger" outline><ion-icon name="camera"></ion-icon></button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n          <ion-list><ion-item>\n            <ion-icon name="calendar" item-start></ion-icon>\n              <ion-input type="number" placeholder="MM"></ion-input>\n              <!-- <ion-label>/</ion-label> -->\n              <ion-input type="number" placeholder="YY"></ion-input>\n          </ion-item></ion-list>\n          </ion-col>\n          <ion-col col-6> \n            <ion-list><ion-item> \n              <ion-icon name="lock" item-start></ion-icon>\n              <ion-input type="text" placeholder="###"></ion-input>\n            </ion-item></ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-list><ion-item>\n              <ion-icon name="person" item-start></ion-icon>\n              <ion-input type="text" placeholder="Credit card user name"></ion-input>\n            </ion-item></ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-list><ion-item>\n              <ion-icon name="calendar" item-start></ion-icon>\n              <ion-label>Date of birth</ion-label>\n              <ion-input type="date" placeholder="10/31/2013"></ion-input>\n            </ion-item></ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col> \n            <div class="btnBottom">\n              <button ion-button color="danger" block icon-left (click)="goIndex()">Save payment method<ion-icon name="arrow-dropright"></ion-icon></button>\n            </div>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/payinfo/payinfo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PayinfoPage);

//# sourceMappingURL=payinfo.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_info_cleaning_info__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CleaningPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CleaningPage = (function () {
    function CleaningPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CleaningPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CleaningPage');
    };
    CleaningPage.prototype.cleaningInfo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cleaning_info_cleaning_info__["a" /* CleaningInfoPage */]);
    };
    return CleaningPage;
}());
CleaningPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/cleaning/cleaning.html"*/'<!--\n  Generated template for the CleaningPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>joBid</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="imgCenter">\n	 <ion-icon name="contact"></ion-icon> \n  </div>\n	<div class="TituloRojo"><h4>Cleaning</h4></div>\n	<h4>Filter search</h4>\n	<p padding>Choose the options for the search of the professional you want to hire</p>\n	<form  class="list" >\n		<ion-grid>\n        <ion-row>\n          <ion-col>\n		        <ion-list>\n					  	<ion-item>\n				      	<ion-select > <!--[(ngModel)]="gaming"-->\n                 <ion-option selected>Category</ion-option>\n                 <ion-option >House</ion-option>\n                 <ion-option >vehicles</ion-option>\n                 <ion-option >Offices</ion-option>\n				         <ion-option >Industries</ion-option>\n				      	</ion-select>\n				    	</ion-item>\n						</ion-list>\n          </ion-col>\n			</ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <ion-list>\n			    	<ion-item>\n			      	<ion-label>Certificate</ion-label>\n    					<ion-radio checked="true" value="Certificate"></ion-radio>\n				  	</ion-item>\n					</ion-list>\n        </ion-col>\n        <ion-col col-6>\n          <ion-list>\n			   		<ion-item>\n			      	<ion-label>Insurance</ion-label>\n    					<ion-radio checked="true" value="Insurance"></ion-radio>\n				  	</ion-item>\n					</ion-list>\n        </ion-col>\n			</ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-select class="mitad"> <!--[(ngModel)]="gaming"-->\n              <ion-option selected>Distance</ion-option>\n              <ion-option value="1M">1 Milla</ion-option>\n              <ion-option value="2M">2 Milla</ion-option>\n              <ion-option value="3M">3 Milla</ion-option>\n              <ion-option value="4M">4 Milla</ion-option>\n              <ion-option value="5M">5 Milla</ion-option>\n              <ion-option value="5MM">&gt; 5 Milla</ion-option>\n            </ion-select>\n            <ion-select  class="mitad"> <!--[(ngModel)]="gaming"-->\n              <ion-option selected>Experience</ion-option>\n              <ion-option value="1Y" >1 Year</ion-option>\n              <ion-option value="2Y" >2 Year</ion-option>\n              <ion-option value="3Y" >3 Year</ion-option>\n              <ion-option value="3YM" >&gt; 3 Year</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n            <p>If you do not select a filter, will show up all professionals available within 3 miles.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div class="btnBottom">\n            <button id="verifyYourPhone-button6" ion-button block color="danger" (click)="cleaningInfo()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n          </div>\n        </ion-col>\n			</ion-row>\n		</ion-grid>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/cleaning/cleaning.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CleaningPage);

//# sourceMappingURL=cleaning.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_sale_cleaning_sale__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CleaningInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CleaningInfoPage = (function () {
    function CleaningInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CleaningInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CleaningInfoPage');
    };
    CleaningInfoPage.prototype.goCleaningSale = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */]);
    };
    return CleaningInfoPage;
}());
CleaningInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning-info',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/cleaning-info/cleaning-info.html"*/'<!--\n  Generated template for the CleaningInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>joBid</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="imgCenter">\n	 <ion-icon name="contact"></ion-icon> \n  	</div>\n	<div class="TituloRojo"><h4>Cleaning</h4></div>\n	<h4>Service information</h4>\n	<p padding>Describes what the professional requires.</p>\n<form id="formPayinfo" class="list" padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <ion-icon name="cash" item-start></ion-icon>\n            <ion-input type="text" placeholder="Maximum offer value"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-10>\n        <ion-list>\n          <ion-item>\n            <ion-icon name="camera" item-start></ion-icon>\n            <ion-input type="text" placeholder="Photography\n"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col col-2 id="btn-camera">\n          <button ion-button color="danger" outline><ion-icon name="camera"></ion-icon></button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-8>\n      <ion-list><ion-item>\n         <ion-icon name="information-circle" item-start></ion-icon>\n          <ion-select class="mitad"> <!--[(ngModel)]="gaming"-->\n              <ion-option selected value="1R" >1 Room</ion-option>\n              <ion-option value="2R" >2 Rooms</ion-option>\n              <ion-option value="3R" >3 Rooms</ion-option>\n              <ion-option value="4R" >4 Rooms</ion-option>\n              <ion-option value="5R" >5 Rooms</ion-option>\n              <ion-option value="5RM" >5 Rooms</ion-option>\n              <ion-option value="NR" >No</ion-option>\n            </ion-select>\n            <ion-select  class="mitad"> <!--[(ngModel)]="gaming"-->\n              <ion-option selected value="1B">1 Bath</ion-option>\n              <ion-option value="2B">2 Bathrooms</ion-option>\n              <ion-option value="3B">3 Bathrooms</ion-option>\n              <ion-option value="NB">N Bathrooms</ion-option>\n            </ion-select>\n      </ion-item></ion-list>\n      </ion-col>\n      <ion-col col-4> \n        <ion-list><ion-item> \n          <ion-input type="number" placeholder="Mts\n"></ion-input>\n        </ion-item></ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list><ion-item>\n          <ion-icon name="paper" item-start></ion-icon>\n          <ion-textarea type="text" placeholder="More information"></ion-textarea>\n        </ion-item></ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col> \n        <div class="btnBottom">\n          <button ion-button color="danger" block icon-left (click)="goCleaningSale()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n        </div>\n      </ion-col>\n    </ion-row>\n	</ion-grid>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/cleaning-info/cleaning-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CleaningInfoPage);

//# sourceMappingURL=cleaning-info.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningSalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_contractor_cleaning_contractor__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_show__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CleanigSalePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CleaningSalePage = (function () {
    function CleaningSalePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    CleaningSalePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CleaningSalePage');
    };
    CleaningSalePage.prototype.goCleaningContractor = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cleaning_contractor_cleaning_contractor__["a" /* CleaningContractorPage */]);
    };
    CleaningSalePage.prototype.goIndex = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__show_show__["a" /* ShowPage */]);
    };
    CleaningSalePage.prototype.showInfoCleaning = function (id) {
        if (id === void 0) { id = 0; }
        var contenido = '';
        contenido += '<div class="col-40"><img src="assets/img/professions/cleaning.png"></div>';
        contenido += '<div class="col-60"><h4>Estefania lorem</h4><img src="assets/img/Estrellas.png">';
        contenido += '<p><span class="ItemPService"><img src="assets/img/okBlue.png"> <span> Certificate</span>,</span><span class="ItemPService"><img src="assets/img/okBlue.png"> <span>  Insurance</span></span></p></div>';
        contenido += "<h5>Presentation</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui necessitatibus consectetur atque at accusantium sequi, ipsum ut! Excepturi, alias porro, laboriosam fugit doloribus quisquam quia autem est quos voluptatibus. Consequatur vel porro animi quae quam recusandae dignissimos quos quaerat illo eaque sed saepe libero incidunt autem ab veritatis id magni perferendis, amet ex deleniti? Quo autem, sit, non, saepe aperiam magnam nisi, impedit modi ab nihil eum tempore maxime aspernatur optio ratione iste! Alias porro molestiae quod, incidunt, exercitationem facilis id perferendis distinctio natus delectus, voluptas sunt ullam tempore ad necessitatibus nobis ipsam omnis consequuntur vitae labore ipsa voluptatem autem aperiam officiis? Totam doloremque, minus fuga distinctio aperiam non perspiciatis dolorum. Culpa facere sint modi? Dolore doloribus labore velit quidem corrupti, corporis, culpa quam ipsam necessitatibus numquam. Pariatur at qui ducimus, similique, delectus repellendus commodi incidunt nulla ex illo, sed a accusamus, quam quaerat ab libero earum praesentium enim numquam exercitationem dolorum nihil. Natus qui illo ipsa quaerat totam iste fugit id, fugiat, commodi iure porro amet non sint quod earum quo. Ex beatae ea suscipit sapiente dolorem earum, dicta soluta qui cumque debitis aliquam laborum molestias et error eos eaque at aperiam, hic nemo saepe nisi modi officiis. Quod eius aperiam tenetur rerum corrupti, repellat asperiores nihil laborum facere sequi porro molestias repellendus. Eligendi cumque repudiandae adipisci, eveniet delectus tempora iure, amet culpa beatae maiores veritatis odio quisquam eum illum recusandae soluta. Voluptate suscipit accusantium, iure non cum autem, laborum illum eveniet pariatur. Illum dolorum eos reprehenderit, voluptatum atque repellat asperiores dignissimos modi quia nobis cumque ducimus maiores deserunt quibusdam! Iusto rem voluptates sit delectus vitae animi, harum sed, unde atque in odio cumque eaque dolorum placeat sequi porro, itaque incidunt. Ducimus quibusdam natus placeat repellat sit eaque, nisi rerum soluta delectus nemo facilis dolor sequi suscipit dolorum, qui.</p>";
        contenido += id + '';
        contenido += '<h5>Gallery</h5>';
        contenido += '<img src="assets/img/gallery.png" alt="">';
        contenido += '<img src="assets/img/gallery.png" alt="">';
        contenido += '<img src="assets/img/gallery.png" alt="">';
        contenido += '<img src="assets/img/gallery.png" alt="">';
        contenido += '<h5>Comments</h5><div class="comments">';
        contenido += '<h6>Luis Lorem <img src="assets/img/Estrellas.png" alt=""></h6>';
        contenido += '<p>Odit, cupiditate. Quibusdam ducimus minus incidunt voluptas consequatur odit, adipisci eveniet laborum obcaecati labore! Sapiente repellat ipsum in autem fuga sint enim recusandae incidunt tenetur corporis neque totam, quam sequi placeat cupiditate, inventore! Alias repudiandae ducimus laudantium nemo quisquam, quod sint et quam, id ipsum magnam veniam amet sit a voluptatibus, similique ipsa voluptatem voluptates velit quo. Quidem odio a nemo sit illum. </p>';
        contenido += '</div><div class="comments">';
        contenido += '<h6>Melisa Lorem <img src="assets/img/Estrellas.png" alt=""></h6>';
        contenido += '<p>Odit, cupiditate. Quibusdam ducimus minus incidunt voluptas consequatur odit, adipisci eveniet laborum obcaecati labore! Sapiente repellat ipsum in autem fuga sint enim recusandae incidunt tenetur corporis neque totam, quam sequi placeat cupiditate, inventore! Alias repudiandae ducimus laudantium nemo quisquam, quod sint et quam, id ipsum magnam veniam amet sit a voluptatibus, similique ipsa voluptatem voluptates velit quo. Quidem odio a nemo sit illum. </p>';
        contenido += '</div>';
        var alert = this.alertCtrl.create({
            // title: 'Estefania Lorem',
            message: contenido,
            buttons: ['OK']
        });
        alert.present();
    };
    return CleaningSalePage;
}());
CleaningSalePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning-sale',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/cleaning-sale/cleaning-sale.html"*/'<!--\n  Generated template for the CleanigSalePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>joBid</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<img src="assets/img/map.png" class="imgFull">\n<div class="barraRoja">\n  <h4>Offers received</h4>\n</div>\n<ion-grid>\n  <ion-row>\n    <ion-col col-2>\n      <ion-icon name="trophy"></ion-icon>\n    </ion-col>\n    <ion-col col-6>\n     <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/professions/cleaning.png">\n      </ion-avatar>\n      <h2>Estefania Lorem</h2>\n     </ion-item>\n    </ion-col>\n    <ion-col col-2>\n      <h5> $81 </h5>\n    </ion-col>\n    <ion-col col-2>\n      <button ion-button icon-only round color="light" (click)="showInfoCleaning(1)">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-2>\n    </ion-col>\n    <ion-col col-6>\n     <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/professions/cleaning.png">\n      </ion-avatar>\n      <h2>Estefania Lorem</h2>\n     </ion-item>\n    </ion-col>\n    <ion-col col-2>\n      <h5> $82 </h5>\n    </ion-col>\n    <ion-col col-2>\n      <button ion-button icon-only round color="light" (click)="showInfoCleaning(2)" >\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<div class="btnBottom">\n          <button ion-button color="danger" block icon-left (click)="goCleaningContractor()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n        </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n     <ion-row>\n      <ion-col col-2>\n        <p>Time</p>\n      </ion-col>\n      <ion-col col-10>\n        <div class="BarraTime"></div>\n      </ion-col>\n     </ion-row>\n     <ion-row>\n      <ion-col>\n        <ion-icon name="timer"><span> 03:00</span></ion-icon>\n      </ion-col>\n      <ion-col>\n        <button id="btnCancel" ion-button block color="light"(click)="goIndex()">Cancel\n        </button>\n      </ion-col>\n     </ion-row>\n    </ion-grid>  \n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/cleaning-sale/cleaning-sale.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CleaningSalePage);

//# sourceMappingURL=cleaning-sale.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningContractorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_info_service_cleaning_info_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_show__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CleaningContractorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CleaningContractorPage = (function () {
    function CleaningContractorPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    CleaningContractorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CleaningContractorPage');
    };
    CleaningContractorPage.prototype.goCleaningInfoService = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cleaning_info_service_cleaning_info_service__["a" /* CleaningInfoServicePage */]);
    };
    // goIndex(){
    // 	this.navCtrl.setRoot(ShowPage);
    // }
    CleaningContractorPage.prototype.goIndex = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'You want to cancel the service?',
            message: 'The cancellation will be charged with 5% of the value of the offer',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__show_show__["a" /* ShowPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    return CleaningContractorPage;
}());
CleaningContractorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning-contractor',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/cleaning-contractor/cleaning-contractor.html"*/'<!--\n  Generated template for the CleaningContractorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>joBid</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<div class="barraRoja">\n	<h4>Bid winner</h4>\n</div>\n<div class="saleBox">\n	<h1>$80</h1>\n</div>\n<ion-grid>\n	<ion-row>\n	  <ion-col col-3>\n	    <ion-list>\n	    	<ion-item>\n	      	<ion-avatar>\n			      <img src="assets/img/professions/cleaning.png">\n			    </ion-avatar>\n		  	</ion-item>\n			</ion-list>\n	  </ion-col>\n	  <ion-col col-9>\n	  	<ion-row>\n	  		<ion-col>\n	  			<h4>Estefania lorem</h4>\n	  			<img src="assets/img/Estrellas.png" alt="">\n	  		</ion-col>\n	  	</ion-row>	\n	  	<ion-row>	\n			  <ion-col col-6 class="col-height" >\n			    <ion-list><ion-item>\n			    	<ion-label>Certificate</ion-label>\n						<ion-radio checked="true" value="Certificate"></ion-radio>\n					</ion-item></ion-list>\n			  </ion-col>\n			  <ion-col col-6 class="col-height" >\n			    <ion-list>\n			   		<ion-item>\n			      	<ion-label>Insurance</ion-label>\n							<ion-radio checked="true" value="Insurance"></ion-radio>\n				  	</ion-item>\n					</ion-list>\n			  </ion-col>\n	  	</ion-row>	\n	  </ion-col>\n	</ion-row>\n</ion-grid>\n<div  class="divScroll" padding>\n<h5>Presentation</h5>\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Qui necessitatibus consectetur atque at accusantium sequi, ipsum ut! Excepturi, alias porro, laboriosam fugit doloribus quisquam quia autem est quos voluptatibus. Consequatur vel porro animi quae quam recusandae dignissimos quos quaerat illo eaque sed saepe libero incidunt autem ab veritatis id magni perferendis, amet ex deleniti? Quo autem, sit, non, saepe aperiam magnam nisi, impedit modi ab nihil eum tempore maxime aspernatur optio ratione iste! Alias porro molestiae quod, incidunt, exercitationem facilis id perferendis distinctio natus delectus, voluptas sunt ullam tempore ad necessitatibus nobis ipsam omnis consequuntur vitae labore ipsa voluptatem autem aperiam officiis? Totam doloremque, minus fuga distinctio aperiam non perspiciatis dolorum. Culpa facere sint modi? Dolore doloribus labore velit quidem corrupti, corporis, culpa quam ipsam necessitatibus numquam. Pariatur at qui ducimus, similique, delectus repellendus commodi incidunt nulla ex illo, sed a accusamus, quam quaerat ab libero earum praesentium enim numquam exercitationem dolorum nihil. Natus qui illo ipsa quaerat totam iste fugit id, fugiat, commodi iure porro amet non sint quod earum quo. Ex beatae ea suscipit sapiente dolorem earum, dicta soluta qui cumque debitis aliquam laborum molestias et error eos eaque at aperiam, hic nemo saepe nisi modi officiis. Quod eius aperiam tenetur rerum corrupti, repellat asperiores nihil laborum facere sequi porro molestias repellendus. Eligendi cumque repudiandae adipisci, eveniet delectus tempora iure, amet culpa beatae maiores veritatis odio quisquam eum illum recusandae soluta. Voluptate suscipit accusantium, iure non cum autem, laborum illum eveniet pariatur. Illum dolorum eos reprehenderit, voluptatum atque repellat asperiores dignissimos modi quia nobis cumque ducimus maiores deserunt quibusdam! Iusto rem voluptates sit delectus vitae animi, harum sed, unde atque in odio cumque eaque dolorum placeat sequi porro, itaque incidunt. Ducimus quibusdam natus placeat repellat sit eaque, nisi rerum soluta delectus nemo facilis dolor sequi suscipit dolorum, qui.\n<h5>Gallery</h5>\n<ion-grid>\n	<ion-row>\n		<ion-col col-6>\n			<img src="assets/img/gallery.png" alt="">\n		</ion-col>\n		<ion-col col-6>\n			<img src="assets/img/gallery.png" alt="">\n		</ion-col>\n	</ion-row>\n	<ion-row>\n		<ion-col col-6>\n			<img src="assets/img/gallery.png" alt="">\n		</ion-col>\n		<ion-col col-6>\n			<img src="assets/img/gallery.png" alt="">\n		</ion-col>\n	</ion-row>\n</ion-grid>\n<h5>Comments</h5>\n<div class="comments">\n	<h6>Luis Lorem <img src="assets/img/Estrellas.png" alt=""></h6>\n	 <p>Odit, cupiditate. Quibusdam ducimus minus incidunt voluptas consequatur odit, adipisci eveniet laborum obcaecati labore! Sapiente repellat ipsum in autem fuga sint enim recusandae incidunt tenetur corporis neque totam, quam sequi placeat cupiditate, inventore! Alias repudiandae ducimus laudantium nemo quisquam, quod sint et quam, id ipsum magnam veniam amet sit a voluptatibus, similique ipsa voluptatem voluptates velit quo. Quidem odio a nemo sit illum. </p>\n</div>\n<div class="comments">\n	<h6>Melisa Lorem <img src="assets/img/Estrellas.png" alt=""></h6>\n	 <p>Odit, cupiditate. Quibusdam ducimus minus incidunt voluptas consequatur odit, adipisci eveniet laborum obcaecati labore! Sapiente repellat ipsum in autem fuga sint enim recusandae incidunt tenetur corporis neque totam, quam sequi placeat cupiditate, inventore! Alias repudiandae ducimus laudantium nemo quisquam, quod sint et quam, id ipsum magnam veniam amet sit a voluptatibus, similique ipsa voluptatem voluptates velit quo. Quidem odio a nemo sit illum. </p>\n</div>\n\n</div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n     <ion-row>\n      <ion-col>\n        <button id="btnContractor" ion-button block color="light" (click)="goCleaningInfoService()">Hire\n        </button>\n      </ion-col>\n      <ion-col>\n        <button id="btnCancel" ion-button block color="light"(click)="goIndex()">Cancel service\n        </button>\n      </ion-col>\n     </ion-row>\n    </ion-grid>  \n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/cleaning-contractor/cleaning-contractor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CleaningContractorPage);

//# sourceMappingURL=cleaning-contractor.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningInfoServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_vote_cleaning_vote__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CleaningInfoServicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CleaningInfoServicePage = (function () {
    function CleaningInfoServicePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CleaningInfoServicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CleaningInfoServicePage');
    };
    CleaningInfoServicePage.prototype.goCleaningVote = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cleaning_vote_cleaning_vote__["a" /* CleaningVotePage */]);
    };
    return CleaningInfoServicePage;
}());
CleaningInfoServicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning-info-service',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/cleaning-info-service/cleaning-info-service.html"*/'<!--\n  Generated template for the CleaningInfoServicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>joBid</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<img src="assets/img/map.png" class="imageFull">\n<div class="barraGris">\n	<h4>Service information</h4>\n</div>\n<h3>Service code: #987456</h3>\n<p class="textoCentrado">State</p>\n<h6 id="estadoServicio">Waiting for the professional</h6>\n<div padding>\n	<p><span class="textRed">*Amount to be paid: </span>$81</p>\n	<p><span class="textRed">Description:</span></p>\n	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n	<div class="space"></div>\n	<p><span class="textRed">Professional data</span></p>\n	<ion-grid>\n	<ion-row>\n	  <ion-col col-3>\n	    <ion-list>\n	    	<ion-item>\n	      	<ion-avatar>\n			      <img src="assets/img/professions/cleaning.png">\n			    </ion-avatar>\n		  	</ion-item>\n			</ion-list>\n	  </ion-col>\n	  <ion-col col-9>\n	  	<ion-row>\n	  		<ion-col>\n	  			<h4>Estefania lorem</h4>\n	  			<img src="assets/img/Estrellas.png" alt="">\n	  		</ion-col>\n	  	</ion-row>	\n	  	<ion-row>	\n			  <ion-col col-6>\n			    <ion-list><ion-item>\n			    	<ion-label>Certificate</ion-label>\n						<ion-radio checked="true" value="Certificate"></ion-radio>\n					</ion-item></ion-list>\n			  </ion-col>\n			  <ion-col col-6>\n			    <ion-list>\n			   		<ion-item>\n			      	<ion-label>Insurance</ion-label>\n							<ion-radio checked="true" value="Insurance"></ion-radio>\n				  	</ion-item>\n					</ion-list>\n			  </ion-col>\n	  	</ion-row>	\n	  </ion-col>\n	</ion-row>\n</ion-grid>\n</div>\n\n<div class="btnBottom">\n	<button id="verifyYourPhone-button6" ion-button block color="danger" (click)="goCleaningVote()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/cleaning-info-service/cleaning-info-service.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CleaningInfoServicePage);

//# sourceMappingURL=cleaning-info-service.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningVotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_ok_cleaning_ok__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CleaningVotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CleaningVotePage = (function () {
    function CleaningVotePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CleaningVotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CleaningVotePage');
    };
    CleaningVotePage.prototype.goCleaningOk = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cleaning_ok_cleaning_ok__["a" /* CleaningOkPage */]);
    };
    return CleaningVotePage;
}());
CleaningVotePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning-vote',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/cleaning-vote/cleaning-vote.html"*/'<!--\n  Generated template for the CleaningVotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>joBid</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n<div class="barraRoja">\n	<h4>Service qualification</h4>\n</div>\n<p>Now you can qualify the professional and leave a comment of the service received.</p>\n<form id="signup-form3" class="list" padding>\n  <ion-list >\n    <ion-item>\n			<h4>Qualification <img src="assets/img/Estrellas.png" alt=""></h4>\n    </ion-item>\n    <ion-item>\n    <input type="text">\n    	<ion-textarea placeholder="Comments"></ion-textarea>\n    </ion-item>\n  </ion-list>\n	<div class="btnBottom">\n    <button ion-button color="danger" block icon-left (click)="goCleaningOk()">Qualify and pay<ion-icon name="arrow-dropright"></ion-icon></button>\n  </div>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/cleaning-vote/cleaning-vote.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CleaningVotePage);

//# sourceMappingURL=cleaning-vote.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningOkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_show__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CleaningOkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CleaningOkPage = (function () {
    function CleaningOkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CleaningOkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CleaningOkPage');
    };
    CleaningOkPage.prototype.goIndex = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__show_show__["a" /* ShowPage */]);
    };
    return CleaningOkPage;
}());
CleaningOkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning-ok',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/cleaning-ok/cleaning-ok.html"*/'<!--\n  Generated template for the CleaningOkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>joBid</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<img src="assets/img/LogoJoBid.png" />\n	<div class="centrarIcon">\n		<ion-icon class="icon-ok" name="checkmark-circle"></ion-icon>\n	</div>\n	<p>Your service has been successfully completed and the value of $ 81 has been deducted from your credit card.</p>\n	 <div class="btnBottom" padding>\n    <button ion-button color="danger" block (click)="goIndex()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/cleaning-ok/cleaning-ok.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CleaningOkPage);

//# sourceMappingURL=cleaning-ok.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_singup_singup__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_show_show__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_verify_your_phone_verify_your_phone__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_payment_methods_payment_methods__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_payinfo_payinfo__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profession_profession__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cleaning_cleaning__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cleaning_info_cleaning_info__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_cleaning_sale_cleaning_sale__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cleaning_contractor_cleaning_contractor__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cleaning_info_service_cleaning_info_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cleaning_vote_cleaning_vote__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cleaning_ok_cleaning_ok__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_pre_home_pre_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_new_address_new_address__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_facebook__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























//import { EmailComposer } from '@ionic-native/email-composer';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_singup_singup__["a" /* SingupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_show_show__["a" /* ShowPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_verify_your_phone_verify_your_phone__["a" /* VerifyYourPhonePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_payment_methods_payment_methods__["a" /* PaymentMethodsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_payinfo_payinfo__["a" /* PayinfoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_profession_profession__["a" /* ProfessionPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_cleaning_cleaning__["a" /* CleaningPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_cleaning_info_cleaning_info__["a" /* CleaningInfoPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_cleaning_contractor_cleaning_contractor__["a" /* CleaningContractorPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_cleaning_info_service_cleaning_info_service__["a" /* CleaningInfoServicePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_cleaning_vote_cleaning_vote__["a" /* CleaningVotePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_cleaning_ok_cleaning_ok__["a" /* CleaningOkPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_pre_home_pre_home__["a" /* PreHomePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_new_address_new_address__["a" /* NewAddressPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_singup_singup__["a" /* SingupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_show_show__["a" /* ShowPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_verify_your_phone_verify_your_phone__["a" /* VerifyYourPhonePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_payment_methods_payment_methods__["a" /* PaymentMethodsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_payinfo_payinfo__["a" /* PayinfoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_profession_profession__["a" /* ProfessionPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_cleaning_cleaning__["a" /* CleaningPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_cleaning_info_cleaning_info__["a" /* CleaningInfoPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_cleaning_contractor_cleaning_contractor__["a" /* CleaningContractorPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_cleaning_info_service_cleaning_info_service__["a" /* CleaningInfoServicePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_cleaning_vote_cleaning_vote__["a" /* CleaningVotePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_cleaning_ok_cleaning_ok__["a" /* CleaningOkPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_pre_home_pre_home__["a" /* PreHomePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_new_address_new_address__["a" /* NewAddressPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_facebook__["a" /* Facebook */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfessionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfessionPage = (function () {
    function ProfessionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfessionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfessionPage');
    };
    return ProfessionPage;
}());
ProfessionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profession',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/profession/profession.html"*/'<!--\n  Generated template for the ProfessionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>joBid</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	page profession\n</ion-content>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/profession/profession.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProfessionPage);

//# sourceMappingURL=profession.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_cleaning__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { LoginPage } from '../login/login';
//import { ProfessionPage } from '../profession/profession';


/**
 * Generated class for the ShowPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShowPage = (function () {
    function ShowPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowPage');
        console.log(localStorage);
        // MyApp.userName = 'soy nuevo';
        console.log(__WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */]);
    };
    // profession(){
    // 	//this.navCtrl.push(LoginPage);
    // 	this.navCtrl.setRoot(ProfessionPage);
    // }
    ShowPage.prototype.Cleaning = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cleaning_cleaning__["a" /* CleaningPage */]);
    };
    return ShowPage;
}());
ShowPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-show',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/show/show.html"*/'<!--\n  Generated template for the ShowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>joBid</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<!-- <button ion-button block color="light"(click)="profession()">login</button> -->\n\n<ion-grid class="gridProfession">\n     <ion-row>\n      <ion-col>\n        <button ion-button block color="light" (click)="Cleaning()">\n          <ion-grid>\n            <ion-row>\n              <ion-icon name="contact"></ion-icon>\n            </ion-row>  \n            <ion-row> \n             <p>Cleaning</p>\n            </ion-row>\n          </ion-grid> \n        </button>\n      </ion-col>\n     </ion-row>\n    </ion-grid>  \n</ion-content>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/show/show.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ShowPage);

//# sourceMappingURL=show.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//let apiUrl = "http://localhost/PHP-Slim-Restful-master/api/";
var apiUrl = "http://php-slim-restful-master.lamaletadefelix.com/api/";
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                if (type == 'code') {
                    resolve('correo enviando');
                }
                else {
                    //console.log(res);
                    resolve(res.json());
                }
            }, function (err) {
                reject(err);
                console.log('error service');
                console.log(err);
                //alert('error service'+err);
            });
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_address_new_address__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PreHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PreHomePage = (function () {
    function PreHomePage(navCtrl, navParams, authServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.address = [];
        //userData = {"username":"Angel","password":"12345","email":"angellg1990@gmail.com","name":"Angel","zipcode":"90003","state":"CA","picture":"","verificacion":"20","pais":"USA","direccion":"1234 ave,bogota,CA 90003","tel":"(408)1234567"};
        this.userData = [];
        // this.address =[
        // 	{"label":"casa","name":"direccion1"},
        //  {"label":"apartamento","name":"direcccion2"},
        // ];
        this.userData = this.navParams.get('datos');
        console.log(this.userData);
        this.authServiceProvider.postData(this.userData, 'userAddres').then(function (result) {
            //console.log(result);
            //console.log(result['userAddres']['0']);
            //this.address.push(result['userAddres']['0']);
            _this.address.push({ "label": result['userAddres']['0']['dic_name'], "name": result['userAddres']['0']['dic_direccion'] });
            console.log(_this.address);
        }, function (err) {
            // Error log
            //console.log('error '.err);
            alert('error userAddres');
        });
    }
    PreHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreHomePage');
    };
    PreHomePage.prototype.goShow = function (item) {
        console.log(item);
    };
    PreHomePage.prototype.goNewAddress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__new_address_new_address__["a" /* NewAddressPage */]);
    };
    PreHomePage.prototype.goLocation = function () {
    };
    return PreHomePage;
}());
PreHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pre-home',template:/*ion-inline-start:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/pre-home/pre-home.html"*/'<!--\n  Generated template for the PreHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>joBid</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page">\n\n  <ion-card>\n    <img src="assets/img/LogoJoBid.png"/>\n    <div class="card-title"><h3>Name User</h3></div>\n    <div class="card-subtitle"><p>¿Where you want your service?</p></div>\n  </ion-card>\n  <ion-grid class="btnAddress">\n  	<ion-row>\n  		<ion-col col-6>\n			<ion-list>\n				<button ion-item (click)="goLocation()" >\n					<ion-icon name="pin" item-start></ion-icon>\n					<ion-label>Current location</ion-label>\n				</button>\n			</ion-list>\n  		</ion-col>\n  		<ion-col col-6>\n  			<ion-list>\n	  			<button ion-item (click)="goNewAddress()">\n  					<ion-icon name="add-circle" item-start></ion-icon>\n  					<ion-label>New Address</ion-label>\n	  			</button>\n  			</ion-list>\n  		</ion-col>\n  	</ion-row>\n  </ion-grid>\n	<ion-list>\n	  <button ion-item *ngFor="let item of address" (click)="goShow(item)">\n	    <h3>{{ item.label }}</h3>\n	    <p>{{ item.name }}</p>\n	  </button>  \n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/carlos/ionicPruebas/UsuarioApp_JoBid/src/pages/pre-home/pre-home.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _c || Object])
], PreHomePage);

var _a, _b, _c;
//# sourceMappingURL=pre-home.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map