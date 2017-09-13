webpackJsonp([0],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        selector: 'page-list',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyYourPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_methods_payment_methods__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(56);
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

//import { EncriptyService } from '../../services/encripty.service';
//import { StorageService } from '../../services/storage.service';

/**
 * Generated class for the VerifyYourPhonePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VerifyYourPhonePage = (function () {
    //constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
    function VerifyYourPhonePage(navCtrl, navParams, authServiceProvider, alertCtrl, 
        //private encriptyService : EncriptyService,
        //private storageService : StorageService,
        userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.userData = [];
        //alert(this.navParams.get('username'));
        this.userData = this.navParams.get('datos');
        console.log(this.userData);
        //alert(JSON.stringify(this.navParams.get('datos')));
        console.log(this.navParams.get('datos'));
        this.verificacion = this.userData['verificacion'];
        console.log(this.verificacion);
        this.showAlert();
    }
    VerifyYourPhonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifyYourPhonePage');
        //this.CorreoVerificacion();
    };
    VerifyYourPhonePage.prototype.goPayMethod = function () {
        if (this.verificacion == this.codVerificacion) {
            console.log(this.userData);
            //this.traerPost();
            this.userService.newUser(this.userData);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_methods_payment_methods__["a" /* PaymentMethodsPage */]);
        }
        else {
            alert('codigo no es el mismo');
        }
    };
    // traerPost(){
    //   this.authServiceProvider.postData(this.userData,'signup').then((result) => {
    //     this.responseData = result;
    //     console.log(this.responseData['userData']['user_id']);
    //     //alert('userData'+ JSON.stringify(this.responseData));
    //         console.log('code:'+this.userData);
    //         console.log(this.userData);
    //         console.log('se registro');
    //         //alert('code:'+JSON.stringify(this.userData));
    //         //alert('se registro');
    //         this.userData['verificacion'] = this.responseData['userData']['user_id'];
    //     //localStorage.setItem('userData', JSON.stringify(this.userData));
    //         this.navCtrl.push(PaymentMethodsPage);
    //     }, (err) => {
    //     // Error log
    //     //console.log('error '.err);
    //     alert('error registro');
    //   });
    // }
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
        selector: 'page-verify-your-phone',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\verify-your-phone\verify-your-phone.html"*/'<!--\n\n  Generated template for the VerifyYourPhonePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>verifyYourPhone</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <img src="assets/img/LogoJoBid.png">\n\n    <h5 id="verifyYourPhone-heading3">Verify your phone </h5>\n\n    <div id="verifyYourPhone-markdown3" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">Enter the confirmation number </p>\n\n    </div>\n\n    <form id="verifyYourPhone-form4" class="list" padding>\n\n     <ion-list>\n\n        <ion-item class="iconJunto">\n\n          <ion-icon name="lock" item-start></ion-icon>\n\n          <ion-input type="text" placeholder="Confirmation number" [(ngModel)]="codVerificacion" name="codVerificacion"></ion-input>\n\n        </ion-item>\n\n     </ion-list>\n\n    </form>\n\n    <div class="spacer"></div>\n\n    <div class="btnBottom" padding>\n\n      <button id="verifyYourPhone-button6" ion-button block color="danger" (click)="goPayMethod()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\verify-your-phone\verify-your-phone.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
], VerifyYourPhonePage);

//# sourceMappingURL=verify-your-phone.js.map

/***/ }),

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pre_home_pre_home__ = __webpack_require__(92);
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
        this.userData = this.navParams.get('datos');
        console.log(this.userData);
        console.log(this.navParams.get('datos'));
    };
    PayinfoPage.prototype.goIndex = function () {
        var Data = { 'datos': this.userData };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pre_home_pre_home__["a" /* PreHomePage */], Data);
    };
    return PayinfoPage;
}());
PayinfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payinfo',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\payinfo\payinfo.html"*/'<!--\n\n  Generated template for the PayinfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>payinfo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n	<img src="assets/img/LogoJoBid.png">\n\n    <h5 id="payinfo1">Payment information </h5>\n\n    <h6 id="payinfo2">Complete the next form with all data requeried</h6>\n\n    <div class="spacer"></div>\n\n    <form id="formPayinfo" class="list" padding>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="card" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Card number"></ion-input>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col col-2 id="btn-camera">\n\n              <button ion-button color="danger" outline><ion-icon name="camera"></ion-icon></button>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n          <ion-list><ion-item>\n\n            <ion-icon name="calendar" item-start></ion-icon>\n\n              <ion-input type="number" placeholder="MM"></ion-input>\n\n              <!-- <ion-label>/</ion-label> -->\n\n              <ion-input type="number" placeholder="YY"></ion-input>\n\n          </ion-item></ion-list>\n\n          </ion-col>\n\n          <ion-col col-6> \n\n            <ion-list><ion-item> \n\n              <ion-icon name="lock" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="###"></ion-input>\n\n            </ion-item></ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-list><ion-item>\n\n              <ion-icon name="person" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Credit card user name"></ion-input>\n\n            </ion-item></ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-list><ion-item>\n\n              <ion-icon name="calendar" item-start></ion-icon>\n\n              <ion-label>Date of birth</ion-label>\n\n              <ion-input type="date" placeholder="10/31/2013"></ion-input>\n\n            </ion-item></ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col> \n\n            <div class="btnBottom">\n\n              <button ion-button color="danger" block icon-left (click)="goIndex()">Save payment method<ion-icon name="arrow-dropright"></ion-icon></button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\payinfo\payinfo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PayinfoPage);

//# sourceMappingURL=payinfo.js.map

/***/ }),

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_sale_cleaning_sale__ = __webpack_require__(57);
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
        this.dataService = [];
        this.dataService = this.navParams.get('datos');
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
        selector: 'page-cleaning-info',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\cleaning-info\cleaning-info.html"*/'<!--\n\n  Generated template for the CleaningInfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<div class="imgCenter">\n\n	 <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n  	</div>\n\n	<div class="TituloRojo"><h4>{{dataService.name}}</h4></div>\n\n	<h4>Service information</h4>\n\n	<p padding>Describes what the professional requires.</p>\n\n<form id="formPayinfo" class="list" padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-icon name="cash" item-start></ion-icon>\n\n            <ion-input type="text" placeholder="Maximum offer value"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-10>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-icon name="camera" item-start></ion-icon>\n\n            <ion-input type="text" placeholder="Photography\n\n"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-2 id="btn-camera">\n\n          <button ion-button color="danger" outline><ion-icon name="camera"></ion-icon></button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-8>\n\n      <ion-list><ion-item>\n\n         <ion-icon name="information-circle" item-start></ion-icon>\n\n          <ion-select class="mitad"> <!--[(ngModel)]="gaming"-->\n\n              <ion-option selected value="1R" >1 Room</ion-option>\n\n              <ion-option value="2R" >2 Rooms</ion-option>\n\n              <ion-option value="3R" >3 Rooms</ion-option>\n\n              <ion-option value="4R" >4 Rooms</ion-option>\n\n              <ion-option value="5R" >5 Rooms</ion-option>\n\n              <ion-option value="5RM" >5 Rooms</ion-option>\n\n              <ion-option value="NR" >No</ion-option>\n\n            </ion-select>\n\n            <ion-select  class="mitad"> <!--[(ngModel)]="gaming"-->\n\n              <ion-option selected value="1B">1 Bath</ion-option>\n\n              <ion-option value="2B">2 Bathrooms</ion-option>\n\n              <ion-option value="3B">3 Bathrooms</ion-option>\n\n              <ion-option value="NB">N Bathrooms</ion-option>\n\n            </ion-select>\n\n      </ion-item></ion-list>\n\n      </ion-col>\n\n      <ion-col col-4> \n\n        <ion-list><ion-item> \n\n          <ion-input type="number" placeholder="Mts\n\n"></ion-input>\n\n        </ion-item></ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-list><ion-item>\n\n          <ion-icon name="paper" item-start></ion-icon>\n\n          <ion-textarea type="text" placeholder="More information"></ion-textarea>\n\n        </ion-item></ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col> \n\n        <div class="btnBottom">\n\n          <button ion-button color="danger" block icon-left (click)="goCleaningSale()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n	</ion-grid>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\cleaning-info\cleaning-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CleaningInfoPage);

//# sourceMappingURL=cleaning-info.js.map

/***/ }),

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        selector: 'page-profession',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\profession\profession.html"*/'<!--\n\n  Generated template for the ProfessionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<p style="text-align: center; color:black;">page profession 2</p>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\profession\profession.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProfessionPage);

//# sourceMappingURL=profession.js.map

/***/ }),

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BraintreeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { client} from "braintree-web/client";
//import { hostedFields} from "braintree-web/hosted-fields";
var BraintreeService = (function () {
    function BraintreeService() {
    }
    return BraintreeService;
}());
BraintreeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], BraintreeService);

//# sourceMappingURL=braintree.service.js.map

/***/ }),

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncriptyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js_sha256__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto_js_sha256__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EncriptyService = (function () {
    function EncriptyService() {
    }
    EncriptyService.prototype.GenerateEncripty = function (text) {
        //console.dir(text);
        var encriptPass = __WEBPACK_IMPORTED_MODULE_1_crypto_js_sha256___default()(text);
        // console.log(encriptPass.toString());
        encriptPass = encriptPass.toString();
        // console.log(encriptPass);
        return encriptPass;
    };
    return EncriptyService;
}());
EncriptyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], EncriptyService);

//# sourceMappingURL=encripty.service.js.map

/***/ }),

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareProfessionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
var CareProfessionsService = (function () {
    function CareProfessionsService(afDB) {
        this.afDB = afDB;
        this.dataCategoria = [];
        this.dataService = [];
    }
    CareProfessionsService.prototype.getProfessions = function () {
    };
    CareProfessionsService.prototype.setCategoryBySubProfession = function (nameService, Data) {
        if (nameService === void 0) { nameService = ""; }
        //console.log(nameService);
        switch (nameService) {
            case "Child care": {
                break;
            }
            case "Senior care": {
                break;
            }
            case "Family asistance": {
                break;
            }
            case "Dog walker": {
                break;
            }
            case "Personal shopper": {
                break;
            }
        }
        return this.dataCategoria;
    };
    //---new offer care
    CareProfessionsService.prototype.newOffer = function (serviceData, keyNew) {
        if (serviceData === void 0) { serviceData = []; }
        // public newOffer(serviceData : any = [],subCategory:string,keyNew?:any){
        var key = undefined;
        //default star
        // console.log('key:'+key);
        console.log('keyNew:' + keyNew);
        if (keyNew && keyNew != null && keyNew != undefined) {
            keyOffer = keyNew;
        }
        else {
            var d = new Date();
            key = d.getTime();
            var keyOffer = "offer_" + (key);
        }
        console.log(serviceData);
        // console.log(JSON.stringify(serviceData));
        // console.log(subCategory);
        this.afDB.object('/offer/' + keyOffer).set(serviceData);
        console.info('offer create');
        // let clasificacion = serviceData['Clasificacion'];
        // console.log(clasificacion);
        // let informacion = clasificacion['informacion']; 
        // console.log(informacion);
        // console.info('offer create2');
        // switch(subCategory){
        // 	case "Child care":{
        // 		//this.afDB.object('/offer/'+keyOffer+/care).set({});
        // 		//this.dataInformacion=[{"m//axOffer":this.maxOffer,"numChildren":this.numChildren,"ageChildren":this.ageChildren,"timeChildren":this.timeChildren,"moreInformation":this.moreInformation}];
        // 		console.info('offer create');
        // 		break;
        // 	}
        // 	case "Senior care":{
        // 		//this.dataInformacion=[{"maxOffer":this.maxOffer,"ageSenior":this.ageSenior,"moreInformation":this.moreInformation}];
        // 		break;
        // 	}
        // 	case "Family asistance":{
        // 		//this.dataInformacion=[{"maxOffer":this.maxOffer,"asistenceFamilia":this.asistenceFamilia,"moreInformation":this.moreInformation}];
        // 		break;
        // 	}
        // 	case "Dog walker":{
        // 		//this.dataInformacion=[{"maxOffer":this.maxOffer,"raceDog":this.raceDog,"numDog":this.numDog,"fotoDog":this.fotoDog,"moreInformation":this.moreInformation}];
        // 		break;
        // 	}
        // 	case "Personal shopper":{
        // 		//this.dataInformacion=[{"maxOffer":this.maxOffer,"purchaseShopper":this.purchaseShopper,"placeShopper":this.placeShopper,"moreInformation":this.moreInformation}];
        // 		break;
        // 	}
        //   }
        // {"categoria":"Senior care","certificacion":"true","seguro":"true","distancia":"3M","experiencia":"3Y","informacion":{"maxOffer":"765","ageSenior":"56","moreInformation":"fasdfsdf"}}
    };
    return CareProfessionsService;
}());
CareProfessionsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], CareProfessionsService);

//# sourceMappingURL=careProfessions.service.js.map

/***/ }),

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningProfessionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

var CleaningProfessionsService = (function () {
    function CleaningProfessionsService(afDB) {
        this.afDB = afDB;
        this.dataCategoria = [];
        this.dataService = [];
    }
    //---new offer care
    CleaningProfessionsService.prototype.newOffer = function (serviceData, keyNew) {
        if (serviceData === void 0) { serviceData = []; }
        // public newOffer(serviceData : any = [],subCategory:string,keyNew?:any){
        var key = undefined;
        //default star
        // console.log('key:'+key);
        console.log('keyNew:' + keyNew);
        if (keyNew && keyNew != null && keyNew != undefined) {
            keyOffer = keyNew;
        }
        else {
            var d = new Date();
            key = d.getTime();
            var keyOffer = "offer_" + (key);
        }
        console.log(serviceData);
        // console.log(JSON.stringify(serviceData));
        // console.log(subCategory);
        this.afDB.object('/offer/' + keyOffer).set(serviceData);
        console.info('offer create');
    };
    return CleaningProfessionsService;
}());
CleaningProfessionsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], CleaningProfessionsService);

//# sourceMappingURL=cleaningProfessions.service.js.map

/***/ }),

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocodeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(614);
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
var apiUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
var apiKey = "&key=";
var yourKeyApiGoogleMaps = "AIzaSyAN3iZp5m77ySYU9f6Iq3TX0g-Y2DelY70";
/*
  Generated class for the GeocodeServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var GeocodeServiceProvider = (function () {
    function GeocodeServiceProvider(http) {
        this.http = http;
        console.log('Hello GeocodeServiceProvider Provider');
    }
    GeocodeServiceProvider.prototype.GeoCodificationInversa = function (latitud, longitud) {
        var _this = this;
        // https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAN3iZp5m77ySYU9f6Iq3TX0g-Y2DelY70
        // https://maps.googleapis.com/maps/api/geocode/json?latlng=4.5510497999999995,%20-74.0984553&key=AIzaSyAN3iZp5m77ySYU9f6Iq3TX0g-Y2DelY70
        // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAN3iZp5m77ySYU9f6Iq3TX0g-Y2DelY70
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.get(apiUrl + latitud + ',' + longitud + apiKey + yourKeyApiGoogleMaps)
                .subscribe(function (res) {
                // console.log(res);
                // console.log(JSON.stringify(res));
                var body = JSON.parse(res['_body']);
                // console.log(body);
                var address = body.results["0"].formatted_address;
                // console.log(address);
                resolve(address);
                // resolve(res.json());
            }, function (err) {
                reject(err);
                console.log('error service');
                console.log(err);
                //alert('error service'+err);
            });
        });
    };
    return GeocodeServiceProvider;
}());
GeocodeServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GeocodeServiceProvider);

var _a;
//# sourceMappingURL=geocode-service.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(614);
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

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionalsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
var ProfessionalsService = (function () {
    function ProfessionalsService(afDB) {
        this.afDB = afDB;
        this.professionals = [];
        this.professionals = this.getProfessionals();
        console.log('load ProfessionalsService');
        console.log(this.professionals);
        console.log(this.afDB);
    }
    ProfessionalsService.prototype.getProfessionals = function () {
        console.log(this.afDB.list('/professionals/'));
        return this.afDB.list('/professionals/');
    };
    ProfessionalsService.prototype.getProfessional = function (id) {
        console.log('getProfessionalId');
        console.log(id);
        return this.afDB.object('/professionals/' + id);
        //this.afDB.ref('/professionals/prof_1');
    };
    return ProfessionalsService;
}());
ProfessionalsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], ProfessionalsService);

//# sourceMappingURL=professionals.service.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
var ProfessionsService = (function () {
    function ProfessionsService() {
        this.professions = [
            { name: 'Care', class: 'red' },
            { name: 'Cleaning', class: 'yellow' },
            { name: 'Janotorial', class: 'orange' },
            { name: 'Transportation', class: 'green' },
            { name: 'Food & Beverage', class: 'purple' },
            { name: 'Legal services', class: 'blue' },
            { name: 'Beauty', class: 'pink' }
        ];
        this.dataCategoria = [];
    }
    ProfessionsService.prototype.getProfessions = function () {
        return this.professions;
    };
    ProfessionsService.prototype.getCategoryByProfession = function (nameService) {
        if (nameService === void 0) { nameService = ""; }
        //console.log(nameService);
        switch (nameService) {
            case "Care": {
                this.dataCategoria = ["Child care", "Senior care", "Family asistance", "Dog walker", "Personal shopper"];
                break;
            }
            case "Cleaning": {
                this.dataCategoria = ["Maids", "Car washers", "Pressure cleaning", "Carpet & upholstery cleaning"];
                break;
            }
            case "Janotorial": {
                this.dataCategoria = ["Handyman", "Pluming", "Electrician", "Pool cleaning", "Luck smith"];
                break;
            }
            case "Transportation": {
                this.dataCategoria = ["Day VIP chofer", "Taxi", "Car pool", "Moving services", "Delivery"];
                break;
            }
            case "Food & Beverage": {
                this.dataCategoria = ["Bartenders", "Waitress", "Chef", "Runners", "Valet parking", "Hostess"];
                break;
            }
            case "Legal services": {
                this.dataCategoria = ["Notary"];
                break;
            }
            case "Beauty": {
                this.dataCategoria = ["Personal trainer", "Hair cut and DIY", "Manicure and pedicure", "Makeup", "Massage"];
                break;
            }
            default: {
                console.log("Invalid choice");
                break;
            }
        }
        return this.dataCategoria;
    };
    return ProfessionsService;
}());
ProfessionsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ProfessionsService);

//# sourceMappingURL=professions.service.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentMethodsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_braintree_web__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_braintree_web___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_braintree_web__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_braintree_web_drop_in__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_braintree_web_drop_in___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_braintree_web_drop_in__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as braintree from "braintree";


/**
 * Generated class for the PaymentMethodsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PaymentMethodsPage = (function () {
    function PaymentMethodsPage(alertCtrl, navCt0rl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCt0rl = navCt0rl;
        this.navParams = navParams;
        this.booleanCreateErr = false;
        this.booleanInstance = false;
    }
    PaymentMethodsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentMethodsPage');
        this.userData = this.navParams.get('datos');
        console.log(this.userData);
        console.log(this.navParams.get('datos'));
        this.showAlert();
        this.dropin();
        //this.newGateWay();
        // this.setTokenClient();
    };
    PaymentMethodsPage.prototype.newGateWay = function () {
        this.gateway = __WEBPACK_IMPORTED_MODULE_2_braintree_web__["connect"]({
            environment: __WEBPACK_IMPORTED_MODULE_2_braintree_web__["Environment"].Sandbox,
            merchantId: 'xg698xhxgkr3z5wx',
            publicKey: '6xhx6fnr7szs5nmb',
            privateKey: '04a0e14ca769b7ed5176df62f462200c'
        });
    };
    PaymentMethodsPage.prototype.setTokenClient = function () {
        this.gateway.clientToken.generate({}, function (err, response) {
            // res.send(response.clientToken);
            console.log(response);
            console.log(err);
        });
    };
    PaymentMethodsPage.prototype.goPayInfo = function () {
        if (this.booleanCreateErr) {
            this.showAlertPay();
        }
        if (this.booleanInstance) {
            this.Instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
                if (requestPaymentMethodErr) {
                    console.log(requestPaymentMethodErr);
                }
                if (payload) {
                    console.log(payload);
                }
            });
            // console.log(this.userData);
            // let Data = {'datos':this.userData};
            // this.navCtrl.push(PayinfoPage,Data);
        }
    };
    PaymentMethodsPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Information',
            subTitle: 'An email has been sent to verify your acount',
            buttons: ['OK']
        });
        alert.present();
    };
    PaymentMethodsPage.prototype.showAlertPay = function () {
        var alert = this.alertCtrl.create({
            title: 'Information',
            subTitle: 'verify the payment method information',
            buttons: ['OK']
        });
        alert.present();
    };
    PaymentMethodsPage.prototype.dropin = function () {
        var _this = this;
        // var button = document.querySelector('#submit-button');
        __WEBPACK_IMPORTED_MODULE_3_braintree_web_drop_in__["create"]({
            authorization: 'sandbox_gmhv57wq_xg698xhxgkr3z5wx',
            container: '#dropin-container',
            paypal: {
                flow: 'vault'
            }
        }, function (createErr, instance) {
            if (createErr) {
                console.log(createErr);
                _this.CreateErr = createErr;
                _this.booleanCreateErr = true;
            }
            if (instance) {
                console.log(instance);
                _this.Instance = instance;
                _this.booleanInstance = true;
            }
            // button.addEventListener('click', function () {
            //   instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
            //     // Submit payload.nonce to your server
            //   });
            // });
        });
        // braintree.dropin.create({
        //   authorization: 'sandbox_gmhv57wq_xg698xhxgkr3z5wx',
        //   container: '#dropin-container'
        // }, function (createErr, instance) {
        //   button.addEventListener('click', function () {
        //     instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
        //       // Submit payload.nonce to your server
        //     });
        //   });
        // });
    };
    return PaymentMethodsPage;
}());
PaymentMethodsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment-methods',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\payment-methods\payment-methods.html"*/'<!--\n\n  Generated template for the PaymentMethodsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>paymentMethods</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<img src="assets/img/LogoJoBid.png">\n\n    <h5 id="paymentMethods-heading4">Welcome </h5>\n\n    <h5 id="paymentMethods-heading5">User </h5>\n\n    <div class="spacer"></div>\n\n    <h4 id="paymentMethods-heading6">Payment Method</h4>\n\n    <h5 id="paymentMethods-heading7">Select your paymenth method </h5>\n\n    <form id="paymentMethods-form5" class="list" padding>\n\n        <div id="dropin-container"></div>\n\n        <!-- <button id="submit-button" ion-button color="danger">Request payment method</button> -->\n\n    <ion-list>\n\n        <!-- <ion-item>\n\n          <ion-checkbox id="paymentMethods-checkbox2">Credit Card</ion-checkbox>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-checkbox id="paymentMethods-checkbox3">Pay</ion-checkbox>\n\n        </ion-item> -->\n\n        <div class="btnBottom">\n\n          <button ion-button color="danger" block (click)="goPayInfo()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n\n        </div>\n\n    </ion-list>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\payment-methods\payment-methods.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PaymentMethodsPage);

//# sourceMappingURL=payment-methods.js.map

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 295;

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 337;

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pre_home_pre_home__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__singup_singup__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


//import { ShowPage } from '../show/show';






var HomePage = (function () {
    function HomePage(navCtrl, 
        //private facebook:  Facebook,
        userService, afAuth) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.afAuth = afAuth;
        this.userData = null;
        this.mensage = '';
        //-identifica y redirecciona usuario logeado.
        this.usuarioLogeado();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // let userDBLoad:any;
        // let goPagePrehomeLoad = false;
        console.log('ionViewDidLoad homePage');
        // this.afAuth.authState.forEach ( data => {
        //   console.info('find User facebook');
        //   this.userService.getUsers()
        //   .forEach((users) => {
        //     users.forEach((user) =>{
        //       if(data.providerData["0"].providerId == "facebook.com"){
        //           if(user['user_email'] == data.providerData["0"].email){
        //           console.log(data.providerData["0"].email);
        //             console.log(user);
        //             console.log('user existen');
        //             userDBLoad = user;
        //             goPagePrehomeLoad= true;
        //           }
        //       }
        //     });
        //     //console.log(userDB);
        //     // console.log(goPagePrehome);
        //     if(goPagePrehomeLoad){
        //       this.goNextPagePrehomeFace(userDBLoad);
        //     }
        //   });
        //   //---
        // });
        // let currentUserAuth = this.afAuth.auth.currentUser;
        // console.log(currentUserAuth);
        // if(this.afAuth.auth){
        //    console.log('user logeadoCurren')
        // }
        // console.dir(this.afAuth.auth);
        // console.dirxml(this.afAuth.auth);
        // let statusAuth= this.afAuth.auth;
        // console.dir(statusAuth.currentUser);
        //this.afAuth.auth.signOut();
    };
    HomePage.prototype.googleir = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pre_home_pre_home__["a" /* PreHomePage */]);
        //this.navCtrl.pop();
        //this.navCtrl.push(PreHomePage); 
    };
    HomePage.prototype.facebookir = function () {
        var _this = this;
        var goPagePrehome = false;
        var userDB;
        var provider = new __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"].FacebookAuthProvider();
        provider.addScope('email');
        __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().signInWithPopup(provider)
            .then(function (res) {
            //console.log(res.user.email);
            console.log(res);
            console.info(JSON.stringify(res));
            //console.log(res);
            _this.userService.getUsers()
                .forEach(function (users) {
                //console.log(users);
                users.forEach(function (user) {
                    //console.log(user);
                    // if(user['user_email'] == res.user.email){
                    //     // console.log('res.user.email');
                    //     // console.log(user);
                    //     userDB = user;
                    //     goPagePrehome= true;
                    // }
                    //dentro de res.user -> hay otros datos de usuario -> email?
                    //if(user.providerData["0"].providerId == "facebook.com"){
                    if (user['user_email'] == res.additionalUserInfo.profile.email) {
                        // console.log('res.additionalUserInfo.profile.email');
                        // console.log(user);
                        userDB = user;
                        goPagePrehome = true;
                    }
                    //}
                });
                //console.log(userDB);
                //console.log(goPagePrehome);
                if (!goPagePrehome) {
                    //   this.goNextPagePrehome(userDB);
                    // }else{
                    _this.singup();
                }
            });
        });
    };
    HomePage.prototype.goNextPagePrehome = function (datos) {
        //console.log(datos);
        //console.log(datos['$key']);
        this.userDataUpdate = { "email": datos['user_email'], "name": datos['user_name'], "pais": datos['user_pais'], "password": datos['user_password'], "picture": datos['user_picture'], "state": datos['user_state'], "tel": datos['user_tel'], "username": datos['user_username'], "verificacion": datos['$key'], "zipcode": datos['user_zipcode'] };
        //console.log(this.userDataUpdate);
        var Data = { 'datos': this.userDataUpdate };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pre_home_pre_home__["a" /* PreHomePage */], Data);
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.singup = function (UserDB) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__singup_singup__["a" /* SingupPage */]);
    };
    HomePage.prototype.usuarioLogeado = function () {
        var _this = this;
        var userDBLoad;
        var goPagePrehomeLoad = false;
        var homeStatus = this.afAuth.authState.subscribe(function (userAuth) {
            if (userAuth) {
                console.info('find user home login');
                var email = userAuth.providerData["0"].email;
                var Userexists = _this.userService.getUserEmailPerfil(email);
                Userexists.forEach(function (users) {
                    users.forEach(function (user) {
                        if (user != undefined && user != null) {
                            userDBLoad = user;
                            goPagePrehomeLoad = true;
                            console.log(goPagePrehomeLoad);
                            if (goPagePrehomeLoad) {
                                _this.goNextPagePrehomeFace(userDBLoad);
                            }
                        }
                    });
                });
            }
            else {
                console.info('find user home login - no');
            }
        });
        // homeStatus.unsubscribe();
    };
    HomePage.prototype.goNextPagePrehomeFace = function (datos) {
        this.userDataUpdate = { "email": datos['user_email'], "name": datos['user_name'], "pais": datos['user_pais'], "password": datos['user_password'], "picture": datos['user_picture'], "state": datos['user_state'], "tel": datos['user_tel'], "username": datos['user_username'], "verificacion": datos['$key'], "zipcode": datos['user_zipcode'] };
        var Data = { 'datos': this.userDataUpdate };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pre_home_pre_home__["a" /* PreHomePage */], Data);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\home\home.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content>\n\n <!--  <h3>Ionic Menu Starter</h3>\n\n\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button> -->\n\n \n\n  <ion-card *ngIf="userData" >\n\n    <ion-card-header> {{userData.username}} </ion-card-header>\n\n    <img [src]= "userData.picture">\n\n    <ion-card-content>\n\n      <p>Email: {{ userData.email}}</p>\n\n      <p>Name: {{ userData.name}}</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <img src="assets/img/LogoJoBid.png" >\n\n    <h5 id="home-heading1" style="">Sing up or Log in</h5>\n\n    <div padding>\n\n      <!-- <button ion-button block color="danger" (click)="googleir()">Log in with Google</button> -->\n\n      <button ion-button block (click)="facebookir()">Sing in with Faceook</button>\n\n    </div>\n\n    <ion-grid class="tabMenu">\n\n     <ion-row>\n\n      <ion-col>\n\n        <button ion-button block color="light" (click)="singup()">\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-icon name="contact"></ion-icon>\n\n            </ion-row>  \n\n            <ion-row> \n\n             <p>sing up</p>\n\n            </ion-row>\n\n          </ion-grid> \n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button block color="light"(click)="login()">\n\n        <ion-grid>\n\n            <ion-row>\n\n              <ion-icon name="lock"></ion-icon>\n\n            </ion-row>  \n\n            <ion-row> \n\n             <p>login</p>\n\n            </ion-row>\n\n          </ion-grid> \n\n        </button>\n\n      </ion-col>\n\n     </ion-row>\n\n    </ion-grid>  \n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cities__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_states_utils__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_states_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_states_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pre_home_pre_home__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the NewAddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NewAddressPage = (function () {
    function NewAddressPage(navCtrl, navParams, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.estados = [];
        this.ciudades = [];
        this.ObjAddress = [];
        var stateName = __WEBPACK_IMPORTED_MODULE_3_states_utils___default.a.getStates();
        var stateNameShort = __WEBPACK_IMPORTED_MODULE_3_states_utils___default.a.getUSPSCodes();
        for (var i = 0; stateName.length > i; i++) {
            this.estados.push({ 'name': stateName[i], 'nameShort': stateNameShort[i] });
        }
        this.userData = this.navParams.get('datos');
        this.userActual = this.userData['verificacion'];
    }
    NewAddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewAddressPage');
    };
    NewAddressPage.prototype.goPreHome = function () {
        var direccion = this.DirecA + ' ' + this.DirecB + ',' + this.DirecC + ',' + this.DirecD;
        console.log(direccion);
        this.ObjAddress.push({ "label": this.label, "name": direccion });
        console.log(this.ObjAddress);
        this.userService.newAddress(this.userActual, this.ObjAddress);
        var DataItem = { 'datos': this.userData };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pre_home_pre_home__["a" /* PreHomePage */], DataItem);
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
        selector: 'page-new-address',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\new-address\new-address.html"*/'<!--\n\n  Generated template for the NewAddressPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>joBit</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<img src="assets/img/LogoJoBid.png">\n\n<h3 class="tittle">New Address</h3>\n\n<form id="signup-form3" class="list" padding>\n\n<ion-item>\n\n  <ion-icon name="document" item-start></ion-icon>\n\n  <ion-input type="text" placeholder="My Address" class="mitad" [(ngModel)]="label" name="label"></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n <ion-icon name="flag" item-start></ion-icon>\n\n  <ion-select class="mitad" [(ngModel)]="state" name="state" (ngModelChange)="setCity()"> \n\n    <ion-option selected>State</ion-option>\n\n    <ion-option *ngFor="let states of estados" value="{{states.nameShort}}">{{states.name}}</ion-option>\n\n  </ion-select>\n\n  <ion-select  class="mitad" [(ngModel)]="zipcode" name="zipcode" (ngModelChange)="setZipCode()"> <!--[(ngModel)]="gaming"-->\n\n    <ion-option selected>....</ion-option>\n\n    <ion-option *ngFor="let city of ciudades" value="{{city.zipcode}}">{{city.name}} - {{city.zipcode}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-icon name="home" item-start></ion-icon>\n\n  <ion-input type="number" placeholder="1234" class="mitad" [(ngModel)]="DirecA" name="DirecA"></ion-input>\n\n  <ion-input type="text" placeholder="avenue" value="" class="mitad" [(ngModel)]="DirecB" name="DirecB"></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-input type="text" placeholder="City" class="mitad spaceIcons" [(ngModel)]="DirecC" name="DirecC" ></ion-input>\n\n  <ion-input type="text" placeholder="NJ 0000" value="{{DirecD}}" class="mitad" [(ngModel)]="DirecD" name="DirecD"></ion-input>\n\n</ion-item>\n\n	<div class="btnBottom">\n\n	   <button  ion-button block color="danger" (click)="goPreHome()" >Enter<ion-icon name="arrow-dropright"></ion-icon></button> \n\n    </div>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\new-address\new-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
], NewAddressPage);

//# sourceMappingURL=new-address.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_professions_service__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_care_services_care__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cleaning_services_cleaning__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_janotorial_services_janotorial__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_transportation_services_transportation__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_food_services_food__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_legal_services_legal__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_beauty_services_beauty__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { CleaningInfoPage } from '../cleaning-info/cleaning-info';








/**
 * Generated class for the CleaningPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CleaningPage = (function () {
    function CleaningPage(navCtrl, navParams, professionsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professionsService = professionsService;
        this.dataService = [];
        this.dataCategoria = [];
        //fil form
        // categoria:any;
        this.certificacion = "";
        this.seguro = "";
        // distancia:any;
        // experiencia:any;
        this.dataClasificaion = { "categoria": "", "certificacion": "", "seguro": "", "distancia": "", "experiencia": "" };
        this.dataService = this.navParams.get('datos');
        console.log(this.dataService['name']);
        this.categoryByProfession(this.dataService['name']);
    }
    CleaningPage.prototype.categoryByProfession = function (nameService) {
        if (nameService === void 0) { nameService = ""; }
        this.nameService = nameService;
        this.dataCategoria = this.professionsService.getCategoryByProfession(nameService);
        console.log(this.dataCategoria);
    };
    CleaningPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CleaningPage');
    };
    CleaningPage.prototype.cleaningInfo = function () {
        // this.dataService['subCategoria']=this.categoria;
        if (this.certificacion != "") {
            this.dataClasificaion['certificacion'] = "true";
        }
        else {
            this.dataClasificaion['certificacion'] = "false";
        }
        if (this.seguro != "") {
            this.dataClasificaion['seguro'] = "true";
        }
        else {
            this.dataClasificaion['seguro'] = "false";
        }
        // this.dataService['distancia']=this.distancia;
        // this.dataService['experiencia']=this.experiencia;
        this.dataService['Clasificacion'] = this.dataClasificaion;
        console.log(this.dataService);
        var DataService = { 'datos': this.dataService };
        //this.navCtrl.push(CleaningInfoPage,DataService);
        switch (this.nameService) {
            case "Care": {
                //this.dataCategoria = ["Child care","Senior care","Family asistance","Dog walker","Personal shopper"];
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__services_care_services_care__["a" /* ServicesCarePage */], DataService);
                break;
            }
            case "Cleaning": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__services_cleaning_services_cleaning__["a" /* ServicesCleaningPage */], DataService);
                //this.dataCategoria = ["Maids","Car washers","Pressure cleaning","Carpet & upholstery cleaning"];
                break;
            }
            case "Janotorial": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__services_janotorial_services_janotorial__["a" /* ServicesJanotorialPage */], DataService);
                //this.dataCategoria = ["Handyman","Pluming","Electrician","Pool cleaning ","Luck smith" ];
                break;
            }
            case "Transportation": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__services_transportation_services_transportation__["a" /* ServicesTransportationPage */], DataService);
                //this.dataCategoria = ["Day VIP chofer","Taxi","Car pool","Moving services","Delivery" ];
                break;
            }
            case "Food & Beverage": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__services_food_services_food__["a" /* ServicesFoodPage */], DataService);
                //this.dataCategoria = ["Bartenders","Waitress","Chef","Runners","Valet parking","Hostess"];
                break;
            }
            case "Legal services": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__services_legal_services_legal__["a" /* ServicesLegalPage */], DataService);
                //this.dataCategoria = ["Notary"];
                break;
            }
            case "Beauty": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__services_beauty_services_beauty__["a" /* ServicesBeautyPage */], DataService);
                //this.dataCategoria = ["Persona trainer","Hair cut and DIY","Menicure and pedicure","Mekeup","Massage"];
                break;
            }
            default: {
                console.log("Invalid choice");
                break;
            }
        }
    };
    return CleaningPage;
}());
CleaningPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\cleaning\cleaning.html"*/'<!--\n\n  Generated template for the CleaningPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="imgCenter">\n\n	 <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n  </div>\n\n	<div class="TituloRojo"><h4>{{dataService.name}}</h4></div>\n\n	<h4>Filter search</h4>\n\n	<p padding>Choose the options for the search of the professional you want to hire</p>\n\n	<form  class="list" >\n\n		<ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n		        <ion-list>\n\n					  	<ion-item>\n\n				      	<ion-select [(ngModel)]="dataClasificaion.categoria" name="categoria" placeholder="Category"> <!--[(ngModel)]="gaming"-->\n\n                 <ion-option *ngFor="let category of dataCategoria" value="{{category}}">{{category}}</ion-option>\n\n				      	</ion-select>\n\n				    	</ion-item>\n\n						</ion-list>\n\n          </ion-col>\n\n			</ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <ion-list radio-group [(ngModel)]="certificacion" name="certificacio" >\n\n			    	<ion-item>\n\n			      	<ion-label>Certificate</ion-label>\n\n    					<ion-radio value="true" ></ion-radio>\n\n				  	</ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-list radio-group [(ngModel)]="seguro" name="seguro">\n\n			   		<ion-item>\n\n			      	<ion-label>Insurance</ion-label>\n\n    					<ion-radio value="true"   ></ion-radio>\n\n				  	</ion-item>\n\n					</ion-list>\n\n        </ion-col>\n\n			</ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-select class="mitad"  [(ngModel)]="dataClasificaion.distancia" name="distancia" placeholder="Distance"> <!--[(ngModel)]="gaming"-->\n\n              <ion-option value="1M">1 Miles</ion-option>\n\n              <ion-option value="2M">2 Miles</ion-option>\n\n              <ion-option value="3M">3 Miles</ion-option>\n\n              <ion-option value="4M">4 Miles</ion-option>\n\n              <ion-option value="5M">5 Miles</ion-option>\n\n              <ion-option value="5MM">&gt; 5 Milla</ion-option>\n\n            </ion-select>\n\n            <ion-select  class="mitad"  [(ngModel)]="dataClasificaion.experiencia" name="experiencia" placeholder="Experience"> <!--[(ngModel)]="gaming"-->\n\n              <ion-option value="1Y" >1 Year</ion-option>\n\n              <ion-option value="2Y" >2 Year</ion-option>\n\n              <ion-option value="3Y" >3 Year</ion-option>\n\n              <ion-option value="3YM" >&gt; 3 Year</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n            <p>If you do not select a filter, will show up all professionals available within 3 miles.</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <div class="btnBottom">\n\n            <button id="verifyYourPhone-button6" ion-button block color="danger" (click)="cleaningInfo()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n\n          </div>\n\n        </ion-col>\n\n			</ion-row>\n\n		</ion-grid>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\cleaning\cleaning.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_professions_service__["a" /* ProfessionsService */]])
], CleaningPage);

//# sourceMappingURL=cleaning.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesCarePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_sale_cleaning_sale__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_offer_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sale_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CareProfessionsService } from '../../services/careProfessions.service';


// import { SaleService } from '../../services/sale.service';
/**
 * Generated class for the ServicesCarePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServicesCarePage = (function () {
    function ServicesCarePage(navCtrl, navParams, 
        // private careProfessionS: CareProfessionsService,
        offerService, saleService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offerService = offerService;
        this.saleService = saleService;
        this.dataService = [];
        //form show
        this.booleamChildCare = false;
        this.booleamSeniorCare = false;
        this.booleamFamilyAsistance = false;
        this.booleamDogWalker = false;
        this.booleamPersonalShopper = false;
        this.fotoDog = '';
        //label comments
        this.labelComments = "More information";
        this.dataService = this.navParams.get('datos');
        this.subCategory = this.dataService['Clasificacion']['categoria'];
        //this.getForm(this.subCategory);
        this.getForm();
    }
    ServicesCarePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesCarePage');
        console.log(localStorage);
    };
    ServicesCarePage.prototype.goCleaningSale = function () {
        switch (this.subCategory) {
            case "Child care": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "numChildren": this.numChildren, "ageChildren": this.ageChildren, "timeChildren": this.timeChildren, "moreInformation": this.moreInformation }];
                break;
            }
            case "Senior care": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "ageSenior": this.ageSenior, "moreInformation": this.moreInformation }];
                break;
            }
            case "Family asistance": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "asistenceFamilia": this.asistenceFamilia, "moreInformation": this.moreInformation }];
                break;
            }
            case "Dog walker": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer2, "raceDog": this.raceDog, "numDog": this.numDog, "fotoDog": this.fotoDog, "moreInformation": this.moreInformation }];
                break;
            }
            case "Personal shopper": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "purchaseShopper": this.purchaseShopper, "placeShopper": this.placeShopper, "moreInformation": this.moreInformation }];
                break;
            }
        }
        this.guardarServicio(this.dataInformacion);
    };
    ServicesCarePage.prototype.guardarServicio = function (datos) {
        console.log(datos);
        this.dataService['Clasificacion']['informacion'] = datos['0'];
        var d = new Date();
        var key = d.getTime();
        var keyOffer = "offer_" + (key);
        console.log(this.dataService);
        //let subCategory=this.dataService['Clasificacion']['categoria'];
        //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
        // this.careProfessionS.newOffer(this.dataService,keyOffer);
        this.offerService.newOffer(this.dataService, keyOffer);
        // console.log(localStorage);
        var maxOffer = datos['0']['maxOffer'];
        var userLocal = localStorage.getItem('verificacion');
        this.saleService.newSale(userLocal, keyOffer, maxOffer);
        // console.log(userLocal);
        // console.log(keyOffer);
        // console.log(maxOffer);
        var DataService = { 'datos': { "dataService": this.dataService, "offer": keyOffer } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */], DataService);
    };
    ServicesCarePage.prototype.getForm = function () {
        switch (this.subCategory) {
            case "Child care": {
                this.booleamChildCare = true;
                this.labelComments = "Special cares";
                break;
            }
            case "Senior care": {
                this.booleamSeniorCare = true;
                this.labelComments = "Special cares";
                break;
            }
            case "Family asistance": {
                this.booleamFamilyAsistance = true;
                this.FamiliaAsistence = [
                    // {"value":"Issues","label":"Issues"},
                    { "value": "ClimateChange", "label": "Climate change" },
                    { "value": "ImmigrationReform", "label": "Immigration reform" },
                    { "value": "EconomicOpportunity", "label": "Economic opportunity" },
                    { "value": "ExpandingEquality", "label": "Expanding equality" },
                    { "value": "GunViolencePrevention", "label": "Gun violence prevention" },
                    { "value": "HealthCare", "label": "Health care" },
                    { "value": "StandWithWomen", "label": "Stand with women" }
                ];
                console.log(this.FamiliaAsistence);
                break;
            }
            case "Dog walker": {
                this.booleamDogWalker = true;
                break;
            }
            case "Personal shopper": {
                this.booleamPersonalShopper = true;
                break;
            }
        }
    };
    return ServicesCarePage;
}());
ServicesCarePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-services-care',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\services-care\services-care.html"*/'<!--\n\n  Generated template for the ServicesCarePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>joBid</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n    <div class="imgCenter">\n\n     <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n      </div>\n\n    <div class="TituloRojo"><h4>{{dataService.name}}</h4></div>\n\n    <h4>Service information</h4>\n\n    <p padding>Describes what the professional requires</p>\n\n  <form id="formPayinfo" class="list">\n\n    <ion-grid>\n\n      <ion-row *ngIf="!booleamDogWalker">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="cash" item-start></ion-icon>\n\n              <ion-input type="number" placeholder="Maximum offer value" [(ngModel)]="maxOffer" name="maxOffer"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleamDogWalker">\n\n        <!-- <ion-row > -->\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n              <ion-input type="number" placeholder="Maximum offer value" [(ngModel)]="maxOffer2" name="maxOffer2"></ion-input>\n\n              <ion-icon name="camera" item-start></ion-icon>\n\n              <input type="hidden" placeholder="Photography" [(ngModel)]="fotoDog" name="fotoDog" />\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-2 id="btn-camera">\n\n            <button ion-button color="danger" outline><ion-icon name="camera"></ion-icon></button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleamChildCare">\n\n        <ion-col col-6>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="man" item-start></ion-icon>\n\n              <ion-input type="number" placeholder="# Children" [(ngModel)]="numChildren" name="numChildren"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-input type="number" placeholder="Age" [(ngModel)]="ageChildren" name="ageChildren"></ion-input>\n\n              <ion-input type="number" placeholder="Time" [(ngModel)]="timeChildren" name="timeChildren"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleamSeniorCare">\n\n      <!-- <ion-row> -->\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="man" item-start></ion-icon>\n\n              <ion-input type="number" placeholder="Age" [(ngModel)]="ageSenior" name="ageSenior"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleamFamilyAsistance">\n\n      <!-- <ion-row> -->\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n                <ion-icon name="albums" item-start></ion-icon>\n\n                <ion-select [(ngModel)]="asistenceFamilia" name="asistenceFamilia" placeholder="Issues">\n\n                    <ion-option *ngFor="let asistence of FamiliaAsistence" value="{{asistence.value}}">{{asistence.label}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleamDogWalker">\n\n      <!-- <ion-row> -->\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n                <ion-icon name="clipboard" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Race" class="mitad" [(ngModel)]="raceDog" name="raceDog"></ion-input>\n\n                <ion-input type="number" placeholder="# Dogs" class="mitad" [(ngModel)]="numDog" name="numDog"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!-- <ion-row *ngIf="booleamDogWalker">\n\n        <ion-col col-10>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="camera" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Photography" [(ngModel)]="fotoDog" name="fotoDog"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-2 id="btn-camera">\n\n            <button ion-button color="danger" outline><ion-icon name="camera"></ion-icon></button>\n\n        </ion-col>\n\n      </ion-row> -->\n\n      <ion-row *ngIf="booleamPersonalShopper">\n\n      <!-- <ion-row> -->\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="basket" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Type of purchase." class="mitad" [(ngModel)]="purchaseShopper" name="purchaseShopper"></ion-input>\n\n              <ion-input type="text" placeholder="Type of place"  class="mitad" [(ngModel)]="placeShopper" name="placeShopper"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n      <ion-row> \n\n        <ion-col>\n\n          <ion-list><ion-item>\n\n            <ion-icon name="paper" item-start></ion-icon>\n\n            <ion-textarea type="text" placeholder="{{labelComments}}" [(ngModel)]="moreInformation" name="moreInformation"></ion-textarea>\n\n          </ion-item></ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col> \n\n          <div class="btnBottom">\n\n            <button ion-button color="danger" block icon-left (click)="goCleaningSale()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n  </ion-content>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\services-care\services-care.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_4__services_sale_service__["a" /* SaleService */]])
], ServicesCarePage);

//# sourceMappingURL=services-care.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningContractorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_info_service_cleaning_info_service__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_show__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_professionals_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sale_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_offer_service__ = __webpack_require__(43);
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
    //
    function CleaningContractorPage(navCtrl, navParams, alertCtrl, professionalsService, saleService, offerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.professionalsService = professionalsService;
        this.saleService = saleService;
        this.offerService = offerService;
        //- default parametros
        this.imgJobDefault = "assets/img/professions/cleaning.png";
        this.galleryJobDefault = "assets/img/gallery.png";
        this.keyComments = [];
    }
    CleaningContractorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CleaningContractorPage');
        this.datasService = this.navParams.get('datos');
        this.dataService = this.datasService['dataService'];
        this.keyOffer = this.datasService['offer'];
        this.worker = this.datasService['win'];
        this.userActual = localStorage.getItem('verificacion');
        this.sale = this.worker['offer'];
        console.log(this.datasService);
        console.log(this.dataService);
        console.log(this.keyOffer);
        console.log(this.worker);
        console.log(this.userActual);
        this.getProfessionals(this.worker['id']);
    };
    CleaningContractorPage.prototype.goCleaningInfoService = function () {
        console.info('goCleaningContractor');
        //--set status offer y sale
        this.saleService.setStatus(this.userActual, this.keyOffer, 'Waiting for the professional');
        this.offerService.setStatus(this.keyOffer, 'Waiting for the professional');
        //--set datos
        this.saleService.setSale(this.userActual, this.keyOffer, this.sale);
        this.offerService.setSale(this.keyOffer, this.sale);
        //- saved user in offer
        this.offerService.setUser(this.keyOffer, this.userActual);
        //- saved provider contract
        this.offerService.setProvider(this.keyOffer, this.worker.id);
        this.saleService.setProvider(this.userActual, this.keyOffer, this.worker.id);
        var DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer, "win": this.worker } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cleaning_info_service_cleaning_info_service__["a" /* CleaningInfoServicePage */], DataService);
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
                        //--set status offer y sale
                        _this.saleService.setStatus(_this.userActual, _this.keyOffer, 'Cancelled');
                        _this.offerService.setStatus(_this.keyOffer, 'Cancelled');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__show_show__["a" /* ShowPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    CleaningContractorPage.prototype.getProfessionals = function (keyWork) {
        var _this = this;
        this.professionalsService.getProfessional(keyWork)
            .forEach(function (professional) {
            _this.workerInfo = professional;
        });
        this.mostrarWorkInfo();
    };
    CleaningContractorPage.prototype.mostrarWorkInfo = function () {
        console.log(this.workerInfo);
        this.ImgJobr = this.imgJobDefault;
        this.galleryAJobr = this.galleryJobDefault;
        this.galleryBJobr = this.galleryJobDefault;
        this.galleryCJobr = this.galleryJobDefault;
        this.galleryDJobr = this.galleryJobDefault;
        // let galleryJobr= this.galleryJobDefault;
        this.nameJobr = this.workerInfo['prof_name'];
        this.certificateJobr = this.workerInfo['prof_certificate'];
        this.insuranceJobr = this.workerInfo['prof_insurance'];
        this.presentationJobr = this.workerInfo['prof_presentation'];
        this.commentsJobr = this.workerInfo['prof_comments'];
        if (this.workerInfo['prof_picture'] && this.workerInfo['prof_picture'] != '') {
            this.ImgJobr = this.workerInfo['prof_picture'];
        }
        if (this.workerInfo['prof_galleryA'] && this.workerInfo['prof_galleryA'] != '') {
            this.galleryAJobr = this.workerInfo['prof_galleryA'];
        }
        if (this.workerInfo['prof_galleryB'] && this.workerInfo['prof_galleryB'] != '') {
            this.galleryBJobr = this.workerInfo['prof_galleryB'];
        }
        if (this.workerInfo['prof_galleryC'] && this.workerInfo['prof_galleryC'] != '') {
            this.galleryCJobr = this.workerInfo['prof_galleryC'];
        }
        if (this.workerInfo['prof_galleryD'] && this.workerInfo['prof_galleryD'] != '') {
            this.galleryDJobr = this.workerInfo['prof_galleryD'];
        }
        for (var key in this.commentsJobr) {
            console.log(this.commentsJobr[key]);
            // console.log(commentsJobr[key]['user_username']);
            // console.log(commentsJobr[key]['comm_qualification']);
            // // console.log(commentsJobr[key]['comm_description']);
            // this.keyComments.push(key);
            this.keyComments.push({ "user": this.commentsJobr[key]['user_username'], qualification: this.commentsJobr[key]['comm_qualification'], "description": this.commentsJobr[key]['comm_description'] });
        }
        this.commentsJobr = this.workerInfo['prof_comments'];
        // this.keyComments = Object.keys(this.commentsJobr);
        console.log(this.keyComments);
    };
    return CleaningContractorPage;
}());
CleaningContractorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning-contractor',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\cleaning-contractor\cleaning-contractor.html"*/'<!--\n\n  Generated template for the CleaningContractorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<div class="barraRoja">\n\n	<h4>Bid winner</h4>\n\n</div>\n\n<div class="saleBox">\n\n	<h1>${{sale}}</h1>\n\n</div>\n\n<ion-grid>\n\n	<ion-row>\n\n		<ion-col col-3>\n\n			<ion-list>\n\n				<ion-item>\n\n					<ion-avatar>\n\n						<img src="{{ImgJobr}}">\n\n			    </ion-avatar>\n\n		  	</ion-item>\n\n			</ion-list>\n\n	  </ion-col>\n\n	  <ion-col col-9>\n\n			<ion-row>\n\n				<ion-col>\n\n					<h4>{{nameJobr}}</h4>\n\n	  			<img src="assets/img/Estrellas.png" alt="">\n\n	  		</ion-col>\n\n	  	</ion-row>	\n\n	  	<ion-row>	\n\n				<ion-col col-6 class="col-height"  *ngIf="certificateJobr" >\n\n					<ion-list><ion-item>\n\n						<ion-label>Certificate</ion-label>\n\n						<ion-radio checked="true" value="Certificate"></ion-radio>\n\n					</ion-item></ion-list>\n\n			  </ion-col>\n\n			  <ion-col col-6 class="col-height"  *ngIf="insuranceJobr">\n\n					<ion-list>\n\n						<ion-item>\n\n							<ion-label>Insurance</ion-label>\n\n							<ion-radio checked="true" value="Insurance"></ion-radio>\n\n				  	</ion-item>\n\n					</ion-list>\n\n			  </ion-col>\n\n	  	</ion-row>	\n\n	  </ion-col>\n\n	</ion-row>\n\n</ion-grid>\n\n<div  class="divScroll" padding>\n\n	<h5>Presentation</h5>\n\n	<p>{{presentationJobr}}</p>\n\n	<h5>Gallery</h5>\n\n	<ion-grid>\n\n		<ion-row>\n\n			<ion-col col-6>\n\n				<img src="{{galleryAJobr}}" alt="">\n\n			</ion-col>\n\n			<ion-col col-6>\n\n				<img src="{{galleryBJobr}}" alt="">\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col col-6>\n\n				<img src="{{galleryCJobr}}" alt="">\n\n			</ion-col>\n\n			<ion-col col-6>\n\n				<img src="{{galleryDJobr}}" alt="">\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n	<h5>Comments</h5>\n\n<!-- <div class="comments" *ngFor="let Key of keyComments" > -->\n\n	<!-- {{Key}} -->\n\n	<!-- {{commentsJobr[key][\'user_username\']}}  -->\n\n	<!-- {{key.user}}  -->\n\n\n\n	<!-- {{commentsJobr[KeyComment][\'user_username\']}}\n\n	{{commentsJobr[KeyComment][\'comm_qualification\']}}\n\n	{{commentsJobr[KeyComment][\'comm_description\']}} -->\n\n<!-- </div> -->\n\n<div class="comments">\n\n	<h6>Luis Lorem <img src="assets/img/Estrellas.png" alt=""></h6>\n\n	 <p>Odit, cupiditate. Quibusdam ducimus minus incidunt voluptas consequatur odit, adipisci eveniet laborum obcaecati labore! Sapiente repellat ipsum in autem fuga sint enim recusandae incidunt tenetur corporis neque totam, quam sequi placeat cupiditate, inventore! Alias repudiandae ducimus laudantium nemo quisquam, quod sint et quam, id ipsum magnam veniam amet sit a voluptatibus, similique ipsa voluptatem voluptates velit quo. Quidem odio a nemo sit illum. </p>\n\n</div>\n\n<div class="comments">\n\n	<h6>Melisa Lorem <img src="assets/img/Estrellas.png" alt=""></h6>\n\n	 <p>Odit, cupiditate. Quibusdam ducimus minus incidunt voluptas consequatur odit, adipisci eveniet laborum obcaecati labore! Sapiente repellat ipsum in autem fuga sint enim recusandae incidunt tenetur corporis neque totam, quam sequi placeat cupiditate, inventore! Alias repudiandae ducimus laudantium nemo quisquam, quod sint et quam, id ipsum magnam veniam amet sit a voluptatibus, similique ipsa voluptatem voluptates velit quo. Quidem odio a nemo sit illum. </p>\n\n</div>\n\n\n\n</div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n     <ion-row>\n\n      <ion-col>\n\n        <button id="btnContractor" ion-button block color="light" (click)="goCleaningInfoService()">Hire\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button id="btnCancel" ion-button block color="light"(click)="goIndex()">Cancel service\n\n        </button>\n\n      </ion-col>\n\n     </ion-row>\n\n    </ion-grid>  \n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\cleaning-contractor\cleaning-contractor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__services_professionals_service__["a" /* ProfessionalsService */],
        __WEBPACK_IMPORTED_MODULE_5__services_sale_service__["a" /* SaleService */], __WEBPACK_IMPORTED_MODULE_6__services_offer_service__["a" /* OfferService */]])
], CleaningContractorPage);

//# sourceMappingURL=cleaning-contractor.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

var SaleService = (function () {
    function SaleService(afDB) {
        this.afDB = afDB;
        this.dataCategoria = [];
        this.dataService = [];
    }
    //---new sale
    SaleService.prototype.newSale = function (keyUser, keySale, maxOffer) {
        // let key = undefined;
        // //default star
        // let star = '3';
        // console.log('key:'+key);
        // console.log('keyNew:'+keyNew);
        // if(keyNew && keyNew != null  && keyNew != undefined){
        // 	keySale = keyNew;
        // }else{
        // 	var d = new Date();
        // 	key = d.getTime();
        // 	var keySale = "sale_"+(key);
        // }
        console.log('metodoNewSale');
        console.log(keyUser);
        console.log(keySale);
        console.log(maxOffer);
        this.afDB.object('/sale/' + keyUser + '/' + keySale).set({ "status": "Published", "sale": maxOffer, "providers": { "prof_1": { "offer": "87" }, "prof_2": { "offer": "65" } } }).catch(function (error) { console.log('errorNewSale'); console.log(error); console.log(JSON.stringify(error)); });
        //this.afDB.object('/sale/'+keyUser+'/'+keySale).set({"status":"new","sale":maxOffer});
        console.info('sale create');
    };
    SaleService.prototype.getSale = function (keyUser, keySale) {
        return this.afDB.object('/sale/' + keyUser + '/' + keySale);
    };
    SaleService.prototype.getSales = function (keyUser) {
        return this.afDB.object('/sale/' + keyUser);
    };
    SaleService.prototype.setStatus = function (keyUser, keyOffer, status) {
        return this.afDB.object('/sale/' + keyUser + '/' + keyOffer + '/status/').set(status).catch(function (error) { console.log('error sale setstatus'); console.log(error); console.log(JSON.stringify(error)); });
    };
    SaleService.prototype.setSale = function (keyUser, keyOffer, sale) {
        return this.afDB.object('/sale/' + keyUser + '/' + keyOffer + '/sale/').set(sale).catch(function (error) { console.log('error sale setSale'); console.log(error); console.log(JSON.stringify(error)); });
    };
    SaleService.prototype.getStatus = function (keyUser, keyOffer) {
        return this.afDB.object('/sale/' + keyUser + '/' + keyOffer + '/status/');
    };
    SaleService.prototype.setProvider = function (keyUser, keyOffer, Provider) {
        return this.afDB.object('/sale/' + keyUser + '/' + keyOffer + '/Profession/').set(Provider).catch(function (error) { console.log('error offer setUser'); console.log(error); console.log(JSON.stringify(error)); });
    };
    return SaleService;
}());
SaleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], SaleService);

//# sourceMappingURL=sale.service.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningInfoServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_vote_cleaning_vote__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sale_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_offer_service__ = __webpack_require__(43);
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
    function CleaningInfoServicePage(navCtrl, navParams, professionalsService, saleService, offerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professionalsService = professionalsService;
        this.saleService = saleService;
        this.offerService = offerService;
        //-- default
        this.imgJobDefault = "assets/img/professions/cleaning.png";
        //-datos BD
        this.status = "Waiting for the professional";
        this.segundos = 10;
        this.cont = 1;
    }
    CleaningInfoServicePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CleaningInfoServicePage');
        this.datasService = this.navParams.get('datos');
        this.dataService = this.datasService['dataService'];
        this.keyOffer = this.datasService['offer'];
        this.worker = this.datasService['win'];
        this.userActual = localStorage.getItem('verificacion');
        this.sale = this.worker['offer'];
        this.information = this.dataService['Clasificacion']['informacion']['moreInformation'];
        this.serviceCode = this.keyOffer.substring(6);
        console.log(this.datasService);
        console.log(this.dataService);
        console.log(this.keyOffer);
        console.log(this.worker);
        console.log(this.userActual);
        this.getProfessionals(this.worker['id']);
        this.saleService.getStatus(this.userActual, this.keyOffer).subscribe(function (resul) {
            console.log(resul);
            console.log(resul['$value']);
            _this.status = resul['$value'];
            if (resul['$value'] == 'In progress') {
                _this.status = 'Service in progress';
            }
            if (resul['$value'] == 'Finalized') {
                _this.status = 'Service completed';
            }
        });
        //-provicional
        this.startTimer();
    };
    CleaningInfoServicePage.prototype.goCleaningVote = function () {
        var DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer, "win": this.worker } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cleaning_vote_cleaning_vote__["a" /* CleaningVotePage */], DataService);
    };
    CleaningInfoServicePage.prototype.getProfessionals = function (keyWork) {
        var _this = this;
        this.professionalsService.getProfessional(keyWork)
            .forEach(function (professional) {
            _this.workerInfo = professional;
        });
        this.mostrarWorkInfo();
    };
    CleaningInfoServicePage.prototype.mostrarWorkInfo = function () {
        console.log(this.workerInfo);
        this.ImgJobr = this.imgJobDefault;
        // let galleryJobr= this.galleryJobDefault;
        this.nameJobr = this.workerInfo['prof_name'];
        this.certificateJobr = this.workerInfo['prof_certificate'];
        this.insuranceJobr = this.workerInfo['prof_insurance'];
        if (this.workerInfo['prof_picture'] && this.workerInfo['prof_picture'] != '') {
            this.ImgJobr = this.workerInfo['prof_picture'];
        }
    };
    //-temporal
    CleaningInfoServicePage.prototype.modificarStatus = function () {
        if (this.cont == 2) {
            this.saleService.setStatus(this.userActual, this.keyOffer, 'Finalized');
            this.offerService.setStatus(this.keyOffer, 'Finalized');
        }
        if (this.cont == 1) {
            this.saleService.setStatus(this.userActual, this.keyOffer, 'In progress');
            this.offerService.setStatus(this.keyOffer, 'In progress');
            this.cont = 2;
        }
    };
    //--- timer
    CleaningInfoServicePage.prototype.startTimer = function () {
        var _this = this;
        this.objNodeTimer = setInterval(function () { return _this.timer(); }, 1000);
    };
    CleaningInfoServicePage.prototype.timer = function () {
        // console.log(this.segundos);
        // console.log(this.status);
        if (this.status == 'Service completed' && this.segundos == 1) {
            clearInterval(this.objNodeTimer);
            console.log('servicion fin');
            this.goCleaningVote();
        }
        else {
            if (--this.segundos < 0) {
                this.modificarStatus();
                this.segundos = 10;
            }
        }
    };
    return CleaningInfoServicePage;
}());
CleaningInfoServicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning-info-service',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\cleaning-info-service\cleaning-info-service.html"*/'<!--\n\n  Generated template for the CleaningInfoServicePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<img src="assets/img/map.png" class="imageFull">\n\n<div class="barraGris">\n\n	<h4>Service information</h4>\n\n</div>\n\n<h3>Service code: #{{serviceCode}}</h3>\n\n<p class="textoCentrado">State</p>\n\n<h6 id="estadoServicio">{{status}}</h6>\n\n<div padding>\n\n	<p><span class="textRed">*Amount to be paid: </span>${{sale}}</p>\n\n	<p><span class="textRed">Description:</span></p>\n\n	<p>{{information}}</p>\n\n	<div class="space"></div>\n\n	<p><span class="textRed">Professional data</span></p>\n\n	<ion-grid>\n\n	<ion-row>\n\n	  <ion-col col-3>\n\n	    <ion-list>\n\n	    	<ion-item>\n\n	      	<ion-avatar>\n\n			      <img src="{{ImgJobr}}">\n\n			    </ion-avatar>\n\n		  	</ion-item>\n\n			</ion-list>\n\n	  </ion-col>\n\n	  <ion-col col-9>\n\n	  	<ion-row>\n\n	  		<ion-col>\n\n	  			<h4>{{nameJobr}}</h4>\n\n	  			<img src="assets/img/Estrellas.png" alt="">\n\n	  		</ion-col>\n\n	  	</ion-row>	\n\n			<ion-row>	\n\n					<ion-col col-6 *ngIf="certificateJobr">\n\n						<ion-list><ion-item>\n\n							<ion-label>Certificate</ion-label>\n\n							<ion-radio checked="true" value="Certificate"></ion-radio>\n\n						</ion-item></ion-list>\n\n					</ion-col>\n\n					<ion-col col-6 *ngIf="insuranceJobr">\n\n						<ion-list>\n\n							 <ion-item>\n\n								<ion-label>Insurance</ion-label>\n\n								<ion-radio checked="true" value="Insurance"></ion-radio>\n\n							</ion-item>\n\n						</ion-list>\n\n					</ion-col>\n\n				</ion-row>	\n\n			</ion-col>\n\n		</ion-row>\n\n</ion-grid>\n\n</div>\n\n\n\n<!-- <div class="btnBottom">\n\n	<button id="verifyYourPhone-button6" ion-button block color="danger" (click)="goCleaningVote()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n\n</div> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\cleaning-info-service\cleaning-info-service.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__["a" /* ProfessionalsService */],
        __WEBPACK_IMPORTED_MODULE_4__services_sale_service__["a" /* SaleService */], __WEBPACK_IMPORTED_MODULE_5__services_offer_service__["a" /* OfferService */]])
], CleaningInfoServicePage);

//# sourceMappingURL=cleaning-info-service.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningVotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_ok_cleaning_ok__ = __webpack_require__(422);
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
        this.datasService = this.navParams.get('datos');
        this.dataService = this.datasService['dataService'];
        this.keyOffer = this.datasService['offer'];
        this.worker = this.datasService['win'];
        this.userActual = localStorage.getItem('verificacion');
        console.log(this.datasService);
        console.log(this.dataService);
        console.log(this.keyOffer);
        console.log(this.worker);
        console.log(this.userActual);
    };
    CleaningVotePage.prototype.goCleaningOk = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cleaning_ok_cleaning_ok__["a" /* CleaningOkPage */]);
    };
    return CleaningVotePage;
}());
CleaningVotePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning-vote',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\cleaning-vote\cleaning-vote.html"*/'<!--\n\n  Generated template for the CleaningVotePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<div class="barraRoja">\n\n	<h4>Service qualification</h4>\n\n</div>\n\n<p>Now you can qualify the professional and leave a comment of the service received.</p>\n\n<form id="signup-form3" class="list" padding>\n\n  <ion-list >\n\n    <ion-item>\n\n			<h4>Qualification <img src="assets/img/Estrellas.png" alt=""></h4>\n\n    </ion-item>\n\n    <ion-item>\n\n    <input type="text">\n\n    	<ion-textarea placeholder="Comments"></ion-textarea>\n\n    </ion-item>\n\n  </ion-list>\n\n	<div class="btnBottom">\n\n    <button ion-button color="danger" block icon-left (click)="goCleaningOk()">Qualify and pay<ion-icon name="arrow-dropright"></ion-icon></button>\n\n  </div>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\cleaning-vote\cleaning-vote.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CleaningVotePage);

//# sourceMappingURL=cleaning-vote.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningOkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_show__ = __webpack_require__(98);
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
        selector: 'page-cleaning-ok',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\cleaning-ok\cleaning-ok.html"*/'<!--\n\n  Generated template for the CleaningOkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<img src="assets/img/LogoJoBid.png" />\n\n	<div class="centrarIcon">\n\n		<ion-icon class="icon-ok" name="checkmark-circle"></ion-icon>\n\n	</div>\n\n	<p>Your service has been successfully completed and the value of $ 81 has been deducted from your credit card.</p>\n\n	 <div class="btnBottom" padding>\n\n    <button ion-button color="danger" block (click)="goIndex()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\cleaning-ok\cleaning-ok.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CleaningOkPage);

//# sourceMappingURL=cleaning-ok.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesCleaningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_sale_cleaning_sale__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_offer_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sale_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CleaningProfessionsService } from '../../services/cleaningProfessions.service';


/**
 * Generated class for the ServicesCleaningPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServicesCleaningPage = (function () {
    function ServicesCleaningPage(navCtrl, navParams, 
        // private cleanProfessionS: CleaningProfessionsService,
        offerService, saleService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offerService = offerService;
        this.saleService = saleService;
        this.dataService = [];
        //form show
        this.booleanMaids = false;
        this.booleanCarWashers = false;
        this.booleanPressureCleaning = false;
        this.booleanCarpetCleaning = false;
        this.foto = '';
        this.dataService = this.navParams.get('datos');
        this.subCategory = this.dataService['Clasificacion']['categoria'];
        //this.getForm(this.subCategory);
        this.getForm();
    }
    ServicesCleaningPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesCleaningPage');
    };
    ServicesCleaningPage.prototype.goCleaningSale = function () {
        switch (this.subCategory) {
            case "Maids": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "placeMaid": this.placeMaid, "roomMaid": this.roomMaid, "batMaid": this.batMaid, "foto": this.foto, "moreInformation": this.moreInformation }];
                break;
            }
            case "Car washers": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "typeCar": this.typeCar, "brandCar": this.brandCar, "foto": this.foto, "moreInformation": this.moreInformation }];
                break;
            }
            case "Pressure cleaning": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "placeClean": this.placeClean, "mtsClean": this.mtsClean, "foto": this.foto, "moreInformation": this.moreInformation }];
                break;
            }
            case "Carpet & upholstery cleaning": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "typeCarpet": this.typeCarpet, "mtsCarpet": this.mtsCarpet, "foto": this.foto, "moreInformation": this.moreInformation }];
                break;
            }
        }
        this.guardarServicio(this.dataInformacion);
    };
    ServicesCleaningPage.prototype.guardarServicio = function (datos) {
        // console.log(datos);
        this.dataService['Clasificacion']['informacion'] = datos['0'];
        var d = new Date();
        var key = d.getTime();
        var keyOffer = "offer_" + (key);
        // console.log(this.dataService);
        // let subCategory=this.dataService['Clasificacion']['categoria'];
        //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
        // this.cleanProfessionS.newOffer(this.dataService,keyOffer);
        this.offerService.newOffer(this.dataService, keyOffer);
        // console.log(localStorage);
        var maxOffer = datos['0']['maxOffer'];
        var userLocal = localStorage.getItem('verificacion');
        this.saleService.newSale(userLocal, keyOffer, maxOffer);
        // console.log(userLocal);
        // console.log(keyOffer);
        // console.log(maxOffer);
        var DataService = { 'datos': { "dataService": this.dataService, "offer": keyOffer } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */], DataService);
    };
    ServicesCleaningPage.prototype.getForm = function () {
        switch (this.subCategory) {
            case "Maids": {
                this.booleanMaids = true;
                break;
            }
            case "Car washers": {
                this.booleanCarWashers = true;
                break;
            }
            case "Pressure cleaning": {
                this.booleanPressureCleaning = true;
                break;
            }
            case "Carpet & upholstery cleaning": {
                this.booleanCarpetCleaning = true;
                break;
            }
        }
    };
    return ServicesCleaningPage;
}());
ServicesCleaningPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-services-cleaning',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\services-cleaning\services-cleaning.html"*/'<!--\n\n  Generated template for the ServicesCleaningPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>joBid</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n    <div class="imgCenter">\n\n     <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n      </div>\n\n    <div class="TituloRojo"><h4>{{dataService.name}}</h4></div>\n\n    <h4>Service information</h4>\n\n    <p padding>Describes what the professional requires</p>\n\n  <form id="formPayinfo" class="list">\n\n    <ion-grid>\n\n      <ion-row>\n\n          <!-- <ion-row > -->\n\n            <ion-col col-10>\n\n              <ion-list>\n\n                <ion-item>\n\n                <ion-input type="number" placeholder="Maximum offer value" [(ngModel)]="maxOffer" name="maxOffer"></ion-input>\n\n                <ion-icon name="camera" item-start></ion-icon>\n\n                <input type="hidden" placeholder="Photography" [(ngModel)]="fotoDog" name="fotoDog" />\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col col-2 id="btn-camera">\n\n              <button ion-button color="danger" outline><ion-icon name="camera"></ion-icon></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      <ion-row *ngIf="booleanMaids">\n\n      <!-- <ion-row> -->\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n                <ion-icon name="map" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Type of place" [(ngModel)]="placeMaid" name="placeMaid"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanMaids">\n\n      <!-- <ion-row> -->\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="shirt" item-start></ion-icon>\n\n              <ion-input type="number" placeholder="# Rooms" class="mitad" [(ngModel)]="roomMaid" name="roomMaid"></ion-input>\n\n              <ion-input type="number" placeholder="# bathrooms" value="" class="batMaid" [(ngModel)]="batMaid" name="DirecA"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanCarWashers">\n\n      <!-- <ion-row> -->\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="car" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Type of car" class="mitad" [(ngModel)]="typeCar" name="typeCar"></ion-input>\n\n              <ion-input type="text" placeholder="Brand" class="mitad"  [(ngModel)]="brandCar" name="brandCar"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanPressureCleaning">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="shirt" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="What to clean" class="mitad"[(ngModel)]="placeClean" name="placeClean"></ion-input>\n\n              <ion-input type="number" placeholder="Mts" class="mitad" [(ngModel)]="mtsClean" name="mtsClean"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanCarpetCleaning">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="shirt" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Type of carpet" class="mitad"[(ngModel)]="typeCarpet" name="typeCarpet"></ion-input>\n\n              <ion-input type="number" placeholder="Mts" class="mitad" [(ngModel)]="mtsCarpet" name="mtsCarpet"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="rowArea"> \n\n        <ion-col>\n\n          <ion-list><ion-item>\n\n            <ion-icon name="paper" item-start></ion-icon>\n\n            <ion-textarea type="text" placeholder="More information" [(ngModel)]="moreInformation" name="moreInformation"></ion-textarea>\n\n          </ion-item></ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col> \n\n          <div class="btnBottom">\n\n            <button ion-button color="danger" block icon-left (click)="goCleaningSale()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n  </ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\services-cleaning\services-cleaning.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_4__services_sale_service__["a" /* SaleService */]])
], ServicesCleaningPage);

//# sourceMappingURL=services-cleaning.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesJanotorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_offer_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cleaning_sale_cleaning_sale__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sale_service__ = __webpack_require__(42);
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
 * Generated class for the ServicesJanotorialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServicesJanotorialPage = (function () {
    function ServicesJanotorialPage(navCtrl, navParams, offerService, saleService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offerService = offerService;
        this.saleService = saleService;
        this.dataService = [];
        //form show
        this.booleanHandyman = false;
        this.booleanPluming = false;
        this.booleanElectrician = false;
        this.booleanPoolSleaning = false;
        this.booleanLuckSmith = false;
        this.foto = '';
        this.dataService = this.navParams.get('datos');
        console.log(this.dataService);
        this.subCategory = this.dataService['Clasificacion']['categoria'];
        //this.getForm(this.subCategory);
        this.getForm();
    }
    ServicesJanotorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesJanotorialPage');
    };
    ServicesJanotorialPage.prototype.goCleaningSale = function () {
        console.log(this.subCategory);
        switch (this.subCategory) {
            case "Handyman": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer2, "jobHand": this.jobHand, "mtsHand": this.mtsHand, "foto": this.foto, "moreInformation": this.moreInformation,
                    }];
                break;
            }
            case "Pluming": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer2, "roomPluming": this.roomPluming, "mtsPluming": this.mtsPluming, "foto": this.foto, "moreInformation": this.moreInformation,
                    }];
                break;
            }
            case "Electrician": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer2, "roomElec": this.roomElec, "mtsElect": this.mtsElect, "foto": this.foto, "moreInformation": this.moreInformation,
                    }];
                break;
            }
            case "Pool cleaning": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer2, "typePool": this.typePool, "mtsPool": this.mtsPool, "foto": this.foto, "moreInformation": this.moreInformation,
                    }];
                break;
            }
            case "Luck smith": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "lockLuck": this.lockLuck, "moreInformation": this.moreInformation,
                    }];
                break;
            }
        }
        console.log(this.dataInformacion);
        this.guardarServicio(this.dataInformacion);
    };
    ServicesJanotorialPage.prototype.guardarServicio = function (datos) {
        console.log(datos);
        console.log(this.dataService);
        this.dataService['Clasificacion']['informacion'] = datos['0'];
        var d = new Date();
        var key = d.getTime();
        var keyOffer = "offer_" + (key);
        console.log(this.dataService);
        // let subCategory=this.dataService['Clasificacion']['categoria'];
        //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
        //this.saleService.newSale();
        this.offerService.newOffer(this.dataService, keyOffer);
        // console.log(localStorage);
        var maxOffer = datos['0']['maxOffer'];
        var userLocal = localStorage.getItem('verificacion');
        this.saleService.newSale(userLocal, keyOffer, maxOffer);
        // console.log(userLocal);
        // console.log(keyOffer);
        // console.log(maxOffer);
        var DataService = { 'datos': { "dataService": this.dataService, "offer": keyOffer } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */], DataService);
    };
    ServicesJanotorialPage.prototype.getForm = function () {
        switch (this.subCategory) {
            case "Handyman": {
                this.booleanHandyman = true;
                this.Jobs = [
                    { "value": "Mowing", "label": "Mowing" },
                    { "value": "CleanGutters", "label": "Clean gutters" }
                ];
                console.log(this.Jobs);
                break;
            }
            case "Pluming": {
                this.booleanPluming = true;
                break;
            }
            case "Electrician": {
                this.booleanElectrician = true;
                break;
            }
            case "Pool cleaning": {
                this.booleanPoolSleaning = true;
                break;
            }
            case "Luck smith": {
                this.booleanLuckSmith = true;
                break;
            }
        }
    };
    return ServicesJanotorialPage;
}());
ServicesJanotorialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-services-janotorial',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\services-janotorial\services-janotorial.html"*/'<!--\n\n  Generated template for the ServicesJanotorialPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    \n\n      <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>joBid</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n    \n\n    \n\n    <ion-content>\n\n      <div class="imgCenter">\n\n       <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n        </div>\n\n      <div class="TituloRojo"><h4>{{dataService.name}}</h4></div>\n\n      <h4>Service information</h4>\n\n      <p padding>Describes what the professional requires</p>\n\n    <form id="formPayinfo" class="list">\n\n      <ion-grid>\n\n        <ion-row *ngIf="booleanLuckSmith">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="cash" item-start></ion-icon>\n\n                <ion-input type="number" placeholder="Maximum offer value" [(ngModel)]="maxOffer" name="maxOffer"></ion-input>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="!booleanLuckSmith">\n\n            <!-- <ion-row > -->\n\n              <ion-col col-10>\n\n                <ion-list>\n\n                  <ion-item>\n\n                  <ion-input type="number" placeholder="Maximum offer value" [(ngModel)]="maxOffer2" name="maxOffer2"></ion-input>\n\n                  <ion-icon name="camera" item-start></ion-icon>\n\n                  <input type="hidden" placeholder="Photography" [(ngModel)]="fotoDog" name="fotoDog" />\n\n                </ion-item>\n\n              </ion-list>\n\n            </ion-col>\n\n            <ion-col col-2 id="btn-camera">\n\n                <button ion-button color="danger" outline><ion-icon name="camera"></ion-icon></button>\n\n            </ion-col>\n\n          </ion-row>\n\n        <ion-row *ngIf="booleanHandyman">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="build" item-start></ion-icon>\n\n                <ion-select [(ngModel)]="jobHand" name="jobHand" placeholder="Type of job">\n\n                    <ion-option *ngFor="let job of Jobs" value="{{job.value}}">{{job.label}}</ion-option>\n\n                </ion-select>\n\n                <ion-input type="text" placeholder="Type of job" class="mitad"[(ngModel)]="jobHand" name="jobHand"></ion-input>\n\n                <ion-input type="number" placeholder="Mts" class="mitad" [(ngModel)]="mtsHand" name="mtsHand"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanPluming">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="build" item-start></ion-icon>\n\n                <ion-input type="number" placeholder="# Rooms" class="mitad"[(ngModel)]="roomPluming" name="roomPluming"></ion-input>\n\n                <ion-input type="number" placeholder="Mts" class="mitad" [(ngModel)]="mtsPluming" name="mtsPluming"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanElectrician">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="build" item-start></ion-icon>\n\n                <ion-input type="number" placeholder="# Rooms" class="mitad"[(ngModel)]="roomElec" name="roomElec"></ion-input>\n\n                <ion-input type="number" placeholder="Mts" class="mitad" [(ngModel)]="mtsElect" name="mtsElect"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanPoolSleaning">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="build" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Pool type" class="mitad"[(ngModel)]="typePool" name="typePool"></ion-input>\n\n                <ion-input type="number" placeholder="Mts" class="mitad" [(ngModel)]="mtsPool" name="mtsPool"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanLuckSmith">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="build" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Type of lock" [(ngModel)]="lockLuck" name="lockLuck"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="rowArea"> \n\n          <ion-col>\n\n            <ion-list><ion-item>\n\n              <ion-icon name="paper" item-start></ion-icon>\n\n              <ion-textarea type="text" placeholder="More information" [(ngModel)]="moreInformation" name="moreInformation"></ion-textarea>\n\n            </ion-item></ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col> \n\n            <div class="btnBottom">\n\n              <button ion-button color="danger" block icon-left (click)="goCleaningSale()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n    </ion-content>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\services-janotorial\services-janotorial.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_4__services_sale_service__["a" /* SaleService */]])
], ServicesJanotorialPage);

//# sourceMappingURL=services-janotorial.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesTransportationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_offer_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cleaning_sale_cleaning_sale__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sale_service__ = __webpack_require__(42);
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
 * Generated class for the ServicesTransportationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServicesTransportationPage = (function () {
    function ServicesTransportationPage(navCtrl, navParams, offerService, saleService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offerService = offerService;
        this.saleService = saleService;
        this.dataService = [];
        //form show
        this.booleanDayVIPChofer = false;
        this.booleanTaxi = false;
        this.booleanCarPool = false;
        this.booleanMovingServices = false;
        this.booleanDelivery = false;
        this.dataService = this.navParams.get('datos');
        console.log(this.dataService);
        this.subCategory = this.dataService['Clasificacion']['categoria'];
        //this.getForm(this.subCategory);
        this.getForm();
    }
    ServicesTransportationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesTransportationPage');
    };
    ServicesTransportationPage.prototype.goCleaningSale = function () {
        console.log(this.subCategory);
        switch (this.subCategory) {
            case "Day VIP chofer": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "carVip": this.carVip, "timeVip": this.timeVip, "moreInformation": this.moreInformation }];
                break;
            }
            case "Taxi": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "distanceTaxi": this.distanceTaxi, "addressTaxi": this.addressTaxi, "moreInformation": this.moreInformation }];
                break;
            }
            case "Car pool": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "carPool": this.carPool, "passePool": this.passePool, "distancePool": this.distancePool, "moreInformation": this.moreInformation }];
                break;
            }
            case "Moving services": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "distanceMovil": this.distanceMovil, "boxMovil": this.boxMovil, "furniMovil": this.furniMovil, "moreInformation": this.moreInformation }];
                break;
            }
            case "Delivery": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "objDelivery": this.objDelivery, "addressDelivery": this.addressDelivery, "moreInformation": this.moreInformation }];
                break;
            }
        }
        console.log(this.dataInformacion);
        this.guardarServicio(this.dataInformacion);
    };
    ServicesTransportationPage.prototype.guardarServicio = function (datos) {
        console.log(datos);
        console.log(this.dataService);
        this.dataService['Clasificacion']['informacion'] = datos['0'];
        var d = new Date();
        var key = d.getTime();
        var keyOffer = "offer_" + (key);
        console.log(this.dataService);
        // let subCategory=this.dataService['Clasificacion']['categoria'];
        //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
        //this.saleService.newSale();
        this.offerService.newOffer(this.dataService, keyOffer);
        // console.log(localStorage);
        var maxOffer = datos['0']['maxOffer'];
        var userLocal = localStorage.getItem('verificacion');
        this.saleService.newSale(userLocal, keyOffer, maxOffer);
        // console.log(userLocal);
        // console.log(keyOffer);
        // console.log(maxOffer);
        var DataService = { 'datos': { "dataService": this.dataService, "offer": keyOffer } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */], DataService);
    };
    ServicesTransportationPage.prototype.getForm = function () {
        switch (this.subCategory) {
            case "Day VIP chofer": {
                this.booleanDayVIPChofer = true;
                break;
            }
            case "Taxi": {
                this.booleanTaxi = true;
                break;
            }
            case "Car pool": {
                this.booleanCarPool = true;
                break;
            }
            case "Moving services": {
                this.booleanMovingServices = true;
                break;
            }
            case "Delivery": {
                this.booleanDelivery = true;
                break;
            }
        }
    };
    return ServicesTransportationPage;
}());
ServicesTransportationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-services-transportation',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\services-transportation\services-transportation.html"*/'<!--\n\n  Generated template for the ServicesTransportationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    \n\n      <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>joBid</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n    \n\n    \n\n    <ion-content>\n\n      <div class="imgCenter">\n\n       <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n        </div>\n\n      <div class="TituloRojo"><h4>{{dataService.name}}</h4></div>\n\n      <h4>Service information</h4>\n\n      <p padding>Describes what the professional requires</p>\n\n    <form id="formPayinfo" class="list">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="cash" item-start></ion-icon>\n\n                <ion-input type="number" placeholder="Maximum offer value" [(ngModel)]="maxOffer" name="maxOffer"></ion-input>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanDayVIPChofer">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="car" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Car type" class="mitad"[(ngModel)]="carVip" name="carVip"></ion-input>\n\n                <ion-input type="number" placeholder="Time" class="mitad" [(ngModel)]="timeVip" name="timeVip"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanTaxi">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="car" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Distance" class="mitad"[(ngModel)]="distanceTaxi" name="distanceTaxi"></ion-input>\n\n                <ion-input type="text" placeholder="Address" class="mitad" [(ngModel)]="addressTaxi" name="addressTaxi"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanCarPool">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="car" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Car type" [(ngModel)]="carPool" name="carPool"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanCarPool">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="car" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="# Passengers" class="mitad"[(ngModel)]="passePool" name="passePool"></ion-input>\n\n                <ion-input type="text" placeholder="Distance" class="mitad" [(ngModel)]="distancePool" name="distancePool"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanMovingServices">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="pin" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Distance" [(ngModel)]="distanceMovil" name="distanceMovil"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanMovingServices">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="cube" item-start></ion-icon>\n\n                <ion-input type="number" placeholder="# boxes" class="mitad"[(ngModel)]="boxMovil" name="boxMovil"></ion-input>\n\n                <ion-input type="number" placeholder="# furniture" class="mitad" [(ngModel)]="furniMovil" name="furniMovil"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanDelivery">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="build" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Object that is sent" class="mitad"[(ngModel)]="objDelivery" name="objDelivery"></ion-input>\n\n                <ion-input type="text" placeholder="Shipping Address" class="mitad" [(ngModel)]="addressDelivery" name="addressDelivery"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="rowArea"> \n\n          <ion-col>\n\n            <ion-list><ion-item>\n\n              <ion-icon name="paper" item-start></ion-icon>\n\n              <ion-textarea type="text" placeholder="More information" [(ngModel)]="moreInformation" name="moreInformation"></ion-textarea>\n\n            </ion-item></ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col> \n\n            <div class="btnBottom">\n\n              <button ion-button color="danger" block icon-left (click)="goCleaningSale()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n    </ion-content>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\services-transportation\services-transportation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_4__services_sale_service__["a" /* SaleService */]])
], ServicesTransportationPage);

//# sourceMappingURL=services-transportation.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesFoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_offer_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cleaning_sale_cleaning_sale__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sale_service__ = __webpack_require__(42);
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
 * Generated class for the ServicesFoodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServicesFoodPage = (function () {
    function ServicesFoodPage(navCtrl, navParams, offerService, saleService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offerService = offerService;
        this.saleService = saleService;
        this.dataService = [];
        //form show
        this.booleanBartenders = false;
        this.booleanWaitress = false;
        this.booleanChef = false;
        this.booleanRunners = false;
        this.booleanValetParking = false;
        this.booleanHostess = false;
        this.dataService = this.navParams.get('datos');
        console.log(this.dataService);
        this.subCategory = this.dataService['Clasificacion']['categoria'];
        //this.getForm(this.subCategory);
        this.getForm();
    }
    ServicesFoodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesFoodPage');
    };
    ServicesFoodPage.prototype.goCleaningSale = function () {
        console.log(this.subCategory);
        switch (this.subCategory) {
            case "Bartenders": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "typeBart": this.typeBart, "eventBart": this.eventBart, "tiemBart": this.tiemBart, "moreInformation": this.moreInformation }];
                break;
            }
            case "Waitress": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "eventWaiter": this.eventWaiter, "timeWaiter": this.timeWaiter, "moreInformation": this.moreInformation }];
                break;
            }
            case "Chef": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "eventChef": this.eventChef, "menuChef": this.menuChef, "dinersChef": this.dinersChef, "moreInformation": this.moreInformation }];
                break;
            }
            case "Runners": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "eventRunners": this.eventRunners, "tiemRunners": this.tiemRunners, "moreInformation": this.moreInformation }];
                break;
            }
            case "Valet parking": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "eventParking": this.eventParking, "placeParking": this.placeParking, "moreInformation": this.moreInformation }];
                break;
            }
            case "Hostess": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "eventHostess": this.eventHostess, "placeHostess": this.placeHostess, "timeHostess": this.timeHostess, "moreInformation": this.moreInformation }];
                break;
            }
        }
        console.log(this.dataInformacion);
        this.guardarServicio(this.dataInformacion);
    };
    ServicesFoodPage.prototype.guardarServicio = function (datos) {
        console.log(datos);
        console.log(this.dataService);
        this.dataService['Clasificacion']['informacion'] = datos['0'];
        // let subCategory=this.dataService['Clasificacion']['categoria'];
        var d = new Date();
        var key = d.getTime();
        var keyOffer = "offer_" + (key);
        console.log(this.dataService);
        //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
        //this.saleService.newSale();
        console.log(JSON.stringify(this.dataService));
        console.log('IniNewOffer');
        this.offerService.newOffer(this.dataService, keyOffer);
        console.log('finNewOffer');
        console.log(localStorage);
        console.log(JSON.stringify(localStorage));
        console.log(keyOffer);
        var maxOffer = datos['0']['maxOffer'];
        console.log(maxOffer);
        var userLocal = localStorage.getItem('verificacion');
        console.log(JSON.stringify(userLocal));
        console.log(userLocal);
        console.log('IniNewSale');
        this.saleService.newSale(userLocal, keyOffer, maxOffer);
        console.log('FinNewSale');
        console.log(userLocal);
        console.log(keyOffer);
        console.log(maxOffer);
        console.log(JSON.stringify(userLocal));
        console.log(JSON.stringify(this.dataService));
        console.log('preGData');
        var DataService = { 'datos': { "dataService": this.dataService, "offer": keyOffer } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */], DataService);
    };
    ServicesFoodPage.prototype.getForm = function () {
        switch (this.subCategory) {
            case "Bartenders": {
                this.booleanBartenders = true;
                break;
            }
            case "Waitress": {
                this.booleanWaitress = true;
                break;
            }
            case "Chef": {
                this.booleanChef = true;
                break;
            }
            case "Runners": {
                this.booleanRunners = true;
                break;
            }
            case "Valet parking": {
                this.booleanValetParking = true;
                break;
            }
            case "Hostess": {
                this.booleanHostess = true;
                break;
            }
        }
    };
    return ServicesFoodPage;
}());
ServicesFoodPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-services-food',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\services-food\services-food.html"*/'<!--\n\n  Generated template for the ServicesFoodPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>joBid</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n    <div class="imgCenter">\n\n     <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n      </div>\n\n    <div class="TituloRojo"><h4>{{dataService.name}}</h4></div>\n\n    <h4>Service information</h4>\n\n    <p padding>Describes what the professional requires</p>\n\n  <form id="formPayinfo" class="list">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="cash" item-start></ion-icon>\n\n              <ion-input type="number" placeholder="Maximum offer value" [(ngModel)]="maxOffer" name="maxOffer"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanBartenders">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="beaker" item-start></ion-icon>\n\n              <ion-input type="number" placeholder="Type of drinks" [(ngModel)]="typeBart" name="typeBart"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanBartenders">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="beaker" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Event" class="mitad"[(ngModel)]="eventBart" name="eventBart"></ion-input>\n\n              <ion-input type="number" placeholder="Time" class="mitad" [(ngModel)]="tiemBart" name="tiemBart"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanWaitress">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="beaker" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Event" class="mitad"[(ngModel)]="eventWaiter" name="eventWaiter"></ion-input>\n\n              <ion-input type="number" placeholder="Time" class="mitad" [(ngModel)]="timeWaiter" name="timeWaiter"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanChef">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="pin" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Type of Event" [(ngModel)]="eventChef" name="eventChef"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanChef">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="beaker" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Menu" class="mitad"[(ngModel)]="menuChef" name="menuChef"></ion-input>\n\n              <ion-input type="text" placeholder="Diners" class="mitad" [(ngModel)]="dinersChef" name="dinersChef"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanRunners">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="beaker" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Event" class="mitad"[(ngModel)]="eventRunners" name="eventRunners"></ion-input>\n\n              <ion-input type="number" placeholder="Time" class="mitad" [(ngModel)]="tiemRunners" name="tiemRunners"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanValetParking">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="pin" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Type of Event" [(ngModel)]="eventParking" name="eventParking"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanValetParking">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="beaker" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Place" class="mitad"[(ngModel)]="placeParking" name="placeParking"></ion-input>\n\n              <ion-input type="number" placeholder="Time" class="mitad" [(ngModel)]="timeParking" name="timeParking"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanHostess">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="pin" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Type of Event" [(ngModel)]="eventHostess" name="eventHostess"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanHostess">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="beaker" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Place" class="mitad"[(ngModel)]="placeHostess" name="placeHostess"></ion-input>\n\n              <ion-input type="number" placeholder="Time" class="mitad" [(ngModel)]="timeHostess" name="timeHostess"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="rowArea"> \n\n        <ion-col>\n\n          <ion-list><ion-item>\n\n            <ion-icon name="paper" item-start></ion-icon>\n\n            <ion-textarea type="text" placeholder="More information" [(ngModel)]="moreInformation" name="moreInformation"></ion-textarea>\n\n          </ion-item></ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col> \n\n          <div class="btnBottom">\n\n            <button ion-button color="danger" block icon-left (click)="goCleaningSale()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n  </ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\services-food\services-food.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_4__services_sale_service__["a" /* SaleService */]])
], ServicesFoodPage);

//# sourceMappingURL=services-food.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesLegalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_offer_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cleaning_sale_cleaning_sale__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sale_service__ = __webpack_require__(42);
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
 * Generated class for the ServicesLegalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServicesLegalPage = (function () {
    function ServicesLegalPage(navCtrl, navParams, offerService, saleService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offerService = offerService;
        this.saleService = saleService;
        this.dataService = [];
        //form show
        this.booleanNotary = false;
        this.dataService = this.navParams.get('datos');
        console.log(this.dataService);
        this.subCategory = this.dataService['Clasificacion']['categoria'];
        //this.getForm(this.subCategory);
        this.getForm();
    }
    ServicesLegalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesLegalPage');
    };
    ServicesLegalPage.prototype.goCleaningSale = function () {
        console.log(this.subCategory);
        switch (this.subCategory) {
            case "Notary": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "documentNotary": this.documentNotary, "eventNotary": this.eventNotary, "moreInformation": this.moreInformation }];
                break;
            }
        }
        console.log(this.dataInformacion);
        this.guardarServicio(this.dataInformacion);
    };
    ServicesLegalPage.prototype.guardarServicio = function (datos) {
        console.log(datos);
        console.log(this.dataService);
        this.dataService['Clasificacion']['informacion'] = datos['0'];
        var d = new Date();
        var key = d.getTime();
        var keyOffer = "offer_" + (key);
        console.log(this.dataService);
        // let subCategory=this.dataService['Clasificacion']['categoria'];
        //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
        //this.saleService.newSale();
        this.offerService.newOffer(this.dataService, keyOffer);
        // console.log(localStorage);
        var maxOffer = datos['0']['maxOffer'];
        var userLocal = localStorage.getItem('verificacion');
        this.saleService.newSale(userLocal, keyOffer, maxOffer);
        // console.log(userLocal);
        // console.log(keyOffer);
        // console.log(maxOffer);
        var DataService = { 'datos': { "dataService": this.dataService, "offer": keyOffer } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */], DataService);
    };
    ServicesLegalPage.prototype.getForm = function () {
        switch (this.subCategory) {
            case "Notary": {
                this.booleanNotary = true;
                break;
            }
        }
    };
    return ServicesLegalPage;
}());
ServicesLegalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-services-legal',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\services-legal\services-legal.html"*/'<!--\n\n  Generated template for the ServicesLegalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>joBid</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n    <div class="imgCenter">\n\n     <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n      </div>\n\n    <div class="TituloRojo"><h4>{{dataService.name}}</h4></div>\n\n    <h4>Service information</h4>\n\n    <p padding>Describes what the professional requires</p>\n\n  <form id="formPayinfo" class="list">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="cash" item-start></ion-icon>\n\n              <ion-input type="number" placeholder="Maximum offer value" [(ngModel)]="maxOffer" name="maxOffer"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanNotary">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="people" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Type of document" class="mitad"[(ngModel)]="documentNotary" name="documentNotary"></ion-input>\n\n              <ion-input type="text" placeholder="Event" class="mitad" [(ngModel)]="eventNotary" name="eventNotary"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="rowArea"> \n\n        <ion-col>\n\n          <ion-list><ion-item>\n\n            <ion-icon name="paper" item-start></ion-icon>\n\n            <ion-textarea type="text" placeholder="More information" [(ngModel)]="moreInformation" name="moreInformation"></ion-textarea>\n\n          </ion-item></ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col> \n\n          <div class="btnBottom">\n\n            <button ion-button color="danger" block icon-left (click)="goCleaningSale()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n  </ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\services-legal\services-legal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_4__services_sale_service__["a" /* SaleService */]])
], ServicesLegalPage);

//# sourceMappingURL=services-legal.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesBeautyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_offer_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cleaning_sale_cleaning_sale__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sale_service__ = __webpack_require__(42);
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
 * Generated class for the ServicesBeautyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServicesBeautyPage = (function () {
    function ServicesBeautyPage(navCtrl, navParams, offerService, saleService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offerService = offerService;
        this.saleService = saleService;
        this.dataService = [];
        //form show
        this.booleanPersonaTrainer = false;
        this.booleanHairCut = false;
        this.booleanMenicure = false;
        this.booleanMekeup = false;
        this.booleanMassage = false;
        this.dataService = this.navParams.get('datos');
        console.log(this.dataService);
        this.subCategory = this.dataService['Clasificacion']['categoria'];
        //this.getForm(this.subCategory);
        this.getForm();
    }
    ServicesBeautyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesBeautyPage');
    };
    ServicesBeautyPage.prototype.goCleaningSale = function () {
        console.log(this.subCategory);
        switch (this.subCategory) {
            case "Personal trainer": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "exerciseTrainer": this.exerciseTrainer, "timeTrainer": this.timeTrainer, "moreInformation": this.moreInformation }];
                break;
            }
            case "Hair cut and DIY": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "peinadosCut": this.peinadosCut, "typeCut": this.typeCut, "barbaCut": this.barbaCut, "moreInformation": this.moreInformation }];
                break;
            }
            case "Manicure and pedicure": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "tipoMenicure": this.tipoMenicure, "unaMenicure": this.unaMenicure, "estiloMenicure": this.estiloMenicure, "moreInformation": this.moreInformation }];
                break;
            }
            case "Makeup": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "estiloMeke": this.estiloMeke, "moreInformation": this.moreInformation }];
                break;
            }
            case "Massage": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "estiloMassage": this.estiloMassage, "moreInformation": this.moreInformation }];
                break;
            }
        }
        console.log(this.dataInformacion);
        this.guardarServicio(this.dataInformacion);
    };
    ServicesBeautyPage.prototype.guardarServicio = function (datos) {
        console.log(datos);
        console.log(this.dataService);
        this.dataService['Clasificacion']['informacion'] = datos['0'];
        var d = new Date();
        var key = d.getTime();
        var keyOffer = "offer_" + (key);
        console.log(this.dataService);
        // let subCategory=this.dataService['Clasificacion']['categoria'];
        //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
        //this.saleService.newSale();
        this.offerService.newOffer(this.dataService, keyOffer);
        // console.log(localStorage);
        var maxOffer = datos['0']['maxOffer'];
        var userLocal = localStorage.getItem('verificacion');
        this.saleService.newSale(userLocal, keyOffer, maxOffer);
        // console.log(userLocal);
        // console.log(keyOffer);
        // console.log(maxOffer);
        var DataService = { 'datos': { "dataService": this.dataService, "offer": keyOffer } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */], DataService);
    };
    ServicesBeautyPage.prototype.getForm = function () {
        switch (this.subCategory) {
            case "Personal trainer": {
                this.booleanPersonaTrainer = true;
                break;
            }
            case "Hair cut and DIY": {
                this.booleanHairCut = true;
                this.peinados = [
                    { "value": "hairstyle", "label": "Hairstyle" },
                    { "value": "brushed", "label": "Brushed" },
                    { "value": "hairstyleAndBrushed", "label": "Hairstyle and brushed" }
                ];
                this.barbas = [
                    { "value": "beard", "label": "Beard" },
                    { "value": "Moustache", "label": "Moustache" },
                    { "value": "beardAndMoustache", "label": "Beard and Moustache" }
                ];
                break;
            }
            case "Manicure and pedicure": {
                this.booleanMenicure = true;
                this.typeMenicure = [
                    { "value": "Manicure", "label": "Manicure" },
                    { "value": "Pedicure", "label": "Pedicure" },
                    { "value": "manicureAndPedicure", "label": "Manicure and pedicure" }
                ];
                this.nailMenicure = [
                    { "value": "naturalNail", "label": "Natural nail" },
                    { "value": "toenail", "label": "Toenail" }
                ];
                this.styleMenicure = [
                    { "value": "Si", "label": "With style" },
                    { "value": "No", "label": "Without style" }
                ];
                break;
            }
            case "Makeup": {
                this.styleMekeup = [
                    { "value": "Basic", "label": "Basic" },
                    { "value": "Masks", "label": "Masks" }
                ];
                this.booleanMekeup = true;
                break;
            }
            case "Massage": {
                this.booleanMassage = true;
                this.styleMassage = [
                    { "value": "Full", "label": "Full" },
                    { "value": "Arm", "label": "Arm" },
                    { "value": "Neck", "label": "Neck" },
                    { "value": "Back", "label": "Back" },
                    { "value": "Hand", "label": "Hand" },
                    { "value": "Leg", "label": "Leg" },
                    { "value": "feet", "label": "feet" }
                ];
                break;
            }
        }
    };
    return ServicesBeautyPage;
}());
ServicesBeautyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-services-beauty',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\services-beauty\services-beauty.html"*/'<!--\n\n  Generated template for the ServicesBeautyPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>joBid</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <div class="imgCenter">\n\n     <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n      </div>\n\n    <div class="TituloRojo"><h4>{{dataService.name}}</h4></div>\n\n    <h4>Service information</h4>\n\n    <p padding>Describes what the professional requires</p>\n\n  <form id="formPayinfo" class="list">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="cash" item-start></ion-icon>\n\n              <ion-input type="number" placeholder="Maximum offer value" [(ngModel)]="maxOffer" name="maxOffer"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanPersonaTrainer">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="person" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Exercise" class="mitad"[(ngModel)]="exerciseTrainer" name="exerciseTrainer"></ion-input>\n\n              <ion-input type="number" placeholder="Time" class="mitad" [(ngModel)]="timeTrainer" name="timeTrainer"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanHairCut">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="cut" item-start></ion-icon>\n\n              <ion-select class="mitad" [(ngModel)]="peinadosCut" name="peinadosCut" placeholder="Services" > \n\n                <ion-option *ngFor="let peinados of peinados" value="{{peinados.value}}">{{peinados.label}}</ion-option>\n\n              </ion-select>\n\n              <ion-input type="text" placeholder="Cut" class="mitad" class="mitad" [(ngModel)]="typeCut" name="typeCut"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanHairCut">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="cut" item-start></ion-icon>\n\n              <ion-select [(ngModel)]="barbaCut" name="barbaCut" placeholder="Barbershop" > \n\n                <ion-option *ngFor="let barba of barbas" value="{{barba.value}}">{{barba.label}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanMenicure">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="person" item-start></ion-icon>\n\n              <ion-select [(ngModel)]="tipoMenicure" name="tipoMenicure" placeholder="Service" > \n\n                <ion-option *ngFor="let type of typeMenicure" value="{{type.value}}">{{type.label}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n      <ion-row *ngIf="booleanMenicure">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="person" item-start></ion-icon>\n\n              <ion-select [(ngModel)]="unaMenicure" class="mitad"  name="unaMenicure" placeholder="Status"  > \n\n                <ion-option *ngFor="let nail of nailMenicure" value="{{nail.value}}">{{nail.label}}</ion-option>\n\n              </ion-select>\n\n              <ion-select [(ngModel)]="estiloMenicure" class="mitad"  name="estiloMenicure" placeholder="Style"  > \n\n                <ion-option *ngFor="let styleM of styleMenicure" value="{{styleM.value}}">{{styleM.label}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanMekeup">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="person" item-start></ion-icon>\n\n              <ion-select [(ngModel)]="estiloMeke"  name="estiloMeke" placeholder="Service"> \n\n                <ion-option *ngFor="let styleMe of styleMekeup" value="{{styleMe.value}}">{{styleMe.label}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanMassage">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="person" item-start></ion-icon>\n\n              <ion-select [(ngModel)]="estiloMassage" class="mitad"  name="estiloMassage"  placeholder="Service"> \n\n                <ion-option *ngFor="let styleMa of styleMassage" value="{{styleMa.value}}">{{styleMa.label}}</ion-option>\n\n              </ion-select>\n\n              <ion-input type="number" placeholder="Time" class="mitad" [(ngModel)]="eventNotary" name="eventNotary"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n      <ion-row class="rowArea"> \n\n        <ion-col>\n\n          <ion-list><ion-item>\n\n            <ion-icon name="paper" item-start></ion-icon>\n\n            <ion-textarea type="text" placeholder="More information" [(ngModel)]="moreInformation" name="moreInformation"></ion-textarea>\n\n          </ion-item></ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col> \n\n          <div class="btnBottom">\n\n            <button ion-button color="danger" block icon-left (click)="goCleaningSale()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n  </ion-content>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\services-beauty\services-beauty.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_4__services_sale_service__["a" /* SaleService */]])
], ServicesBeautyPage);

//# sourceMappingURL=services-beauty.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

var OfferService = (function () {
    function OfferService(afDB) {
        this.afDB = afDB;
        this.dataCategoria = [];
        this.dataService = [];
    }
    //---new offer 
    OfferService.prototype.newOffer = function (serviceData, keyNew) {
        if (serviceData === void 0) { serviceData = []; }
        // public newOffer(serviceData : any = [],subCategory:string,keyNew?:any){
        console.log('metodoNewOffer');
        var key = undefined;
        //default star
        console.log(JSON.stringify(serviceData));
        // console.log('key:'+key);
        console.log('keyNew:' + keyNew);
        if (keyNew && keyNew != null && keyNew != undefined) {
            keyOffer = keyNew;
        }
        else {
            var d = new Date();
            key = d.getTime();
            var keyOffer = "offer_" + (key);
        }
        console.log(serviceData);
        // console.log(JSON.stringify(serviceData));
        // console.log(subCategory);
        this.afDB.object('/offer/' + keyOffer).set(serviceData).catch(function (error) { console.log('error offer setNOff'); console.log(error); console.log(JSON.stringify(error)); });
        console.info('offer create');
    };
    OfferService.prototype.setStatus = function (keyOffer, status) {
        return this.afDB.object('/offer/' + keyOffer + '/status/').set(status).catch(function (error) { console.log('error offer setstatus'); console.log(error); console.log(JSON.stringify(error)); });
    };
    OfferService.prototype.setSale = function (keyOffer, sale) {
        return this.afDB.object('/offer/' + keyOffer + '/sale/').set(sale).catch(function (error) { console.log('error offer setSale'); console.log(error); console.log(JSON.stringify(error)); });
    };
    OfferService.prototype.setUser = function (keyOffer, User) {
        return this.afDB.object('/offer/' + keyOffer + '/User/').set(User).catch(function (error) { console.log('error offer setUser'); console.log(error); console.log(JSON.stringify(error)); });
    };
    OfferService.prototype.setProvider = function (keyOffer, Provider) {
        return this.afDB.object('/offer/' + keyOffer + '/Profession/').set(Provider).catch(function (error) { console.log('error offer setUser'); console.log(error); console.log(JSON.stringify(error)); });
    };
    OfferService.prototype.getStatus = function (keyOffer) {
        return this.afDB.object('/offer/' + keyOffer + '/status/');
    };
    OfferService.prototype.getOffer = function (keyOffer) {
        return this.afDB.object('/offer/' + keyOffer);
    };
    return OfferService;
}());
OfferService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], OfferService);

//# sourceMappingURL=offer.service.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pre_home_pre_home__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

//import { NavController, NavParams } from 'ionic-angular';

//import { ShowPage } from '../show/show';
//import { HomePage } from '../home/home';


//import { EncriptyService } from '../../services/encripty.service';
//import { StorageService } from '../../services/storage.service';



//import { ListPage } from '../list/list';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authServiceProvider, alertCtrl, 
        //private encriptyService : EncriptyService,
        //private storageService : StorageService,
        userService, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.afAuth = afAuth;
        this.userData = { "username": "", "password": "" };
        this.userDataUpdate = [];
        this.userAndEmail = '';
        this.pass = "mi clave";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log(this.userData);
        var estoyLogueado = false;
        var userDB;
        // let key:any;
        //let finEvent:boolean;
        this.userService.getUserLogin(this.userData["username"], this.userData["password"])
            .forEach(function (users) {
            console.log('user1');
            console.log(users);
            users.forEach(function (user) {
                if (user != undefined && user != null) {
                    //console.log(user);
                    // if(user['user_email'] == user.email){
                    //console.log(user);
                    console.log('usuario userService ->Userexists');
                    userDB = user;
                    estoyLogueado = true;
                    // }
                }
            });
            if (!estoyLogueado) {
                _this.showAlertLogin();
            }
            else {
                _this.goNextPagePrehome(userDB);
            }
        }).catch(function (error) { console.log(error); _this.showAlertLogin(); });
        //   value.forEach((user) =>{
        //     if(user != undefined && user != null){
        //       //console.log(user);
        //       //if(user['user_email'] == user.email){
        //         //console.log(user);
        //         userDB = user;
        //         estoyLogueado= true;
        //       // }
        //     }
        //   // for (let key in value){
        //   //   //console.log(value);
        //   //   if(value[key] != undefined){
        //   //     //console.log('hola user'+value[key]['user_name']);
        //   //     this.goNextPagePrehome(value[key]);
        //   //     estoyLogueado= true;
        //   //   }
        //   // }
        //   })
        //   if(!estoyLogueado){
        //     this.showAlertLogin();
        //   }
        // }).unsubscribe();
    };
    LoginPage.prototype.goNextPagePrehome = function (datos) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, Data;
            return __generator(this, function (_a) {
                //console.log(datos);
                //console.log(datos['$key']);
                this.userDataUpdate = { "email": datos['user_email'], "name": datos['user_name'], "pais": datos['user_pais'], "password": datos['user_password'], "picture": datos['user_picture'], "state": datos['user_state'], "tel": datos['user_tel'], "username": datos['user_username'], "verificacion": datos['$key'], "zipcode": datos['user_zipcode'] };
                //console.log(this.userDataUpdate);
                try {
                    result = this.afAuth.auth.signInWithEmailAndPassword(datos['user_email'], datos['user_password']);
                    result.catch(function (error) {
                        _this.showAlertLogin();
                    });
                    console.log(result);
                    if (result) {
                        Data = { 'datos': this.userDataUpdate };
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pre_home_pre_home__["a" /* PreHomePage */], Data);
                    }
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.showAlertLogin = function () {
        var alert = this.alertCtrl.create({
            title: 'login failed',
            subTitle: 'Bad request wrong username or email and password',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.facebookir = function () {
        var _this = this;
        var goPagePrehome = false;
        var userDB;
        __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"]().signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].FacebookAuthProvider())
            .then(function (res) {
            //console.log(res.user.email);
            console.log(res);
            console.info(JSON.stringify(res));
            //console.log(res);
            _this.userService.getUsers()
                .forEach(function (users) {
                //console.log(users);
                users.forEach(function (user) {
                    //console.log(user);
                    // if(user['user_email'] == res.user.email){
                    //     // console.log('res.user.email');
                    //     // console.log(user);
                    //     userDB = user;
                    //     goPagePrehome= true;
                    // }
                    //dentro de res.user -> hay otros datos de usuario -> email?
                    //if(user.providerData["0"].providerId == "facebook.com"){
                    if (user['user_email'] == res.additionalUserInfo.profile.email) {
                        // console.log('res.additionalUserInfo.profile.email');
                        // console.log(user);
                        userDB = user;
                        goPagePrehome = true;
                    }
                    //}
                });
                //console.log(userDB);
                console.log(goPagePrehome);
                if (goPagePrehome) {
                    _this.goNextPagePrehomeFace(userDB);
                }
            });
        });
    };
    LoginPage.prototype.goNextPagePrehomeFace = function (datos) {
        //console.log(datos);
        //console.log(datos['$key']);
        this.userDataUpdate = { "email": datos['user_email'], "name": datos['user_name'], "pais": datos['user_pais'], "password": datos['user_password'], "picture": datos['user_picture'], "state": datos['user_state'], "tel": datos['user_tel'], "username": datos['user_username'], "verificacion": datos['$key'], "zipcode": datos['user_zipcode'] };
        //console.log(this.userDataUpdate);
        var Data = { 'datos': this.userDataUpdate };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pre_home_pre_home__["a" /* PreHomePage */], Data);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <img src="assets/img/LogoJoBid.png">\n\n    <h5 id="login-heading1">Log in</h5>\n\n    <div padding>\n\n        <button ion-button block (click)="facebookir()">Log in with Faceook</button>\n\n      </div>\n\n    <ion-list padding>\n\n	  <ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n      <ion-input type="text" placeholder="User / Email" [(ngModel)]="userData.username" name="username" ></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="home" item-start></ion-icon>\n\n      <ion-input type="password" placeholder="Password" [(ngModel)]="userData.password" name="password"></ion-input>\n\n	  </ion-item>\n\n    <div class="btnBottom">\n\n	   <button  ion-button block color="danger" (click)="login()" >Enter<ion-icon name="arrow-dropright"></ion-icon></button> \n\n    </div>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cities__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_states_utils__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_states_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_states_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__payment_methods_payment_methods__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase_app__);
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


//import { VerifyYourPhonePage } from '../verify-your-phone/verify-your-phone';
//import { EncriptyService } from '../../services/encripty.service';
//import { StorageService } from '../../services/storage.service';


// import { WindowService } from '../../services/window.service';



//import firebase from 'firebase';
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
    //messaging:any;
    //messaging = firebase.messaging;
    //messaging = firebase.messaging();
    function SingupPage(navCtrl, navParams, authServiceProvider, alertCtrl, userService, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.afAuth = afAuth;
        this.codeAreaEstadoSelect = [];
        this.userData = { "username": "", "password": "", "email": "", "name": "", "zipcode": "", "state": "", "picture": "", "verificacion": "", "pais": "", "direccion": "", "tel": "" };
        this.ciudades = [];
        this.ciudad = undefined;
        this.stateZipcode = undefined;
        this.estados = [];
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
        var _this = this;
        console.log('ionViewDidLoad SingupPage');
        var userA = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"]().currentUser;
        console.log(userA);
        this.userB = this.afAuth.auth.currentUser;
        console.log(this.userB);
        // let user:any = firebase.auth().currentUser;
        // console.log(user);
        // if (user.isEmailVerified()) {
        //   console.log('user verificado');
        // }else{
        //   console.log('user no verificado');
        // }
        //-------- verificar error al ir a Registros ----
        // this.afAuth.authState.forEach ( data => {
        //   console.log(data); 
        //   if(data != null && data != undefined){
        //     console.info('find User facebook');
        //     this.userData['name']=this.userData['username']= data.providerData["0"].displayName;
        //     this.userData['email']=  data.providerData["0"].email;
        //     this.userData['picture']=  data.providerData["0"].photoURL;
        //   }
        // });
        // firebase.auth().onAuthStateChanged(function(user) {
        //   console.log('find user facebook 3');
        //   console.log(user);
        //   user.sendEmailVerification().then( 
        //     (success) => {
        //       console.info("please verify your email - account correo");
        //       if (success){
        //         console.info('find user facebook 3 - si');
        //         this.userData['name']=this.userData['username']= user.providerData["0"].displayName;
        //         this.userData['email']=  user.providerData["0"].email;
        //         this.userData['picture']=  user.providerData["0"].photoURL;
        //         console.log(this.userData);
        //         //this.envioCorreoFacebook();
        //       } else {
        //         console.info('find user facebook 3 - no');
        //       }
        //       //firebase.auth().signOut();
        //     }).catch( (err) => {
        //       console.error('error envio correo - account facebook');
        //       console.error(err);
        //     }
        //   )  
        // });
        this.afAuth.authState.subscribe(function (user) {
            console.log('find user facebook 2');
            console.log(user);
            if (user) {
                if (user.providerData["0"].providerId == "facebook.com") {
                    if (_this.userData['picture'] == '' || _this.userData['picture'] == undefined || _this.userData['picture'] == null) {
                        console.info('find user facebook 2 - si');
                        _this.userData['name'] = _this.userData['username'] = user.providerData["0"].displayName;
                        _this.userData['email'] = user.providerData["0"].email;
                        _this.userData['picture'] = user.providerData["0"].photoURL;
                        console.log(_this.userData);
                    }
                }
                //this.envioCorreoFacebook();
            }
            else {
                console.info('find user facebook 2 - no');
            }
        });
    };
    // envioCorreoFacebook(){
    //   let userFacebook:any = firebase.auth().currentUser;
    //   userFacebook.sendEmailVerification().then(
    //     (success) => {
    //       console.info("please verify your email - account facebook");
    //         this.navCtrl.push(SingupPage);
    //     }).catch(
    //     (err) => {
    //       console.error('error envio correo');
    //       console.error(err);
    //     }
    //   )
    // }
    SingupPage.prototype.goPhoneV = function () {
        var estoyLogueado = false;
        var userDB;
        //let finEvent:boolean;
        var Userexists = this.userService.getUserexists(this.userData["username"], this.userData["email"]);
        Userexists.forEach(function (users) {
            console.log('user1');
            console.log(users);
            users.forEach(function (user) {
                if (user != undefined && user != null) {
                    //console.log(user);
                    // if(user['user_email'] == user.email){
                    //console.log(user);
                    console.log('usuario userService ->Userexists');
                    userDB = user;
                    estoyLogueado = true;
                    // }
                }
            });
            //console.log(Userexists);
            //console.log(userDB);
            //console.log(estoyLogueado);
        });
        if (estoyLogueado) {
            this.showAlertSignUp();
        }
        else {
            this.enviarCorreo();
        }
    };
    SingupPage.prototype.enviarCorreo = function () {
        //alert('code:'+this.userData.verificacion);
        this.userData.direccion = this.DirecA + ' ' + this.DirecB + ',' + this.DirecC + ',' + this.DirecD;
        this.userData.tel = '(' + this.telA + ')' + this.telB;
        //this.userData.verificacion = ''+Math.floor((Math.random() * 99999) + 11111);
        console.log('code:' + this.userData.verificacion);
        this.goNextPagePhoneV();
    };
    // postCode(){
    //   this.authServiceProvider.postData(this.userData,'code').then((result) => {
    //       //this.responseData = result;
    //       //console.log(result);
    //       this.goNextPagePhoneV();
    //     }, (err) => {
    //       //   // Error log
    //       console.log('error envio');
    //       console.log(err);
    //       //   alert('error correo');
    //     });
    // }
    SingupPage.prototype.goNextPagePhoneV = function () {
        //alert('userData'+ JSON.stringify(this.responseData));
        //localStorage.setItem('userData', JSON.stringify(this.responseData));
        // this.userB.sendEmailVerification().then(
        //   (success) => {
        //     console.info("please verify your email - account face");
        var _this = this;
        //       // console.log(JSON.stringify(this.userData));
        //       // let Data = {'datos':this.userData};
        //       // this.navCtrl.push(VerifyYourPhonePage, Data);
        //   }).catch(
        //   (err) => {
        //     console.error('error envio correo - account face');
        //     console.error(err);
        //   }
        // )
        try {
            //let result =this.afAuth.auth.createUserWithEmailAndPassword(this.userData['email'],this.userData['password']);
            var result_1 = this.afAuth.auth.createUserWithEmailAndPassword(this.userData['email'], this.userData['password'])
                .then(function (success) {
                console.log(success);
                var user = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"]().currentUser;
                user.sendEmailVerification().then(function (success) {
                    console.info("please verify your email - account correo");
                    console.log(result_1);
                    // console.log(JSON.stringify(this.userData));
                    // let Data = {'datos':this.userData};
                    // this.navCtrl.push(VerifyYourPhonePage, Data);
                    console.log(_this.userData);
                    //this.traerPost();
                    var d = new Date();
                    var key = d.getTime();
                    var keyUser = "user_" + (key);
                    console.log(keyUser);
                    _this.userData['verificacion'] = keyUser;
                    console.log(_this.userData);
                    _this.userService.newUser(_this.userData, keyUser);
                    var Data = { 'datos': _this.userData };
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__payment_methods_payment_methods__["a" /* PaymentMethodsPage */], Data);
                }).catch(function (err) {
                    console.error('error envio correo - account correo');
                    console.error(err);
                });
            }).catch(function (err) {
                console.error('error user create');
                console.error(err);
                _this.showAlertSignUp();
            });
        }
        catch (e) {
            console.error(e);
        }
    };
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
    // getE164(country,area,prefix,line) {
    //   const num = this.country + this.area + this.prefix + this.line;
    //   return `+${num}`
    // }
    SingupPage.prototype.verifyLoginCode = function () {
        var _this = this;
        this.windowRef.confirmationResult
            .confirm(this.userData['verificacion'])
            .then(function (result) {
            _this.user = result.user;
        })
            .catch(function (error) { return console.log(error, "Incorrect code entered?"); });
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
    SingupPage.prototype.showAlertSignUp = function () {
        var alert = this.alertCtrl.create({
            title: 'Sign up failed',
            subTitle: 'The user and the mail is already there',
            buttons: ['OK']
        });
        alert.present();
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
        selector: 'page-singup',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\singup\singup.html"*/'<!--\n\n  Generated template for the SingupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar  class="force-back-button">\n\n    <ion-title>singup</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <img src="assets/img/LogoJoBid.png">\n\n    <h5 id="signup-heading2" style="">Fill out the form </h5>\n\n    <form id="signup-form3" class="list" padding>\n\n      <ion-list id="signup-list3">\n\n        <ion-item>\n\n          <ion-icon name="person" item-start></ion-icon>\n\n          <ion-input type="text" placeholder="Name" [(ngModel)]="userData.name"  name="name"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="pin" item-start></ion-icon>\n\n          <ion-select [(ngModel)]="userData.pais" name="pais" placeholder="Country">\n\n            <ion-option value="USA" selected>U.S.A</ion-option>\n\n          </ion-select>\n\n         </ion-item>\n\n        <ion-item>\n\n            <ion-icon name="flag" item-start></ion-icon>\n\n          <ion-select class="mitad" [(ngModel)]="userData.state" name="state" (ngModelChange)="setCity()" placeholder="State">\n\n            <ion-option *ngFor="let state of estados" value="{{state.nameShort}}">{{state.name}}</ion-option>\n\n          </ion-select>\n\n          <ion-select  class="mitad" [(ngModel)]="userData.zipcode" name="zipcode" (ngModelChange)="setZipCode()" placeholder="City"> <!--[(ngModel)]="gaming"-->\n\n            <ion-option selected>....</ion-option>\n\n            <ion-option *ngFor="let city of ciudades" value="{{city.zipcode}}">{{city.name}} - {{city.zipcode}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="home" item-start></ion-icon>\n\n          <ion-input type="number" placeholder="1234" class="mitad" [(ngModel)]="DirecA" name="DirecA"></ion-input>\n\n          <ion-input type="text" placeholder="avenue" value="" class="mitad" [(ngModel)]="DirecB" name="DirecB"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-icon name="home" item-start style="background:transparent; color:transparent;"></ion-icon>\n\n          <ion-input type="text" placeholder="City" class="mitad" [(ngModel)]="DirecC" name="DirecC" ></ion-input>\n\n          <ion-input type="text" placeholder="NJ 0000" value="{{DirecD}}" class="mitad" [(ngModel)]="DirecD" name="DirecD"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="mail" item-start></ion-icon>\n\n          <ion-input type="email" placeholder="Mail" [(ngModel)]="userData.email" name="email" ></ion-input>\n\n         </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="contact" item-start></ion-icon>\n\n          <ion-input type="text" placeholder="User" [(ngModel)]="userData.username"  name="username"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="lock" item-start></ion-icon>\n\n          <ion-input type="password" placeholder="Password" [(ngModel)]="userData.password" name="password"></ion-input>\n\n        </ion-item>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-4>\n\n              <ion-item>\n\n                <ion-icon name="call" item-start></ion-icon>this.codeAreaEstadoSelect\n\n                 <ion-select [(ngModel)]="telA" name="telA" placeholder="Area code">\n\n                  <ion-option *ngFor="let stateCod of codeAreaEstadoSelect" value="{{stateCod.code}}">{{stateCod.code}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n              <ion-item>\n\n                <ion-input type="tel" placeholder="Phone #" [(ngModel)]="telB" name="telB"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        \n\n        <div class="btnBottom">\n\n          <button ion-button color="danger" block (click)="goPhoneV()" id="sign-in-button">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n\n        </div>\n\n      </ion-list>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\singup\singup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */]])
], SingupPage);

//# sourceMappingURL=singup.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobWithUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the JobWithUsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var JobWithUsPage = (function () {
    function JobWithUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JobWithUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobWithUsPage');
    };
    return JobWithUsPage;
}());
JobWithUsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-job-with-us',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\job-with-us\job-with-us.html"*/'<!--\n\n  Generated template for the JobWithUsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <ion-title>joBid</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n  <h3>Job With Us</h3>\n\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, lacus id tincidunt dapibus, turpis justo aliquet ante, ut vulputate turpis lacus non nulla. Suspendisse potenti. Maecenas arcu massa, volutpat quis auctor eget, mattis sit amet purus. Donec ac laoreet felis. Mauris dictum sapien congue eros ornare, id iaculis nunc pretium. Mauris bibendum blandit nisl, id finibus turpis volutpat nec. Ut interdum elementum tortor, non accumsan ligula interdum at. Donec mauris arcu, pellentesque lobortis venenatis sit amet, dictum a purus. Nam laoreet tellus quis justo imperdiet, quis placerat lectus pulvinar. Mauris interdum libero vel eleifend sodales. Aliquam ut dolor id mauris condimentum hendrerit. Nam blandit congue nulla ut viverra. Sed suscipit massa non auctor suscipit</p>\n\n  </ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\job-with-us\job-with-us.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], JobWithUsPage);

//# sourceMappingURL=job-with-us.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoliciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the PoliciesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PoliciesPage = (function () {
    function PoliciesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PoliciesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PoliciesPage');
    };
    return PoliciesPage;
}());
PoliciesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-policies',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\policies\policies.html"*/'<!--\n\n  Generated template for the PoliciesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<h3>Policies</h3>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, lacus id tincidunt dapibus, turpis justo aliquet ante, ut vulputate turpis lacus non nulla. Suspendisse potenti. Maecenas arcu massa, volutpat quis auctor eget, mattis sit amet purus. Donec ac laoreet felis. Mauris dictum sapien congue eros ornare, id iaculis nunc pretium. Mauris bibendum blandit nisl, id finibus turpis volutpat nec. Ut interdum elementum tortor, non accumsan ligula interdum at. Donec mauris arcu, pellentesque lobortis venenatis sit amet, dictum a purus. Nam laoreet tellus quis justo imperdiet, quis placerat lectus pulvinar. Mauris interdum libero vel eleifend sodales. Aliquam ut dolor id mauris condimentum hendrerit. Nam blandit congue nulla ut viverra. Sed suscipit massa non auctor suscipit</p>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\policies\policies.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PoliciesPage);

//# sourceMappingURL=policies.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_payment_method_add_payment_method__ = __webpack_require__(545);
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
 * Generated class for the PaymentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PaymentsPage = (function () {
    function PaymentsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentsPage');
    };
    PaymentsPage.prototype.goAddPaymentMethod = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_payment_method_add_payment_method__["a" /* AddPaymentMethodPage */]);
    };
    return PaymentsPage;
}());
PaymentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payments',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\payments\payments.html"*/'<!--\n\n  Generated template for the PaymentsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<h3>My payments</h3>\n\n<h4>List:</h4>\n\n  <ion-list>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <div class="btnBottom">\n\n        <button (click)="goAddPaymentMethod()">\n\n          Add payment method\n\n        </button> \n\n      </div>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\payments\payments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], PaymentsPage);

//# sourceMappingURL=payments.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPaymentMethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_braintree_web_drop_in__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_braintree_web_drop_in___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_braintree_web_drop_in__);
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
 * Generated class for the AddPaymentMethodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddPaymentMethodPage = (function () {
    function AddPaymentMethodPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //-booleanDropIN
        this.booleanCreateErr = false;
        this.booleanInstance = false;
    }
    AddPaymentMethodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPaymentMethodPage');
        this.dropin();
    };
    AddPaymentMethodPage.prototype.goSavePaymentMethod = function () {
        if (this.booleanCreateErr) {
            this.showAlertPay();
        }
        if (this.booleanInstance) {
            this.Instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
                if (requestPaymentMethodErr) {
                    console.log(requestPaymentMethodErr);
                }
                if (payload) {
                    console.log(payload);
                }
            });
            // console.log(this.userData);
            // let Data = {'datos':this.userData};
            // this.navCtrl.push(PayinfoPage,Data);
        }
    };
    AddPaymentMethodPage.prototype.dropin = function () {
        var _this = this;
        // var button = document.querySelector('#submit-button');
        __WEBPACK_IMPORTED_MODULE_2_braintree_web_drop_in__["create"]({
            authorization: 'sandbox_gmhv57wq_xg698xhxgkr3z5wx',
            container: '#dropin-container',
            paypal: {
                flow: 'vault'
            }
        }, function (createErr, instance) {
            if (createErr) {
                console.log(createErr);
                _this.CreateErr = createErr;
                _this.booleanCreateErr = true;
            }
            if (instance) {
                console.log(instance);
                _this.Instance = instance;
                _this.booleanInstance = true;
            }
        });
    };
    AddPaymentMethodPage.prototype.showAlertPay = function () {
        var alert = this.alertCtrl.create({
            title: 'Information',
            subTitle: 'verify the payment method information',
            buttons: ['OK']
        });
        alert.present();
    };
    return AddPaymentMethodPage;
}());
AddPaymentMethodPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-payment-method',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\add-payment-method\add-payment-method.html"*/'<!--\n\n  Generated template for the AddPaymentMethodPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="barraRoja">\n\n      <h4>New payment</h4>\n\n  </div>\n\n  <div padding>\n\n    <div id="dropin-container"></div> \n\n  </div>\n\n  <ion-list>\n\n</ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <div class="btnBottom">\n\n          <button (click)="goSavePaymentMethod()">\n\n            Save payment method\n\n          </button> \n\n        </div>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\add-payment-method\add-payment-method.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AddPaymentMethodPage);

//# sourceMappingURL=add-payment-method.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cities__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_states_utils__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_states_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_states_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { PreHomePage } from '../pre-home/pre-home';



// import * as firebase from 'firebase/app';
/**
 * Generated class for the EditUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditUserPage = (function () {
    function EditUserPage(navCtrl, navParams, authServiceProvider, alertCtrl, userService, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.afAuth = afAuth;
        this.codeAreaEstadoSelect = [];
        this.userData = { "username": "", "password": "", "email": "", "name": "", "zipcode": "", "state": "", "picture": "", "verificacion": "", "pais": "", "direccion": "", "tel": "" };
        this.ciudades = [];
        this.ciudad = undefined;
        this.stateZipcode = undefined;
        this.estados = [];
        var stateName = __WEBPACK_IMPORTED_MODULE_3_states_utils___default.a.getStates();
        var stateNameShort = __WEBPACK_IMPORTED_MODULE_3_states_utils___default.a.getUSPSCodes();
        this.pagesUrl = '../assets/lib/codeAreaUsa.json';
        for (var i = 0; stateName.length > i; i++) {
            this.estados.push({ 'name': stateName[i], 'nameShort': stateNameShort[i] });
        }
        this.codeAreaDefi();
    }
    EditUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditUserPage');
        this.userData = JSON.parse(localStorage.getItem('userData'));
        console.log(this.userData);
        this.telA = this.userData.tel.substring(1, 4);
        this.telB = this.userData.tel.substring(6);
        var zipcodea = this.userData['zipcode'];
        console.log(zipcodea);
        this.ciudades.zipcode = this.userData['zipcode'];
        console.log(this.telA);
        console.log(this.telB);
        this.setCity();
    };
    EditUserPage.prototype.goPrehome = function () {
        this.updateUserApp();
        // let Data = {'datos':this.userData};
        //this.navCtrl.push(PreHomePage,Data);
    };
    EditUserPage.prototype.updateUserApp = function () {
        this.userData.tel = '(' + this.telA + ')' + this.telB;
        console.log(this.userData);
        localStorage.setItem('userData', JSON.stringify(this.userData));
        this.userService.setUserDB(this.userData, this.userData['verificacion']);
    };
    EditUserPage.prototype.setCity = function () {
        //console.log(this.userData.state);
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
    EditUserPage.prototype.verifyLoginCode = function () {
        var _this = this;
        this.windowRef.confirmationResult
            .confirm(this.userData['verificacion'])
            .then(function (result) {
            _this.user = result.user;
        })
            .catch(function (error) { return console.log(error, "Incorrect code entered?"); });
    };
    // setZipCode(){
    //   this.DirecD = this.userData.state+' '+this.userData.zipcode;
    // }
    EditUserPage.prototype.findCodeEstado = function (estado) {
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
    };
    EditUserPage.prototype.showAlertSignUp = function () {
        var alert = this.alertCtrl.create({
            title: 'Update',
            subTitle: 'The user was updated',
            buttons: ['OK']
        });
        alert.present();
    };
    EditUserPage.prototype.codeAreaDefi = function () {
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
    return EditUserPage;
}());
EditUserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-user',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\edit-user\edit-user.html"*/'<!--\n\n  Generated template for the EditUserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<h3>My profile</h3>\n\n<form id="signup-form3" class="list" padding>\n\n    <ion-list id="signup-list3">\n\n      <ion-item>\n\n        <ion-icon name="person" item-start></ion-icon>\n\n        <ion-input type="text" placeholder="Name" [(ngModel)]="userData.name"  name="name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="pin" item-start></ion-icon>\n\n        <ion-select [(ngModel)]="userData.pais" name="pais">\n\n          <ion-option value="USA" selected>U.S.A</ion-option>\n\n        </ion-select>\n\n       </ion-item>\n\n      <ion-item>\n\n          <ion-icon name="flag" item-start></ion-icon>\n\n        <ion-select class="mitad" [(ngModel)]="userData.state" name="state" (ngModelChange)="setCity()"> \n\n          <ion-option *ngFor="let state of estados" value="{{state.nameShort}}">{{state.name}}</ion-option>\n\n        </ion-select>\n\n        <ion-select  class="mitad" [(ngModel)]="userData.zipcode" name="zipcode" > <!--[(ngModel)]="gaming"-->\n\n          <ion-option *ngFor="let city of ciudades" value="{{city.zipcode}}">{{city.name}} - {{city.zipcode}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <!-- <ion-item>\n\n        <ion-icon name="home" item-start></ion-icon>\n\n        <ion-input type="number" placeholder="1234" class="mitad" [(ngModel)]="DirecA" name="DirecA"></ion-input>\n\n        <ion-input type="text" placeholder="avenue" value="" class="mitad" [(ngModel)]="DirecB" name="DirecB"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-icon name="home" item-start style="background:transparent; color:transparent;"></ion-icon>\n\n        <ion-input type="text" placeholder="City" class="mitad" [(ngModel)]="DirecC" name="DirecC" ></ion-input>\n\n        <ion-input type="text" placeholder="NJ 0000" value="{{DirecD}}" class="mitad" [(ngModel)]="DirecD" name="DirecD"></ion-input>\n\n      </ion-item> -->\n\n      <ion-item>\n\n        <ion-icon name="mail" item-start></ion-icon>\n\n        <ion-input type="email" placeholder="Mail" [(ngModel)]="userData.email" name="email" ></ion-input>\n\n       </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="contact" item-start></ion-icon>\n\n        <ion-input type="text" placeholder="User" [(ngModel)]="userData.username"  name="username"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="lock" item-start></ion-icon>\n\n        <ion-input type="password" placeholder="Password" [(ngModel)]="userData.password" name="password"></ion-input>\n\n      </ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <ion-item>\n\n              <ion-icon name="call" item-start></ion-icon>this.codeAreaEstadoSelect\n\n               <ion-select [(ngModel)]="telA" name="telA">\n\n                <ion-option *ngFor="let stateCod of codeAreaEstadoSelect" value="{{stateCod.code}}">{{stateCod.code}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n            <ion-item>\n\n              <ion-input type="tel" placeholder="Phone #" [(ngModel)]="telB" name="telB"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      \n\n      <div class="btnBottom">\n\n        <button ion-button color="danger" block (click)="goPrehome()" id="sign-in-button">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n\n      </div>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\edit-user\edit-user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]])
], EditUserPage);

//# sourceMappingURL=edit-user.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sale_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_offer_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myserviceinfo_myserviceinfo__ = __webpack_require__(548);
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
 * Generated class for the MyServicesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyServicesPage = (function () {
    function MyServicesPage(navCtrl, navParams, saleService, offerService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.saleService = saleService;
        this.offerService = offerService;
        this.alertCtrl = alertCtrl;
        this.keyOffer = [];
        this.OffersList = [];
    }
    MyServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyServicesPage');
        this.userActual = localStorage.getItem('verificacion');
        console.log(this.userActual);
        this.getOffer();
    };
    MyServicesPage.prototype.getOffer = function () {
        var _this = this;
        console.info('get offer');
        var OfferServiceGet;
        var SaleServiceGet = this.saleService.getSales(this.userActual)
            .subscribe(function (value) {
            console.log(value);
            // console.log('get saleKey');
            // value.forEach((data) =>{
            //   console.log(data);
            // });
            for (var key in value) {
                // console.log(key);
                if ('$value' == key) {
                    //   //alert('User does not have services');
                    _this.showAlertNoServices();
                }
                else {
                    // this.offerService.getOffer(key);
                    // this.keyOffer.push(key);
                    OfferServiceGet = _this.offerService.getOffer(key)
                        .subscribe(function (datos) {
                        console.info('get offerKey');
                        console.log(datos);
                        _this.OffersList.push(datos);
                    });
                }
            }
            // OfferServiceGet.unsubscribe();
            SaleServiceGet.unsubscribe();
        });
        console.log(this.OffersList);
        // for(let valueOffer of this.keyOffer){
        //   console.log('this.keyOffer');
        //   console.log(this.keyOffer);
        //   console.log(valueOffer);
        // }
    };
    MyServicesPage.prototype.goInfoService = function (obj) {
        console.log(obj);
        var DataService = { 'datos': obj };
        console.log(DataService);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__myserviceinfo_myserviceinfo__["a" /* MyserviceinfoPage */], DataService);
    };
    MyServicesPage.prototype.showAlertNoServices = function () {
        var alert = this.alertCtrl.create({
            title: 'Information',
            subTitle: 'User does not have services',
            buttons: ['OK']
        });
        alert.present();
    };
    return MyServicesPage;
}());
MyServicesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-services',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\my-services\my-services.html"*/'<!--\n\n  Generated template for the MyServicesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<h3>My services</h3>\n\n<h4>List:</h4>\n\n\n\n<ion-list>\n\n  <button ion-item *ngFor="let p of OffersList" (click)="goInfoService(p)" class="btnItem">\n\n    <p> <strong>{{p.name}}</strong>: {{p.Clasificacion.categoria}}</p>\n\n    <!-- <p>professional:</p> -->\n\n    <p><strong>Status</strong>:{{p.status}}</p>\n\n    <p *ngIf="p.status != \'Cancelled\' "><strong>Sale</strong>:{{p.sale}}</p>\n\n  </button>\n\n</ion-list>\n\n<!-- (click)="openPage(p) -->\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\my-services\my-services.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_sale_service__["a" /* SaleService */],
        __WEBPACK_IMPORTED_MODULE_3__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MyServicesPage);

//# sourceMappingURL=my-services.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyserviceinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__ = __webpack_require__(120);
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
 * Generated class for the MyserviceinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyserviceinfoPage = (function () {
    function MyserviceinfoPage(navCtrl, navParams, professionalsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professionalsService = professionalsService;
        //-default
        this.imgJobDefault = "assets/img/professions/cleaning.png";
        this.booleanJob = false;
    }
    MyserviceinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyserviceinfoPage');
        this.dataOffer = this.navParams.get('datos');
        console.log(this.dataOffer);
        this.serviceCode = this.dataOffer['$key'].substring(6);
        this.sale = this.dataOffer.sale;
        this.status = this.dataOffer.status;
        if (this.dataOffer.status == 'In progress') {
            this.status = 'Service in progress';
        }
        if (this.dataOffer.status == 'Finalized') {
            this.status = 'Service completed';
        }
        this.information = this.dataOffer.Clasificacion.informacion.moreInformation;
        if (this.dataOffer.Profession && this.dataOffer.Profession != undefined && this.dataOffer.Profession != null) {
            this.booleanJob = true;
            this.getProfesional();
        }
    };
    MyserviceinfoPage.prototype.getProfesional = function () {
        var _this = this;
        var Jober = this.dataOffer.Profession;
        console.log(Jober);
        this.professionalsService.getProfessional(Jober).subscribe(function (value) {
            console.log(value);
            _this.ImgJobr = _this.imgJobDefault;
            _this.nameJobr = value['prof_name'];
            _this.certificateJobr = value['prof_certificate'];
            _this.insuranceJobr = value['prof_insurance'];
            if (value['prof_picture'] && value['prof_picture'] != '') {
                _this.ImgJobr = value['prof_picture'];
            }
        });
        // let galleryJobr= this.galleryJobDefault;
    };
    return MyserviceinfoPage;
}());
MyserviceinfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-myserviceinfo',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\myserviceinfo\myserviceinfo.html"*/'<!--\n\n  Generated template for the MyserviceinfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>myserviceinfo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="barraRoja">\n\n    <h4>Service information</h4>\n\n  </div>\n\n  <h3>Service code: #{{serviceCode}}</h3>\n\n  <p class="textoCentrado">State</p>\n\n  <h6 id="estadoServicio">{{status}}</h6>\n\n  <div padding>\n\n    <p><span class="textRed">*Amount to be paid: </span>${{sale}}</p>\n\n    <p><span class="textRed">Description:</span></p>\n\n    <p>{{information}}</p>\n\n    <div class="space"></div>\n\n    <div *ngIf="booleanJob">\n\n      <p><span class="textRed">Professional data</span></p>\n\n    </div>\n\n    <ion-grid>\n\n      <ion-row *ngIf="booleanJob">\n\n      <ion-col col-3>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-avatar>\n\n              <img src="{{ImgJobr}}">\n\n            </ion-avatar>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-9>\n\n        <ion-row>\n\n          <ion-col>\n\n            <h4>{{nameJobr}}</h4>\n\n            <img src="assets/img/Estrellas.png" alt="">\n\n          </ion-col>\n\n        </ion-row>	\n\n        <ion-row>	\n\n            <ion-col col-6 *ngIf="certificateJobr">\n\n              <ion-list><ion-item>\n\n                <ion-label>Certificate</ion-label>\n\n                <ion-radio checked="true" value="Certificate"></ion-radio>\n\n              </ion-item></ion-list>\n\n            </ion-col>\n\n            <ion-col col-6 *ngIf="insuranceJobr">\n\n              <ion-list>\n\n                 <ion-item>\n\n                  <ion-label>Insurance</ion-label>\n\n                  <ion-radio checked="true" value="Insurance"></ion-radio>\n\n                </ion-item>\n\n              </ion-list>\n\n            </ion-col>\n\n          </ion-row>	\n\n        </ion-col>\n\n      </ion-row>\n\n  </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\myserviceinfo\myserviceinfo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__["a" /* ProfessionalsService */]])
], MyserviceinfoPage);

//# sourceMappingURL=myserviceinfo.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(574);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

//import { EncriptyService } from './encripty.service';
var UserService = (function () {
    function UserService(afDB) {
        this.afDB = afDB;
        this.Users = [];
        //console.log(this.afDB.list('/user'));
    }
    /*  ----------------user  ----------------------*/
    UserService.prototype.getUsers = function () {
        return this.afDB.list('/user');
    };
    UserService.prototype.getUser = function (userId) {
        console.log(this.afDB.list('/user/' + userId));
        return this.afDB.list('/user/' + userId);
    };
    UserService.prototype.getUserLogin = function (name, pwd) {
        return this.afDB.list('/user')
            .map(function (users) {
            //console.log(users);
            return users.map(function (user) {
                // 	console.log(user);
                // 	console.log(user['user_email']);
                // 	console.log(user['user_name']);
                // 	console.log('KEY:'+user.$key);
                // console.log('EMAIL:'+user.user_email);
                // console.log('NAME:'+user.user_name);
                // console.log('PWD:'+user.user_password);
                // console.log('PWD2:'+pwd);
                if ((user['user_email'] == name) || (user['user_username'] == name)) {
                    console.info('existeUser');
                    if (user['user_password'] == pwd) {
                        console.info('existeUserPwd');
                        // estado = [{"status":true,"userId":user.$key,'userData':user}];
                        return user;
                    }
                }
            });
            //return users;
        });
        /* .subscribe( (users) => {
            for (var key in users) {
                if(users[key]['user_email'] || users[key]['user_name'] ){
                    if( (users[key]['user_email'] == name) && (users[key]['user_name'] == name) ){
                        if(users[key]['user_password'] == pwd){
                            estado = [{"status":true,"userId":key,'userData':users[key]}];
                            return estado;
                        }
                    }
                }
            }
        }); */
    };
    UserService.prototype.getUserexists = function (name, email) {
        return this.afDB.list('/user')
            .map(function (users) {
            //console.log(users);
            return users.map(function (user) {
                // console.log(user);
                // console.log(email);
                // console.log(name);
                // console.log('EMAIL:'+user.user_email);
                // console.log('NAME:'+user.user_username);
                if ((user['user_email'] == email) || (user['user_username'] == name)) {
                    console.log('existeUser getUserexists');
                    return user;
                }
            });
            //return users;
        });
        /* .subscribe( (users) => {
            for (var key in users) {
                if(users[key]['user_email'] || users[key]['user_name'] ){
                    if( (users[key]['user_email'] == name) && (users[key]['user_name'] == name) ){
                        if(users[key]['user_password'] == pwd){
                            estado = [{"status":true,"userId":key,'userData':users[key]}];
                            return estado;
                        }
                    }
                }
            }
        }); */
    };
    UserService.prototype.updateUserPicture = function (userId, picture) {
        console.log(this.afDB.list('/user/' + userId));
        return this.afDB.object('/user/' + userId).set({ 'user_picture': picture });
    };
    UserService.prototype.getUserEmail = function (email) {
        //let listUser:any;
        return this.afDB.list('/user')
            .subscribe(function (users) {
            //console.log(users);
            users.forEach(function (user) {
                if (user['user_email'] == email) {
                    //console.log(user);
                    return user;
                }
            });
        });
    };
    UserService.prototype.getUserEmailPerfil = function (email) {
        return this.afDB.list('/user')
            .map(function (users) {
            //console.log(users);
            return users.map(function (user) {
                if (user['user_email'] == email) {
                    //console.log(user);
                    return user;
                }
            });
        });
    };
    UserService.prototype.newUser = function (userData, keyNew) {
        if (userData === void 0) { userData = []; }
        var key = undefined;
        //default star
        var star = '3';
        console.log('key:' + key);
        console.log('keyNew:' + keyNew);
        if (keyNew && keyNew != null && keyNew != undefined) {
            keyUser = keyNew;
        }
        else {
            var d = new Date();
            key = d.getTime();
            var keyUser = "user_" + (key);
        }
        //console.log(newKeyAddres);
        var ObjAddress = [];
        var username = userData["username"];
        var password = userData["password"];
        //let password = this.encriptyService.GenerateEncripty(userData["password"]);
        var email = userData["email"];
        var name = userData["name"];
        var zipcode = userData["zipcode"];
        var state = userData["state"];
        var picture = userData["picture"];
        //let verificacion = userData["verificacion"];
        var pais = userData["pais"];
        var direccion = userData["direccion"];
        var tel = userData["tel"];
        //console.log(userData);
        if ((userData['username']) && (userData['password']) && (userData['email'])) {
            if ((userData['username'] != undefined) && (userData['username'] != null) && (userData['password'] != undefined) && (userData['password'] != null) && (userData['email'] != undefined) && (userData['email'] != null)) {
                this.afDB.object('/user/' + keyUser).set({ "user_username": username, "user_password": password, "user_email": email, "user_name": name, "user_zipcode": zipcode, "user_state": state, "user_picture": picture, "user_pais": pais, "user_tel": tel, "user_star": star });
                ObjAddress.push({ "label": 'My Address', "name": direccion });
                this.newAddress(keyUser, ObjAddress);
                console.info('user create');
            }
        }
    };
    UserService.prototype.setUserDB = function (userData, keyUser) {
        if (userData === void 0) { userData = []; }
        //default star
        //console.log(newKeyAddres);
        //let ObjAddress: any = [];
        var username = userData["username"];
        var password = userData["password"];
        //let password = this.encriptyService.GenerateEncripty(userData["password"]);
        var email = userData["email"];
        var name = userData["name"];
        var zipcode = userData["zipcode"];
        var state = userData["state"];
        var picture = userData["picture"];
        //let verificacion = userData["verificacion"];
        var pais = userData["pais"];
        //let direccion = userData["direccion"];
        var tel = userData["tel"];
        //console.log(userData);
        if ((userData['username']) && (userData['password']) && (userData['email'])) {
            if ((userData['username'] != undefined) && (userData['username'] != null) && (userData['password'] != undefined) && (userData['password'] != null) && (userData['email'] != undefined) && (userData['email'] != null)) {
                this.afDB.object('/user/' + keyUser + '/user_username').set(username);
                this.afDB.object('/user/' + keyUser + '/user_password').set(password);
                this.afDB.object('/user/' + keyUser + '/user_email').set(email);
                this.afDB.object('/user/' + keyUser + '/user_name').set(name);
                this.afDB.object('/user/' + keyUser + '/user_zipcode').set(zipcode);
                this.afDB.object('/user/' + keyUser + '/user_state').set(state);
                this.afDB.object('/user/' + keyUser + '/user_picture').set(picture);
                this.afDB.object('/user/' + keyUser + '/user_pais').set(pais);
                this.afDB.object('/user/' + keyUser + '/user_tel').set(tel);
                console.log(userData);
                console.info('user update');
            }
        }
    };
    /*  ----------------user - address ----------------------*/
    UserService.prototype.getAddress = function (userId) {
        if (userId === void 0) { userId = ""; }
        //return this.afDB.list('/user/'+userId);
        //return this.afDB.object('/user/'+userId);
        return this.afDB.list('/user/' + userId + '/user_address/');
    };
    UserService.prototype.newAddress = function (userId, ObjAddress) {
        if (userId === void 0) { userId = ""; }
        if (ObjAddress === void 0) { ObjAddress = []; }
        var d = new Date();
        var key = d.getTime();
        // console.log(key);
        var keyAddress = "addr_" + key;
        var name = ObjAddress['0']['name'];
        var label = ObjAddress['0']['label'];
        // console.log(ObjAddress['0']);
        // console.log(ObjAddress['0']['label']);
        // console.log(name);
        // console.log(label);
        console.info('user  address create');
        if ((ObjAddress['0']['label']) && (ObjAddress['0']['name'])) {
            if ((label != undefined) && (label != null) && (name != undefined) && (name != null)) {
                return this.afDB.object('/user/' + userId + '/user_address/' + keyAddress).set({ "addr_label": label, "addr_info": name });
            }
        }
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningSalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_contractor_cleaning_contractor__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sale_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_offer_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_show__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_professionals_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






// import { HomePage } from '../home/home';
//import { OfferService } from '../../services/offer.service';


/**
 * Generated class for the CleanigSalePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CleaningSalePage = (function () {
    function CleaningSalePage(navCtrl, navParams, alertCtrl, professionalsService, geo, platform, saleService, offerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.professionalsService = professionalsService;
        this.geo = geo;
        this.platform = platform;
        this.saleService = saleService;
        this.offerService = offerService;
        //--valiables por defecto
        this.imgJobDefault = "assets/img/professions/cleaning.png";
        this.galleryJobDefault = "assets/img/gallery.png";
        this.Workers = [];
        this.WorkersInfo = [];
        this.professionals = [];
        this.professsional = [];
        //--timer
        this.segundos = 0;
        this.minutos = 2;
        this.showContador = true;
        //-- geoLocation
        this.lat = 37.09024;
        this.lng = -95.71289100000001;
        this.zom = 16;
        this.contador = '0' + this.minutos + ':' + '0' + this.segundos;
        this.startTimer();
        // this.getProfessionals();
    }
    CleaningSalePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CleaningSalePage');
        //--Ini-comentado para evitar mas creaciones
        this.dataOffer = this.navParams.get('datos');
        this.maxOffer = this.dataOffer['dataService']['Clasificacion']['informacion']['maxOffer'];
        this.dataService = this.dataOffer['dataService'];
        this.keyOffer = this.dataOffer['offer'];
        this.userActual = localStorage.getItem('verificacion');
        console.log(this.dataOffer);
        console.log(JSON.stringify(this.dataService));
        //--Fin-comentado para evitar mas creaciones
        //--Ini-comentado para tener flujo normal
        // this.userActual = "user_1504881933094";
        // this.keyOffer = "offer_1505227659259"; 
        // this.dataService = {"name":"Cleaning","class":"yellow","Clasificacion":{"categoria":"Maids","certificacion":"true","seguro":"true","distancia":"4M","experiencia":"3Y","informacion":{"maxOffer":"123","placeMaid":"grande","roomMaid":"1","batMaid":"1","foto":"","moreInformation":"maid service info"}}};
        // this.maxOffer = 453;
        //--Fin-comentado para tener flujo normal
        this.getUserLocation();
        this.getUserLocationGeolocation();
        this.getSale();
    };
    CleaningSalePage.prototype.goCleaningContractor = function (ganador) {
        console.info('goCleaningContractor');
        console.log(ganador);
        var DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer, "win": ganador } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cleaning_contractor_cleaning_contractor__["a" /* CleaningContractorPage */], DataService);
    };
    CleaningSalePage.prototype.goIndex = function () {
        //--set status offer y sale
        console.info('Offer -Cancelled');
        this.saleService.setStatus(this.userActual, this.keyOffer, 'Cancelled');
        this.offerService.setStatus(this.keyOffer, 'Cancelled');
        clearInterval(this.objNodeTimer);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__show_show__["a" /* ShowPage */]);
    };
    CleaningSalePage.prototype.showInfoCleaning = function (id) {
        if (id === void 0) { id = "prof_1"; }
        var index;
        for (index in this.WorkersInfo) {
            if (this.WorkersInfo[index]['$key'] == id) {
                // console.log(this.WorkersInfo[index]);
                //--imagenes por defecto
                var ImgJobr = this.imgJobDefault;
                var galleryAJobr = this.galleryJobDefault;
                var galleryBJobr = this.galleryJobDefault;
                var galleryCJobr = this.galleryJobDefault;
                var galleryDJobr = this.galleryJobDefault;
                // let galleryJobr= this.galleryJobDefault;
                var nameJobr = this.WorkersInfo[index]['prof_name'];
                var certificateJobr = this.WorkersInfo[index]['prof_certificate'];
                var insuranceJobr = this.WorkersInfo[index]['prof_insurance'];
                var commentsJobr = this.WorkersInfo[index]['prof_comments'];
                var presentationJobr = this.WorkersInfo[index]['prof_presentation'];
                if (this.WorkersInfo[index]['prof_picture'] && this.WorkersInfo[index]['prof_picture'] != '') {
                    ImgJobr = this.WorkersInfo[index]['prof_picture'];
                }
                if (this.WorkersInfo[index]['prof_galleryA'] && this.WorkersInfo[index]['prof_galleryA'] != '') {
                    galleryAJobr = this.WorkersInfo[index]['prof_galleryA'];
                }
                if (this.WorkersInfo[index]['prof_galleryB'] && this.WorkersInfo[index]['prof_galleryB'] != '') {
                    galleryBJobr = this.WorkersInfo[index]['prof_galleryB'];
                }
                if (this.WorkersInfo[index]['prof_galleryC'] && this.WorkersInfo[index]['prof_galleryC'] != '') {
                    galleryCJobr = this.WorkersInfo[index]['prof_galleryC'];
                }
                if (this.WorkersInfo[index]['prof_galleryD'] && this.WorkersInfo[index]['prof_galleryD'] != '') {
                    galleryDJobr = this.WorkersInfo[index]['prof_galleryD'];
                }
                var contenido = '';
                contenido += '<div class="col-40"><img src="' + ImgJobr + '"></div>';
                contenido += '<div class="col-60"><h4>' + nameJobr + '</h4><img src="assets/img/Estrellas.png">';
                contenido += '<p>';
                if (certificateJobr == true) {
                    contenido += '<span class="ItemPService"><img src="assets/img/okBlue.png"> <span> Certificate</span>,';
                }
                if (insuranceJobr == true) {
                    contenido += '</span><span class="ItemPService"><img src="assets/img/okBlue.png"> <span>  Insurance</span></span>';
                }
                contenido += '</p></div>';
                contenido += "<h5>Presentation</h5><p>" + presentationJobr + "</p>";
                // contenido += id+'';
                contenido += '<h5>Gallery</h5>';
                contenido += '<img src="' + galleryAJobr + '" alt="" class="imagen50">';
                contenido += '<img src="' + galleryBJobr + '" alt="" class="imagen50">';
                contenido += '<img src="' + galleryCJobr + '" alt="" class="imagen50">';
                contenido += '<img src="' + galleryDJobr + '" alt="" class="imagen50">';
                contenido += '<h5>Comments</h5>';
                // console.log('commentsJobr');
                // console.log(commentsJobr);
                for (var key in commentsJobr) {
                    // console.log(commentsJobr[key]);
                    // console.log(commentsJobr[key]['user_username']);
                    console.log(commentsJobr[key]['comm_qualification']);
                    // console.log(commentsJobr[key]['comm_description']);
                    contenido += '<div class="comments">';
                    contenido += '<h6>' + commentsJobr[key]['user_username'] + ' <img src="assets/img/Estrellas.png" alt=""></h6>';
                    contenido += '<p>' + commentsJobr[key]['comm_description'] + '</p>';
                    contenido += '</div>';
                }
                // contenido +='<div class="comments">';
                // contenido +='<h6>Melisa Lorem <img src="assets/img/Estrellas.png" alt=""></h6>';
                // contenido +='<p>Odit, cupiditate. Quibusdam ducimus minus incidunt voluptas consequatur odit, adipisci eveniet laborum obcaecati labore! Sapiente repellat ipsum in autem fuga sint enim recusandae incidunt tenetur corporis neque totam, quam sequi placeat cupiditate, inventore! Alias repudiandae ducimus laudantium nemo quisquam, quod sint et quam, id ipsum magnam veniam amet sit a voluptatibus, similique ipsa voluptatem voluptates velit quo. Quidem odio a nemo sit illum. </p>';
                // contenido +='</div>';
                var alert_1 = this.alertCtrl.create({
                    // title: 'Estefania Lorem',
                    message: contenido,
                    buttons: ['OK']
                });
                alert_1.present();
            }
        }
    };
    //--- timer
    CleaningSalePage.prototype.startTimer = function () {
        var _this = this;
        this.objNodeTimer = setInterval(function () { return _this.timer(); }, 1000);
    };
    CleaningSalePage.prototype.timer = function () {
        if (this.minutos == 0 && this.segundos == 1) {
            // if(this.minutos == 1 && this.segundos == 58 ){ 
            //this.showContador = false;
            clearInterval(this.objNodeTimer);
            this.showContador = false;
            this.ganador();
        }
        else {
            if (--this.segundos < 0) {
                this.segundos = 59;
                if (--this.minutos < 0) {
                    //this.minutos = 59;
                    //if( (this.segundos = 0) && (this.minutos = 0)){ this.showContador = false;}
                }
            }
            this.contador = this.dobleCifra(this.minutos) + ':' + this.dobleCifra(this.segundos);
        }
    };
    //--- Functions
    CleaningSalePage.prototype.getSale = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var finRegistro;
            return __generator(this, function (_a) {
                this.MenosPrecio = undefined;
                finRegistro = false;
                this.saleService.getSale(this.userActual, this.keyOffer)
                    .subscribe(function (result) {
                    _this.Workers = [];
                    _this.WorkersInfo = [];
                    _this.MenosPrecio = undefined;
                    //console.log(result);
                    //console.log(result.sale);
                    //console.log(result.providers);
                    if (_this.MenosPrecio == undefined) {
                        _this.MenosPrecio = Number(result.sale);
                    }
                    var trabajadores = result.providers;
                    var _loop_1 = function (trabajador) {
                        // console.log(trabajadores);
                        // console.log(trabajadores[trabajador]);
                        //console.log(trabajadores[trabajador]['offer']);
                        // console.log(trabajador);
                        if (_this.MenosPrecio > Number(trabajadores[trabajador]['offer'])) {
                            _this.MenosPrecio = Number(trabajadores[trabajador]['offer']);
                        }
                        var PromiseUser = _this.professionalsService.getProfessional(trabajador);
                        // console.log(PromiseUser);
                        PromiseUser.subscribe(function (user) {
                            //console.log(user);
                            _this.WorkersInfo.push(user);
                            var img = _this.imgJobDefault;
                            if (user.prof_picture && user.prof_picture != undefined && user.prof_picture != '') {
                                img = user.prof_picture;
                            }
                            _this.Workers.push({ "id": trabajador, "offer": trabajadores[trabajador]['offer'], "img": img, "name": user.prof_name });
                        });
                    };
                    for (var trabajador in trabajadores) {
                        _loop_1(trabajador);
                    }
                    finRegistro = true;
                    console.log(_this.Workers);
                    console.log(_this.WorkersInfo);
                    console.log(_this.MenosPrecio);
                    var estadoUser = _this.Workers;
                    console.log(estadoUser);
                    // for(let jobs in estadoUser){
                    //   console.log('jobs');
                    //   console.log(jobs);
                    //   console.log(estadoUser[jobs]);
                    // }
                    // console.log('verifcar la informacion');
                });
                return [2 /*return*/];
            });
        });
    };
    CleaningSalePage.prototype.ganador = function () {
        console.info('ganador');
        // console.log(this.Workers.length);
        // console.log('this.Workers.length');
        if (this.Workers.length != 0) {
            for (var index in this.Workers) {
                console.log(index);
                //console.log(this.Workers[index]);
                if (this.MenosPrecio == this.Workers[index]['offer']) {
                    this.goCleaningContractor(this.Workers[index]);
                    this.showAlertFinOffer();
                }
            }
        }
        else {
            this.goServiceSinOff();
        }
    };
    CleaningSalePage.prototype.goServiceSinOff = function () {
        //--set status offer y sale
        console.info('Sin Offer');
        this.showAlertSinOffer();
        this.saleService.setStatus(this.userActual, this.keyOffer, 'Saved');
        this.offerService.setStatus(this.keyOffer, 'Saved');
        clearInterval(this.objNodeTimer);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__show_show__["a" /* ShowPage */]);
    };
    CleaningSalePage.prototype.dobleCifra = function (num) {
        if (num < 10) {
            return '0' + num;
        }
        else {
            return '' + num;
        }
    };
    CleaningSalePage.prototype.getUserLocation = function () {
        var _this = this;
        /// locate the user
        // console.info('get User location2');
        // console.info(navigator);
        //console.info(navigator.geolocation);
        //console.info(JSON.stringify(navigator));
        //console.info(JSON.stringify(navigator.geolocation));
        // if (navigator) {
        //   console.log('soportado2');
        //   console.log(navigator);
        // } else {
        //   console.log('no soportado');
        //   /* geolocation IS NOT available */
        // }
        var geolocationz = navigator.geolocation;
        // console.log(geolocationz);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log('Location');
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                console.info(position.coords.latitude);
                console.info(position.coords.longitude);
            });
        }
    };
    CleaningSalePage.prototype.getUserLocationGeolocation = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var options = {
                timeout: 5000
            };
            _this.geo.getCurrentPosition(options).then(function (resp) {
                console.log('geoLocation');
                console.info(resp.coords.latitude);
                console.info(resp.coords.longitude);
                _this.lat = resp.coords.latitude;
                _this.lng = resp.coords.longitude;
            }).catch(function () {
                console.log("Error to get location");
            });
        });
    };
    // private getProfessionals(){
    //   this.professionalsService.getProfessionals()
    //   .forEach(professionals =>{
    //     this.professionals = professionals;
    //   });
    // console.log(this.professionals);
    // }
    CleaningSalePage.prototype.showAlertSinOffer = function () {
        var alert = this.alertCtrl.create({
            title: 'Information',
            subTitle: 'No offers',
            buttons: ['OK']
        });
        alert.present();
    };
    CleaningSalePage.prototype.showAlertFinOffer = function () {
        var alert = this.alertCtrl.create({
            title: 'Information',
            subTitle: 'The sale ended',
            buttons: ['OK']
        });
        alert.present();
    };
    return CleaningSalePage;
}());
CleaningSalePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning-sale',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\cleaning-sale\cleaning-sale.html"*/'<!--\n\n  Generated template for the CleanigSalePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n<div class="mapa">\n\n  <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zom">\n\n    <agm-marker [latitude]="lat" [longitude]="lng">\n\n      <agm-info-window>\n\n        <h3><strong>Howdy!</strong></h3>\n\n        <p>You are here!</p>\n\n      </agm-info-window>\n\n    </agm-marker>\n\n  </agm-map>\n\n</div>\n\n\n\n<!-- <div *ngIf="lat && lng"> -->\n\n    <!-- <agm-map [latitude]="lat" [longitude]="lng">\n\n      <agm-marker [latitude]="lat" [longitude]="lng">\n\n        <agm-info-window>\n\n          <h3><strong>Howdy!</strong></h3>\n\n          <p>You are here!</p>\n\n        </agm-info-window>\n\n      </agm-marker>\n\n    </agm-map> -->\n\n  <!-- <div> -->\n\n<div class="contador" *ngIf="showContador" >\n\n    <h3>{{contador}}</h3>\n\n</div>\n\n<div class="barraRoja">\n\n  <h4>Offers received</h4>\n\n</div>\n\n<ion-grid class="body">\n\n  <ion-row *ngFor="let item of Workers">\n\n    <ion-col col-2>\n\n      <ion-icon name="trophy" *ngIf="item.offer == MenosPrecio"></ion-icon>\n\n      <!-- <ion-icon name="trophy" *ngIf="{{item.icon}}"></ion-icon> -->\n\n    </ion-col>\n\n    <ion-col col-6>\n\n     <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="{{item.img}}">\n\n      </ion-avatar>\n\n      <p>{{item.name}}</p>\n\n     </ion-item>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      <h5>{{item.offer}}</h5>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      <button ion-button icon-only round color="light" (click)="showInfoCleaning(item.id)">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n<!-- <div class="btnBottom">\n\n          <button ion-button color="danger" block icon-left (click)="goCleaningContractor()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n\n        </div> -->\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n     <ion-row>\n\n      <ion-col col-6>\n\n        <div class="price">\n\n          <p>Initial value</p>\n\n          <p>${{maxOffer}}</p>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button id="btnCancel" ion-button block color="light"(click)="goIndex()">Cancel\n\n        </button>\n\n      </ion-col>\n\n     </ion-row>\n\n    </ion-grid>  \n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\cleaning-sale\cleaning-sale.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__services_professionals_service__["a" /* ProfessionalsService */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__services_sale_service__["a" /* SaleService */],
        __WEBPACK_IMPORTED_MODULE_4__services_offer_service__["a" /* OfferService */]])
], CleaningSalePage);

//# sourceMappingURL=cleaning-sale.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* unused harmony export googleMapsKey */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_geocode_service__ = __webpack_require__(1042);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(1019);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_singup_singup__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_show_show__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_verify_your_phone_verify_your_phone__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_payment_methods_payment_methods__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_payinfo_payinfo__ = __webpack_require__(1021);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cleaning_cleaning__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cleaning_info_cleaning_info__ = __webpack_require__(1022);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_cleaning_sale_cleaning_sale__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cleaning_contractor_cleaning_contractor__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cleaning_info_service_cleaning_info_service__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cleaning_vote_cleaning_vote__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cleaning_ok_cleaning_ok__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_pre_home_pre_home__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_new_address_new_address__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_profession_profession__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_job_with_us_job_with_us__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_policies_policies__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_payments_payments__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_edit_user_edit_user__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_services_care_services_care__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_services_cleaning_services_cleaning__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_services_janotorial_services_janotorial__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_services_transportation_services_transportation__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_services_food_services_food__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_services_legal_services_legal__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_services_beauty_services_beauty__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_my_services_my_services__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_myserviceinfo_myserviceinfo__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_add_payment_method_add_payment_method__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_braintree_service__ = __webpack_require__(1024);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_offer_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_professionals_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_professions_service__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_user_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_encripty_service__ = __webpack_require__(1025);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_careProfessions_service__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__services_cleaningProfessions_service__ = __webpack_require__(1029);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__services_sale_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_native_geocoder__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_splash_screen__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_facebook__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_angularfire2__ = __webpack_require__(1032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_angularfire2_database__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_storage__ = __webpack_require__(1033);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__agm_core__ = __webpack_require__(1037);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_geolocation__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//---pages

































//import { ProfessionPage } from '../pages/profession/profession';
//---services



















//import firebase from 'firebase';
//import { EmailComposer } from '@ionic-native/email-composer';
var firebaseConfig = {
    apiKey: "AIzaSyBmrc2CjBbIJD_Pu_kkCcV8qNXJfsEBaxo",
    authDomain: "usuarioappjobid.firebaseapp.com",
    databaseURL: "https://usuarioappjobid.firebaseio.com",
    projectId: "usuarioappjobid",
    storageBucket: "usuarioappjobid.appspot.com",
    messagingSenderId: "679089691484"
};
var googleMapsKey = 'AIzaSyB8zF6lhZegDjsV_mrqxd9Fb3YFTw2__AA';
// AIzaSyAQX3yZ5oIh8mXpohNBapYrfvT7qr19IK4
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_singup_singup__["a" /* SingupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_show_show__["a" /* ShowPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_verify_your_phone_verify_your_phone__["a" /* VerifyYourPhonePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_payment_methods_payment_methods__["a" /* PaymentMethodsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_payinfo_payinfo__["a" /* PayinfoPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_profession_profession__["a" /* ProfessionPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_cleaning_cleaning__["a" /* CleaningPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_cleaning_info_cleaning_info__["a" /* CleaningInfoPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_cleaning_contractor_cleaning_contractor__["a" /* CleaningContractorPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_cleaning_info_service_cleaning_info_service__["a" /* CleaningInfoServicePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_cleaning_vote_cleaning_vote__["a" /* CleaningVotePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_cleaning_ok_cleaning_ok__["a" /* CleaningOkPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_pre_home_pre_home__["a" /* PreHomePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_new_address_new_address__["a" /* NewAddressPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_job_with_us_job_with_us__["a" /* JobWithUsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_policies_policies__["a" /* PoliciesPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_payments_payments__["a" /* PaymentsPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_edit_user_edit_user__["a" /* EditUserPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_my_services_my_services__["a" /* MyServicesPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_services_care_services_care__["a" /* ServicesCarePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_services_cleaning_services_cleaning__["a" /* ServicesCleaningPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_services_janotorial_services_janotorial__["a" /* ServicesJanotorialPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_services_transportation_services_transportation__["a" /* ServicesTransportationPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_services_food_services_food__["a" /* ServicesFoodPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_services_legal_services_legal__["a" /* ServicesLegalPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_services_beauty_services_beauty__["a" /* ServicesBeautyPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_myserviceinfo_myserviceinfo__["a" /* MyserviceinfoPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_add_payment_method_add_payment_method__["a" /* AddPaymentMethodPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_52_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_53_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_54_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_55__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__mydb',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            }),
            __WEBPACK_IMPORTED_MODULE_56__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: googleMapsKey
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_singup_singup__["a" /* SingupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_show_show__["a" /* ShowPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_verify_your_phone_verify_your_phone__["a" /* VerifyYourPhonePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_payment_methods_payment_methods__["a" /* PaymentMethodsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_payinfo_payinfo__["a" /* PayinfoPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_profession_profession__["a" /* ProfessionPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_cleaning_cleaning__["a" /* CleaningPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_cleaning_info_cleaning_info__["a" /* CleaningInfoPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_cleaning_contractor_cleaning_contractor__["a" /* CleaningContractorPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_cleaning_info_service_cleaning_info_service__["a" /* CleaningInfoServicePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_cleaning_vote_cleaning_vote__["a" /* CleaningVotePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_cleaning_ok_cleaning_ok__["a" /* CleaningOkPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_pre_home_pre_home__["a" /* PreHomePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_new_address_new_address__["a" /* NewAddressPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_job_with_us_job_with_us__["a" /* JobWithUsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_policies_policies__["a" /* PoliciesPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_payments_payments__["a" /* PaymentsPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_edit_user_edit_user__["a" /* EditUserPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_my_services_my_services__["a" /* MyServicesPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_services_care_services_care__["a" /* ServicesCarePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_services_cleaning_services_cleaning__["a" /* ServicesCleaningPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_services_janotorial_services_janotorial__["a" /* ServicesJanotorialPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_services_transportation_services_transportation__["a" /* ServicesTransportationPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_services_food_services_food__["a" /* ServicesFoodPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_services_legal_services_legal__["a" /* ServicesLegalPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_services_beauty_services_beauty__["a" /* ServicesBeautyPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_myserviceinfo_myserviceinfo__["a" /* MyserviceinfoPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_add_payment_method_add_payment_method__["a" /* AddPaymentMethodPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_48__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_50__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_geocode_service__["a" /* GeocodeServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_39__services_braintree_service__["a" /* BraintreeService */],
            __WEBPACK_IMPORTED_MODULE_41__services_professionals_service__["a" /* ProfessionalsService */],
            __WEBPACK_IMPORTED_MODULE_40__services_offer_service__["a" /* OfferService */],
            __WEBPACK_IMPORTED_MODULE_42__services_professions_service__["a" /* ProfessionsService */],
            __WEBPACK_IMPORTED_MODULE_45__services_careProfessions_service__["a" /* CareProfessionsService */],
            __WEBPACK_IMPORTED_MODULE_46__services_cleaningProfessions_service__["a" /* CleaningProfessionsService */],
            __WEBPACK_IMPORTED_MODULE_47__services_sale_service__["a" /* SaleService */],
            __WEBPACK_IMPORTED_MODULE_43__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_44__services_encripty_service__["a" /* EncriptyService */],
            __WEBPACK_IMPORTED_MODULE_51__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_57__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_49__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_show_show__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_job_with_us_job_with_us__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_policies_policies__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pre_home_pre_home__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_payments_payments__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_edit_user_edit_user__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_my_services_my_services__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Facebook } from '@ionic-native/facebook';

// import { CleaningSalePage } from '../pages/cleaning-sale/cleaning-sale';









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth, userService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afAuth = afAuth;
        this.userService = userService;
        this.userName = 'hola logeado';
        this.srcUser = 'assets/img/user.png';
        this.star = '3';
        //rootPage: any = PreHomePage;
        // rootPage: any = CleaningSalePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.menu_is_enabled = true;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Edit', component: __WEBPACK_IMPORTED_MODULE_11__pages_edit_user_edit_user__["a" /* EditUserPage */] },
            { title: 'Menu', component: __WEBPACK_IMPORTED_MODULE_6__pages_show_show__["a" /* ShowPage */] },
            { title: 'My services', component: __WEBPACK_IMPORTED_MODULE_12__pages_my_services_my_services__["a" /* MyServicesPage */] },
            { title: 'Address', component: __WEBPACK_IMPORTED_MODULE_9__pages_pre_home_pre_home__["a" /* PreHomePage */] },
            { title: 'Payments', component: __WEBPACK_IMPORTED_MODULE_10__pages_payments_payments__["a" /* PaymentsPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.usuarioLogeado();
        });
    };
    MyApp.prototype.usuarioLogeado = function () {
        var _this = this;
        var userDBLoad;
        var goPagePrehomeLoad = false;
        this.afAuth.authState.subscribe(function (userAuth) {
            //console.log('find user menu');
            //console.log(userAuth);
            if (userAuth) {
                //if(user.providerData["0"].providerId == "facebook.com"){
                console.info('find user menu');
                var email = userAuth.providerData["0"].email;
                //console.log(email);
                var Userexists = _this.userService.getUserEmailPerfil(email);
                Userexists.forEach(function (users) {
                    //console.log('user1');
                    //console.log(users);
                    users.forEach(function (user) {
                        if (user != undefined && user != null) {
                            //console.log('usuario load data');
                            //console.log(user);
                            // userDBLoad = user;
                            _this.userMenu = { "email": user['user_email'], "name": user['user_name'], "pais": user['user_pais'], "password": user['user_password'], "picture": user['user_picture'], "state": user['user_state'], "tel": user['user_tel'], "username": user['user_username'], "verificacion": user['$key'], "zipcode": user['user_zipcode'] };
                            _this.userName = user['user_username'];
                            if (user['user_picture'] && user['user_picture'] != '' && user['user_picture'] != null && user['user_picture'] != undefined) {
                                _this.srcUser = user['user_picture'];
                            }
                            if (user['user_star'] && user['user_star'] != '' && user['user_star'] != null && user['user_star'] != undefined) {
                                _this.star = user['user_star'];
                            }
                            // goPagePrehomeLoad= true;
                            // console.log(goPagePrehomeLoad);
                            // if(goPagePrehomeLoad){
                            //   ---this.goNextPagePrehomeFace(userDBLoad);
                            // }
                        }
                    });
                });
            }
            else {
                console.info('find user menu - no');
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (this.userMenu && this.userMenu != undefined) {
            var Data = { 'datos': this.userMenu };
            this.nav.setRoot(page.component, Data);
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    MyApp.prototype.cerrarSeccion = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function (value) {
            console.log(value);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        }).catch(function (error) { return console.info(error); });
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
    };
    MyApp.prototype.goJobWithUs = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_job_with_us_job_with_us__["a" /* JobWithUsPage */]);
    };
    MyApp.prototype.goPolicies = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_policies_policies__["a" /* PoliciesPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title class="tittleMenu">JOBID</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n        <ion-item class="imgUser">\n\n          <ion-thumbnail item-start>\n\n            <img src="{{srcUser}}" alt="userLogo">\n\n          </ion-thumbnail>\n\n          <p>{{userName}}</p>\n\n          <p><ion-icon name="star" class="nota" item-start></ion-icon> {{star}}</p>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n      <button ion-item class="loginOut" menuToggle (click)="cerrarSeccion()">\n\n        Login out\n\n      </button> \n\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer>\n\n      <ion-toolbar>\n\n          <ion-list>\n\n              <button ion-item (click)="goJobWithUs()" menuToggle>\n\n                Job with us\n\n              </button>\n\n              <button ion-item (click)="goPolicies()" menuToggle>\n\n                Policies <p class="version">V.1</p>\n\n              </button> \n\n               \n\n            </ion-list>\n\n      </ion-toolbar>\n\n    </ion-footer>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" ></ion-nav>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_address_new_address__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_show__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_geocode_service__ = __webpack_require__(1042);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



//provider create googleMaps


// import * as firebase from 'firebase/app';
/**
 * Generated class for the PreHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PreHomePage = (function () {
    function PreHomePage(navCtrl, navParams, 
        //public authServiceProvider: AuthServiceProvider,
        userService, geo, platform, afAuth, nativeGeocoder, geocodeServiceProvider) {
        // this.address =[
        // 	{"label":"casa","name":"direccion1"},
        //  {"label":"apartamento","name":"direcccion2"},
        // ];
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.geo = geo;
        this.platform = platform;
        this.afAuth = afAuth;
        this.nativeGeocoder = nativeGeocoder;
        this.geocodeServiceProvider = geocodeServiceProvider;
        //userData = {"username":"Angel","password":"12345","email":"angellg1990@gmail.com","name":"Angel","zipcode":"90003","state":"CA","picture":"","verificacion":"20","pais":"USA","direccion":"1234 ave,bogota,CA 90003","tel":"(408)1234567"};
        this.address = [];
        this.userData = [];
        this.userActual = "user_1";
        this.userName = '';
        //-- geoLocation
        this.lat = 37.09024;
        this.lng = -95.71289100000001;
        this.zom = 17;
        //-data
        this.ObjAddress = [];
        // this.userService.getUser(this.userActual)
        // .forEach( datosUsuario =>{
        //   console.log(datosUsuario);
        // });
        //console.log(this.userService.getAddress('angellg1990@gmail.com'));
    }
    PreHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreHomePage');
        this.userData = this.navParams.get('datos');
        this.userActual = this.userData['verificacion'];
        this.userName = this.userData['username'];
        localStorage.setItem('userData', JSON.stringify(this.userData));
        localStorage.setItem('verificacion', this.userData['verificacion']);
        //console.log(this.userName);
        console.log(this.userData);
        console.log(this.userActual);
        //this.getUrlDataAddres(); 
        this.getAddressUser(this.userActual);
        this.afAuth.authState.forEach(function (data) { return console.log(data); });
        // let user:any = firebase.auth().currentUser;
        // console.log(user);
        // if (user.isEmailVerified()) {
        //   console.log('user verificado');
        // }else{
        //   console.log('user no verificado');
        // }
        // geonames.findNearBy(this.lat, this.lng, callback, options);
    };
    PreHomePage.prototype.goShow = function (item) {
        //console.log(item);
        var DataItem = { 'datos': item };
        localStorage.setItem('address', JSON.stringify(item));
        //console.log(DataItem);  
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__show_show__["a" /* ShowPage */], DataItem);
    };
    PreHomePage.prototype.goNewAddress = function () {
        var DataItem = { 'datos': this.userData };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__new_address_new_address__["a" /* NewAddressPage */], DataItem);
    };
    PreHomePage.prototype.goLocation = function () {
        // this.getUserLocation();
        this.getUserLocationGeolocation();
        // this.getNames();
        // this.getNamesDireccion();
        // this.getNameAddress();
    };
    // getNames(){
    //   // you can use Geonames options to manage result format
    //   var options = {
    //     language: ''
    //   };
    //   geonames.findNearBy(4.5510497999999995, -74.0984553, (err, result)=>{
    //     // geonames.findNearBy(this.lat, this.lng, (err, result)=>{
    //       if (err) {
    //         console.log("There was an error resolving coordinates.");
    //         console.log(err);
    //         return;
    //       }
    //       console.log("Result: " + JSON.stringify(result));
    //       console.log('result findNearBy');
    //       console.log(result);
    //     },'en');
    //   }
    //   getNamesDireccion(){
    //     //no disponible para browser
    //     this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818)
    //     .then((result: NativeGeocoderReverseResult) => console.log(JSON.stringify(result)))
    //     .catch((error: any) => console.log(error));
    //   }
    PreHomePage.prototype.getNameAddress = function () {
        var _this = this;
        this.geocodeServiceProvider.GeoCodificationInversa(this.lat, this.lng)
            .then(function (result) {
            console.log(result);
            _this.guardarDireccionGeo(result);
        })
            .catch(function (error) { console.log(error); console.log('error geoCdoficiacion'); });
    };
    PreHomePage.prototype.getAddressUser = function (userId) {
        var _this = this;
        this.userService.getAddress(userId)
            .subscribe(function (datosUsuario) {
            //console.log(datosUsuario);
            var cont = 1;
            for (var usuario in datosUsuario) {
                //console.log(usuario);
                //console.log(datosUsuario[usuario]);
                _this.address.push({ "label": datosUsuario[usuario]['addr_label'], "name": datosUsuario[usuario]['addr_info'] });
                if (cont == 1) {
                    localStorage.setItem('address', JSON.stringify({ "label": datosUsuario[usuario]['addr_label'], "name": datosUsuario[usuario]['addr_info'] }));
                    cont += 1;
                }
                //console.log(this.address);
            }
            //console.log(datosUsuario);
        });
        console.info(localStorage);
    };
    PreHomePage.prototype.getUrlDataAddres = function () {
        // this.authServiceProvider.postData(this.userData,'userAddres').then((result) => {
        //  //console.log(result);
        //  //console.log(result['userAddres']['0']);
        //  //this.address.push(result['userAddres']['0']);
        //  this.address.push({"label":result['userAddres']['0']['dic_name'],"name":result['userAddres']['0']['dic_direccion']});
        //  }, (err) => {
        //     // Error log
        //     //console.log('error '.err);
        //     alert('error userAddres');
        //   });
        // this.userService.getUser()
        // .subscribe( datosUsuario =>{
        //   for(let usuario of datosUsuario){
        //     console.log(usuario);
        //   }
        // });
    };
    // private getUserLocation() {
    //   /// locate the user
    //   // console.info('get User location2');
    //   // console.info(navigator);
    //   //console.info(navigator.geolocation);
    //   //console.info(JSON.stringify(navigator));
    //   //console.info(JSON.stringify(navigator.geolocation));
    //   var geolocationz = navigator.geolocation;
    //   console.log(geolocationz);
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       console.log('Location');
    //       this.lat = position.coords.latitude;
    //       this.lng = position.coords.longitude;
    //       console.info(position.coords.latitude);
    //       console.info(position.coords.longitude);
    //     });
    //   }
    // }
    PreHomePage.prototype.getUserLocationGeolocation = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var options = {
                timeout: 5000
            };
            _this.geo.getCurrentPosition(options).then(function (resp) {
                console.log('geoLocation');
                // console.log(resp);
                // console.log(resp.coords);
                // console.info(JSON.stringify(resp));
                console.info(resp.coords.latitude);
                console.info(resp.coords.longitude);
                _this.lat = resp.coords.latitude;
                _this.lng = resp.coords.longitude;
                _this.getNameAddress();
            }).catch(function () {
                console.log("Error to get location");
            });
        });
    };
    PreHomePage.prototype.guardarDireccionGeo = function (geoDireccion) {
        var label = 'My Address';
        this.ObjAddress.push({ "label": label, "name": geoDireccion });
        console.log(this.ObjAddress);
        this.userService.newAddress(this.userActual, this.ObjAddress);
    };
    return PreHomePage;
}());
PreHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pre-home',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\pre-home\pre-home.html"*/'<!--\n\n  Generated template for the PreHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  	<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page">\n\n\n\n  <ion-card>\n\n    <img src="assets/img/LogoJoBid.png"/>\n\n    <div class="card-title"><h3>{{userName}}</h3></div>\n\n    <div class="card-subtitle"><p>¿Where you want your service?</p></div>\n\n	</ion-card>\n\n	<!-- <div class="mapa" >\n\n		<agm-map [latitude]="lat" [longitude]="lng" [zoom]="zom">\n\n			<agm-marker [latitude]="lat" [longitude]="lng">\n\n				<agm-info-window>\n\n					<h3><strong>Howdy!</strong></h3>\n\n					<p>You are here!</p>\n\n				</agm-info-window>\n\n			</agm-marker>\n\n		</agm-map>\n\n	</div> -->\n\n  <ion-grid class="btnAddress">\n\n  	<ion-row>\n\n  		<ion-col col-6>\n\n			<ion-list>\n\n				<button ion-item (click)="goLocation()" >\n\n					<ion-icon name="pin" item-start></ion-icon>\n\n					<ion-label>Current location</ion-label>\n\n				</button>\n\n			</ion-list>\n\n  		</ion-col>\n\n  		<ion-col col-6>\n\n  			<ion-list>\n\n	  			<button ion-item (click)="goNewAddress()">\n\n  					<ion-icon name="add-circle" item-start></ion-icon>\n\n  					<ion-label>New Address</ion-label>\n\n	  			</button>\n\n  			</ion-list>\n\n  		</ion-col>\n\n  	</ion-row>\n\n  </ion-grid>\n\n	<ion-list>\n\n	  <button ion-item *ngFor="let item of address" (click)="goShow(item)">\n\n	    <h3>{{ item.label }}</h3>\n\n	    <p>{{ item.name }}</p>\n\n	  </button>  \n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\pre-home\pre-home.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__["a" /* NativeGeocoder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__["a" /* NativeGeocoder */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__providers_geocode_service__["a" /* GeocodeServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_geocode_service__["a" /* GeocodeServiceProvider */]) === "function" && _h || Object])
], PreHomePage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=pre-home.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_cleaning__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_professions_service__ = __webpack_require__(246);
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

//import {MyApp}  from '../../app/app.component';

/**
 * Generated class for the ShowPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShowPage = (function () {
    function ShowPage(navCtrl, navParams, professionsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professionsService = professionsService;
        this.direccion = [];
        this.professions = [];
        //this.direccion = this.navParams.get('datos');
        //console.log(this.direccion);
        this.professions = this.professionsService.getProfessions();
        console.log(this.professions);
    }
    ShowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowPage');
        //console.log(localStorage);
        this.direccion = JSON.parse(localStorage.getItem('address'));
        //console.log(this.direccion);
        // MyApp.userName = 'soy nuevo';
        //console.log(MyApp);
    };
    // profession(){
    // 	//this.navCtrl.push(LoginPage);
    // 	this.navCtrl.setRoot(ProfessionPage);
    // }
    ShowPage.prototype.Cleaning = function (item) {
        console.log(item);
        var DataService = { 'datos': item };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cleaning_cleaning__["a" /* CleaningPage */], DataService);
    };
    return ShowPage;
}());
ShowPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-show',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\show\show.html"*/'<!--\n\n  Generated template for the ShowPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<!-- <button ion-button block color="light"(click)="profession()">login</button> -->\n\n<h3>Address: </h3>\n\n<p><strong>{{direccion.label}}</strong></p>\n\n<p>{{direccion.name}}</p>\n\n<ion-grid class="gridProfession">\n\n     <ion-row wrap>\n\n      <ion-col *ngFor="let item of professions"  (click)="Cleaning(item)" col-4 >\n\n        <button ion-button block color="light">\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-icon name="contact" [ngClass]="item.class"></ion-icon>\n\n            </ion-row>  \n\n            <ion-row>\n\n             <p>{{item.name}}</p>\n\n            </ion-row>\n\n          </ion-grid> \n\n        </button>\n\n      </ion-col>\n\n     </ion-row>\n\n    </ion-grid>  \n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\UsuarioApp_JoBid\src\pages\show\show.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_professions_service__["a" /* ProfessionsService */]])
], ShowPage);

//# sourceMappingURL=show.js.map

/***/ })

},[557]);
//# sourceMappingURL=main.js.map