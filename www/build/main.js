webpackJsonp([0],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_local_notifications__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificacionService = (function () {
    function NotificacionService(localNotifications) {
        this.localNotifications = localNotifications;
    }
    NotificacionService.prototype.mostrar = function (mesage, id) {
        var idNotification = 1;
        if (id == null || id == undefined) {
            idNotification = new Date().getTime();
        }
        this.localNotifications.schedule({
            id: idNotification,
            text: mesage,
            sound: 'file://assets/notificacion.mp3',
        });
    };
    NotificacionService.prototype.mostrarSale = function (mesage, id) {
        var idNotification = 1;
        if (id == null || id == undefined) {
            idNotification = new Date().getTime();
        }
        this.localNotifications.schedule({
            id: idNotification,
            text: mesage,
            sound: 'file://assets/timbre.mp3',
        });
    };
    return NotificacionService;
}());
NotificacionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_local_notifications__["a" /* LocalNotifications */]])
], NotificacionService);

//# sourceMappingURL=notificacion.service.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocodeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(167);
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
        // console.log('Hello GeocodeServiceProvider Provider');
    }
    GeocodeServiceProvider.prototype.GeoCodificationInversa = function (latitud, longitud) {
        var _this = this;
        // https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAN3iZp5m77ySYU9f6Iq3TX0g-Y2DelY70
        // https://maps.googleapis.com/maps/api/geocode/json?latlng=4.5510497999999995,%20-74.0984553&key=AIzaSyAN3iZp5m77ySYU9f6Iq3TX0g-Y2DelY70
        // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAN3iZp5m77ySYU9f6Iq3TX0g-Y2DelY70
        return new Promise(function (resolve, reject) {
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], GeocodeServiceProvider);

//# sourceMappingURL=geocode-service.js.map

/***/ }),

/***/ 195:
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
            { name: 'Care', class: 'red', img: 'assets/img/services/Care.png' },
            { name: 'Cleaning', class: 'yellow', img: 'assets/img/services/Cleaning.png' },
            { name: 'Janotorial', class: 'orange', img: 'assets/img/services/Janitorial.png' },
            { name: 'Transportation', class: 'green', img: 'assets/img/services/Transportation.png' },
            { name: 'Food & Beverage', class: 'purple', img: 'assets/img/services/Food.png' },
            { name: 'Legal services', class: 'blue', img: 'assets/img/services/Legal.png' },
            { name: 'Beauty', class: 'pink', img: 'assets/img/services/Beauty.png' }
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
                this.dataCategoria = ["Child care/Nany", "Senior care", "Family asistance", "Dog walker", "Personal shopper"];
                break;
            }
            case "Cleaning": {
                this.dataCategoria = ["Maids", "Car washers", "Pressure cleaning", "Carpet & upholstery cleaning"];
                break;
            }
            case "Janotorial": {
                this.dataCategoria = ["Handyman", "Pluming", "Electrician", "Pool Cleaner", "Luck smith"];
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

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentMethodsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_braintree_web_drop_in__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_braintree_web_drop_in___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_braintree_web_drop_in__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pre_home_pre_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_braintree_service__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import * as braintree from "braintree-web";

//--pages

//--services

/**
 * Generated class for the PaymentMethodsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PaymentMethodsPage = (function () {
    function PaymentMethodsPage(alertCtrl, navCtrl, navParams, braintreeService, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.braintreeService = braintreeService;
        this.loadingCtrl = loadingCtrl;
        this.booleanCreateErr = false;
        this.booleanInstance = false;
        this.segundos = 5;
    }
    PaymentMethodsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentMethodsPage');
        this.userData = this.navParams.get('datos');
        console.log(this.userData);
        console.log(this.userData['verificacion']);
        console.log(this.navParams.get('datos'));
        this.UserActual = this.userData['verificacion'];
        console.log(this.UserActual);
        this.crearCustomer();
        this.showAlert();
        this.presentLoading();
        // this.dropin();
        //this.newGateWay();
        // this.setTokenClient();
    };
    // newGateWay(){
    //     this.gateway = braintree.connect({
    //       environment:  braintree.Environment.Sandbox,
    //       merchantId:   'xg698xhxgkr3z5wx',
    //       publicKey:    '6xhx6fnr7szs5nmb',
    //       privateKey:   '04a0e14ca769b7ed5176df62f462200c'
    //   });
    // }
    //   setTokenClient(){
    //     this.gateway.clientToken.generate({}, function (err, response) {
    //       // res.send(response.clientToken);
    //       console.log(response);
    //       console.log(err);
    //     });
    // }
    PaymentMethodsPage.prototype.goPayInfo = function () {
        if (this.booleanCreateErr) {
            this.showAlertPay();
        }
        if (this.booleanInstance) {
            this.startTimer();
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
    PaymentMethodsPage.prototype.crearCustomer = function () {
        var _this = this;
        this.braintreeService.CrearCustomer(this.UserActual).then(function (value) {
            console.log('valueo');
            console.log(value);
            _this.CallToken();
        }).catch(function (error) {
            console.log('error');
            console.log(error);
        });
        ;
    };
    PaymentMethodsPage.prototype.CallToken = function () {
        var _this = this;
        // let token ='sandbox_gmhv57wq_xg698xhxgkr3z5wx';
        // let token:any = undefined;
        this.braintreeService.CrearTokenCustomer(this.UserActual).then(function (value) {
            console.log(value);
            _this.dropin(value);
        }).catch(function (error) {
            console.log(error);
        });
    };
    //--- timer
    PaymentMethodsPage.prototype.startTimer = function () {
        var _this = this;
        this.objNodeTimer = setInterval(function () { return _this.timer(); }, 1000);
    };
    PaymentMethodsPage.prototype.timer = function () {
        if (this.segundos == 1) {
            clearInterval(this.objNodeTimer);
            this.goPrehome();
        }
        else {
            if (--this.segundos < 0) { }
        }
        console.log(this.segundos);
    };
    PaymentMethodsPage.prototype.dropin = function (token) {
        var _this = this;
        // var button = document.querySelector('#submit-button');
        __WEBPACK_IMPORTED_MODULE_2_braintree_web_drop_in__["create"]({
            authorization: token,
            // authorization: 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJlYTk4MzYzMmNkYzNlOTViY2Q4MmIxYzNlNmZkNDEwYTk4ODdlNmIyNTk5YzVmZDg2MzNlZjU5YWE2NzBlYzI5fGNyZWF0ZWRfYXQ9MjAxNy0wOS0xNFQyMDozOToyMi4zODkzMjUxMjQrMDAwMFx1MDAyNm1lcmNoYW50X2lkPXhnNjk4eGh4Z2tyM3o1d3hcdTAwMjZwdWJsaWNfa2V5PTZ4aHg2Zm5yN3N6czVubWIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMveGc2OTh4aHhna3IzejV3eC9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbImN2diJdLCJlbnZpcm9ubWVudCI6InNhbmRib3giLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMveGc2OTh4aHhna3IzejV3eC9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9jbGllbnQtYW5hbHl0aWNzLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20veGc2OTh4aHhna3IzejV3eCJ9LCJ0aHJlZURTZWN1cmVFbmFibGVkIjp0cnVlLCJwYXlwYWxFbmFibGVkIjp0cnVlLCJwYXlwYWwiOnsiZGlzcGxheU5hbWUiOiJHSUcgLyBHRU5FU0lTIElOVkVTVE1FTlQgR1JPVVAgTExDIiwiY2xpZW50SWQiOiJBZUdHZEM3RXFBWWk3aklYSGJnNml4RlZmRzF2Wmp5d1lQam9leC1WLWRmdC0yZXFtSVBYVXRzc1lfVzJHbjFkcGtXX3Zab0g4ekp4UW5nZyIsInByaXZhY3lVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vcHAiLCJ1c2VyQWdyZWVtZW50VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3RvcyIsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImFsbG93SHR0cCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOmZhbHNlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImdpZ2dlbmVzaXNpbnZlc3RtZW50Z3JvdXBsbGMiLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwibWVyY2hhbnRJZCI6InhnNjk4eGh4Z2tyM3o1d3giLCJ2ZW5tbyI6Im9mZiJ9',
            //-- token inventado para probar que DropIn Ui no permite cualquier clave authorization: 'eyJ2ZXJzaW9uIjoyXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJlYTk4MzYzMmNkYzNlOTViY2Q4MmIxYzNlNmZkNDEwYTk4ODdlNmIyNTk5YzVmZDg2MzNlZjU5YWE2NzBlYzI5fGNyZWF0ZWRfYXQ9MjAxNy0wOS0xNFQyMDozOToyMi4zODkzMjUxMjQrMDAwMFx1MDAyNm1lcmNoYW50X2lkPXhnNjk4eGh4Z2tyM3o1d3hcdTAwMjZwdWJsaWNfa2V5PTZ4aHg2Zm5yN3N6czVubWIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMveGc2OTh4aHhna3IzejV3eC9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbImN2diJdLCJlbnZpcm9ubWVudCI6InNhbmRib3giLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMveGc2OTh4aHhna3IzejV3eC9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9jbGllbnQtYW5hbHl0aWNzLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20veGc2OTh4aHhna3IzejV3eCJ9LCJ0aHJlZURTZWN1cmVFbmFibGVkIjp0cnVlLCJwYXlwYWxFbmFibGVkIjp0cnVlLCJwYXlwYWwiOnsiZGlzcGxheU5hbWUiOiJHSUcgLyBHRU5FU0lTIElOVkVTVE1FTlQgR1JPVVAgTExDIiwiY2xpZW50SWQiOiJBZUdHZEM3RXFBWWk3aklYSGJnNml4RlZmRzF2Wmp5d1lQam9leC1WLWRmdC0yZXFtSVBYVXRzc1lfVzJHbjFkcGtXX3Zab0g4ekp4UW5nZyIsInByaXZhY3lVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vcHAiLCJ1c2VyQWdyZWVtZW50VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3RvcyIsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImFsbG93SHR0cCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOmZhbHNlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImdpZ2dlbmVzaXNpbnZlc3RtZW50Z3JvdXBsbGMiLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwibWVyY2hhbnRJZCI6InhnNjk4eGh4Z2tyM3o1d3giLCJ2ZW5tbyI6Im9mZiJ9',
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
    PaymentMethodsPage.prototype.goPrehome = function () {
        var Data = { 'datos': this.userData };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pre_home_pre_home__["a" /* PreHomePage */], Data);
    };
    //-show alert
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
    PaymentMethodsPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 5000
        });
        loader.present();
    };
    return PaymentMethodsPage;
}());
PaymentMethodsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment-methods',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\payment-methods\payment-methods.html"*/'<!--\n\n  Generated template for the PaymentMethodsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Methods</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<img src="assets/img/JoBidUsuario.jpg">\n\n    <h5 id="paymentMethods-heading4">Welcome </h5>\n\n    <h5 id="paymentMethods-heading5">User </h5>\n\n    <div class="spacer"></div>\n\n    <h4 id="paymentMethods-heading6">Payment Method</h4>\n\n    <h5 id="paymentMethods-heading7">Select your paymenth method </h5>\n\n    <form id="paymentMethods-form5" class="list" padding>\n\n        <div id="dropin-container"></div>\n\n        <!-- <button id="submit-button" ion-button color="danger">Request payment method</button> -->\n\n    <ion-list>\n\n        <!-- <ion-item>\n\n          <ion-checkbox id="paymentMethods-checkbox2">Credit Card</ion-checkbox>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-checkbox id="paymentMethods-checkbox3">Pay</ion-checkbox>\n\n        </ion-item> -->\n\n        <div class="btnBottom">\n\n          <button ion-button color="danger" block (click)="goPayInfo()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n\n        </div>\n\n    </ion-list>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\payment-methods\payment-methods.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_braintree_service__["a" /* BraintreeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], PaymentMethodsPage);

//# sourceMappingURL=payment-methods.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPaymentMethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_braintree_web_drop_in__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_braintree_web_drop_in___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_braintree_web_drop_in__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_braintree_service__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import * as braintree from "braintree-web";

//---services

/**
 * Generated class for the AddPaymentMethodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddPaymentMethodPage = (function () {
    function AddPaymentMethodPage(alertCtrl, navCtrl, navParams, braintreeService, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.braintreeService = braintreeService;
        this.loadingCtrl = loadingCtrl;
        //-booleanDropIN
        this.booleanCreateErr = false;
        this.booleanInstance = false;
        // console.log(localStorage);
        this.UserActual = localStorage.getItem('verificacion');
        console.log(this.UserActual);
        this.crearCustomer();
        this.CallToken();
        this.presentLoading();
    }
    AddPaymentMethodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPaymentMethodPage');
    };
    AddPaymentMethodPage.prototype.crearCustomer = function () {
        this.braintreeService.CrearCustomer(this.UserActual).then(function (value) {
            console.log('valueo');
            console.log(value);
        }).catch(function (error) {
            console.log('error');
            console.log(error);
        });
        ;
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
    AddPaymentMethodPage.prototype.dropin = function (token) {
        var _this = this;
        // var button = document.querySelector('#submit-button');
        __WEBPACK_IMPORTED_MODULE_2_braintree_web_drop_in__["create"]({
            authorization: token,
            // authorization: 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJlYTk4MzYzMmNkYzNlOTViY2Q4MmIxYzNlNmZkNDEwYTk4ODdlNmIyNTk5YzVmZDg2MzNlZjU5YWE2NzBlYzI5fGNyZWF0ZWRfYXQ9MjAxNy0wOS0xNFQyMDozOToyMi4zODkzMjUxMjQrMDAwMFx1MDAyNm1lcmNoYW50X2lkPXhnNjk4eGh4Z2tyM3o1d3hcdTAwMjZwdWJsaWNfa2V5PTZ4aHg2Zm5yN3N6czVubWIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMveGc2OTh4aHhna3IzejV3eC9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbImN2diJdLCJlbnZpcm9ubWVudCI6InNhbmRib3giLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMveGc2OTh4aHhna3IzejV3eC9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9jbGllbnQtYW5hbHl0aWNzLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20veGc2OTh4aHhna3IzejV3eCJ9LCJ0aHJlZURTZWN1cmVFbmFibGVkIjp0cnVlLCJwYXlwYWxFbmFibGVkIjp0cnVlLCJwYXlwYWwiOnsiZGlzcGxheU5hbWUiOiJHSUcgLyBHRU5FU0lTIElOVkVTVE1FTlQgR1JPVVAgTExDIiwiY2xpZW50SWQiOiJBZUdHZEM3RXFBWWk3aklYSGJnNml4RlZmRzF2Wmp5d1lQam9leC1WLWRmdC0yZXFtSVBYVXRzc1lfVzJHbjFkcGtXX3Zab0g4ekp4UW5nZyIsInByaXZhY3lVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vcHAiLCJ1c2VyQWdyZWVtZW50VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3RvcyIsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImFsbG93SHR0cCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOmZhbHNlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImdpZ2dlbmVzaXNpbnZlc3RtZW50Z3JvdXBsbGMiLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwibWVyY2hhbnRJZCI6InhnNjk4eGh4Z2tyM3o1d3giLCJ2ZW5tbyI6Im9mZiJ9',
            //-- token inventado para probar que DropIn Ui no permite cualquier clave authorization: 'eyJ2ZXJzaW9uIjoyXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJlYTk4MzYzMmNkYzNlOTViY2Q4MmIxYzNlNmZkNDEwYTk4ODdlNmIyNTk5YzVmZDg2MzNlZjU5YWE2NzBlYzI5fGNyZWF0ZWRfYXQ9MjAxNy0wOS0xNFQyMDozOToyMi4zODkzMjUxMjQrMDAwMFx1MDAyNm1lcmNoYW50X2lkPXhnNjk4eGh4Z2tyM3o1d3hcdTAwMjZwdWJsaWNfa2V5PTZ4aHg2Zm5yN3N6czVubWIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMveGc2OTh4aHhna3IzejV3eC9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbImN2diJdLCJlbnZpcm9ubWVudCI6InNhbmRib3giLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMveGc2OTh4aHhna3IzejV3eC9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9jbGllbnQtYW5hbHl0aWNzLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20veGc2OTh4aHhna3IzejV3eCJ9LCJ0aHJlZURTZWN1cmVFbmFibGVkIjp0cnVlLCJwYXlwYWxFbmFibGVkIjp0cnVlLCJwYXlwYWwiOnsiZGlzcGxheU5hbWUiOiJHSUcgLyBHRU5FU0lTIElOVkVTVE1FTlQgR1JPVVAgTExDIiwiY2xpZW50SWQiOiJBZUdHZEM3RXFBWWk3aklYSGJnNml4RlZmRzF2Wmp5d1lQam9leC1WLWRmdC0yZXFtSVBYVXRzc1lfVzJHbjFkcGtXX3Zab0g4ekp4UW5nZyIsInByaXZhY3lVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vcHAiLCJ1c2VyQWdyZWVtZW50VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3RvcyIsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImFsbG93SHR0cCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOmZhbHNlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImdpZ2dlbmVzaXNpbnZlc3RtZW50Z3JvdXBsbGMiLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwibWVyY2hhbnRJZCI6InhnNjk4eGh4Z2tyM3o1d3giLCJ2ZW5tbyI6Im9mZiJ9',
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
    AddPaymentMethodPage.prototype.CallToken = function () {
        var _this = this;
        // let token ='sandbox_gmhv57wq_xg698xhxgkr3z5wx';
        // let token:any = undefined;
        this.braintreeService.CrearTokenCustomer(this.UserActual).then(function (value) {
            console.log(value);
            _this.dropin(value);
        }).catch(function (error) {
            console.log(error);
        });
    };
    //- alert
    AddPaymentMethodPage.prototype.showAlertPay = function () {
        var alert = this.alertCtrl.create({
            title: 'Information',
            subTitle: 'verify the payment method information',
            buttons: ['OK']
        });
        alert.present();
    };
    AddPaymentMethodPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 5000
        });
        loader.present();
    };
    return AddPaymentMethodPage;
}());
AddPaymentMethodPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-payment-method',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\add-payment-method\add-payment-method.html"*/'<!--\n\n  Generated template for the AddPaymentMethodPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>JoBid</ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="barraRoja">\n\n      <h3>My payments</h3>\n\n  </div>\n\n  <div padding>\n\n      <h4>List:</h4>\n\n    <div id="dropin-container"></div> \n\n  </div>\n\n  <ion-list>\n\n</ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <div class="btnBottom">\n\n          <button ion-button color="danger" block (click)="goSavePaymentMethod()">\n\n            Save payment method\n\n          </button> \n\n        </div>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\add-payment-method\add-payment-method.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_braintree_service__["a" /* BraintreeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], AddPaymentMethodPage);

//# sourceMappingURL=add-payment-method.js.map

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 219;

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(58);
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
        // console.info('metodoNewSale');
        // console.log(keyUser);
        // console.log(keySale);
        // console.log(maxOffer);
        this.afDB.object('/sale/' + keyUser + '/' + keySale).set({ "status": "Published", "sale": maxOffer }).catch(function (error) { console.log('errorNewSale'); console.log(error); console.log(JSON.stringify(error)); });
        // this.afDB.object('/sale/'+keyUser+'/'+keySale).set({"status":"Published","sale":maxOffer,"providers":{"prof_1":{"offer":"87"},"prof_2":{"offer":"65"}}}).catch(error => {console.log('errorNewSale'); console.log(error);console.log(JSON.stringify(error));});
        //this.afDB.object('/sale/'+keyUser+'/'+keySale).set({"status":"new","sale":maxOffer});
        console.info('sale create');
    };
    SaleService.prototype.getSale = function (keyUser, keySale) {
        return this.afDB.object('/sale/' + keyUser + '/' + keySale);
    };
    SaleService.prototype.getSales = function (keyUser) {
        return this.afDB.object('/sale/' + keyUser);
    };
    SaleService.prototype.getStatus = function (keyUser, keyOffer) {
        return this.afDB.object('/sale/' + keyUser + '/' + keyOffer + '/status/');
    };
    SaleService.prototype.setStatus = function (keyUser, keyOffer, status) {
        return this.afDB.object('/sale/' + keyUser + '/' + keyOffer + '/status/').set(status).catch(function (error) { console.log('error sale setstatus'); console.log(error); console.log(JSON.stringify(error)); });
    };
    SaleService.prototype.setSale = function (keyUser, keyOffer, sale) {
        return this.afDB.object('/sale/' + keyUser + '/' + keyOffer + '/sale/').set(sale).catch(function (error) { console.log('error sale setSale'); console.log(error); console.log(JSON.stringify(error)); });
    };
    SaleService.prototype.setProvider = function (keyUser, keyOffer, Provider) {
        return this.afDB.object('/sale/' + keyUser + '/' + keyOffer + '/Profession/').set(Provider).catch(function (error) { console.log('error offer setUser'); console.log(error); console.log(JSON.stringify(error)); });
    };
    SaleService.prototype.setTimer = function (keyUser, keyOffer, timer) {
        this.afDB.object('/sale/' + keyUser + '/' + keyOffer + '/Timer').set(timer).catch(function (error) { console.log('error offer setTimer'); console.log(error); console.log(JSON.stringify(error)); });
    };
    return SaleService;
}());
SaleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], SaleService);

//# sourceMappingURL=sale.service.js.map

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 260;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(58);
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
        console.info('off NewOffer');
        var key = undefined;
        //default star
        // console.log(JSON.stringify(serviceData));
        // console.log('key:'+key);
        // console.log('keyNew:'+keyNew);
        if (keyNew && keyNew != null && keyNew != undefined) {
            keyOffer = keyNew;
        }
        else {
            var d = new Date();
            key = d.getTime();
            var keyOffer = "offer_" + (key);
        }
        // console.log(serviceData);
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
    OfferService.prototype.setOfferUserLocation = function (keyOffer, UserLocation) {
        console.info('set UserLocation');
        // console.log(UserLocation);
        this.afDB.object('/offer/' + keyOffer + '/UserLocacion').set(UserLocation).catch(function (error) { console.log('error offer setOfferUserLocation'); console.log(error); console.log(JSON.stringify(error)); });
    };
    OfferService.prototype.setOfferProviderLocation = function (keyOffer, ProviderLocation) {
        console.info('set ProviderLocation');
        this.afDB.object('/offer/' + keyOffer + '/ProviderLocacion').set(ProviderLocation).catch(function (error) { console.log('error offer setOfferProviderLocation'); console.log(error); console.log(JSON.stringify(error)); });
    };
    //-get
    OfferService.prototype.getStatus = function (keyOffer) {
        return this.afDB.object('/offer/' + keyOffer + '/status/');
    };
    OfferService.prototype.getOffer = function (keyOffer) {
        return this.afDB.object('/offer/' + keyOffer);
    };
    OfferService.prototype.getOfferUserLocation = function (keyOffer) {
        console.info('get UserLocation');
        return this.afDB.object('/offer/' + keyOffer + '/UserLocacion');
    };
    OfferService.prototype.getOfferProviderLocation = function (keyOffer) {
        console.info('get ProviderLocation');
        return this.afDB.object('/offer/' + keyOffer + '/ProviderLocacion');
    };
    //timer
    OfferService.prototype.setTimer = function (keyOffer, timer) {
        this.afDB.object('/time/' + keyOffer + '/Timer').set(timer).catch(function (error) { console.log('error offer setTimer'); console.log(error); console.log(JSON.stringify(error)); });
    };
    OfferService.prototype.dropTimer = function (keyOffer) {
        this.afDB.object('/time/' + keyOffer).remove().catch(function (error) { console.log('error offer dropTimer'); console.log(error); console.log(JSON.stringify(error)); });
    };
    return OfferService;
}());
OfferService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], OfferService);

//# sourceMappingURL=offer.service.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(58);
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
        // console.log(this.afDB.object('/user/'+userId));
        return this.afDB.object('/user/' + userId);
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
        // console.log(this.afDB.list('/user/'+userId));
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
        // return this.afDB.list('/user')
        // .map((users) => {
        // 	 //console.log(users);
        // 	 return users.map(user =>{
        // 		if(user['user_email'] == email){
        // 			//console.log(user);
        // 			return user;
        // 		}
        // 	});
        //  });
        return this.afDB.list('/user', {
            query: {
                orderByChild: 'user_email',
                equalTo: email
            }
        });
    };
    UserService.prototype.getUserLoginPwd = function (pwd) {
        // let password = this.encriptyService.GenerateEncripty(pwd);
        var password = pwd;
        var listBD = this.afDB.list('/user', {
            query: {
                orderByChild: 'user_password',
                equalTo: password
            }
        });
        // console.log(listBD);
        // console.log(JSON.stringify( listBD) );
        return listBD;
    };
    UserService.prototype.getUserUidFace = function (uid) {
        return this.afDB.list('/user', {
            query: {
                orderByChild: 'user_uidFace',
                equalTo: uid
            }
        });
    };
    UserService.prototype.newUser = function (userData, keyNew) {
        if (userData === void 0) { userData = []; }
        var key = undefined;
        //default star
        var star = '5';
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
        var picture = '';
        if (userData['picture'] != undefined) {
            picture = userData['picture'];
        }
        //let verificacion = userData["verificacion"];
        var pais = userData["pais"];
        var direccion = userData["direccion"];
        var tel = userData["tel"];
        var uidFace = userData["uidFace"];
        //console.log(userData);
        if ((userData['username']) && (userData['password']) && (userData['email'])) {
            if ((userData['username'] != undefined) && (userData['username'] != null) && (userData['password'] != undefined) && (userData['password'] != null) && (userData['email'] != undefined) && (userData['email'] != null)) {
                this.afDB.object('/user/' + keyUser).set({ "user_username": username, "user_password": password, "user_email": email, "user_name": name, "user_zipcode": zipcode, "user_state": state, "user_picture": picture, "user_pais": pais, "user_tel": tel, "user_uidFace": uidFace, "user_star": star });
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
        var picture = '';
        if (userData['picture'] != undefined) {
            picture = userData['picture'];
        }
        //let verificacion = userData["verificacion"];
        var pais = userData["pais"];
        //let direccion = userData["direccion"];
        var tel = userData["tel"];
        var uidFace = userData["uidFace"];
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
                this.afDB.object('/user/' + keyUser + '/user_uidFace').set(uidFace);
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
        return this.afDB.object('/user/' + userId + '/user_address/');
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
    //-drop
    UserService.prototype.dropAddress = function (keyUser, keyAddress) {
        console.log(keyUser);
        console.log(keyAddress);
        this.afDB.object('/user/' + keyUser + '/user_address/' + keyAddress).remove().then(function () { console.log('drop Address'); }).catch(function () {
            console.log('-drop Address');
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pre_home_pre_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__singup_singup__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//--page



//--service

var HomePage = (function () {
    function HomePage(navCtrl, fb, userService, afAuth) {
        this.navCtrl = navCtrl;
        this.fb = fb;
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pre_home_pre_home__["a" /* PreHomePage */]);
        //this.navCtrl.pop();
        //this.navCtrl.push(PreHomePage); 
    };
    HomePage.prototype.facebookir = function () {
        var _this = this;
        // let goPagePrehome:boolean = false;
        // let userDB:any;
        this.fb.login(['email'])
            .then(function (res) {
            console.log('Logged into Facebook!', res);
            // alert(JSON.stringify(res));
            var credencial = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithCredential(credencial).then(function (info) {
                // alert(JSON.stringify(info));
                // alert(JSON.stringify(info.providerData['0']['email']));
                // alert(JSON.stringify(info.providerData));
                // console.log(info);
                // console.log(info.providerData.email);
                // console.log(info.providerData);
                // if(info.providerData['0']['email'] != undefined){
                // this.userService.getUserEmailPerfil(info.providerData['0']['email']).subscribe(
                //   (emailBD)=>{
                //     alert(JSON.stringify(emailBD));
                //     if(emailBD == info.providerData.email){
                //     }
                //   });
                // this.userService.getUsers()
                // .forEach((users) => {
                //   //console.log(users);
                //   users.forEach((user) =>{
                //     //console.log(user);
                //     // if(user['user_email'] == res.user.email){
                //     //     // console.log('res.user.email');
                //     //     // console.log(user);
                //     //     userDB = user;
                //     //     goPagePrehome= true;
                //     // }
                //     //dentro de res.user -> hay otros datos de usuario -> email?
                //     //if(user.providerData["0"].providerId == "facebook.com"){
                //         if(user['user_email'] == info.providerData['0']['email']){
                //           // console.log('res.additionalUserInfo.profile.email');
                //           // console.log(user);
                //           userDB = user;
                //           goPagePrehome= true;
                //         }
                //     //}
                //   });
                //   //console.log(userDB);
                //   if(!goPagePrehome){
                //     //   this.goNextPagePrehome(userDB);
                //     // }else{
                //       this.singup();
                //     }
                // });
                _this.singup();
                // }
            }).catch();
        })
            .catch(function (e) {
            console.log('Error zing into Facebook', e);
            alert(JSON.stringify(e));
        });
    };
    // facebookir(){
    //   let goPagePrehome:boolean = false;
    //   let userDB:any;
    //   var provider = new firebase.auth.FacebookAuthProvider();
    //   provider.addScope('email');
    //   firebase.auth().signInWithPopup(provider)
    //     .then(res => {
    //       //console.log(res.user.email);
    //       console.log(res);
    //       console.info(JSON.stringify(res));
    //       //console.log(res);
    //       this.userService.getUsers()
    //       .forEach((users) => {
    //         //console.log(users);
    //         users.forEach((user) =>{
    //           //console.log(user);
    //           // if(user['user_email'] == res.user.email){
    //           //     // console.log('res.user.email');
    //           //     // console.log(user);
    //           //     userDB = user;
    //           //     goPagePrehome= true;
    //           // }
    //           //dentro de res.user -> hay otros datos de usuario -> email?
    //           //if(user.providerData["0"].providerId == "facebook.com"){
    //               if(user['user_email'] == res.additionalUserInfo.profile.email){
    //                 // console.log('res.additionalUserInfo.profile.email');
    //                 // console.log(user);
    //                 userDB = user;
    //                 goPagePrehome= true;
    //               }
    //           //}
    //         });
    //         //console.log(userDB);
    //         //console.log(goPagePrehome);
    //         if(!goPagePrehome){
    //         //   this.goNextPagePrehome(userDB);
    //         // }else{
    //           this.singup();
    //         }
    //       });
    //     });
    // }
    HomePage.prototype.goNextPagePrehome = function (datos) {
        //console.log(datos);
        //console.log(datos['$key']);
        this.userDataUpdate = { "email": datos['user_email'], "name": datos['user_name'], "pais": datos['user_pais'], "password": datos['user_password'], "picture": datos['user_picture'], "state": datos['user_state'], "tel": datos['user_tel'], "username": datos['user_username'], "verificacion": datos['$key'], "zipcode": datos['user_zipcode'] };
        //console.log(this.userDataUpdate);
        var Data = { 'datos': this.userDataUpdate };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pre_home_pre_home__["a" /* PreHomePage */], Data);
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.singup = function (UserDB) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__singup_singup__["a" /* SingupPage */]);
    };
    HomePage.prototype.usuarioLogeado = function () {
        var _this = this;
        console.log('userLogeado');
        //let goPagePrehomeLoad = false;
        this.afAuth.authState.subscribe(function (userAuth) {
            //let homeStatus=this.afAuth.authState.subscribe( userAuth => {
            if (userAuth) {
                console.info('find user home login');
                if (userAuth.providerData["0"].providerId == 'password') {
                    var email = userAuth.providerData["0"].email;
                    console.log(email);
                    var Userexists_1 = _this.userService.getUserEmailPerfil(email).subscribe(function (User) {
                        console.log('User Logueado');
                        console.log(User);
                        console.log(Userexists_1);
                        if (User['0']) {
                            _this.goNextPagePrehomeFace(User['0']);
                            if (Userexists_1 != undefined) {
                                Userexists_1.unsubscribe();
                            }
                        }
                    });
                }
                else {
                    var faceUid = userAuth.uid;
                    console.log(faceUid);
                    var Userexists_2 = _this.userService.getUserUidFace(faceUid).subscribe(function (User) {
                        console.log('User Logueado');
                        console.log(Userexists_2);
                        console.log(User);
                        if (User['0']) {
                            _this.goNextPagePrehomeFace(User['0']);
                            if (Userexists_2 != undefined) {
                                Userexists_2.unsubscribe();
                            }
                        }
                    });
                }
                // let Userexists= this.userService.getUserEmailPerfil(email);
                // Userexists.forEach((users) => {
                //   users.forEach((user) =>{
                //     if(user != undefined && user != null){
                //         userDBLoad = user;
                //         goPagePrehomeLoad= true;
                //         console.log(goPagePrehomeLoad);
                //         if(goPagePrehomeLoad){
                //           this.goNextPagePrehomeFace(userDBLoad);
                //         }
                //     }
                //   });
                // });
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pre_home_pre_home__["a" /* PreHomePage */], Data);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\home\home.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content>\n\n <!--  <h3>Ionic Menu Starter</h3>\n\n\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button> -->\n\n \n\n  <ion-card *ngIf="userData" >\n\n    <ion-card-header> {{userData.username}} </ion-card-header>\n\n    <img [src]= "userData.picture">\n\n    <ion-card-content>\n\n      <p>Email: {{ userData.email}}</p>\n\n      <p>Name: {{ userData.name}}</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <img src="assets/img/JoBidUsuario.jpg" >\n\n    <h5 id="home-heading1" style="">Sing up or Log in</h5>\n\n    <div padding>\n\n      <!-- <button ion-button block color="danger" (click)="googleir()">Log in with Google</button> -->\n\n      <button ion-button block (click)="facebookir()">Sing in with Facebook</button>\n\n    </div>\n\n    <ion-grid class="tabMenu">\n\n     <ion-row>\n\n      <ion-col>\n\n        <button ion-button block color="light" (click)="singup()">\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-icon name="contact"></ion-icon>\n\n            </ion-row>  \n\n            <ion-row> \n\n             <p>sing up</p>\n\n            </ion-row>\n\n          </ion-grid> \n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button block color="light"(click)="login()">\n\n        <ion-grid>\n\n            <ion-row>\n\n              <ion-icon name="lock"></ion-icon>\n\n            </ion-row>  \n\n            <ion-row> \n\n             <p>login</p>\n\n            </ion-row>\n\n          </ion-grid> \n\n        </button>\n\n      </ion-col>\n\n     </ion-row>\n\n    </ion-grid>  \n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cities__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_states_utils__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_states_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_states_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pre_home_pre_home__ = __webpack_require__(48);
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
        selector: 'page-new-address',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\new-address\new-address.html"*/'<!--\n\n  Generated template for the NewAddressPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<img src="assets/img/JoBidUsuario.jpg">\n\n<h3 class="tittle">New Address</h3>\n\n<form id="signup-form3" class="list" padding>\n\n<ion-item>\n\n  <ion-icon name="document" item-start></ion-icon>\n\n  <ion-input type="text" placeholder="My Address" class="mitad" [(ngModel)]="label" name="label"></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n <ion-icon name="flag" item-start></ion-icon>\n\n  <ion-select class="mitad" [(ngModel)]="state" name="state" (ngModelChange)="setCity()" placeholder="State" > \n\n    <ion-option *ngFor="let states of estados | ordenar: \'estados\'" value="{{states.nameShort}}">{{states.name}}</ion-option>\n\n  </ion-select>\n\n  <ion-select  class="mitad" [(ngModel)]="zipcode" name="zipcode" (ngModelChange)="setZipCode()" placeholder="City"> <!--[(ngModel)]="gaming"-->\n\n    <ion-option *ngFor="let city of ciudades | ordenar: \'ciudades\'" value="{{city.zipcode}}">{{city.name}} - {{city.zipcode}}</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-item>\n\n          <ion-icon name="home" item-start></ion-icon>\n\n          <ion-input type="number" placeholder="1234" [(ngModel)]="DirecA" name="DirecA"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="avenue" value="" [(ngModel)]="DirecB" name="DirecB"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-item>\n\n          <ion-icon name="home" item-start style="background:transparent; color:transparent;"></ion-icon>\n\n          <ion-input type="text" placeholder="City" class="mitad spaceIcons" [(ngModel)]="DirecC" name="DirecC" ></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="NJ 0000" value="{{DirecD}}" [(ngModel)]="DirecD" name="DirecD"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n	<!-- <div class="btnBottom">\n\n	   <button  ion-button block color="danger" (click)="goPreHome()" >Add address<ion-icon name="arrow-dropright"></ion-icon></button> \n\n    </div> -->\n\n</form>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <div class="btnBottom">\n\n          <button ion-button color="danger" block (click)="goPreHome()">\n\n              Add address\n\n          </button> \n\n        </div>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\new-address\new-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
], NewAddressPage);

//# sourceMappingURL=new-address.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_professions_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_care_services_care__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cleaning_services_cleaning__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_janotorial_services_janotorial__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_transportation_services_transportation__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_food_services_food__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_legal_services_legal__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_beauty_services_beauty__ = __webpack_require__(375);
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
    function CleaningPage(navCtrl, navParams, professionsService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professionsService = professionsService;
        this.formBuilder = formBuilder;
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
        //  console.log(this.dataService['name']);
        this.categoryByProfession(this.dataService['name']);
        //  console.log(localStorage);
        this.service = this.formBuilder.group({
            categoria: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            certificacio: [''],
            seguro: [''],
            distancia: [''],
            experiencia: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            estrellas: [''],
        });
    }
    CleaningPage.prototype.categoryByProfession = function (nameService) {
        if (nameService === void 0) { nameService = ""; }
        this.nameService = nameService;
        this.dataCategoria = this.professionsService.getCategoryByProfession(nameService);
        // console.log(this.dataCategoria);
    };
    CleaningPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CleaningPage');
    };
    CleaningPage.prototype.cleaningInfo = function () {
        // this.dataService['subCategoria']=this.categoria;
        localStorage.setItem('SubService', this.dataClasificaion['categoria']);
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
        if (this.estrellas == undefined || this.estrellas == null || this.estrellas == "") {
            this.estrellas = 1;
        }
        if (this.dataClasificaion['distancia'] == undefined || this.dataClasificaion['distancia'] == null || this.dataClasificaion['distancia'] == "") {
            this.dataClasificaion['distancia'] = '3M';
        }
        // this.dataService['distancia']=this.distancia;
        // this.dataService['experiencia']=this.experiencia;
        this.dataService['Clasificacion'] = this.dataClasificaion;
        this.dataService['status'] = 'Published';
        var userLocal = localStorage.getItem('verificacion');
        this.dataService['User'] = userLocal;
        var userLocalAddress = JSON.parse(localStorage.getItem('address'));
        // console.log(userLocalAddress);
        this.dataService['Address'] = userLocalAddress;
        // console.log(this.dataService);
        var DataService = { 'datos': this.dataService };
        //this.navCtrl.push(CleaningInfoPage,DataService);
        // console.log(this.estrellas);
        this.dataService['Star'] = this.estrellas;
        console.log(this.dataService);
        switch (this.nameService) {
            case "Care": {
                //this.dataCategoria = ["Child care/Nany","Senior care","Family asistance","Dog walker","Personal shopper"];
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__services_care_services_care__["a" /* ServicesCarePage */], DataService);
                break;
            }
            case "Cleaning": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__services_cleaning_services_cleaning__["a" /* ServicesCleaningPage */], DataService);
                //this.dataCategoria = ["Maids","Car washers","Pressure cleaning","Carpet & upholstery cleaning"];
                break;
            }
            case "Janotorial": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__services_janotorial_services_janotorial__["a" /* ServicesJanotorialPage */], DataService);
                //this.dataCategoria = ["Handyman","Pluming","Electrician","Pool Cleaner ","Luck smith" ];
                break;
            }
            case "Transportation": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__services_transportation_services_transportation__["a" /* ServicesTransportationPage */], DataService);
                //this.dataCategoria = ["Day VIP chofer","Taxi","Car pool","Moving services","Delivery" ];
                break;
            }
            case "Food & Beverage": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__services_food_services_food__["a" /* ServicesFoodPage */], DataService);
                //this.dataCategoria = ["Bartenders","Waitress","Chef","Runners","Valet parking","Hostess"];
                break;
            }
            case "Legal services": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__services_legal_services_legal__["a" /* ServicesLegalPage */], DataService);
                //this.dataCategoria = ["Notary"];
                break;
            }
            case "Beauty": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__services_beauty_services_beauty__["a" /* ServicesBeautyPage */], DataService);
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
        selector: 'page-cleaning',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\cleaning\cleaning.html"*/'<!--\n\n  Generated template for the CleaningPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="imgCenter">\n\n	 <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n  </div>\n\n	<div class="TituloRojo"><h4>{{dataService.name}}</h4></div>\n\n	<h4>Filter search</h4>\n\n	<p padding>Choose the options for the search of the professional you want to hire</p>\n\n	<form  class="list" [formGroup]="service">\n\n		<ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n		        <ion-list>\n\n					  	<ion-item>\n\n				      	<ion-select [(ngModel)]="dataClasificaion.categoria" formControlName="categoria" name="categoria" placeholder="Category"> <!--[(ngModel)]="gaming"-->\n\n                 <ion-option *ngFor="let category of dataCategoria" value="{{category}}">{{category}}</ion-option>\n\n				      	</ion-select>\n\n				    	</ion-item>\n\n						</ion-list>\n\n          </ion-col>\n\n			</ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <ion-list radio-group [(ngModel)]="certificacion" formControlName="certificacio" name="certificacio" >\n\n			    	<ion-item>\n\n			      	<ion-label>Certificate</ion-label>\n\n    					<ion-radio value="true" ></ion-radio>\n\n				  	</ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-list radio-group [(ngModel)]="seguro" formControlName="seguro"  name="seguro">\n\n			   		<ion-item>\n\n			      	<ion-label>Insurance</ion-label>\n\n    					<ion-radio value="true"   ></ion-radio>\n\n				  	</ion-item>\n\n					</ion-list>\n\n        </ion-col>\n\n			</ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-select class="mitad"  [(ngModel)]="dataClasificaion.distancia" formControlName="distancia" name="distancia" placeholder="Distance"> <!--[(ngModel)]="gaming"-->\n\n              <ion-option value="1M">1 Miles</ion-option>\n\n              <ion-option value="2M">2 Miles</ion-option>\n\n              <ion-option value="3M">3 Miles</ion-option>\n\n              <ion-option value="4M">4 Miles</ion-option>\n\n              <ion-option value="5M">5 Miles</ion-option>\n\n              <ion-option value="5MM">&gt; 5 Milla</ion-option>\n\n            </ion-select>\n\n            <ion-select  class="mitad"  [(ngModel)]="dataClasificaion.experiencia" formControlName="experiencia" name="experiencia" placeholder="Experience"> <!--[(ngModel)]="gaming"-->\n\n              <ion-option value="1Y" >1 Year</ion-option>\n\n              <ion-option value="2Y" >2 Year</ion-option>\n\n              <ion-option value="3Y" >3 Year</ion-option>\n\n              <ion-option value="3YM" >&gt; 3 Year</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n            <p>If you do not select a filter, will show up all professionals available within 3 miles.</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <p class="clasificacion">\n\n          <input id="radio1" type="radio" name="estrellas" [(ngModel)]="estrellas" formControlName="estrellas" value="5">\n\n          <label for="radio1">&#9733;</label>\n\n\n\n          <input id="radio2" type="radio" name="estrellas" [(ngModel)]="estrellas" formControlName="estrellas" value="4">\n\n          <label for="radio2">&#9733;</label>\n\n          \n\n          <input id="radio3" type="radio" name="estrellas" [(ngModel)]="estrellas" formControlName="estrellas" value="3">\n\n          <label for="radio3">&#9733;</label>\n\n          \n\n          <input id="radio4" type="radio" name="estrellas" [(ngModel)]="estrellas" formControlName="estrellas" value="2">\n\n          <label for="radio4">&#9733;</label>\n\n          \n\n          <input id="radio5" type="radio" name="estrellas" [(ngModel)]="estrellas" formControlName="estrellas" value="1">\n\n          <label for="radio5">&#9733;</label>\n\n        </p>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <div class="btnBottom">\n\n            <button id="verifyYourPhone-button6" ion-button block color="danger" (click)="cleaningInfo()" [disabled]="!service.valid">\n\n              Continue <ion-icon name="arrow-dropright"></ion-icon>\n\n            </button>\n\n          </div>\n\n        </ion-col>\n\n			</ion-row>\n\n		</ion-grid>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\cleaning\cleaning.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_professions_service__["a" /* ProfessionsService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], CleaningPage);

//# sourceMappingURL=cleaning.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesCarePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cleaning_sale_cleaning_sale__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_offer_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sale_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app__ = __webpack_require__(18);
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




// import { CareProfessionsService } from '../../services/careProfessions.service';





// import { SaleService } from '../../services/sale.service';
/**
 * Generated class for the ServicesCarePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServicesCarePage = (function () {
    function ServicesCarePage(navCtrl, navParams, formBuilder, 
        // private careProfessionS: CareProfessionsService,
        offerService, saleService, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.offerService = offerService;
        this.saleService = saleService;
        this.camera = camera;
        this.dataService = [];
        //form show
        this.booleamChildCare = false;
        this.booleamSeniorCare = false;
        this.booleamFamilyAsistance = false;
        this.booleamDogWalker = false;
        this.booleamPersonalShopper = false;
        this.foto = '';
        //label comments
        this.labelComments = "More information";
        this.dataService = this.navParams.get('datos');
        this.subCategory = this.dataService['Clasificacion']['categoria'];
        //this.getForm(this.subCategory);
        this.userActual = localStorage.getItem('verificacion');
        var d = new Date();
        var key = d.getTime();
        this.keyOffer = "offer_" + (key);
        this.getForm();
    }
    ServicesCarePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesCarePage');
        // console.log(localStorage);
    };
    ServicesCarePage.prototype.goCleaningSale = function () {
        switch (this.subCategory) {
            case "Child care/Nany": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "numChildren": this.numChildren, "ageChildren": this.ageChildren, "timeChildren": this.timeChildren, "moreInformation": this.moreInformation }];
                break;
            }
            case "Senior care": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "ageSenior": this.ageSenior, "moreInformation": this.moreInformation }];
                break;
            }
            case "Family asistance": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "asistenceFamilia": this.asistenceFamilia, "moreInformation": this.moreInformation }];
                break;
            }
            case "Dog walker": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "raceDog": this.raceDog, "numDog": this.numDog, "moreInformation": this.moreInformation }];
                break;
            }
            case "Personal shopper": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "purchaseShopper": this.purchaseShopper, "placeShopper": this.placeShopper, "moreInformation": this.moreInformation }];
                break;
            }
        }
        this.guardarServicio(this.dataInformacion);
    };
    ServicesCarePage.prototype.guardarServicio = function (datos) {
        console.log(datos);
        this.dataService['Clasificacion']['informacion'] = datos['0'];
        console.log(this.dataService);
        //let subCategory=this.dataService['Clasificacion']['categoria'];
        //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
        // this.careProfessionS.newOffer(this.dataService,keyOffer);
        this.offerService.newOffer(this.dataService, this.keyOffer);
        // console.log(localStorage);
        var maxOffer = datos['0']['maxOffer'];
        // let userLocal = localStorage.getItem('verificacion');
        this.saleService.newSale(this.userActual, this.keyOffer, maxOffer);
        // console.log(userLocal);
        // console.log(keyOffer);
        // console.log(maxOffer);
        var DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */], DataService);
    };
    ServicesCarePage.prototype.getForm = function () {
        switch (this.subCategory) {
            case "Child care/Nany": {
                this.booleamChildCare = true;
                this.labelComments = "Special cares";
                this.ServiceCare = this.formBuilder.group({
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    foto: [''],
                    numChildren: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    ageChildren: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    timeChildren: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    ageSenior: [''],
                    timeSenior: [''],
                    asistenceFamilia: [''],
                    raceDog: [''],
                    numDog: [''],
                    purchaseShopper: [''],
                    placeShopper: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Senior care": {
                this.booleamSeniorCare = true;
                this.labelComments = "Details of your service";
                this.ServiceCare = this.formBuilder.group({
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    foto: [''],
                    numChildren: [''],
                    ageChildren: [''],
                    timeChildren: [''],
                    ageSenior: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    timeSenior: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    asistenceFamilia: [''],
                    raceDog: [''],
                    numDog: [''],
                    purchaseShopper: [''],
                    placeShopper: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
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
                this.ServiceCare = this.formBuilder.group({
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    foto: [''],
                    numChildren: [''],
                    ageChildren: [''],
                    timeChildren: [''],
                    ageSenior: [''],
                    timeSenior: [''],
                    asistenceFamilia: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    raceDog: [''],
                    numDog: [''],
                    purchaseShopper: [''],
                    placeShopper: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Dog walker": {
                this.booleamDogWalker = true;
                this.ServiceCare = this.formBuilder.group({
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    foto: [''],
                    numChildren: [''],
                    ageChildren: [''],
                    timeChildren: [''],
                    ageSenior: [''],
                    timeSenior: [''],
                    asistenceFamilia: [''],
                    raceDog: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    numDog: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    purchaseShopper: [''],
                    placeShopper: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Personal shopper": {
                this.booleamPersonalShopper = true;
                this.ServiceCare = this.formBuilder.group({
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    foto: [''],
                    numChildren: [''],
                    ageChildren: [''],
                    timeChildren: [''],
                    ageSenior: [''],
                    timeSenior: [''],
                    asistenceFamilia: [''],
                    raceDog: [''],
                    numDog: [''],
                    purchaseShopper: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    placeShopper: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
        }
    };
    ServicesCarePage.prototype.camaraFoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var file, options, result, image, picture, UploadTask_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = this.userActual + '/' + this.keyOffer + '/foto';
                        console.log('clickCamara');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 60,
                            targetHeight: 300,
                            targetWidth: 300,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = 'data:image/jpeg;base64,' + result;
                        picture = Object(__WEBPACK_IMPORTED_MODULE_7_firebase__["storage"])().ref(file);
                        UploadTask_1 = picture.putString(image, 'data_url');
                        UploadTask_1.on(__WEBPACK_IMPORTED_MODULE_8_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                            var url = UploadTask_1.snapshot.downloadURL;
                            console.log(url);
                            _this.foto = url;
                        }, function (error) { console.log(error); });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ServicesCarePage;
}());
ServicesCarePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-services-care',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\services-care\services-care.html"*/'<!--\n\n  Generated template for the ServicesCarePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>JoBid</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n    <div class="imgCenter">\n\n     <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n      </div>\n\n    <div class="TituloRojo"><h4>{{subCategory}}</h4></div>\n\n    <h4>Service information</h4>\n\n    <p padding>Describes what the professional requires</p>\n\n  <form id="formPayinfo" class="list" [formGroup]="ServiceCare">\n\n    <ion-grid>\n\n      <ion-row>\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n              <ion-input type="number" placeholder="Maximum offer value" [(ngModel)]="maxOffer" formControlName="maxOffer" name="maxOffer"></ion-input>\n\n              <ion-icon name="logo-usd" item-start></ion-icon>\n\n              <input type="hidden" placeholder="Photography" [(ngModel)]="foto" formControlName="foto" name="foto" />\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-2 id="btn-camera">\n\n            <button ion-button color="danger" outline (click)="camaraFoto()"><ion-icon name="camera"></ion-icon></button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleamChildCare">\n\n        <ion-col col-6>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="man" item-start></ion-icon>\n\n              <ion-input type="number" placeholder="# Children" [(ngModel)]="numChildren" formControlName="numChildren" name="numChildren"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-input type="number" placeholder="Age" [(ngModel)]="ageChildren" formControlName="ageChildren" name="ageChildren"></ion-input>\n\n              <ion-input type="number" placeholder="Hours" [(ngModel)]="timeChildren" formControlName="timeChildren" name="timeChildren"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleamSeniorCare">\n\n      <!-- <ion-row> -->\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="man" item-start></ion-icon>\n\n              <ion-input type="number" placeholder="Age" [(ngModel)]="ageSenior" formControlName="ageSenior" name="ageSenior"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleamSeniorCare">\n\n      <!-- <ion-row> -->\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="clock" item-start></ion-icon>\n\n              <ion-input type="number" placeholder="Hours" [(ngModel)]="timeSenior" formControlName="timeSenior" name="timeSenior"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleamFamilyAsistance">\n\n      <!-- <ion-row> -->\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n                <ion-icon name="albums" item-start></ion-icon>\n\n                <ion-select [(ngModel)]="asistenceFamilia" formControlName="asistenceFamilia" name="asistenceFamilia" placeholder="Issues">\n\n                    <ion-option *ngFor="let asistence of FamiliaAsistence" value="{{asistence.value}}">{{asistence.label}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleamDogWalker">\n\n      <!-- <ion-row> -->\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item class="mitad mitadEspacio">\n\n                <ion-icon name="clipboard" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Race" [(ngModel)]="raceDog" formControlName="raceDog" name="raceDog"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="mitad">\n\n                <ion-input type="number" placeholder="# Dogs"  [(ngModel)]="numDog" formControlName="numDog" name="numDog"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!-- <ion-row *ngIf="booleamDogWalker">\n\n        <ion-col col-10>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="logo-usd" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Photography" [(ngModel)]="fotoDog" name="fotoDog"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-2 id="btn-camera">\n\n            <button ion-button color="danger" outline><ion-icon name="camera"></ion-icon></button>\n\n        </ion-col>\n\n      </ion-row> -->\n\n      <ion-row *ngIf="booleamPersonalShopper">\n\n      <!-- <ion-row> -->\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item class="mitad mitadEspacio">\n\n              <ion-icon name="basket" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Type of purchase." [(ngModel)]="purchaseShopper" formControlName="purchaseShopper" name="purchaseShopper"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="mitad">\n\n              <ion-input type="text" placeholder="Type of place"  [(ngModel)]="placeShopper" formControlName="placeShopper" name="placeShopper"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n      <ion-row> \n\n        <ion-col>\n\n          <ion-list><ion-item>\n\n            <ion-icon name="paper" item-start></ion-icon>\n\n            <ion-textarea type="text" placeholder="{{labelComments}}" [(ngModel)]="moreInformation" formControlName="moreInformation" name="moreInformation"></ion-textarea>\n\n          </ion-item></ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col> \n\n          <div class="btnBottom">\n\n            <button ion-button color="danger" block icon-left (click)="goCleaningSale()" [disabled]="!ServiceCare.valid">\n\n              Go to the bid<ion-icon name="arrow-dropright"></ion-icon>\n\n            </button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n  </ion-content>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\services-care\services-care.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_5__services_sale_service__["a" /* SaleService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]])
], ServicesCarePage);

//# sourceMappingURL=services-care.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningContractorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_info_service_cleaning_info_service__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_show__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_braintree_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_professionals_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sale_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_offer_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//---services





/**
 * Generated class for the CleaningContractorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CleaningContractorPage = (function () {
    function CleaningContractorPage(navCtrl, navParams, alertCtrl, professionalsService, saleService, offerService, userService, braintreeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.professionalsService = professionalsService;
        this.saleService = saleService;
        this.offerService = offerService;
        this.userService = userService;
        this.braintreeService = braintreeService;
        //- default parametros
        this.imgJobDefault = "assets/img/professions/cleaning.png";
        // galleryJobDefault ="assets/img/gallery.png";
        this.galleryJobDefault = "";
        this.disGallery = true;
        this.disableGalleryAJobr = true;
        this.disableGalleryBJobr = true;
        this.disableGalleryCJobr = true;
        this.disableGalleryDJobr = true;
        this.commentsJobr = [];
    }
    CleaningContractorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CleaningContractorPage');
        this.datasService = this.navParams.get('datos');
        this.dataService = this.datasService['dataService'];
        this.keyOffer = this.datasService['offer'];
        this.worker = this.datasService['win'];
        this.userActual = localStorage.getItem('verificacion');
        this.SubServiceActual = localStorage.getItem('SubService');
        this.sale = this.worker['offer'];
        console.log(this.datasService);
        this.getStatusService();
        // console.log(this.dataService);
        // console.log(this.keyOffer);
        // console.log(this.worker);
        // console.log(this.userActual);
        // console.log(this.SubServiceActual);
        this.getProfessionals(this.worker['id']);
        //-comentar si sale 
        // this.SubServiceActual = "Electrician";
        //-comentar si sale -fin
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
        var DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer, "win": this.worker } };
        console.log(DataService);
        this.profeSuns.unsubscribe();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cleaning_info_service_cleaning_info_service__["a" /* CleaningInfoServicePage */], DataService);
    };
    // goIndex(){
    // 	this.navCtrl.setRoot(ShowPage);
    // }
    CleaningContractorPage.prototype.getStatusService = function () {
        var _this = this;
        this.statusSub = this.saleService.getStatus(this.userActual, this.keyOffer).subscribe(function (status) {
            console.log('statusSub-S service-win');
            console.log(status);
            if (status['$value']) {
                if (status['$value'] == 'CancelledProvider') {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__show_show__["a" /* ShowPage */]);
                    _this.statusSub.unsubscribe();
                }
            }
        });
    };
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
                        var descuento = (_this.sale * 5) / 100;
                        _this.braintreeService.CancelSaleCustomer(_this.userActual, descuento);
                        _this.profeSuns.unsubscribe();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__show_show__["a" /* ShowPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    CleaningContractorPage.prototype.getProfessionals = function (keyWork) {
        var _this = this;
        // console.log(keyWork);
        this.profeSuns = this.professionalsService.getProfessional(keyWork).subscribe(function (professional) {
            // console.log(professional);
            _this.mostrarWorkInfo(professional);
        });
    };
    CleaningContractorPage.prototype.mostrarWorkInfo = function (workerInfo) {
        var _this = this;
        console.log(workerInfo);
        this.ImgJobr = this.imgJobDefault;
        this.galleryAJobr = this.galleryJobDefault;
        this.galleryBJobr = this.galleryJobDefault;
        this.galleryCJobr = this.galleryJobDefault;
        this.galleryDJobr = this.galleryJobDefault;
        //-info basic
        this.nameJobr = workerInfo['prof_name'];
        this.worker['star'] = workerInfo['prof_star'];
        var starJobrBD = Math.round(workerInfo['prof_star']);
        var contenido = '';
        if (Math.round(starJobrBD) == 5) {
            contenido += 'cinco';
        }
        if (Math.round(starJobrBD) == 4) {
            contenido += 'cuatro';
        }
        if (Math.round(starJobrBD) == 3) {
            contenido += 'tres';
        }
        if (Math.round(starJobrBD) == 2) {
            contenido += 'dos';
        }
        if (Math.round(starJobrBD) == 1) {
            contenido += 'one';
        }
        this.starJobr = contenido;
        // console.log(this.starJobr); 
        if (workerInfo['prof_picture'] && workerInfo['prof_picture'] != '') {
            this.ImgJobr = workerInfo['prof_picture'];
        }
        var _loop_1 = function (service) {
            if (workerInfo.Service[service].serv_subService == this_1.SubServiceActual || workerInfo.Service[service].serv_subService == 'Full') {
                var infoService = workerInfo.Service[service];
                // console.log(infoService);
                // console.log(infoService.serv_subService);
                this_1.certificateJobr = infoService.serv_detail['serv_certificate'];
                this_1.insuranceJobr = infoService.serv_detail['serv_insurance'];
                this_1.presentationJobr = infoService.serv_detail.serv_moreInformation;
                if (infoService.serv_detail.serv_gallery) {
                    this_1.disGallery = false;
                    if (infoService.serv_detail.serv_gallery.prof_galleryA && infoService.serv_detail.serv_gallery.prof_galleryA != '') {
                        this_1.disableGalleryAJobr = false;
                        this_1.galleryAJobr = infoService.serv_detail.serv_gallery.prof_galleryA;
                    }
                    if (infoService.serv_detail.serv_gallery.prof_galleryB && infoService.serv_detail.serv_gallery.prof_galleryB != '') {
                        this_1.disableGalleryBJobr = false;
                        this_1.galleryBJobr = infoService.serv_detail.serv_gallery.prof_galleryB;
                    }
                    if (infoService.serv_detail.serv_gallery.prof_galleryC && infoService.serv_detail.serv_gallery.prof_galleryC != '') {
                        this_1.disableGalleryCJobr = false;
                        this_1.galleryCJobr = infoService.serv_detail.serv_gallery.prof_galleryC;
                    }
                    if (infoService.serv_detail.serv_gallery.prof_galleryD && infoService.serv_detail.serv_gallery.prof_galleryD != '') {
                        this_1.disableGalleryDJobr = false;
                        this_1.galleryDJobr = infoService.serv_detail.serv_gallery.prof_galleryD;
                    }
                }
                //-info comentarios
                var commentsJobr_1 = workerInfo['prof_comments'];
                console.log(commentsJobr_1);
                var _loop_2 = function (key) {
                    this_1.userNameSubs = this_1.userService.getUser(commentsJobr_1[key]['user_username']).subscribe(function (UserBD) {
                        if (UserBD) {
                            console.log(key);
                            if (_this.userNameSubs != undefined) {
                                // console.log(this.userNameSubs);
                                // console.log('userNameSubs S - contractor');
                                // console.log(UserBD);
                                console.log(commentsJobr_1[key]['user_username']);
                                if (UserBD['user_username']) {
                                    UserBD['user_username'];
                                    var contenido_1 = '';
                                    // contenido +=Math.round(commentsJobr[key]['comm_qualification'])+'';
                                    if (Math.round(commentsJobr_1[key]['comm_qualification']) == 5) {
                                        contenido_1 += 'cinco';
                                    }
                                    if (Math.round(commentsJobr_1[key]['comm_qualification']) == 4) {
                                        contenido_1 += 'cuatro';
                                    }
                                    if (Math.round(commentsJobr_1[key]['comm_qualification']) == 3) {
                                        contenido_1 += 'tres';
                                    }
                                    if (Math.round(commentsJobr_1[key]['comm_qualification']) == 2) {
                                        contenido_1 += 'dos';
                                    }
                                    if (Math.round(commentsJobr_1[key]['comm_qualification']) == 1) {
                                        contenido_1 += 'one';
                                    }
                                    _this.commentsJobr.push({ 'user': UserBD['user_username'], 'star': contenido_1, 'description': commentsJobr_1[key]['comm_description'] });
                                    _this.userNameSubs.unsubscribe();
                                }
                                // console.log('userNameSubs US - contractor');
                                console.log(_this.commentsJobr);
                            }
                        }
                    });
                };
                for (var key in commentsJobr_1) {
                    _loop_2(key);
                }
                console.log(this_1.commentsJobr);
            }
        };
        var this_1 = this;
        //info servicion
        for (var service in workerInfo.Service) {
            _loop_1(service);
        }
    };
    return CleaningContractorPage;
}());
CleaningContractorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning-contractor',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\cleaning-contractor\cleaning-contractor.html"*/'<!--\n\n  Generated template for the CleaningContractorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<div class="barraRoja">\n\n	<h4>Bid winner</h4>\n\n</div>\n\n<div class="saleBox">\n\n	<h1>${{sale}}</h1>\n\n</div>\n\n<ion-grid>\n\n	<ion-row>\n\n		<ion-col col-3>\n\n			<ion-list>\n\n				<ion-item>\n\n					<ion-avatar>\n\n						<img src="{{ImgJobr}}">\n\n			    </ion-avatar>\n\n		  	</ion-item>\n\n			</ion-list>\n\n	  </ion-col>\n\n	  <ion-col col-9>\n\n			<ion-row>\n\n				<ion-col>\n\n					<h4>{{nameJobr}}</h4>\n\n					<!-- <img src="assets/img/Estrellas.png" alt=""> -->\n\n					\n\n				<p class="Calificacion Usuario {{starJobr}}">\n\n					<label for="radio1">&#9733;</label>\n\n					<label for="radio2">&#9733;</label>\n\n					<label for="radio3">&#9733;</label>\n\n					<label for="radio4">&#9733;</label>\n\n					<label for="radio5">&#9733;</label>\n\n				</p>\n\n	  		</ion-col>\n\n	  	</ion-row>	\n\n	  	<ion-row>	\n\n				<ion-col col-6 class="col-height"  *ngIf="certificateJobr" >\n\n					<ion-list><ion-item>\n\n						<ion-label>Certificate</ion-label>\n\n						<ion-radio checked="true" value="Certificate"></ion-radio>\n\n					</ion-item></ion-list>\n\n			  </ion-col>\n\n			  <ion-col col-6 class="col-height"  *ngIf="insuranceJobr">\n\n					<ion-list>\n\n						<ion-item>\n\n							<ion-label>Insurance</ion-label>\n\n							<ion-radio checked="true" value="Insurance"></ion-radio>\n\n				  	</ion-item>\n\n					</ion-list>\n\n			  </ion-col>\n\n	  	</ion-row>	\n\n	  </ion-col>\n\n	</ion-row>\n\n</ion-grid>\n\n<div  class="divScroll" padding>\n\n	<h5>Presentation</h5>\n\n	<p>{{presentationJobr}}</p>\n\n	<h5 [hidden]="disGallery">Gallery</h5>\n\n	<ion-grid [hidden]="disGallery">\n\n		<ion-row>\n\n			<ion-col col-6 [hidden] ="disableGalleryAJobr">\n\n				<img src="{{galleryAJobr}}" alt="">\n\n			</ion-col>\n\n			<ion-col col-6 [hidden] ="disableGalleryBJobr">\n\n				<img src="{{galleryBJobr}}" alt="">\n\n			</ion-col>\n\n		<!-- </ion-row>\n\n		<ion-row> -->\n\n			<ion-col col-6 [hidden] ="disableGalleryCJobr">\n\n				<img src="{{galleryCJobr}}" alt="">\n\n			</ion-col>\n\n			<ion-col col-6 [hidden] ="disableGalleryDJobr">\n\n				<img src="{{galleryDJobr}}" alt="">\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n	<h5>Comments</h5>\n\n<div class="comments" *ngFor="let value of commentsJobr" >\n\n	{{value.user}}\n\n	<!-- {{value.star}} -->\n\n	<p class="Calificacion {{value.star}}">\n\n		<label for="radio1">&#9733;</label><label for="radio2">&#9733;</label><label for="radio3">&#9733;</label><label for="radio4">&#9733;</label><label for="radio5">&#9733;</label>\n\n	</p>\n\n	<p>{{value.description}}</p>\n\n</div>\n\n<!-- <div class="comments">\n\n	<h6>Luis Lorem <img src="assets/img/Estrellas.png" alt=""></h6>\n\n	 <p>Odit, cupiditate. Quibusdam ducimus minus incidunt voluptas consequatur odit, adipisci eveniet laborum obcaecati labore! Sapiente repellat ipsum in autem fuga sint enim recusandae incidunt tenetur corporis neque totam, quam sequi placeat cupiditate, inventore! Alias repudiandae ducimus laudantium nemo quisquam, quod sint et quam, id ipsum magnam veniam amet sit a voluptatibus, similique ipsa voluptatem voluptates velit quo. Quidem odio a nemo sit illum. </p>\n\n</div>\n\n<div class="comments">\n\n	<h6>Melisa Lorem <img src="assets/img/Estrellas.png" alt=""></h6>\n\n	 <p>Odit, cupiditate. Quibusdam ducimus minus incidunt voluptas consequatur odit, adipisci eveniet laborum obcaecati labore! Sapiente repellat ipsum in autem fuga sint enim recusandae incidunt tenetur corporis neque totam, quam sequi placeat cupiditate, inventore! Alias repudiandae ducimus laudantium nemo quisquam, quod sint et quam, id ipsum magnam veniam amet sit a voluptatibus, similique ipsa voluptatem voluptates velit quo. Quidem odio a nemo sit illum. </p>\n\n</div> -->\n\n\n\n</div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n     <ion-row>\n\n      <ion-col>\n\n        <button id="btnContractor" ion-button block color="light" (click)="goCleaningInfoService()">Hire\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button id="btnCancel" ion-button block color="light"(click)="goIndex()">Cancel service\n\n        </button>\n\n      </ion-col>\n\n     </ion-row>\n\n    </ion-grid>  \n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\cleaning-contractor\cleaning-contractor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__services_professionals_service__["a" /* ProfessionalsService */],
        __WEBPACK_IMPORTED_MODULE_6__services_sale_service__["a" /* SaleService */], __WEBPACK_IMPORTED_MODULE_7__services_offer_service__["a" /* OfferService */], __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__services_braintree_service__["a" /* BraintreeService */]])
], CleaningContractorPage);

//# sourceMappingURL=cleaning-contractor.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningInfoServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_vote_cleaning_vote__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sale_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_offer_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_notificacion_service__ = __webpack_require__(113);
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
    function CleaningInfoServicePage(navCtrl, navParams, professionalsService, saleService, offerService, notificacionService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professionalsService = professionalsService;
        this.saleService = saleService;
        this.offerService = offerService;
        this.notificacionService = notificacionService;
        //-- default
        this.imgJobDefault = "assets/img/professions/cleaning.png";
        this.zom = 14;
        //-datos BD
        this.status = "Waiting for the professional";
        this.segundos = 2;
        this.loadData();
    }
    CleaningInfoServicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CleaningInfoServicePage');
    };
    CleaningInfoServicePage.prototype.loadData = function () {
        var _this = this;
        this.datasService = this.navParams.get('datos');
        this.dataService = this.datasService['dataService'];
        this.keyOffer = this.datasService['offer'];
        this.worker = this.datasService['win'];
        this.userActual = localStorage.getItem('verificacion');
        this.SubServiceActual = localStorage.getItem('SubService');
        this.sale = this.worker['offer'];
        this.information = this.dataService['Clasificacion']['informacion']['moreInformation'];
        this.serviceCode = this.keyOffer.substring(6);
        console.log(this.datasService);
        // console.log(this.dataService);
        // console.log(this.keyOffer);
        // console.log(this.worker);
        // console.log(this.userActual);
        // console.log(localStorage);
        this.getProfessionals(this.worker['id']);
        this.getUsersLocation();
        this.saleStatusSubs = this.saleService.getStatus(this.userActual, this.keyOffer).subscribe(function (resul) {
            // console.log(resul);
            // console.log(resul['$value']);
            _this.status = resul['$value'];
            if (resul['$value'] == 'In progress') {
                _this.status = 'Service in progress';
                _this.notificacionServiceStart();
            }
            if (resul['$value'] == 'Finalized') {
                _this.status = 'Service completed';
                _this.notificacionServiceFinish();
                _this.startTimer();
            }
        });
    };
    CleaningInfoServicePage.prototype.goCleaningVote = function () {
        var DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer, "win": this.worker } };
        console.log(DataService);
        this.saleStatusSubs.unsubscribe();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cleaning_vote_cleaning_vote__["a" /* CleaningVotePage */], DataService);
    };
    CleaningInfoServicePage.prototype.getProfessionals = function (keyWork) {
        var _this = this;
        var getProfessionalSubs = this.professionalsService.getProfessional(keyWork).subscribe(function (professional) {
            if (getProfessionalSubs != undefined) {
                _this.workerInfo = professional;
                _this.mostrarWorkInfo();
                getProfessionalSubs.unsubscribe();
            }
        });
    };
    CleaningInfoServicePage.prototype.mostrarWorkInfo = function () {
        console.log(this.workerInfo);
        this.ImgJobr = this.imgJobDefault;
        // let galleryJobr= this.galleryJobDefault;
        this.nameJobr = this.workerInfo['prof_name'];
        var starJobrBD = Math.round(this.workerInfo['prof_star']);
        var contenido = '';
        if (Math.round(starJobrBD) == 5) {
            contenido += 'cinco';
        }
        if (Math.round(starJobrBD) == 4) {
            contenido += 'cuatro';
        }
        if (Math.round(starJobrBD) == 3) {
            contenido += 'tres';
        }
        if (Math.round(starJobrBD) == 2) {
            contenido += 'dos';
        }
        if (Math.round(starJobrBD) == 1) {
            contenido += 'one';
        }
        this.starJobr = contenido;
        // this.certificateJobr= this.workerInfo['prof_certificate']; 
        // this.insuranceJobr= this.workerInfo['prof_insurance'];     
        if (this.workerInfo['prof_picture'] && this.workerInfo['prof_picture'] != '') {
            this.ImgJobr = this.workerInfo['prof_picture'];
        }
        //info servicion
        for (var service in this.workerInfo.Service) {
            if (this.workerInfo.Service[service].serv_subService == this.SubServiceActual || this.workerInfo.Service[service].serv_subService == 'Full') {
                var infoService = this.workerInfo.Service[service];
                // console.log(infoService);
                // console.log(infoService.serv_subService);
                this.certificateJobr = infoService.serv_detail['serv_certificate'];
                this.insuranceJobr = infoService.serv_detail['serv_insurance'];
                this.presentationJobr = infoService.serv_detail['serv_moreInformation'];
            }
        }
    };
    //--- timer
    CleaningInfoServicePage.prototype.startTimer = function () {
        var _this = this;
        this.objNodeTimer = setInterval(function () { return _this.timer(); }, 1000);
    };
    CleaningInfoServicePage.prototype.timer = function () {
        console.log(this.segundos);
        // console.log(this.status);
        if (this.status == 'Service completed' && this.segundos == 1) {
            clearInterval(this.objNodeTimer);
            console.log('servicion fin');
            this.goCleaningVote();
        }
        else {
            if (--this.segundos < 0) {
                // this.modificarStatus();
                this.segundos = 2;
            }
        }
    };
    CleaningInfoServicePage.prototype.getUsersLocation = function () {
        var _this = this;
        this.OfferUserLocationSubs = this.offerService.getOfferUserLocation(this.keyOffer).subscribe(function (LocationUser) {
            console.info(LocationUser);
            _this.Userlat = LocationUser.latitud;
            _this.Userlng = LocationUser.longitud;
            console.log(_this.Userlat);
            console.log(_this.Userlng);
            _this.OfferUserLocationSubs.unsubscribe();
        });
        this.getOfferProviderLocationSubs = this.offerService.getOfferProviderLocation(this.keyOffer).subscribe(function (LocationProvider) {
            console.info(LocationProvider);
            _this.providerLatitud = LocationProvider.latitud;
            _this.providerLongitud = LocationProvider.longitud;
            console.log(_this.providerLatitud);
            console.log(_this.providerLongitud);
            _this.getOfferProviderLocationSubs.unsubscribe();
        });
    };
    //-notification
    CleaningInfoServicePage.prototype.notificacionServiceStart = function () {
        console.info('Nota: The service has started');
        this.notificacionService.mostrar('The service has started', 4);
    };
    CleaningInfoServicePage.prototype.notificacionServiceFinish = function () {
        console.info('Nota: The service has finished');
        this.notificacionService.mostrar('The service has finished', 5);
    };
    return CleaningInfoServicePage;
}());
CleaningInfoServicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning-info-service',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\cleaning-info-service\cleaning-info-service.html"*/'<!--\n\n  Generated template for the CleaningInfoServicePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<!-- <img src="assets/img/map.png" class="imageFull"> -->\n\n<div class="mapa">\n\n  <agm-map [latitude]="Userlat" [longitude]="Userlng" [zoom]="zom">\n\n    <agm-marker style="z-index:9;"\n\n      [latitude]="providerLatitud"\n\n      [longitude]="providerLongitud" >\n\n    </agm-marker>\n\n  </agm-map>\n\n</div>\n\n<div class="barraGris">\n\n	<h4>Service information</h4>\n\n</div>\n\n<h3>Service code: #{{serviceCode}}</h3>\n\n<p class="textoCentrado">State</p>\n\n<h6 id="estadoServicio">{{status}}</h6>\n\n<div padding>\n\n	<p><span class="textRed">*Amount to be paid: </span>${{sale}}</p>\n\n	<p><span class="textRed">Description:</span></p>\n\n	<p>{{information}}</p>\n\n	<div class="space"></div>\n\n	<p><span class="textRed">Professional data</span></p>\n\n	<ion-grid>\n\n	<ion-row>\n\n	  <ion-col col-3>\n\n	    <ion-list>\n\n	    	<ion-item>\n\n	      	<ion-avatar>\n\n			      <img src="{{ImgJobr}}">\n\n			    </ion-avatar>\n\n		  	</ion-item>\n\n			</ion-list>\n\n	  </ion-col>\n\n	  <ion-col col-9>\n\n	  	<ion-row>\n\n	  		<ion-col>\n\n					<h4>{{nameJobr}}</h4>\n\n					<p class="Calificacion Usuario {{starJobr}}">\n\n							<label for="radio1">&#9733;</label>\n\n							<label for="radio2">&#9733;</label>\n\n							<label for="radio3">&#9733;</label>\n\n							<label for="radio4">&#9733;</label>\n\n							<label for="radio5">&#9733;</label>\n\n						</p>\n\n	  			<!-- <img src="assets/img/Estrellas.png" alt=""> -->\n\n	  		</ion-col>\n\n	  	</ion-row>	\n\n			<ion-row>	\n\n					<ion-col col-6 *ngIf="certificateJobr">\n\n						<ion-list><ion-item>\n\n							<ion-label>Certificate</ion-label>\n\n							<ion-radio checked="true" value="Certificate"></ion-radio>\n\n						</ion-item></ion-list>\n\n					</ion-col>\n\n					<ion-col col-6 *ngIf="insuranceJobr">\n\n						<ion-list>\n\n							 <ion-item>\n\n								<ion-label>Insurance</ion-label>\n\n								<ion-radio checked="true" value="Insurance"></ion-radio>\n\n							</ion-item>\n\n						</ion-list>\n\n					</ion-col>\n\n				</ion-row>	\n\n			</ion-col>\n\n		</ion-row>\n\n</ion-grid>\n\n</div>\n\n\n\n<!-- <div class="btnBottom">\n\n	<button id="verifyYourPhone-button6" ion-button block color="danger" (click)="goCleaningVote()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n\n</div> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\cleaning-info-service\cleaning-info-service.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__["a" /* ProfessionalsService */],
        __WEBPACK_IMPORTED_MODULE_4__services_sale_service__["a" /* SaleService */],
        __WEBPACK_IMPORTED_MODULE_5__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_6__services_notificacion_service__["a" /* NotificacionService */]])
], CleaningInfoServicePage);

//# sourceMappingURL=cleaning-info-service.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningVotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_ok_cleaning_ok__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notificacion_service__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//-service


/**
 * Generated class for the CleaningVotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CleaningVotePage = (function () {
    function CleaningVotePage(navCtrl, navParams, professionalsService, notificacionService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professionalsService = professionalsService;
        this.notificacionService = notificacionService;
        //-view
        this.vote = [];
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
    CleaningVotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CleaningVotePage');
    };
    CleaningVotePage.prototype.goCleaningOk = function () {
        console.log(this.vote);
        this.vote['userId'] = this.userActual;
        var DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer, "win": this.worker } };
        console.log(DataService);
        this.professionalsService.setComment(this.worker['id'], this.vote);
        //-cambiar calificacion proveedor
        var calificacion = (Number(this.vote.estrellas) + Number(this.worker['star'])) / 2;
        console.log(calificacion);
        this.professionalsService.setStar(this.worker['id'], calificacion);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cleaning_ok_cleaning_ok__["a" /* CleaningOkPage */], DataService);
    };
    //-notification
    CleaningVotePage.prototype.notificacionVoteProvider = function () {
        console.info('Nota: Do not forget to rate your provider');
        this.notificacionService.mostrar('Do not forget to rate your provider', 4);
    };
    return CleaningVotePage;
}());
CleaningVotePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning-vote',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\cleaning-vote\cleaning-vote.html"*/'<!--\n\n  Generated template for the CleaningVotePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<div class="barraRoja">\n\n	<h4>Service qualification</h4>\n\n</div>\n\n<p>Now you can qualify the professional and leave a comment of the service received.</p>\n\n<form id="signup-form3" class="list" padding>\n\n  <ion-list >\n\n    <ion-item>\n\n			<p class="clasificacion">\n\n        <input id="radio1" type="radio" name="estrellas" [(ngModel)]="vote.estrellas" value="5">\n\n        <label for="radio1">&#9733;</label>\n\n\n\n        <input id="radio2" type="radio" name="estrellas" [(ngModel)]="vote.estrellas" value="4">\n\n        <label for="radio2">&#9733;</label>\n\n        \n\n        <input id="radio3" type="radio" name="estrellas" [(ngModel)]="vote.estrellas" value="3">\n\n        <label for="radio3">&#9733;</label>\n\n        \n\n        <input id="radio4" type="radio" name="estrellas" [(ngModel)]="vote.estrellas" value="2">\n\n        <label for="radio4">&#9733;</label>\n\n        \n\n        <input id="radio5" type="radio" name="estrellas" [(ngModel)]="vote.estrellas" value="1">\n\n        <label for="radio5">&#9733;</label>\n\n      </p>\n\n    </ion-item>\n\n    <ion-item>\n\n    <input type="text">\n\n    	<ion-textarea placeholder="Comments" name="comment" [(ngModel)]="vote.comment"></ion-textarea>\n\n    </ion-item>\n\n  </ion-list>\n\n	<div class="btnBottom">\n\n    <button ion-button color="danger" block icon-left (click)="goCleaningOk()">Qualify and pay<ion-icon name="arrow-dropright"></ion-icon></button>\n\n  </div>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\cleaning-vote\cleaning-vote.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__["a" /* ProfessionalsService */],
        __WEBPACK_IMPORTED_MODULE_4__services_notificacion_service__["a" /* NotificacionService */]])
], CleaningVotePage);

//# sourceMappingURL=cleaning-vote.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningOkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_show__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_braintree_service__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//---services

/**
 * Generated class for the CleaningOkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CleaningOkPage = (function () {
    function CleaningOkPage(navCtrl, navParams, braintreeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.braintreeService = braintreeService;
        this.loadData();
        this.pagar();
    }
    CleaningOkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CleaningOkPage');
    };
    CleaningOkPage.prototype.goIndex = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__show_show__["a" /* ShowPage */]);
    };
    CleaningOkPage.prototype.loadData = function () {
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
    };
    CleaningOkPage.prototype.pagar = function () {
        console.log('service pagado');
        this.braintreeService.CrearSaleCustomer(this.userActual, this.offer, this.worker['id'], this.keyOffer, this.dataService.Clasificacion.categoria);
    };
    return CleaningOkPage;
}());
CleaningOkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning-ok',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\cleaning-ok\cleaning-ok.html"*/'<!--\n\n  Generated template for the CleaningOkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<img src="assets/img/JoBidUsuario.jpg" />\n\n	<div class="centrarIcon">\n\n		<ion-icon class="icon-ok" name="checkmark-circle"></ion-icon>\n\n	</div>\n\n	<p>Your service has been successfully completed and the value of ${{offer}} has been deducted from your credit card.</p>\n\n	 <div class="btnBottom" padding>\n\n    <button ion-button color="danger" block (click)="goIndex()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\cleaning-ok\cleaning-ok.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_braintree_service__["a" /* BraintreeService */]])
], CleaningOkPage);

//# sourceMappingURL=cleaning-ok.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesCleaningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cleaning_sale_cleaning_sale__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_offer_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sale_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app__ = __webpack_require__(18);
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
        formBuilder, offerService, saleService, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.offerService = offerService;
        this.saleService = saleService;
        this.camera = camera;
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
        this.userActual = localStorage.getItem('verificacion');
        var d = new Date();
        var key = d.getTime();
        this.keyOffer = "offer_" + (key);
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
        // var d = new Date();
        // let key = d.getTime();
        // var keyOffer = "offer_"+(key);
        // console.log(this.dataService);
        // let subCategory=this.dataService['Clasificacion']['categoria'];
        //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
        // this.cleanProfessionS.newOffer(this.dataService,keyOffer);
        this.offerService.newOffer(this.dataService, this.keyOffer);
        // console.log(localStorage);
        var maxOffer = datos['0']['maxOffer'];
        // let userLocal = localStorage.getItem('verificacion');
        this.saleService.newSale(this.userActual, this.keyOffer, maxOffer);
        // console.log(userLocal);
        // console.log(keyOffer);
        // console.log(maxOffer);
        var DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */], DataService);
    };
    ServicesCleaningPage.prototype.getForm = function () {
        switch (this.subCategory) {
            case "Maids": {
                this.booleanMaids = true;
                this.ServiceCleaning = this.formBuilder.group({
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    foto: [''],
                    placeMaid: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    roomMaid: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    batMaid: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    typeCar: [''],
                    brandCar: [''],
                    placeClean: [''],
                    mtsClean: [''],
                    typeCarpet: [''],
                    mtsCarpet: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Car washers": {
                this.booleanCarWashers = true;
                this.ServiceCleaning = this.formBuilder.group({
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    foto: [''],
                    placeMaid: [''],
                    roomMaid: [''],
                    batMaid: [''],
                    typeCar: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    brandCar: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    placeClean: [''],
                    mtsClean: [''],
                    typeCarpet: [''],
                    mtsCarpet: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Pressure cleaning": {
                this.booleanPressureCleaning = true;
                this.ServiceCleaning = this.formBuilder.group({
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    foto: [''],
                    placeMaid: [''],
                    roomMaid: [''],
                    batMaid: [''],
                    typeCar: [''],
                    brandCar: [''],
                    placeClean: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    mtsClean: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    typeCarpet: [''],
                    mtsCarpet: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Carpet & upholstery cleaning": {
                this.booleanCarpetCleaning = true;
                this.ServiceCleaning = this.formBuilder.group({
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    foto: [''],
                    placeMaid: [''],
                    roomMaid: [''],
                    batMaid: [''],
                    typeCar: [''],
                    brandCar: [''],
                    placeClean: [''],
                    mtsClean: [''],
                    typeCarpet: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    mtsCarpet: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
        }
    };
    ServicesCleaningPage.prototype.camaraFoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var file, options, result, image, picture, UploadTask_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = this.userActual + '/' + this.keyOffer + '/foto';
                        console.log('clickCamara');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 60,
                            targetHeight: 300,
                            targetWidth: 300,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = 'data:image/jpeg;base64,' + result;
                        picture = Object(__WEBPACK_IMPORTED_MODULE_7_firebase__["storage"])().ref(file);
                        UploadTask_1 = picture.putString(image, 'data_url');
                        UploadTask_1.on(__WEBPACK_IMPORTED_MODULE_8_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                            var url = UploadTask_1.snapshot.downloadURL;
                            console.log(url);
                            _this.foto = url;
                        }, function (error) { console.log(error); });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ServicesCleaningPage;
}());
ServicesCleaningPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-services-cleaning',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\services-cleaning\services-cleaning.html"*/'<!--\n\n  Generated template for the ServicesCleaningPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>JoBid</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n    <div class="imgCenter">\n\n     <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n      </div>\n\n    <div class="TituloRojo"><h4>{{subCategory}}</h4></div>\n\n    <h4>Service information</h4>\n\n    <p padding>Describes what the professional requires</p>\n\n  <form id="formPayinfo" class="list" [formGroup]="ServiceCleaning">\n\n    <ion-grid>\n\n      <ion-row>\n\n          <!-- <ion-row > -->\n\n            <ion-col col-10>\n\n              <ion-list>\n\n                <ion-item>\n\n                <ion-input type="number" placeholder="Maximum offer value" [(ngModel)]="maxOffer" formControlName="maxOffer" name="maxOffer"></ion-input>\n\n                <ion-icon name="logo-usd" item-start></ion-icon>\n\n                <input type="hidden" placeholder="Photography" [(ngModel)]="foto" formControlName="foto" name="foto" />\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col col-2 id="btn-camera">\n\n              <button ion-button color="danger" outline (click)="camaraFoto()"><ion-icon name="camera"></ion-icon></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      <ion-row *ngIf="booleanMaids">\n\n      <!-- <ion-row> -->\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n                <ion-icon name="map" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Type of place" [(ngModel)]="placeMaid" formControlName="placeMaid" name="placeMaid"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanMaids">\n\n      <!-- <ion-row> -->\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item class="mitad mitadEspacio">\n\n              <ion-icon name="shirt" item-start></ion-icon>\n\n              <ion-input type="number" placeholder="# Rooms" [(ngModel)]="roomMaid" formControlName="roomMaid" name="roomMaid"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="mitad">\n\n              <ion-input type="number" placeholder="# bathrooms" value="" class="batMaid" [(ngModel)]="batMaid" formControlName="batMaid" name="batMaid"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanCarWashers">\n\n      <!-- <ion-row> -->\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item class="mitad mitadEspacio">\n\n              <ion-icon name="car" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Type of car" [(ngModel)]="typeCar" formControlName="typeCar" name="typeCar"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="mitad">\n\n              <ion-input type="text" placeholder="Brand"  [(ngModel)]="brandCar" formControlName="brandCar" name="brandCar"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanPressureCleaning">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item class="mitad mitadEspacio">\n\n              <ion-icon name="shirt" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="What to clean" [(ngModel)]="placeClean" formControlName="placeClean" name="placeClean"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="mitad">\n\n              <ion-input type="number" placeholder="Mts"  [(ngModel)]="mtsClean" formControlName="mtsClean" name="mtsClean"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanCarpetCleaning">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item class="mitad mitadEspacio">\n\n              <ion-icon name="shirt" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Type of carpet" [(ngModel)]="typeCarpet" formControlName="typeCarpet" name="typeCarpet"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="mitad ">\n\n              <ion-input type="number" placeholder="Mts"  [(ngModel)]="mtsCarpet" formControlName="mtsCarpet" name="mtsCarpet"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="rowArea"> \n\n        <ion-col>\n\n          <ion-list><ion-item>\n\n            <ion-icon name="paper" item-start></ion-icon>\n\n            <ion-textarea type="text" placeholder="More information" [(ngModel)]="moreInformation" formControlName="moreInformation" name="moreInformation"></ion-textarea>\n\n          </ion-item></ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col> \n\n          <div class="btnBottom">\n\n            <button ion-button color="danger" block icon-left (click)="goCleaningSale()" [disabled]="!ServiceCleaning.valid">\n\n              Go to the bid<ion-icon name="arrow-dropright"></ion-icon>\n\n            </button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n  </ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\services-cleaning\services-cleaning.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_5__services_sale_service__["a" /* SaleService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]])
], ServicesCleaningPage);

//# sourceMappingURL=services-cleaning.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesJanotorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cleaning_sale_cleaning_sale__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_sale_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_offer_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app__ = __webpack_require__(18);
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




//-import page

//-import service


//-import firebase storage


/**
 * Generated class for the ServicesJanotorialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServicesJanotorialPage = (function () {
    function ServicesJanotorialPage(navCtrl, navParams, formBuilder, offerService, saleService, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.offerService = offerService;
        this.saleService = saleService;
        this.camera = camera;
        this.dataService = [];
        //form show
        this.booleanHandyman = false;
        this.booleanPluming = false;
        this.booleanElectrician = false;
        this.booleanPoolSleaning = false;
        this.booleanLuckSmith = false;
        this.foto = '';
        this.dataService = this.navParams.get('datos');
        // console.log(this.dataService);
        this.subCategory = this.dataService['Clasificacion']['categoria'];
        //this.getForm(this.subCategory);
        this.userActual = localStorage.getItem('verificacion');
        var d = new Date();
        var key = d.getTime();
        this.keyOffer = "offer_" + (key);
        this.getForm();
    }
    ServicesJanotorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesJanotorialPage');
    };
    ServicesJanotorialPage.prototype.goCleaningSale = function () {
        // console.log(this.subCategory);
        switch (this.subCategory) {
            case "Handyman": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "jobHand": this.jobHand, "mtsHand": this.mtsHand, "foto": this.foto, "moreInformation": this.moreInformation,
                    }];
                break;
            }
            case "Pluming": {
                // this.dataInformacion=[{"maxOffer":this.maxOffer,"roomPluming":this.roomPluming,"mtsPluming":this.mtsPluming,"foto":this.foto,"moreInformation":this.moreInformation,
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "foto": this.foto, "moreInformation": this.moreInformation,
                    }];
                break;
            }
            case "Electrician": {
                // this.dataInformacion=[{"maxOffer":this.maxOffer,"roomElec":this.roomElec,"mtsElect":this.mtsElect,"foto":this.foto,"moreInformation":this.moreInformation,
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "foto": this.foto, "moreInformation": this.moreInformation,
                    }];
                break;
            }
            case "Pool Cleaner": {
                // this.dataInformacion=[{"maxOffer":this.maxOffer,"typePool":this.typePool,"mtsPool":this.mtsPool,"foto":this.foto,"moreInformation":this.moreInformation,
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "foto": this.foto, "moreInformation": this.moreInformation,
                    }];
                break;
            }
            case "Luck smith": {
                this.dataInformacion = [{ "maxOffer": this.maxOffer, "lockLuck": this.lockLuck, "foto": this.foto, "moreInformation": this.moreInformation,
                    }];
                break;
            }
        }
        // console.log(this.dataInformacion);
        this.guardarServicio(this.dataInformacion);
    };
    ServicesJanotorialPage.prototype.guardarServicio = function (datos) {
        // console.log(datos);
        // console.log(this.dataService);
        this.dataService['Clasificacion']['informacion'] = datos['0'];
        // var d = new Date();
        // let key = d.getTime();
        // var keyOffer = "offer_"+(key);
        // console.log(this.dataService);
        // let subCategory=this.dataService['Clasificacion']['categoria'];
        //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
        //this.saleService.newSale();
        this.offerService.newOffer(this.dataService, this.keyOffer);
        // console.log(localStorage);
        var maxOffer = datos['0']['maxOffer'];
        this.saleService.newSale(this.userActual, this.keyOffer, maxOffer);
        // console.log(userLocal);
        // console.log(keyOffer);
        // console.log(maxOffer);
        var DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */], DataService);
    };
    ServicesJanotorialPage.prototype.getForm = function () {
        switch (this.subCategory) {
            case "Handyman": {
                this.booleanHandyman = true;
                this.Jobs = [
                    { "value": "Mowing", "label": "Mowing" },
                    { "value": "CleanGutters", "label": "Clean gutters" }
                ];
                // console.log(this.Jobs);
                this.ServiceJanotorial = this.formBuilder.group({
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    foto: [''],
                    jobHand: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    mtsHand: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    // roomPluming: [''],
                    // mtsPluming: [''],
                    // roomElec: [''],
                    // mtsElect: [''],
                    // typePool: [''],
                    // mtsPool: [''],
                    lockLuck: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Pluming": {
                this.booleanPluming = true;
                this.ServiceJanotorial = this.formBuilder.group({
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    foto: [''],
                    jobHand: [''],
                    mtsHand: [''],
                    // roomPluming: ['', Validators.required],
                    // mtsPluming: ['', Validators.required],
                    // roomElec: [''],
                    // mtsElect: [''],
                    // typePool: [''],
                    // mtsPool: [''],
                    lockLuck: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Electrician": {
                this.booleanElectrician = true;
                this.ServiceJanotorial = this.formBuilder.group({
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    foto: [''],
                    jobHand: [''],
                    mtsHand: [''],
                    // roomPluming: [''],
                    // mtsPluming: [''],
                    // roomElec: ['', Validators.required],
                    // mtsElect: ['', Validators.required],
                    // typePool: [''],
                    // mtsPool: [''],
                    lockLuck: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Pool Cleaner": {
                this.booleanPoolSleaning = true;
                this.ServiceJanotorial = this.formBuilder.group({
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    foto: [''],
                    // jobHand: [''],
                    // mtsHand: [''],
                    // roomPluming: [''],
                    // mtsPluming: [''],
                    // roomElec: [''],
                    // mtsElect: [''],
                    // typePool: ['', Validators.required],
                    // mtsPool: ['', Validators.required],
                    lockLuck: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Luck smith": {
                this.booleanLuckSmith = true;
                this.ServiceJanotorial = this.formBuilder.group({
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    foto: [''],
                    jobHand: [''],
                    mtsHand: [''],
                    // roomPluming: [''],
                    // mtsPluming: [''],
                    // roomElec: [''],
                    // mtsElect: [''],
                    // typePool: [''],
                    // mtsPool: [''],
                    lockLuck: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
        }
    };
    ServicesJanotorialPage.prototype.camaraFoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var file, options, result, image, picture, UploadTask_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = this.userActual + '/' + this.keyOffer + '/foto';
                        console.log('clickCamara');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 60,
                            targetHeight: 300,
                            targetWidth: 300,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = 'data:image/jpeg;base64,' + result;
                        picture = Object(__WEBPACK_IMPORTED_MODULE_7_firebase__["storage"])().ref(file);
                        UploadTask_1 = picture.putString(image, 'data_url');
                        UploadTask_1.on(__WEBPACK_IMPORTED_MODULE_8_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                            var url = UploadTask_1.snapshot.downloadURL;
                            console.log(url);
                            _this.foto = url;
                        }, function (error) { console.log(error); });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ServicesJanotorialPage;
}());
ServicesJanotorialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-services-janotorial',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\services-janotorial\services-janotorial.html"*/'<!--\n\n  Generated template for the ServicesJanotorialPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    \n\n      <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>JoBid</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n    \n\n    \n\n    <ion-content>\n\n      <div class="imgCenter">\n\n       <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n        </div>\n\n      <div class="TituloRojo"><h4>{{subCategory}}</h4></div>\n\n      <h4>Service information</h4>\n\n      <p padding>Describes what the professional requires</p>\n\n    <form id="formPayinfo" class="list" [formGroup]="ServiceJanotorial">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n              <ion-input type="number" placeholder="Maximum offer value" [(ngModel)]="maxOffer" formControlName="maxOffer" name="maxOffer"></ion-input>\n\n              <ion-icon name="logo-usd" item-start></ion-icon>\n\n              <input type="hidden" placeholder="Photography" [(ngModel)]="foto" formControlName="foto" name="foto" />\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-2 id="btn-camera">\n\n            <button ion-button color="danger" outline (click)="camaraFoto()"><ion-icon name="camera"></ion-icon></button>\n\n        </ion-col>\n\n      </ion-row>\n\n        <ion-row *ngIf="booleanHandyman">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="build" item-start></ion-icon>\n\n                <ion-select [(ngModel)]="jobHand"  formControlName="jobHand" name="jobHand" placeholder="Type of job" class="mitad">\n\n                    <ion-option *ngFor="let job of Jobs" value="{{job.value}}">{{job.label}}</ion-option>\n\n                </ion-select>\n\n                <ion-input type="number" placeholder="Mts" class="mitad" [(ngModel)]="mtsHand"  formControlName="mtsHand" name="mtsHand"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <!-- <ion-row *ngIf="booleanPluming">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="build" item-start></ion-icon>\n\n                <ion-input type="number" placeholder="# Rooms" class="mitad"[(ngModel)]="roomPluming"  formControlName="roomPluming" name="roomPluming"></ion-input>\n\n                <ion-input type="number" placeholder="Mts" class="mitad" [(ngModel)]="mtsPluming"  formControlName="mtsPluming" name="mtsPluming"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row> -->\n\n        <!-- <ion-row *ngIf="booleanElectrician">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="build" item-start></ion-icon>\n\n                <ion-input type="number" placeholder="# Rooms" class="mitad"[(ngModel)]="roomElec" formControlName="roomElec"  name="roomElec"></ion-input>\n\n                <ion-input type="number" placeholder="Mts" class="mitad" [(ngModel)]="mtsElect" formControlName="mtsElect"  name="mtsElect"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row> -->\n\n        <!-- <ion-row *ngIf="booleanPoolSleaning">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="build" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Pool type" class="mitad"[(ngModel)]="typePool" formControlName="typePool"  name="typePool"></ion-input>\n\n                <ion-input type="number" placeholder="Mts" class="mitad" [(ngModel)]="mtsPool"  formControlName="mtsPool" name="mtsPool"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row> -->\n\n        <ion-row *ngIf="booleanLuckSmith">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="build" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Type of lock" [(ngModel)]="lockLuck"  formControlName="lockLuck" name="lockLuck"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="rowArea"> \n\n          <ion-col>\n\n            <ion-list><ion-item>\n\n              <ion-icon name="paper" item-start></ion-icon>\n\n              <ion-textarea type="text" placeholder="More information" [(ngModel)]="moreInformation"  formControlName="moreInformation" name="moreInformation"></ion-textarea>\n\n            </ion-item></ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col> \n\n            <div class="btnBottom">\n\n              <button ion-button color="danger" block icon-left (click)="goCleaningSale()" [disabled]="!ServiceJanotorial.valid">\n\n                Go to the bid\n\n                <ion-icon name="arrow-dropright"></ion-icon>\n\n              </button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n    </ion-content>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\services-janotorial\services-janotorial.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_6__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_5__services_sale_service__["a" /* SaleService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
], ServicesJanotorialPage);

//# sourceMappingURL=services-janotorial.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesTransportationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cleaning_sale_cleaning_sale__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_offer_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_sale_service__ = __webpack_require__(26);
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





//page

//service


/**
 * Generated class for the ServicesTransportationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServicesTransportationPage = (function () {
    function ServicesTransportationPage(navCtrl, navParams, formBuilder, offerService, saleService, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.offerService = offerService;
        this.saleService = saleService;
        this.camera = camera;
        this.dataService = [];
        //form show
        this.booleanDayVIPChofer = false;
        this.booleanTaxi = false;
        this.booleanCarPool = false;
        this.booleanMovingServices = false;
        this.booleanDelivery = false;
        //datos del formulario
        this.foto = '';
        this.dataService = this.navParams.get('datos');
        console.log(this.dataService);
        this.subCategory = this.dataService['Clasificacion']['categoria'];
        //this.getForm(this.subCategory);
        var d = new Date();
        var key = d.getTime();
        this.keyOffer = "offer_" + (key);
        this.userActual = localStorage.getItem('verificacion');
        this.getForm();
    }
    ServicesTransportationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesTransportationPage');
    };
    ServicesTransportationPage.prototype.goCleaningSale = function () {
        console.log(this.subCategory);
        switch (this.subCategory) {
            case "Day VIP chofer": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "carVip": this.carVip, "timeVip": this.timeVip, "moreInformation": this.moreInformation }];
                break;
            }
            case "Taxi": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "addressIniTaxi": this.addressIniTaxi, "addressFinTaxi": this.addressFinTaxi, "moreInformation": this.moreInformation }];
                break;
            }
            case "Car pool": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "carPool": this.carPool, "passePool": this.passePool, "distancePool": this.distancePool, "moreInformation": this.moreInformation }];
                break;
            }
            case "Moving services": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "deliveryAddressMovil": this.deliveryAddressMovil, "distanceMovil": this.distanceMovil, "boxMovil": this.boxMovil, "furniMovil": this.furniMovil, "moreInformation": this.moreInformation }];
                break;
            }
            case "Delivery": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "objDelivery": this.objDelivery, "addressDelivery": this.addressDelivery, "moreInformation": this.moreInformation }];
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
        // var d = new Date();
        // let key = d.getTime();
        // var keyOffer = "offer_"+(key);
        console.log(this.dataService);
        // let subCategory=this.dataService['Clasificacion']['categoria'];
        //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
        //this.saleService.newSale();
        this.offerService.newOffer(this.dataService, this.keyOffer);
        // console.log(localStorage);
        var maxOffer = datos['0']['maxOffer'];
        //  let userLocal = localStorage.getItem('verificacion');
        this.saleService.newSale(this.userActual, this.keyOffer, maxOffer);
        // console.log(userLocal);
        // console.log(keyOffer);
        // console.log(maxOffer);
        var DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */], DataService);
    };
    ServicesTransportationPage.prototype.getForm = function () {
        switch (this.subCategory) {
            case "Day VIP chofer": {
                this.booleanDayVIPChofer = true;
                this.ServiceTransportation = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    carVip: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    timeVip: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    addressIniTaxi: [''],
                    addressFinTaxi: [''],
                    carPool: [''],
                    passePool: [''],
                    distancePool: [''],
                    deliveryAddressMovil: [''],
                    distanceMovil: [''],
                    boxMovil: [''],
                    furniMovil: [''],
                    objDelivery: [''],
                    addressDelivery: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Taxi": {
                this.booleanTaxi = true;
                this.ServiceTransportation = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    carVip: [''],
                    timeVip: [''],
                    addressIniTaxi: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    addressFinTaxi: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    carPool: [''],
                    passePool: [''],
                    distancePool: [''],
                    deliveryAddressMovil: [''],
                    distanceMovil: [''],
                    boxMovil: [''],
                    furniMovil: [''],
                    objDelivery: [''],
                    addressDelivery: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Car pool": {
                this.booleanCarPool = true;
                this.ServiceTransportation = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    carVip: [''],
                    timeVip: [''],
                    addressIniTaxi: [''],
                    addressFinTaxi: [''],
                    carPool: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    passePool: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    distancePool: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    deliveryAddressMovil: [''],
                    distanceMovil: [''],
                    boxMovil: [''],
                    furniMovil: [''],
                    objDelivery: [''],
                    addressDelivery: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Moving services": {
                this.booleanMovingServices = true;
                this.ServiceTransportation = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    carVip: [''],
                    timeVip: [''],
                    addressIniTaxi: [''],
                    addressFinTaxi: [''],
                    carPool: [''],
                    passePool: [''],
                    distancePool: [''],
                    deliveryAddressMovil: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    distanceMovil: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    boxMovil: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    furniMovil: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    objDelivery: [''],
                    addressDelivery: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Delivery": {
                this.booleanDelivery = true;
                this.ServiceTransportation = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    carVip: [''],
                    timeVip: [''],
                    addressIniTaxi: [''],
                    addressFinTaxi: [''],
                    carPool: [''],
                    passePool: [''],
                    distancePool: [''],
                    deliveryAddressMovil: [''],
                    distanceMovil: [''],
                    boxMovil: [''],
                    furniMovil: [''],
                    objDelivery: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    addressDelivery: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
        }
    };
    ServicesTransportationPage.prototype.camaraFoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var file, options, result, image, picture, UploadTask_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = this.userActual + '/' + this.keyOffer + '/foto';
                        console.log('clickCamara');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 60,
                            targetHeight: 300,
                            targetWidth: 300,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = 'data:image/jpeg;base64,' + result;
                        picture = Object(__WEBPACK_IMPORTED_MODULE_4_firebase__["storage"])().ref(file);
                        UploadTask_1 = picture.putString(image, 'data_url');
                        UploadTask_1.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
                            var url = UploadTask_1.snapshot.downloadURL;
                            console.log(url);
                            _this.foto = url;
                        }, function (error) { console.log(error); });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ServicesTransportationPage;
}());
ServicesTransportationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-services-transportation',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\services-transportation\services-transportation.html"*/'<!--\n\n  Generated template for the ServicesTransportationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    \n\n      <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>JoBid</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n    \n\n    \n\n    <ion-content>\n\n      <div class="imgCenter">\n\n       <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n        </div>\n\n      <div class="TituloRojo"><h4>{{subCategory}}</h4></div>\n\n      <h4>Service information</h4>\n\n      <p padding>Describes what the professional requires</p>\n\n    <form id="formPayinfo" class="list" [formGroup]="ServiceTransportation">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n              <ion-input type="number" placeholder="Maximum offer value" [(ngModel)]="maxOffer" formControlName="maxOffer" name="maxOffer"></ion-input>\n\n              <ion-icon name="logo-usd" item-start></ion-icon>\n\n              <input type="hidden" placeholder="Photography" [(ngModel)]="foto" formControlName="foto" name="foto" />\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-2 id="btn-camera">\n\n            <button ion-button color="danger" outline (click)="camaraFoto()"><ion-icon name="camera"></ion-icon></button>\n\n        </ion-col>\n\n      </ion-row>\n\n        <ion-row *ngIf="booleanDayVIPChofer">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item class="mitad mitadEspacio">\n\n                <ion-icon name="car" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Car type" [(ngModel)]="carVip" formControlName="carVip" name="carVip"></ion-input>\n\n              </ion-item>\n\n              <ion-item class="mitad">\n\n                <ion-input type="number" placeholder="Hours"  [(ngModel)]="timeVip" formControlName="timeVip" name="timeVip"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <!-- <ion-row *ngIf="booleanTaxi">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="car" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Distance" class="mitad"[(ngModel)]="distanceTaxi" formControlName="distanceTaxi" name="distanceTaxi"></ion-input>\n\n                <ion-input type="text" placeholder="Address" class="mitad" [(ngModel)]="addressTaxi" formControlName="addressTaxi" name="addressTaxi"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row> -->\n\n        <ion-row *ngIf="booleanTaxi">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="pin" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Start address" [(ngModel)]="addressIniTaxi" formControlName="addressIniTaxi" name="addressIniTaxi"></ion-input>\n\n              </ion-item>\n\n              </ion-list>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row *ngIf="booleanTaxi">\n\n            <ion-col>\n\n              <ion-list>\n\n                <ion-item>\n\n                  <ion-icon name="pin" item-start></ion-icon>\n\n                  <ion-input type="text" placeholder="Destination address"  [(ngModel)]="addressFinTaxi" formControlName="addressFinTaxi" name="addressFinTaxi"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanCarPool">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="car" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Car type" [(ngModel)]="carPool" formControlName="carPool" name="carPool"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanCarPool">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item class="mitad mitadEspacio">\n\n                <ion-icon name="car" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="# Passengers" [(ngModel)]="passePool" formControlName="passePool" name="passePool"></ion-input>\n\n              </ion-item>\n\n              <ion-item class="mitad">\n\n                <ion-input type="text" placeholder="Distance"  [(ngModel)]="distancePool" formControlName="distancePool" name="distancePool"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanMovingServices">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="pin" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Delivery address" [(ngModel)]="deliveryAddressMovil" formControlName="deliveryAddressMovil" name="deliveryAddressMovil"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanMovingServices">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="pin" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Distance" [(ngModel)]="distanceMovil" formControlName="distanceMovil" name="distanceMovil"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanMovingServices">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item class="mitad mitadEspacio">\n\n                <ion-icon name="cube" item-start></ion-icon>\n\n                <ion-input type="number" placeholder="# boxes" [(ngModel)]="boxMovil" formControlName="boxMovil" name="boxMovil"></ion-input>\n\n              </ion-item>\n\n              <ion-item class="mitad">\n\n                <ion-input type="number" placeholder="# furniture"  [(ngModel)]="furniMovil" formControlName="furniMovil" name="furniMovil"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="booleanDelivery">\n\n          <ion-col>\n\n            <ion-list>\n\n              <ion-item class="mitad mitadEspacio">\n\n                <ion-icon name="build" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Object that is sent" [(ngModel)]="objDelivery" formControlName="objDelivery" name="objDelivery"></ion-input>\n\n              </ion-item>\n\n              <ion-item class="mitad">\n\n                <ion-input type="text" placeholder="Shipping Address"  [(ngModel)]="addressDelivery" formControlName="addressDelivery" name="addressDelivery"></ion-input>\n\n            </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="rowArea"> \n\n          <ion-col>\n\n            <ion-list><ion-item>\n\n              <ion-icon name="paper" item-start></ion-icon>\n\n              <ion-textarea type="text" placeholder="More information" [(ngModel)]="moreInformation" formControlName="moreInformation" name="moreInformation"></ion-textarea>\n\n            </ion-item></ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col> \n\n            <div class="btnBottom">\n\n              <button ion-button color="danger" block icon-left (click)="goCleaningSale()" [disabled]="!ServiceTransportation.valid">\n\n                Go to the bid<ion-icon name="arrow-dropright"></ion-icon>\n\n              </button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n    </ion-content>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\services-transportation\services-transportation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_6__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_7__services_sale_service__["a" /* SaleService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
], ServicesTransportationPage);

//# sourceMappingURL=services-transportation.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesFoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cleaning_sale_cleaning_sale__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_offer_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_sale_service__ = __webpack_require__(26);
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





//pages

//services


/**
 * Generated class for the ServicesFoodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServicesFoodPage = (function () {
    function ServicesFoodPage(navCtrl, navParams, formBuilder, offerService, saleService, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.offerService = offerService;
        this.saleService = saleService;
        this.camera = camera;
        this.dataService = [];
        //form show
        this.booleanBartenders = false;
        this.booleanWaitress = false;
        this.booleanChef = false;
        this.booleanRunners = false;
        this.booleanValetParking = false;
        this.booleanHostess = false;
        //datos del formulario
        this.foto = '';
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
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "typeBart": this.typeBart, "eventBart": this.eventBart, "tiemBart": this.tiemBart, "moreInformation": this.moreInformation }];
                break;
            }
            case "Waitress": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "eventWaiter": this.eventWaiter, "timeWaiter": this.timeWaiter, "moreInformation": this.moreInformation }];
                break;
            }
            case "Chef": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "eventChef": this.eventChef, "menuChef": this.menuChef, "dinersChef": this.dinersChef, "moreInformation": this.moreInformation }];
                break;
            }
            case "Runners": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "eventRunners": this.eventRunners, "tiemRunners": this.tiemRunners, "moreInformation": this.moreInformation }];
                break;
            }
            case "Valet parking": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "eventParking": this.eventParking, "placeParking": this.placeParking, "moreInformation": this.moreInformation }];
                break;
            }
            case "Hostess": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "eventHostess": this.eventHostess, "placeHostess": this.placeHostess, "timeHostess": this.timeHostess, "moreInformation": this.moreInformation }];
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
        this.keyOffer = "offer_" + (key);
        console.log(this.dataService);
        //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
        //this.saleService.newSale();
        console.log(JSON.stringify(this.dataService));
        console.log('IniNewOffer');
        this.offerService.newOffer(this.dataService, this.keyOffer);
        // console.log('finNewOffer');
        // console.log(localStorage);
        // console.log(JSON.stringify(localStorage));
        // console.log(keyOffer);
        var maxOffer = datos['0']['maxOffer'];
        console.log(maxOffer);
        this.userActual = localStorage.getItem('verificacion');
        // console.log(JSON.stringify(userLocal));
        // console.log(userLocal);
        // console.log('IniNewSale');
        this.saleService.newSale(this.userActual, this.keyOffer, maxOffer);
        // console.log('FinNewSale');
        // console.log(userLocal);
        // console.log(keyOffer);
        // console.log(maxOffer);
        // console.log(JSON.stringify(userLocal));
        // console.log(JSON.stringify(this.dataService));
        // console.log('preGData');
        var DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */], DataService);
    };
    ServicesFoodPage.prototype.getForm = function () {
        switch (this.subCategory) {
            case "Bartenders": {
                this.booleanBartenders = true;
                this.ServiceFood = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    typeBart: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    eventBart: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    tiemBart: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    eventWaiter: [''],
                    timeWaiter: [''],
                    eventChef: [''],
                    menuChef: [''],
                    dinersChef: [''],
                    eventRunners: [''],
                    tiemRunners: [''],
                    eventParking: [''],
                    placeParking: [''],
                    timeParking: [''],
                    eventHostess: [''],
                    placeHostess: [''],
                    timeHostess: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Waitress": {
                this.booleanWaitress = true;
                this.ServiceFood = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    typeBart: [''],
                    eventBart: [''],
                    tiemBart: [''],
                    eventWaiter: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    timeWaiter: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    eventChef: [''],
                    menuChef: [''],
                    dinersChef: [''],
                    eventRunners: [''],
                    tiemRunners: [''],
                    eventParking: [''],
                    placeParking: [''],
                    timeParking: [''],
                    eventHostess: [''],
                    placeHostess: [''],
                    timeHostess: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Chef": {
                this.booleanChef = true;
                this.ServiceFood = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    typeBart: [''],
                    eventBart: [''],
                    tiemBart: [''],
                    eventWaiter: [''],
                    timeWaiter: [''],
                    eventChef: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    menuChef: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    dinersChef: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    eventRunners: [''],
                    tiemRunners: [''],
                    eventParking: [''],
                    placeParking: [''],
                    timeParking: [''],
                    eventHostess: [''],
                    placeHostess: [''],
                    timeHostess: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Runners": {
                this.booleanRunners = true;
                this.ServiceFood = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    typeBart: [''],
                    eventBart: [''],
                    tiemBart: [''],
                    eventWaiter: [''],
                    timeWaiter: [''],
                    eventChef: [''],
                    menuChef: [''],
                    dinersChef: [''],
                    eventRunners: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    tiemRunners: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    eventParking: [''],
                    placeParking: [''],
                    timeParking: [''],
                    eventHostess: [''],
                    placeHostess: [''],
                    timeHostess: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Valet parking": {
                this.booleanValetParking = true;
                this.ServiceFood = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    typeBart: [''],
                    eventBart: [''],
                    tiemBart: [''],
                    eventWaiter: [''],
                    timeWaiter: [''],
                    eventChef: [''],
                    menuChef: [''],
                    dinersChef: [''],
                    eventRunners: [''],
                    tiemRunners: [''],
                    eventParking: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    placeParking: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    timeParking: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    eventHostess: [''],
                    placeHostess: [''],
                    timeHostess: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Hostess": {
                this.booleanHostess = true;
                this.ServiceFood = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    typeBart: [''],
                    eventBart: [''],
                    tiemBart: [''],
                    eventWaiter: [''],
                    timeWaiter: [''],
                    eventChef: [''],
                    menuChef: [''],
                    dinersChef: [''],
                    eventRunners: [''],
                    tiemRunners: [''],
                    eventParking: [''],
                    placeParking: [''],
                    timeParking: [''],
                    eventHostess: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    placeHostess: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    timeHostess: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
        }
    };
    ServicesFoodPage.prototype.camaraFoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var file, options, result, image, picture, UploadTask_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = this.userActual + '/' + this.keyOffer + '/foto';
                        console.log('clickCamara');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 60,
                            targetHeight: 300,
                            targetWidth: 300,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = 'data:image/jpeg;base64,' + result;
                        picture = Object(__WEBPACK_IMPORTED_MODULE_4_firebase__["storage"])().ref(file);
                        UploadTask_1 = picture.putString(image, 'data_url');
                        UploadTask_1.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
                            var url = UploadTask_1.snapshot.downloadURL;
                            console.log(url);
                            _this.foto = url;
                        }, function (error) { console.log(error); });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ServicesFoodPage;
}());
ServicesFoodPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-services-food',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\services-food\services-food.html"*/'<!--\n\n  Generated template for the ServicesFoodPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>JoBid</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n    <div class="imgCenter">\n\n     <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n      </div>\n\n    <div class="TituloRojo"><h4>{{subCategory}}</h4></div>\n\n    <h4>Service information</h4>\n\n    <p padding>Describes what the professional requires</p>\n\n  <form id="formPayinfo" class="list" [formGroup]="ServiceFood">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-10>\n\n          <ion-list>\n\n            <ion-item>\n\n            <ion-input type="number" placeholder="Maximum offer value" [(ngModel)]="maxOffer" formControlName="maxOffer" name="maxOffer"></ion-input>\n\n            <ion-icon name="logo-usd" item-start></ion-icon>\n\n            <input type="hidden" placeholder="Photography" [(ngModel)]="foto" formControlName="foto" name="foto" />\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-2 id="btn-camera">\n\n          <button ion-button color="danger" outline (click)="camaraFoto()"><ion-icon name="camera"></ion-icon></button>\n\n      </ion-col>\n\n    </ion-row>\n\n      <ion-row *ngIf="booleanBartenders">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="beaker" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Type of drinks" [(ngModel)]="typeBart" formControlName="typeBart" name="typeBart"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanBartenders">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item class="mitad mitadEspacio">\n\n              <ion-icon name="beaker" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Event" [(ngModel)]="eventBart" formControlName="eventBart" name="eventBart"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="mitad">\n\n              <ion-input type="number" placeholder="Time"  [(ngModel)]="tiemBart" formControlName="tiemBart" name="tiemBart"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanWaitress">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item class="mitad mitadEspacio">\n\n              <ion-icon name="beaker" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Event" [(ngModel)]="eventWaiter" formControlName="eventWaiter" name="eventWaiter"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="mitad">\n\n              <ion-input type="number" placeholder="Time"  [(ngModel)]="timeWaiter" formControlName="timeWaiter" name="timeWaiter"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanChef">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="pin" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Type of Event" [(ngModel)]="eventChef" formControlName="eventChef" name="eventChef"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanChef">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item class="mitad mitadEspacio">\n\n              <ion-icon name="beaker" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Menu" [(ngModel)]="menuChef" formControlName="menuChef" name="menuChef"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="mitad">\n\n              <ion-input type="number" placeholder="Diners"  [(ngModel)]="dinersChef" formControlName="dinersChef" name="dinersChef"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanRunners">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item class="mitad mitadEspacio">\n\n              <ion-icon name="beaker" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Event" [(ngModel)]="eventRunners" formControlName="eventRunners" name="eventRunners"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="mitad">\n\n              <ion-input type="number" placeholder="Time"  [(ngModel)]="tiemRunners" formControlName="tiemRunners" name="tiemRunners"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanValetParking">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="pin" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Type of Event" [(ngModel)]="eventParking" formControlName="eventParking" name="eventParking"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanValetParking">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item class="mitad mitadEspacio">\n\n              <ion-icon name="beaker" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Place" [(ngModel)]="placeParking" formControlName="placeParking" name="placeParking"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="mitad">\n\n              <ion-input type="number" placeholder="Time"  [(ngModel)]="timeParking" formControlName="timeParking" name="timeParking"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanHostess">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="pin" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Type of Event" [(ngModel)]="eventHostess" formControlName="eventHostess" name="eventHostess"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanHostess">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item class="mitad mitadEspacio">\n\n              <ion-icon name="beaker" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Place" [(ngModel)]="placeHostess" formControlName="placeHostess" name="placeHostess"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="mitad">\n\n              <ion-input type="number" placeholder="Time"  [(ngModel)]="timeHostess" formControlName="timeHostess" name="timeHostess"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="rowArea"> \n\n        <ion-col>\n\n          <ion-list><ion-item>\n\n            <ion-icon name="paper" item-start></ion-icon>\n\n            <ion-textarea type="text" placeholder="More information" [(ngModel)]="moreInformation" formControlName="moreInformation" name="moreInformation"></ion-textarea>\n\n          </ion-item></ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col> \n\n          <div class="btnBottom">\n\n            <button ion-button color="danger" block icon-left (click)="goCleaningSale()" [disabled]="!ServiceFood.valid">\n\n              Go to the bid<ion-icon name="arrow-dropright"></ion-icon>\n\n            </button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n  </ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\services-food\services-food.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_6__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_7__services_sale_service__["a" /* SaleService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
], ServicesFoodPage);

//# sourceMappingURL=services-food.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesLegalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_offer_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cleaning_sale_cleaning_sale__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_sale_service__ = __webpack_require__(26);
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





//page

//service


/**
 * Generated class for the ServicesLegalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServicesLegalPage = (function () {
    function ServicesLegalPage(navCtrl, navParams, formBuilder, offerService, saleService, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.offerService = offerService;
        this.saleService = saleService;
        this.camera = camera;
        this.dataService = [];
        //form show
        this.booleanNotary = false;
        //datos del formulario
        this.foto = '';
        this.dataService = this.navParams.get('datos');
        console.log(this.dataService);
        this.subCategory = this.dataService['Clasificacion']['categoria'];
        //this.getForm(this.subCategory);
        var d = new Date();
        var key = d.getTime();
        this.keyOffer = "offer_" + (key);
        this.userActual = localStorage.getItem('verificacion');
        this.getForm();
    }
    ServicesLegalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesLegalPage');
    };
    ServicesLegalPage.prototype.goCleaningSale = function () {
        console.log(this.subCategory);
        switch (this.subCategory) {
            case "Notary": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "documentNotary": this.documentNotary, "eventNotary": this.eventNotary, "moreInformation": this.moreInformation }];
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
        console.log(this.dataService);
        // let subCategory=this.dataService['Clasificacion']['categoria'];
        //this.careProfessionS.newOffer(this.dataService,subCategory,keyOffer);
        //this.saleService.newSale();
        this.offerService.newOffer(this.dataService, this.keyOffer);
        // console.log(localStorage);
        var maxOffer = datos['0']['maxOffer'];
        this.saleService.newSale(this.userActual, this.keyOffer, maxOffer);
        // console.log(userLocal);
        // console.log(keyOffer);
        // console.log(maxOffer);
        var DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */], DataService);
    };
    ServicesLegalPage.prototype.getForm = function () {
        switch (this.subCategory) {
            case "Notary": {
                this.booleanNotary = true;
                this.ServiceLegal = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    documentNotary: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    eventNotary: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
        }
    };
    ServicesLegalPage.prototype.camaraFoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var file, options, result, image, picture, UploadTask_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = this.userActual + '/' + this.keyOffer + '/foto';
                        console.log('clickCamara');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 60,
                            targetHeight: 300,
                            targetWidth: 300,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = 'data:image/jpeg;base64,' + result;
                        picture = Object(__WEBPACK_IMPORTED_MODULE_4_firebase__["storage"])().ref(file);
                        UploadTask_1 = picture.putString(image, 'data_url');
                        UploadTask_1.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
                            var url = UploadTask_1.snapshot.downloadURL;
                            console.log(url);
                            _this.foto = url;
                        }, function (error) { console.log(error); });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ServicesLegalPage;
}());
ServicesLegalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-services-legal',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\services-legal\services-legal.html"*/'<!--\n\n  Generated template for the ServicesLegalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>JoBid</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n    <div class="imgCenter">\n\n     <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n      </div>\n\n    <div class="TituloRojo"><h4>{{subCategory}}</h4></div>\n\n    <h4>Service information</h4>\n\n    <p padding>Describes what the professional requires</p>\n\n  <form id="formPayinfo" class="list" [formGroup]="ServiceLegal">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-10>\n\n          <ion-list>\n\n            <ion-item>\n\n            <ion-input type="number" placeholder="Maximum offer value" [(ngModel)]="maxOffer" formControlName="maxOffer" name="maxOffer"></ion-input>\n\n            <ion-icon name="logo-usd" item-start></ion-icon>\n\n            <input type="hidden" placeholder="Photography" [(ngModel)]="foto" formControlName="foto" name="foto" />\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-2 id="btn-camera">\n\n          <button ion-button color="danger" outline (click)="camaraFoto()"><ion-icon name="camera"></ion-icon></button>\n\n      </ion-col>\n\n    </ion-row>\n\n      <ion-row *ngIf="booleanNotary">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item class="mitad mitadEspacio">\n\n              <ion-icon name="people" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Type of document" [(ngModel)]="documentNotary" formControlName="documentNotary" name="documentNotary"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="mitad">\n\n              <ion-input type="text" placeholder="Event"  [(ngModel)]="eventNotary" formControlName="eventNotary" name="eventNotary"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="rowArea"> \n\n        <ion-col>\n\n          <ion-list><ion-item>\n\n            <ion-icon name="paper" item-start></ion-icon>\n\n            <ion-textarea type="text" placeholder="More information" [(ngModel)]="moreInformation" formControlName="moreInformation" name="moreInformation"></ion-textarea>\n\n          </ion-item></ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col> \n\n          <div class="btnBottom">\n\n            <button ion-button color="danger" block icon-left (click)="goCleaningSale()" [disabled]="!ServiceLegal.valid">\n\n              Go to the bid<ion-icon name="arrow-dropright"></ion-icon>\n\n            </button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n  </ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\services-legal\services-legal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_7__services_sale_service__["a" /* SaleService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
], ServicesLegalPage);

//# sourceMappingURL=services-legal.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesBeautyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_offer_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_sale_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cleaning_sale_cleaning_sale__ = __webpack_require__(39);
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





//--page


//--service

/**
 * Generated class for the ServicesBeautyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServicesBeautyPage = (function () {
    function ServicesBeautyPage(navCtrl, navParams, formBuilder, offerService, saleService, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.offerService = offerService;
        this.saleService = saleService;
        this.camera = camera;
        this.dataService = [];
        //form show
        this.booleanPersonaTrainer = false;
        this.booleanHairCut = false;
        this.booleanMenicure = false;
        this.booleanMekeup = false;
        this.booleanMassage = false;
        //datos del formulario
        this.foto = '';
        this.dataService = this.navParams.get('datos');
        console.log(this.dataService);
        this.subCategory = this.dataService['Clasificacion']['categoria'];
        //this.getForm(this.subCategory);
        var d = new Date();
        var key = d.getTime();
        this.keyOffer = "offer_" + (key);
        this.userActual = localStorage.getItem('verificacion');
        this.getForm();
    }
    ServicesBeautyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesBeautyPage');
    };
    ServicesBeautyPage.prototype.goCleaningSale = function () {
        console.log(this.subCategory);
        switch (this.subCategory) {
            case "Personal trainer": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "exerciseTrainer": this.exerciseTrainer, "timeTrainer": this.timeTrainer, "moreInformation": this.moreInformation }];
                break;
            }
            case "Hair cut and DIY": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "peinadosCut": this.peinadosCut, "timeCut": this.timeCut, "barbaCut": this.barbaCut, "moreInformation": this.moreInformation }];
                break;
            }
            case "Manicure and pedicure": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "tipoMenicure": this.tipoMenicure, "unaMenicure": this.unaMenicure, "estiloMenicure": this.estiloMenicure, "moreInformation": this.moreInformation }];
                break;
            }
            case "Makeup": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "estiloMeke": this.estiloMeke, "moreInformation": this.moreInformation }];
                break;
            }
            case "Massage": {
                this.dataInformacion = [{ "foto": this.foto, "maxOffer": this.maxOffer, "estiloMassage": this.estiloMassage, "timeMassage": this.timeMassage, "moreInformation": this.moreInformation }];
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
        console.log(this.dataService);
        // let subCategory=this.dataService['Clasificacion']['categoria'];
        //this.careProfessionS.newOffer(this.dataService,subCategory,this.keyOffer);
        //this.saleService.newSale();
        this.offerService.newOffer(this.dataService, this.keyOffer);
        // console.log(localStorage);
        var maxOffer = datos['0']['maxOffer'];
        this.saleService.newSale(this.userActual, this.keyOffer, maxOffer);
        // console.log(this.userActual);
        // console.log(this.keyOffer);
        // console.log(maxOffer);
        var DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer } };
        console.log(DataService);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */], DataService);
    };
    ServicesBeautyPage.prototype.getForm = function () {
        switch (this.subCategory) {
            case "Personal trainer": {
                this.booleanPersonaTrainer = true;
                this.beautyForm = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    exerciseTrainer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    timeTrainer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    peinadosCut: [''],
                    timeCut: [''],
                    barbaCut: [''],
                    tipoMenicure: [''],
                    unaMenicure: [''],
                    estiloMenicure: [''],
                    estiloMeke: [''],
                    timeMassage: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
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
                this.beautyForm = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    exerciseTrainer: [''],
                    timeTrainer: [''],
                    peinadosCut: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    timeCut: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    barbaCut: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    tipoMenicure: [''],
                    unaMenicure: [''],
                    estiloMenicure: [''],
                    estiloMeke: [''],
                    timeMassage: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
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
                this.beautyForm = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    exerciseTrainer: [''],
                    timeTrainer: [''],
                    peinadosCut: [''],
                    timeCut: [''],
                    barbaCut: [''],
                    tipoMenicure: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    unaMenicure: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    estiloMenicure: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    estiloMeke: [''],
                    timeMassage: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
            case "Makeup": {
                // this.styleMekeup=[
                //   {"value":"Basic","label":"Basic"},
                //   {"value":"Masks","label":"Masks"}
                // ]; 
                this.booleanMekeup = true;
                this.beautyForm = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    exerciseTrainer: [''],
                    timeTrainer: [''],
                    peinadosCut: [''],
                    timeCut: [''],
                    barbaCut: [''],
                    tipoMenicure: [''],
                    unaMenicure: [''],
                    estiloMenicure: [''],
                    estiloMeke: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    timeMassage: [''],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
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
                this.beautyForm = this.formBuilder.group({
                    foto: [''],
                    maxOffer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    exerciseTrainer: [''],
                    timeTrainer: [''],
                    peinadosCut: [''],
                    timeCut: [''],
                    barbaCut: [''],
                    tipoMenicure: [''],
                    unaMenicure: [''],
                    estiloMenicure: [''],
                    estiloMeke: [''],
                    estiloMassage: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    timeMassage: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                    moreInformation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                });
                break;
            }
        }
    };
    ServicesBeautyPage.prototype.camaraFoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var file, options, result, image, picture, UploadTask_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = this.userActual + '/' + this.keyOffer + '/foto';
                        console.log('clickCamara');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 60,
                            targetHeight: 300,
                            targetWidth: 300,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = 'data:image/jpeg;base64,' + result;
                        picture = Object(__WEBPACK_IMPORTED_MODULE_4_firebase__["storage"])().ref(file);
                        UploadTask_1 = picture.putString(image, 'data_url');
                        UploadTask_1.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
                            var url = UploadTask_1.snapshot.downloadURL;
                            console.log(url);
                            _this.foto = url;
                        }, function (error) { console.log(error); });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ServicesBeautyPage;
}());
ServicesBeautyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-services-beauty',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\services-beauty\services-beauty.html"*/'<!--\n\n  Generated template for the ServicesBeautyPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>JoBid</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <div class="imgCenter">\n\n     <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n      </div>\n\n    <div class="TituloRojo"><h4>{{subCategory}}</h4></div>\n\n    <h4>Service information</h4>\n\n    <p padding>Describes what the professional requires</p>\n\n  <form id="formPayinfo" class="list" [formGroup]="beautyForm">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-10>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-input type="number" placeholder="Maximum offer value" [(ngModel)]="maxOffer" formControlName="maxOffer" name="maxOffer"></ion-input>\n\n              <ion-icon name="logo-usd" item-start></ion-icon>\n\n              <input type="hidden" placeholder="Photography" [(ngModel)]="foto" formControlName="foto" name="foto" />\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-2 id="btn-camera">\n\n            <button ion-button color="danger" outline (click)="camaraFoto()"><ion-icon name="camera"></ion-icon></button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanPersonaTrainer">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item class="mitad mitadEspacio">\n\n              <ion-icon name="person" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Exercise" [(ngModel)]="exerciseTrainer" formControlName="exerciseTrainer" name="exerciseTrainer"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="mitad">\n\n              <ion-input type="number" placeholder="Time"  [(ngModel)]="timeTrainer" formControlName="timeTrainer" name="timeTrainer"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanHairCut">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="cut" item-start></ion-icon>\n\n              <ion-select class="mitad" [(ngModel)]="peinadosCut" formControlName="peinadosCut" name="peinadosCut" placeholder="Services" > \n\n                <ion-option *ngFor="let peinados of peinados" value="{{peinados.value}}">{{peinados.label}}</ion-option>\n\n              </ion-select>\n\n              <ion-input type="number" placeholder="Minutes" class="mitad" [(ngModel)]="timeCut" formControlName="timeCut" name="timeCut"></ion-input>\n\n          </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanHairCut">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="cut" item-start></ion-icon>\n\n              <ion-select [(ngModel)]="barbaCut" formControlName="barbaCut" name="barbaCut" placeholder="Barbershop" > \n\n                <ion-option *ngFor="let barba of barbas" value="{{barba.value}}">{{barba.label}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanMenicure">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="person" item-start></ion-icon>\n\n              <ion-select [(ngModel)]="tipoMenicure" formControlName="tipoMenicure" name="tipoMenicure" placeholder="Service" > \n\n                <ion-option *ngFor="let type of typeMenicure" value="{{type.value}}">{{type.label}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n      <ion-row *ngIf="booleanMenicure">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="person" item-start></ion-icon>\n\n              <ion-select [(ngModel)]="unaMenicure" class="mitad" formControlName="unaMenicure"  name="unaMenicure" placeholder="Status"  > \n\n                <ion-option *ngFor="let nail of nailMenicure" value="{{nail.value}}">{{nail.label}}</ion-option>\n\n              </ion-select>\n\n              <ion-select [(ngModel)]="estiloMenicure" class="mitad" formControlName="estiloMenicure" name="estiloMenicure" placeholder="Style"  > \n\n                <ion-option *ngFor="let styleM of styleMenicure" value="{{styleM.value}}">{{styleM.label}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanMekeup">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="person" item-start></ion-icon>\n\n              <!-- <ion-select [(ngModel)]="estiloMeke" formControlName="estiloMeke" name="estiloMeke" placeholder="Service"> \n\n                <ion-option *ngFor="let styleMe of styleMekeup" value="{{styleMe.value}}">{{styleMe.label}}</ion-option>\n\n              </ion-select> -->\n\n              <ion-input type="text" placeholder="Service" [(ngModel)]="estiloMeke" formControlName="estiloMeke" name="estiloMeke"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="booleanMassage">\n\n        <ion-col>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-icon name="person" item-start></ion-icon>\n\n              <ion-select [(ngModel)]="estiloMassage" class="mitad" formControlName="estiloMassage" name="estiloMassage"  placeholder="Service"> \n\n                <ion-option *ngFor="let styleMa of styleMassage" value="{{styleMa.value}}">{{styleMa.label}}</ion-option>\n\n              </ion-select>\n\n              <ion-input type="number" placeholder="Time" class="mitad" [(ngModel)]="timeMassage" formControlName="timeMassage" name="timeMassage"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n      <ion-row class="rowArea"> \n\n        <ion-col>\n\n          <ion-list><ion-item>\n\n            <ion-icon name="paper" item-start></ion-icon>\n\n            <ion-textarea type="text" placeholder="More information" [(ngModel)]="moreInformation" formControlName="moreInformation" name="moreInformation"></ion-textarea>\n\n          </ion-item></ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col> \n\n          <div class="btnBottom">\n\n            <button ion-button color="danger" block icon-left (click)="goCleaningSale()" [disabled]="!beautyForm.valid">\n\n              Go to the bid<ion-icon name="arrow-dropright"></ion-icon>\n\n            </button>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n  </ion-content>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\services-beauty\services-beauty.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_6__services_sale_service__["a" /* SaleService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
], ServicesBeautyPage);

//# sourceMappingURL=services-beauty.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pre_home_pre_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__(31);
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






//page

//import { ShowPage } from '../show/show';
//import { HomePage } from '../home/home';
//service


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
        userService, afAuth, formBuilder, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.afAuth = afAuth;
        this.formBuilder = formBuilder;
        this.fb = fb;
        this.userData = { "username": "", "password": "" };
        this.userDataUpdate = [];
        this.userAndEmail = '';
        this.pass = "mi clave";
        this.todo = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log(this.userData['password']);
        var getUserLogin = this.userService.getUserLoginPwd(this.userData["password"]);
        // console.log(getUserLogin);
        // console.log(JSON.stringify( getUserLogin) );
        var userPromesa = getUserLogin.subscribe(function (value) {
            // console.log('success');
            console.log('userPromesa-S login');
            // console.log(value);
            for (var key in value) {
                // console.log(value[key]);
                if (value[key]) {
                    // console.log(value['0']['prof_username']);
                    // console.log(value['0']['prof_email']);
                    if ((_this.userData["username"] == value[key]['user_username']) || (_this.userData["username"] == value[key]['user_email'])) {
                        console.info('existeUserPwd');
                        _this.goNextPagePrehome(value[key]);
                    }
                }
                else {
                    _this.showAlertLogin();
                    console.error('-usuario no se encuentra en base de datos');
                }
            }
            console.log('userPromesa-US login');
            userPromesa.unsubscribe();
        });
        // console.log(this.userData);
        //   let estoyLogueado:boolean = false;
        //   let userDB:any;
        //   // let key:any;
        //   //let finEvent:boolean;
        //     this.userService.getUserLogin(this.userData["username"],this.userData["password"])
        //     .forEach((users) => {
        //       console.log('user1');
        //       console.log(users);
        //       users.forEach((user) =>{
        //         if(user != undefined && user != null){
        //           //console.log(user);
        //           // if(user['user_email'] == user.email){
        //             //console.log(user);
        //             console.log('usuario userService ->Userexists');
        //             userDB = user;
        //             estoyLogueado= true;
        //           // }
        //         }
        //       });
        //       if(!estoyLogueado){
        //         this.showAlertLogin();
        //       }else{
        //         this.goNextPagePrehome(userDB);
        //       }
        //     }).catch((error) => {console.log(error);this.showAlertLogin();});
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
                console.log(datos);
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
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pre_home_pre_home__["a" /* PreHomePage */], Data);
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
        // firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
        //   .then(res => {
        //     //console.log(res.user.email);
        //     console.log(res);
        //     console.info(JSON.stringify(res));
        //     //console.log(res);
        //     this.userService.getUsers()
        //     .forEach((users) => {
        //       //console.log(users);
        //       users.forEach((user) =>{
        //         //console.log(user);
        //         // if(user['user_email'] == res.user.email){
        //         //     // console.log('res.user.email');
        //         //     // console.log(user);
        //         //     userDB = user;
        //         //     goPagePrehome= true;
        //         // }
        //         //dentro de res.user -> hay otros datos de usuario -> email?
        //         //if(user.providerData["0"].providerId == "facebook.com"){
        //             if(user['user_email'] == res.additionalUserInfo.profile.email){
        //               // console.log('res.additionalUserInfo.profile.email');
        //               // console.log(user);
        //               userDB = user;
        //               goPagePrehome= true;
        //             }
        //         //}
        //       });
        //       //console.log(userDB);
        //       console.log(goPagePrehome);
        //       if(goPagePrehome){
        //         this.goNextPagePrehomeFace(userDB);
        //       }
        //     });
        //   });
        this.fb.login(['email'])
            .then(function (res) {
            console.log('Logged into Facebook!', res);
            // alert(JSON.stringify(res));
            var credencial = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().signInWithCredential(credencial).then(function (info) {
                // alert(JSON.stringify(info));
                // alert(JSON.stringify(info.providerData['0']['email']));
                // alert(JSON.stringify(info.providerData));
                // console.log(info);
                // console.log(info.providerData.email);
                // console.log(info.providerData);
                // if(info.providerData['0']['email'] != undefined){
                // this.userService.getUserEmailPerfil(info.providerData['0']['email']).subscribe(
                //   (emailBD)=>{
                //     alert(JSON.stringify(emailBD));
                //     if(emailBD == info.providerData.email){
                //     }
                //   });
                // this.userService.getUsers()
                // .forEach((users) => {
                //   //console.log(users);
                //   users.forEach((user) =>{
                //     //console.log(user);
                //     // if(user['user_email'] == res.user.email){
                //     //     // console.log('res.user.email');
                //     //     // console.log(user);
                //     //     userDB = user;
                //     //     goPagePrehome= true;
                //     // }
                //     //dentro de res.user -> hay otros datos de usuario -> email?
                //     //if(user.providerData["0"].providerId == "facebook.com"){
                //         if(user['user_email'] == info.providerData['0']['email']){
                //           // console.log('res.additionalUserInfo.profile.email');
                //           // console.log(user);
                //           userDB = user;
                //           goPagePrehome= true;
                //         }
                //     //}
                //   });
                //   //console.log(userDB);
                //   console.log(goPagePrehome);
                //   if(goPagePrehome){
                //     this.goNextPagePrehomeFace(userDB);
                //   }
                // });
                // }
                if (info.uid) {
                    var userBD_1 = _this.userService.getUserUidFace(info.uid).subscribe(function (value) {
                        console.info(JSON.stringify(value));
                        // alert(JSON.stringify(value));
                        console.log('userService-S login');
                        for (var key in value) {
                            // console.log(value[key]);
                            if (value[key]) {
                                console.log(value[key]);
                                console.info(JSON.stringify(value[key]));
                                _this.goNextPagePrehomeFace(value[key]);
                            }
                        }
                        console.log('userService-US login');
                        userBD_1.unsubscribe();
                    });
                }
            }).catch();
        })
            .catch(function (e) {
            console.log('Error logging into Facebook', e);
            alert(JSON.stringify(e));
        });
    };
    LoginPage.prototype.goNextPagePrehomeFace = function (datos) {
        //console.log(datos);
        //console.log(datos['$key']);
        this.userDataUpdate = { "email": datos['user_email'], "name": datos['user_name'], "pais": datos['user_pais'], "password": datos['user_password'], "picture": datos['user_picture'], "state": datos['user_state'], "tel": datos['user_tel'], "username": datos['user_username'], "verificacion": datos['$key'], "zipcode": datos['user_zipcode'] };
        //console.log(this.userDataUpdate);
        var Data = { 'datos': this.userDataUpdate };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pre_home_pre_home__["a" /* PreHomePage */], Data);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <img src="assets/img/JoBidUsuario.jpg">\n\n  <h5 id="login-heading1">Log in</h5>\n\n  <div padding>\n\n      <button ion-button block (click)="facebookir()">Log in with Facebook</button>\n\n    </div>\n\n  <ion-list padding>\n\n    <form [formGroup]="todo">\n\n      <ion-item>\n\n        <ion-icon name="person" item-start></ion-icon>\n\n        <ion-input type="text" placeholder="User / Email" [(ngModel)]="userData.username" name="username" formControlName="username"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="home" item-start></ion-icon>\n\n        <ion-input type="password" placeholder="Password" [(ngModel)]="userData.password" name="password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n      <div class="btnBottom">\n\n      <button  ion-button block color="danger" (click)="login()" [disabled]="!todo.valid">\n\n        Enter<ion-icon name="arrow-dropright"  ></ion-icon>\n\n      </button> \n\n      </div>\n\n    </form>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cities__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_states_utils__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_states_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_states_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__payment_methods_payment_methods__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_auth_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__(31);
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









//import { Http , Response, Headers, RequestOptions} from '@angular/http';
//import UsaStates from 'usa-states';
//import firebase from 'firebase';
//page

//import { VerifyYourPhonePage } from '../verify-your-phone/verify-your-phone';
//services


//import { EncriptyService } from '../../services/encripty.service';
//import { StorageService } from '../../services/storage.service';
// import { WindowService } from '../../services/window.service';
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
    function SingupPage(navCtrl, navParams, authServiceProvider, alertCtrl, userService, afAuth, formBuilder, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.afAuth = afAuth;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.codeAreaEstadoSelect = [];
        this.userData = { "username": "", "password": "", "email": "", "name": "", "zipcode": "", "state": "", "picture": "", "verificacion": "", "pais": "", "direccion": "", "tel": "", "uidFace": "" };
        this.ciudades = [];
        this.ciudad = undefined;
        this.stateZipcode = undefined;
        this.estados = [];
        this.disImg = true;
        //correo enviado
        this.correoEnviado = false;
        var stateName = __WEBPACK_IMPORTED_MODULE_5_states_utils___default.a.getStates();
        var stateNameShort = __WEBPACK_IMPORTED_MODULE_5_states_utils___default.a.getUSPSCodes();
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
        this.getForm();
        var d = new Date();
        var key = d.getTime();
        this.userActual = "user_" + (key);
        console.log(this.userActual);
    }
    SingupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SingupPage');
        this.foto = "assets/img/user.png";
        this.disImg = false;
        this.userA = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"]().currentUser;
        console.log(this.userA);
        this.user = this.afAuth.auth.currentUser;
        console.log(this.user);
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
        //   alert(JSON.stringify(user));
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
        __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"]().currentUser;
        var aftSbus = this.afAuth.authState.subscribe(function (user) {
            console.log('find user facebook 2');
            console.log(user);
            // alert(JSON.stringify(user));
            if (user) {
                if (user.providerData["0"].providerId == "facebook.com") {
                    if (_this.userData['picture'] == '' || _this.userData['picture'] == undefined || _this.userData['picture'] == null) {
                        console.info('find user facebook 2 - si');
                        _this.userData['name'] = _this.userData['username'] = user.providerData["0"].displayName;
                        _this.userData['email'] = user.providerData["0"].email;
                        _this.userData['uidFace'] = user.uid;
                        _this.userData['picture'] = user.providerData["0"].photoURL;
                        if (user.providerData["0"].photoURL != undefined && user.providerData["0"].photoURL != '') {
                            _this.foto = user.providerData["0"].photoURL;
                            _this.disImg = false;
                        }
                        console.log(_this.userData);
                    }
                }
                console.log('aftSbus-US singup');
                aftSbus.unsubscribe();
                //this.envioCorreoFacebook();
            }
            else {
                console.info('find user facebook 2 - no');
                console.log('aftSbus-US singup');
                aftSbus.unsubscribe();
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
        var _this = this;
        var estoyLogueado = false;
        //verificaque las contraseñas son iguales
        if (this.userData.password == this.passwordB) {
            // let userDB:any;
            //let finEvent:boolean;
            // console.log(this.userData["username"]);
            // console.log(this.userData["email"]);
            var Userexists = this.userService.getUserEmailPerfil(this.userData["email"]);
            // console.log(JSON.stringify( Userexists));
            // Userexists.forEach((value)=>{ console.log(value);});
            this.SubcribeUserexists = Userexists.subscribe(function (value) {
                console.log('SubcribeUserexists-US singup');
                console.log('user1');
                console.log(value);
                if (value['0']) {
                    console.log(value["0"].user_username);
                    console.log(_this.userData["username"]);
                    if (value["0"].user_username == _this.userData["username"]) {
                        console.log(value["0"].user_username);
                        estoyLogueado = true;
                        console.log(estoyLogueado);
                    }
                }
                //-usuario existe
                if (estoyLogueado == false) {
                    console.log('enviar correo');
                    // this.crearUserFirebase();
                    _this.enviarCorreo();
                }
                else {
                    console.log('alerta signUp');
                    _this.showAlertSignUp();
                }
                console.log('SubcribeUserexists-US singup');
                _this.SubcribeUserexists.unsubscribe();
            });
        }
        else {
            this.showAlertPwd();
        }
    };
    SingupPage.prototype.enviarCorreo = function () {
        //alert('code:'+this.userData.verificacion);
        this.userData.direccion = this.DirecA + ' ' + this.DirecB + ',' + this.DirecC + ',' + this.DirecD;
        this.userData.tel = '(' + this.telA + ')' + this.telB;
        this.userData.picture = this.foto;
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
                    _this.crearUserBD();
                    _this.correoEnviado = true;
                }).catch(function (err) {
                    console.error('error envio correo - account correo');
                    console.error(err);
                });
            }).catch(function (err) {
                console.error('error user create');
                console.error(err);
                // this.showAlertSignUp();
                _this.crearUserBD();
            });
        }
        catch (e) {
            console.error(e);
        }
    };
    SingupPage.prototype.crearUserBD = function () {
        // console.log(JSON.stringify(this.userData));
        // let Data = {'datos':this.userData};
        // this.navCtrl.push(VerifyYourPhonePage, Data);
        console.log(this.userData);
        //this.traerPost();
        if (this.userA != null) {
            this.userA.updateEmail('facebook-' + this.userData.email).then(function (userUpdateEmailFirebase) {
                // alert('correo ligado a cuenta de facebook');
            }).catch(function (infoC) {
                // alert(JSON.stringify(infoC));
                // alert('infoC update email');
            });
        }
        this.userData['verificacion'] = this.userActual;
        console.log(this.userData);
        this.userService.newUser(this.userData, this.userActual);
        if (this.correoEnviado) {
            this.showAlertEmail();
        }
        var Data = { 'datos': this.userData };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__payment_methods_payment_methods__["a" /* PaymentMethodsPage */], Data);
    };
    SingupPage.prototype.setCity = function () {
        //console.log(this.userData.state);
        this.userData.zipcode = undefined;
        var someArray = undefined;
        this.ciudades = [];
        someArray = __WEBPACK_IMPORTED_MODULE_4_cities___default.a.findByState(this.userData.state);
        for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
            var entry = someArray_1[_i];
            //var city= entry['city'];
            if (typeof entry['city'] !== 'undefined' && entry['city'] !== null && entry['city'] !== '') {
                //console.log(entry['city']); // 1, "string", false
                this.ciudades.push({ 'name': entry['city'], 'zipcode': entry['zipcode'] });
            }
        }
        this.findCodeEstado(__WEBPACK_IMPORTED_MODULE_5_states_utils___default.a.getStateName(this.userData.state));
    };
    // getE164(country,area,prefix,line) {
    //   const num = this.country + this.area + this.prefix + this.line;
    //   return `+${num}`
    // }
    // verifyLoginCode() {
    //   this.windowRef.confirmationResult
    //                 .confirm(this.userData['verificacion'])
    //                 .then( result => {
    //                   this.user = result.user;
    //   })
    //   .catch( error => console.log(error, "Incorrect code entered?"));
    // }
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
        //-- mostrar el zipCode
        if (this.userData.state != undefined && this.userData.zipcode != undefined) {
            this.DirecD = this.userData.state + ' ' + this.userData.zipcode;
        }
        else {
            this.DirecD = '';
        }
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
    //alerts
    SingupPage.prototype.showAlertSignUp = function () {
        var alert = this.alertCtrl.create({
            title: 'Sign up failed',
            subTitle: 'The user and the mail is already there',
            buttons: ['OK']
        });
        alert.present();
    };
    SingupPage.prototype.showAlertPwd = function () {
        var alerteMail = this.alertCtrl.create({
            title: 'Information',
            subTitle: 'The passwords are not the same',
            buttons: ['OK']
        });
        alerteMail.present();
    };
    SingupPage.prototype.showAlertEmail = function () {
        var alerteMail = this.alertCtrl.create({
            title: 'Information',
            subTitle: 'An email has been sent to verify your acount',
            buttons: ['OK']
        });
        alerteMail.present();
    };
    //-- validacion de formulario
    SingupPage.prototype.getForm = function () {
        this.singupForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[A-z]+(\ [A-z]+){0,3}'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            pais: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            zipcode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            DirecA: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            DirecB: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            DirecC: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            DirecD: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[A-z0-9-_.]+@[A-z0-9]+\.(.{1}[A-z0-9]+){1,2}'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            foto: [''],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            passwordB: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telA: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telB: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    SingupPage.prototype.camaraFoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var file, options, result, image, picture, UploadTask_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = this.userActual + '/foto';
                        console.log('clickCamara');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 60,
                            targetHeight: 100,
                            targetWidth: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = 'data:image/jpeg;base64,' + result;
                        picture = Object(__WEBPACK_IMPORTED_MODULE_7_firebase__["storage"])().ref(file);
                        UploadTask_1 = picture.putString(image, 'data_url');
                        UploadTask_1.on(__WEBPACK_IMPORTED_MODULE_8_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                            var url = UploadTask_1.snapshot.downloadURL;
                            console.log(url);
                            _this.foto = url;
                            _this.disImg = false;
                        }, function (error) { console.log(error); });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
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
        selector: 'page-singup',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\singup\singup.html"*/'<!--\n\n  Generated template for the SingupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar  class="force-back-button">\n\n    <ion-title>singup</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <img src="assets/img/JoBidUsuario.jpg">\n\n    <h5 id="signup-heading2" style="">Fill out the form </h5>\n\n    <form id="signup-form3" class="list" padding [formGroup]="singupForm" >\n\n      <ion-list id="signup-list3">\n\n        <ion-item>\n\n          <ion-icon name="person" item-start></ion-icon>\n\n          <ion-input type="text" placeholder="Name" [(ngModel)]="userData.name"  name="name"  formControlName="name"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="singupForm.get(\'name\').errors && singupForm.get(\'name\').dirty">\n\n            <p color="danger" style="text-align: center;" ion-text *ngIf="singupForm.get(\'name\').hasError(\'required\')">Field is required</p>\n\n            <p color="danger" style="text-align: center;" ion-text *ngIf="singupForm.get(\'name\').hasError(\'pattern\')">Name is not valid</p>\n\n          </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="pin" item-start></ion-icon>\n\n          <ion-select [(ngModel)]="userData.pais" name="pais" placeholder="Country"  formControlName="pais">\n\n            <ion-option value="USA" selected>U.S.A</ion-option>\n\n          </ion-select>\n\n         </ion-item>\n\n        <ion-item>\n\n            <ion-icon name="flag" item-start></ion-icon>\n\n          <ion-select class="mitad" [(ngModel)]="userData.state" name="state" (ngModelChange)="setCity()" placeholder="State" formControlName="state">\n\n            <ion-option *ngFor="let state of estados | ordenar: \'estados\' " value="{{state.nameShort}}">{{state.name}}</ion-option>\n\n          </ion-select>\n\n          <ion-select  class="mitad" [(ngModel)]="userData.zipcode" name="zipcode" (ngModelChange)="setZipCode()" placeholder="City" formControlName="zipcode">\n\n            <ion-option *ngFor="let city of ciudades | ordenar: \'ciudades\' " value="{{city.zipcode}}">{{city.name}} - {{city.zipcode}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <ion-item>\n\n                <!-- <ion-item class="mitad mitadEspacio"> -->\n\n                <ion-icon name="home" item-start></ion-icon>\n\n                <ion-input type="number" placeholder="1234" [(ngModel)]="DirecA" name="DirecA"  formControlName="DirecA"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <ion-item>\n\n                <!-- <ion-item class="mitad"> -->\n\n                <ion-input type="text" placeholder="Avenue" value=""  [(ngModel)]="DirecB" name="DirecB"  formControlName="DirecB"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <ion-item>\n\n              <!-- <ion-item class="mitad mitadEspacio"> -->\n\n                <ion-icon name="home" item-start style="background:transparent; color:transparent;"></ion-icon>\n\n                <ion-input type="text" placeholder="City"  [(ngModel)]="DirecC" name="DirecC"  formControlName="DirecC"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <ion-item>\n\n                <!-- <ion-item class="mitad"> -->\n\n                <ion-input type="text" placeholder="NJ 0000"  [(ngModel)]="DirecD" name="DirecD"  formControlName="DirecD"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <ion-item>\n\n          <ion-icon name="mail" item-start></ion-icon>\n\n          <ion-input type="email" placeholder="Mail" [(ngModel)]="userData.email" name="email"  formControlName="email"></ion-input>\n\n         </ion-item>\n\n         <ion-item *ngIf="singupForm.get(\'email\').errors && singupForm.get(\'email\').dirty">\n\n            <p color="danger" style="text-align: center;" ion-text *ngIf="singupForm.get(\'email\').hasError(\'required\')">Field is required</p>\n\n            <p color="danger"  style="text-align: center;" ion-text *ngIf="singupForm.get(\'email\').hasError(\'pattern\')">Email is not valid</p>\n\n          </ion-item>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-10>\n\n                <ion-list>\n\n                  <ion-item>\n\n                    <ion-icon name="contact" item-start></ion-icon>\n\n                    <ion-input type="text" placeholder="User" [(ngModel)]="userData.username"  name="username" formControlName="username"></ion-input>\n\n                    <input type="hidden" placeholder="Photography" [(ngModel)]="foto" formControlName="foto" name="foto" />\n\n                  </ion-item>\n\n                </ion-list>\n\n              </ion-col>\n\n              <ion-col col-2 id="btn-camera">\n\n                <button ion-button color="danger" outline (click)="camaraFoto()"><ion-icon name="camera"></ion-icon></button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        <ion-item [hidden]="disImg">\n\n          <ion-icon name="home" item-start style="background:transparent; color:transparent;"></ion-icon>\n\n          <img src="{{foto}}"  [hidden]="disImg" >\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="lock" item-start></ion-icon>\n\n          <ion-input type="password" placeholder="Password" [(ngModel)]="userData.password" name="password" formControlName="password"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="lock" item-start></ion-icon>\n\n          <ion-input type="password" placeholder="Password" [(ngModel)]="passwordB" name="passwordB" formControlName="passwordB"></ion-input>\n\n        </ion-item>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <ion-item>\n\n                <ion-icon name="call" item-start></ion-icon>\n\n                 <ion-select [(ngModel)]="telA" name="telA" placeholder="Area code" formControlName="telA">\n\n                  <ion-option *ngFor="let stateCod of codeAreaEstadoSelect | ordenar: \'codeEstados\'" value="{{stateCod.code}}">{{stateCod.code}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <ion-item>\n\n                <ion-input type="tel" placeholder="Phone #" [(ngModel)]="telB" name="telB" formControlName="telB"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        \n\n        <div class="btnBottom">\n\n          <button ion-button color="danger" block (click)="goPhoneV()" id="sign-in-button" [disabled]="!singupForm.valid">\n\n            Continue \n\n          <ion-icon name="arrow-dropright"></ion-icon></button>\n\n        </div>\n\n      </ion-list>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\singup\singup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_11__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
], SingupPage);

//# sourceMappingURL=singup.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningSalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cleaning_contractor_cleaning_contractor__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_show__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_offer_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_sale_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_professionals_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_notificacion_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_geocode_service__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import * as GeoFire from 'geofire';
//--page


// import { HomePage } from '../home/home';
//--service



//import { OfferService } from '../../services/offer.service';



// import { log } from 'util';
/**
 * Generated class for the CleanigSalePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CleaningSalePage = (function () {
    function CleaningSalePage(navCtrl, navParams, alertCtrl, professionalsService, saleService, offerService, userService, geo, platform, geocodeServiceProvider, notificacionService, nativeAudio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.professionalsService = professionalsService;
        this.saleService = saleService;
        this.offerService = offerService;
        this.userService = userService;
        this.geo = geo;
        this.platform = platform;
        this.geocodeServiceProvider = geocodeServiceProvider;
        this.notificacionService = notificacionService;
        this.nativeAudio = nativeAudio;
        //--valiables por defecto
        this.imgJobDefault = "assets/img/professions/cleaning.png";
        // galleryJobDefault ="assets/img/gallery.png";
        this.galleryJobDefault = "";
        this.Workers = [];
        this.WorkersInfo = [];
        this.WorkersMap = [];
        this.arrayIdProveder = [];
        this.contWorkWin = 0;
        this.professionals = [];
        this.professsional = [];
        //--timer
        this.segundos = 0;
        // minutos:number = 2;
        this.minutos = 3;
        this.showContador = true;
        this.NumeroContador = 1;
        this.StaringLabel = true;
        //-- geoLocation
        this.lat = 37.09024;
        this.lng = -95.71289100000001;
        this.zom = 14;
        this.contador = '0' + this.minutos + ':' + '0' + this.segundos;
        this.startTimer();
        // this.getProfessionals();
    }
    CleaningSalePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CleaningSalePage');
        //--Ini-comentado para evitar mas creaciones
        this.dataOffer = this.navParams.get('datos');
        console.log(this.dataOffer);
        this.dataService = this.dataOffer['dataService'];
        this.keyOffer = this.dataOffer['offer'];
        this.userActual = localStorage.getItem('verificacion');
        this.maxOffer = this.dataService['Clasificacion']['informacion']['maxOffer'];
        this.SubServiceActual = localStorage.getItem('SubService');
        console.log(this.dataOffer);
        console.log(JSON.stringify(this.dataOffer));
        //--Fin-comentado para evitar mas creaciones
        //-
        // this.userActual = "user_1509139021478";
        // localStorage.setItem('verificacion',this.userActual);
        // this.keyOffer = "offer_1512998956021"; 
        // this.SubServiceActual = "Electrician";
        // this.dataService = {"name":"Janotorial","class":"orange","img":"assets/img/services/Janitorial.png","Clasificacion":{"categoria":"Electrician","certificacion":"true","seguro":"true","distancia":"4M","experiencia":"2Y","informacion":{"maxOffer":"125","foto":"","moreInformation":"5info"}},"status":"Published","User":"user_1509139021478","Address":{"label":"My Address","name":"134 azxc,cqe,CA 90001","keyAddress":"addr_1509139021502"},"Star":1};
        // this.userActual = "user_1509139021478";
        // this.maxOffer = 189;
        // --Fin-comentado para tener flujo normal
        // this.getUserLocation();
        console.log(this.dataService);
        console.log(this.keyOffer);
        this.getUserLocationGeolocation();
        this.getSale();
    };
    CleaningSalePage.prototype.goCleaningContractor = function (ganador) {
        console.info('goCleaningContractor');
        // console.log(ganador);
        var DataService = { 'datos': { "dataService": this.dataService, "offer": this.keyOffer, "win": ganador } };
        // console.log(DataService);
        this.offerService.dropTimer(this.keyOffer);
        this.saleSubs.unsubscribe();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__cleaning_contractor_cleaning_contractor__["a" /* CleaningContractorPage */], DataService);
    };
    CleaningSalePage.prototype.goIndex = function () {
        //--set status offer y sale
        console.info('Offer -Cancelled');
        this.saleService.setStatus(this.userActual, this.keyOffer, 'Cancelled');
        this.offerService.setStatus(this.keyOffer, 'Cancelled');
        this.offerService.dropTimer(this.keyOffer);
        clearInterval(this.objNodeTimer);
        this.saleSubs.unsubscribe();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__show_show__["a" /* ShowPage */]);
    };
    CleaningSalePage.prototype.showInfoCleaning = function (id) {
        var _this = this;
        if (id === void 0) { id = "prof_1"; }
        var index;
        //--imagenes por defecto
        var ImgJobr = this.imgJobDefault;
        var galleryAJobr = this.galleryJobDefault;
        var galleryBJobr = this.galleryJobDefault;
        var galleryCJobr = this.galleryJobDefault;
        var galleryDJobr = this.galleryJobDefault;
        var galleryAJobrShow = false;
        var galleryBJobrShow = false;
        var galleryCJobrShow = false;
        var galleryDJobrShow = false;
        var presentationJobr = '';
        var certificateJobr = true;
        var insuranceJobr = true;
        var galleryShow = false;
        var _loop_1 = function () {
            if (this_1.WorkersInfo[index]['$key'] == id) {
                // console.log(this.WorkersInfo[index]);
                // console.log(this.WorkersInfo[index].Service);
                //-info basic
                var nameJobr = this_1.WorkersInfo[index]['prof_name'];
                var starJobr = this_1.WorkersInfo[index]['prof_star'];
                if (this_1.WorkersInfo[index]['prof_picture'] && this_1.WorkersInfo[index]['prof_picture'] != '') {
                    ImgJobr = this_1.WorkersInfo[index]['prof_picture'];
                }
                //info servicion
                for (var service in this_1.WorkersInfo[index].Service) {
                    if (this_1.WorkersInfo[index].Service[service].serv_subService == this_1.SubServiceActual || this_1.WorkersInfo[index].Service[service].serv_subService == 'Full') {
                        var infoService = this_1.WorkersInfo[index].Service[service];
                        // console.log(infoService);
                        // console.log(infoService.serv_detail.serv_moreInformation);
                        // console.log(infoService.serv_detail.serv_gallery.prof_galleryA);
                        presentationJobr = infoService.serv_detail.serv_moreInformation;
                        // console.log(infoService.serv_subService);
                        certificateJobr = (infoService.serv_detail['serv_certificate'] == 'true') ? true : false;
                        insuranceJobr = (infoService.serv_detail['serv_insurance'] == 'true') ? true : false;
                        // console.log(certificateJobr);
                        // console.log(insuranceJobr);
                        if (infoService.serv_detail.serv_gallery) {
                            galleryShow = true;
                            if (infoService.serv_detail.serv_gallery.prof_galleryA && infoService.serv_detail.serv_gallery.prof_galleryA != '') {
                                galleryAJobr = infoService.serv_detail.serv_gallery.prof_galleryA;
                                galleryAJobrShow = true;
                            }
                            if (infoService.serv_detail.serv_gallery.prof_galleryB && infoService.serv_detail.serv_gallery.prof_galleryB != '') {
                                galleryBJobr = infoService.serv_detail.serv_gallery.prof_galleryB;
                                galleryBJobrShow = true;
                            }
                            if (infoService.serv_detail.serv_gallery.prof_galleryC && infoService.serv_detail.serv_gallery.prof_galleryC != '') {
                                galleryCJobr = infoService.serv_detail.serv_gallery.prof_galleryC;
                                galleryCJobrShow = true;
                            }
                            if (infoService.serv_detail.serv_gallery.prof_galleryD && infoService.serv_detail.serv_gallery.prof_galleryD != '') {
                                galleryDJobr = infoService.serv_detail.serv_gallery.prof_galleryD;
                                galleryDJobrShow = true;
                            }
                        }
                    }
                }
                //-info comentarios
                var commentsJobr_1 = this_1.WorkersInfo[index]['prof_comments'];
                // console.log(commentsJobr);
                //-mapear alert
                contenido = '';
                contenido += '<div class="col-40"><img src="' + ImgJobr + '"></div>';
                contenido += '<div class="col-60"><h4>' + nameJobr + '</h4>';
                if (Math.round(starJobr) == 5) {
                    contenido += '<p class="Calificacion cinco">';
                }
                if (Math.round(starJobr) == 4) {
                    contenido += '<p class="Calificacion cuatro">';
                }
                if (Math.round(starJobr) == 3) {
                    contenido += '<p class="Calificacion tres">';
                }
                if (Math.round(starJobr) == 2) {
                    contenido += '<p class="Calificacion dos">';
                }
                if (Math.round(starJobr) == 1) {
                    contenido += '<p class="Calificacion one">';
                }
                contenido += '<label for="radio1">&#9733;</label><label for="radio2">&#9733;</label><label for="radio3">&#9733;</label><label for="radio4">&#9733;</label><label for="radio5">&#9733;</label></p>';
                // contenido +='<h4>'+starJobr+'</h4>';
                contenido += '<p>';
                if (certificateJobr == true) {
                    contenido += '<span class="ItemPService"><img src="assets/img/okBlue.png"> <span> Certificate</span>,';
                }
                if (insuranceJobr == true) {
                    contenido += '<span class="ItemPService"><img src="assets/img/okBlue.png"> <span>  Insurance</span></span>';
                }
                contenido += '</p></div>';
                contenido += "<h5>Presentation</h5><p>" + presentationJobr + "</p>";
                // contenido += id+'';
                if (galleryShow == true) {
                    contenido += '<h5>Gallery</h5>';
                    if (galleryAJobrShow == true) {
                        contenido += '<img src="' + galleryAJobr + '" alt="" class="imagen50">';
                    }
                    if (galleryBJobrShow == true) {
                        contenido += '<img src="' + galleryBJobr + '" alt="" class="imagen50">';
                    }
                    if (galleryCJobrShow == true) {
                        contenido += '<img src="' + galleryCJobr + '" alt="" class="imagen50">';
                    }
                    if (galleryDJobrShow == true) {
                        contenido += '<img src="' + galleryDJobr + '" alt="" class="imagen50">';
                    }
                }
                // console.log('commentsJobr');
                // console.log(commentsJobr);
                var cont = 0;
                if (commentsJobr_1 != null && commentsJobr_1 != undefined) {
                    var _loop_2 = function (key) {
                        if (cont == 0) {
                            contenido += '<h5>Comments</h5>';
                            cont += 1;
                        }
                        // console.log(commentsJobr[key]);
                        this_1.userNameSubs = this_1.userService.getUser(commentsJobr_1[key]['user_username']).subscribe(function (UserBD) {
                            if (UserBD) {
                                if (_this.userNameSubs != undefined) {
                                    // console.log(this.userNameSubs);
                                    // console.log('userNameSubs S - sale');
                                    // console.log(UserBD);
                                    // console.log(UserBD['user_username']);
                                    if (UserBD['user_username']) {
                                        // listCommentsJobr.push(commentsJobr[key]);
                                        contenido += '<div class="comments">';
                                        contenido += '<h6 class="nameUser">' + UserBD['user_username'] + '</h6>';
                                        // contenido +=Math.round(commentsJobr[key]['comm_qualification'])+'';
                                        if (Math.round(commentsJobr_1[key]['comm_qualification']) == 5) {
                                            contenido += '<p class="Calificacion cinco">';
                                        }
                                        if (Math.round(commentsJobr_1[key]['comm_qualification']) == 4) {
                                            contenido += '<p class="Calificacion cuatro">';
                                        }
                                        if (Math.round(commentsJobr_1[key]['comm_qualification']) == 3) {
                                            contenido += '<p class="Calificacion tres">';
                                        }
                                        if (Math.round(commentsJobr_1[key]['comm_qualification']) == 2) {
                                            contenido += '<p class="Calificacion dos">';
                                        }
                                        if (Math.round(commentsJobr_1[key]['comm_qualification']) == 1) {
                                            contenido += '<p class="Calificacion one">';
                                        }
                                        contenido += '<label for="radio1">&#9733;</label><label for="radio2">&#9733;</label><label for="radio3">&#9733;</label><label for="radio4">&#9733;</label><label for="radio5">&#9733;</label></p>';
                                        contenido += '<p>' + commentsJobr_1[key]['comm_description'] + '</p>';
                                        contenido += '</div>';
                                    }
                                    // console.log('userNameSubs US - sale');
                                    _this.userNameSubs.unsubscribe();
                                }
                            }
                        });
                        // console.log(listCommentsJobr);
                        // console.log(commentsJobr[key]['user_username']);
                        // console.log(listCommentsJobr[key]['comm_qualification']);
                        // // if(cont > 2){
                        //   // console.log(listCommentsJobr[key]['comm_description']);
                        //   contenido +='<div class="comments">';
                        //   contenido +='<h6>'+listCommentsJobr[key]['user_username']+'</h6>';
                        //   contenido +='<p>'+Math.round(listCommentsJobr[key]['comm_qualification'])+'</p>';
                        //   contenido +='<p>'+listCommentsJobr[key]['comm_description']+'</p>';
                        //   contenido +='</div>';
                        // }
                    };
                    for (var key in commentsJobr_1) {
                        _loop_2(key);
                    }
                }
                var alert_1 = this_1.alertCtrl.create({
                    // title: 'Estefania Lorem',
                    message: contenido,
                    buttons: ['OK']
                });
                alert_1.present();
            }
        };
        var this_1 = this, contenido;
        for (index in this.WorkersInfo) {
            _loop_1();
        }
    };
    //--- timer
    CleaningSalePage.prototype.startTimer = function () {
        var _this = this;
        this.objNodeTimer = setInterval(function () { return _this.timer(); }, 1000);
    };
    CleaningSalePage.prototype.timer = function () {
        if (this.minutos == 0 && this.segundos == 1) {
            // if(this.minutos == 1 && this.segundos == 50 ){ 
            //this.showContador = false;
            if (this.NumeroContador == 2) {
                this.showContador = false;
                this.notificacionSaleTimeOver();
                clearInterval(this.objNodeTimer);
                this.ganador();
                // this.audio();
            }
            else {
                // this.audio();
                this.notificacionProviderWaitTimeOver();
                this.ProviderInSale();
            }
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
            this.offerService.setTimer(this.keyOffer, this.contador);
            // console.log('contador: ',this.contador);
        }
    };
    //--- Functions
    CleaningSalePage.prototype.ProviderInSale = function () {
        console.info('provider in sale');
        if (this.Workers.length != 0) {
            console.info('Sale with providers');
            this.minutos = 2;
            this.segundos = 0;
            this.NumeroContador = 2;
            this.StaringLabel = false;
            this.saleService.setStatus(this.userActual, this.keyOffer, 'Start');
            this.offerService.setStatus(this.keyOffer, 'Start');
        }
        else {
            this.goServiceSinOff();
        }
    };
    CleaningSalePage.prototype.getSale = function () {
        var _this = this;
        this.MenosPrecio = undefined;
        // let finRegistro:boolean= false;
        this.saleSubs = this.saleService.getSale(this.userActual, this.keyOffer)
            .subscribe(function (result) {
            // console.log(this.saleSubs);
            _this.MenosPrecio = undefined;
            //console.log(result);
            //console.log(result.sale);
            if (_this.MenosPrecio == undefined) {
                _this.MenosPrecio = Number(result.sale);
            }
            //console.log(result.providers);
            _this.getProviders(result.providers);
            // finRegistro = true;
        });
    };
    CleaningSalePage.prototype.getProviders = function (trabajadores) {
        var _this = this;
        this.Workers = [];
        this.WorkersInfo = [];
        this.WorkersMap = [];
        var _loop_3 = function (trabajador) {
            console.log(trabajador);
            //verifica que es un nuevo proveedro y manda la notificacion
            if (this_2.arrayIdProveder.indexOf(trabajador) == -1) {
                this_2.notificacionNewProvider();
                this_2.arrayIdProveder.push(trabajador);
            }
            // console.log(this.arrayIdProveder);
            if (this_2.MenosPrecio > Number(trabajadores[trabajador]['offer'])) {
                this_2.MenosPrecio = Number(trabajadores[trabajador]['offer']);
            }
            var userSubs = this_2.professionalsService.getProfessional(trabajador).subscribe(function (user) {
                var img = _this.imgJobDefault;
                _this.WorkersInfo.push(user);
                if (user.prof_picture && user.prof_picture != undefined && user.prof_picture != '') {
                    img = user.prof_picture;
                }
                try {
                    if (trabajadores[trabajador]['UserLocacion']['latitud'] && trabajadores[trabajador]['UserLocacion']['longitud']) {
                        if (trabajadores[trabajador]['UserLocacion']['latitud'] != undefined && trabajadores[trabajador]['UserLocacion']['longitud'] != undefined && trabajadores[trabajador]['UserLocacion']['latitud'] != null && trabajadores[trabajador]['UserLocacion']['longitud'] != null) {
                            _this.WorkersMap.push({ "latitud": trabajadores[trabajador]['UserLocacion']['latitud'], "longitud": trabajadores[trabajador]['UserLocacion']['longitud'], "imagen": img });
                        }
                    }
                }
                catch (error) {
                    // console.log(error);
                    console.info('experando localizacion user');
                }
                // this.Workers.push({"id":trabajador,"offer":trabajadores[trabajador]['offer'],"img":img,"name":user.prof_name});
                console.log(_this.Workers);
                var ListaWorkers = _this.Workers;
                console.log(ListaWorkers);
                var idKeyWorker = ListaWorkers.findIndex(function (keysWorkers) {
                    return keysWorkers.id == trabajador;
                });
                console.log(idKeyWorker);
                if (idKeyWorker >= 0) {
                    console.log('if 1');
                    _this.Workers[idKeyWorker] = ({ "id": trabajador, "offer": trabajadores[trabajador]['offer'], "img": img, "name": user.prof_name });
                }
                else {
                    console.log('if -1');
                    _this.Workers.push({ "id": trabajador, "offer": trabajadores[trabajador]['offer'], "img": img, "name": user.prof_name });
                }
                console.log(_this.Workers);
                userSubs.unsubscribe();
            });
        };
        var this_2 = this;
        for (var trabajador in trabajadores) {
            _loop_3(trabajador);
        }
        // console.log(this.WorkersInfo);
        // console.log(this.WorkersMap);
        // let estadoUser= this.Workers;
        // console.log(estadoUser);
    };
    CleaningSalePage.prototype.ganador = function () {
        console.info('ganador');
        this.contWorkWin = 0;
        var contWorkInSale = 0;
        // console.log(this.Workers.length);
        // console.log('this.Workers.length');
        if (this.Workers.length != 0) {
            for (var index in this.Workers) {
                contWorkInSale = contWorkInSale + 1;
                // console.log(index);
                console.log(this.MenosPrecio);
                console.log(this.Workers[index]);
                if (this.MenosPrecio == Number(this.Workers[index]['offer'])) {
                    this.contWorkWin = 1;
                    this.goCleaningContractor(this.Workers[index]);
                    this.saleService.setStatus(this.userActual, this.keyOffer, 'Evaluation');
                    this.offerService.setStatus(this.keyOffer, 'Evaluation');
                    this.offerService.dropTimer(this.keyOffer);
                    this.showAlertFinOffer();
                    console.info('provider with offer');
                }
                else {
                    console.log(contWorkInSale);
                    console.log(this.Workers.length);
                    if (this.contWorkWin == 0 && contWorkInSale == this.Workers.length) {
                        console.info('providers without offers');
                        this.goServiceSinOff();
                    }
                }
            }
        }
        else {
            console.info('Without providers');
            this.goServiceSinOff();
        }
    };
    CleaningSalePage.prototype.goServiceSinOff = function () {
        //--set status offer y sale
        console.info('Sin Offer');
        this.showAlertSinOffer();
        this.saleService.setStatus(this.userActual, this.keyOffer, 'Saved');
        this.offerService.setStatus(this.keyOffer, 'Saved');
        this.offerService.dropTimer(this.keyOffer);
        clearInterval(this.objNodeTimer);
        this.saleSubs.unsubscribe();
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
    CleaningSalePage.prototype.getUserLocationGeolocation = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var options = {
                timeout: 5000
            };
            _this.geo.getCurrentPosition(options).then(function (resp) {
                console.info('geoLocation');
                // console.info(resp.coords.latitude);
                // console.info(resp.coords.longitude);
                _this.lat = resp.coords.latitude;
                _this.lng = resp.coords.longitude;
                _this.getNameAddress();
            }).catch(function () {
                console.log("Error to get location");
            });
        });
    };
    CleaningSalePage.prototype.getNameAddress = function () {
        var _this = this;
        this.geocodeServiceProvider.GeoCodificationInversa(this.lat, this.lng)
            .then(function (result) {
            // console.log(result);
            console.info('name Location');
            _this.offerService.setOfferUserLocation(_this.keyOffer, { 'latitud': _this.lat, 'longitud': _this.lng, 'nameAddress': result });
        })
            .catch(function (error) { console.log(error); console.log('error geoCdoficiacion'); });
    };
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
            subTitle: 'The bid ended',
            buttons: ['OK']
        });
        alert.present();
    };
    //-audio
    CleaningSalePage.prototype.audio = function () {
        this.nativeAudio.preloadSimple('uniqueId1', 'assets/timbre.mp3').then(this.onSuccess, this.onError);
        this.nativeAudio.play('uniqueId1').then(this.onSuccess, this.onError);
    };
    CleaningSalePage.prototype.onSuccess = function () {
        console.log(' success');
    };
    CleaningSalePage.prototype.onError = function () {
        console.log('error');
    };
    //-notificacion
    CleaningSalePage.prototype.notificacionNewProvider = function () {
        console.info('Nota: A new provider has entered the bid');
        this.notificacionService.mostrar('A new provider has entered the bid', 1);
    };
    CleaningSalePage.prototype.notificacionProviderWaitTimeOver = function () {
        console.info('Nota: Providers waiting time is over');
        this.notificacionService.mostrarSale('Providers waiting time is over', 2);
    };
    CleaningSalePage.prototype.notificacionSaleTimeOver = function () {
        console.info('Nota: The bid is over');
        this.notificacionService.mostrarSale('The bid is over', 3);
    };
    return CleaningSalePage;
}());
CleaningSalePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cleaning-sale',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\cleaning-sale\cleaning-sale.html"*/'<!--\n\n  Generated template for the CleanigSalePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n<div class="mapa">\n\n  <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zom">\n\n    <!-- <agm-marker [latitude]="lat" [longitude]="lng">\n\n      <agm-info-window>\n\n        <h3><strong>Howdy!</strong></h3>\n\n        <p>You are here!</p>\n\n      </agm-info-window>\n\n    </agm-marker> -->\n\n    <agm-marker *ngFor="let marker of WorkersMap" style="z-index:9;"\n\n      [latitude]="marker.latitud"\n\n      [longitude]="marker.longitud" >\n\n    </agm-marker>\n\n    <!-- <agm-marker *ngFor="let marker of WorkersMap" style="z-index:9;"\n\n    [latitude]="marker.latitud"\n\n    [longitude]="marker.longitud"\n\n    [iconUrl]="marker.imagen"\n\n    \n\n    >\n\n  </agm-marker> -->\n\n  </agm-map>\n\n</div>\n\n\n\n<!-- <div *ngIf="lat && lng"> -->\n\n    <!-- <agm-map [latitude]="lat" [longitude]="lng">\n\n      <agm-marker [latitude]="lat" [longitude]="lng">\n\n        <agm-info-window>\n\n          <h3><strong>Howdy!</strong></h3>\n\n          <p>You are here!</p>\n\n        </agm-info-window>\n\n      </agm-marker>\n\n    </agm-map> -->\n\n  <!-- <div> -->\n\n<div class="contador" *ngIf="showContador" >\n\n  <div class="contenido" *ngIf="StaringLabel" >\n\n    <h3><p>Start</p>{{contador}}</h3>\n\n  </div>\n\n  <div class="contenido2" *ngIf="!StaringLabel">\n\n    <h3>{{contador}}</h3>\n\n  </div>\n\n</div>\n\n<div class="barraRoja">\n\n  <h4>Offers received</h4>\n\n</div>\n\n<ion-grid class="body">\n\n  <ion-row *ngFor="let item of Workers">\n\n    <ion-col col-2>\n\n      <ion-icon name="trophy" *ngIf="item.offer == MenosPrecio"></ion-icon>\n\n      <!-- <ion-icon name="trophy" *ngIf="{{item.icon}}"></ion-icon> -->\n\n    </ion-col>\n\n    <ion-col col-6>\n\n     <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="{{item.img}}">\n\n      </ion-avatar>\n\n      <p>{{item.name}}</p>\n\n     </ion-item>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      <h5>{{item.offer}}</h5>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      <button ion-button icon-only round color="light" (click)="showInfoCleaning(item.id)">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n<!-- <div class="btnBottom">\n\n          <button ion-button color="danger" block icon-left (click)="goCleaningContractor()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n\n        </div> -->\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n     <ion-row>\n\n      <ion-col col-8>\n\n        <div class="price">\n\n          <p>Initial value: ${{maxOffer}}</p>\n\n          <!-- <p>${{maxOffer}}</p> -->\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button id="btnCancel" ion-button block color="light"(click)="goIndex()">Cancel\n\n        </button>\n\n      </ion-col>\n\n     </ion-row>\n\n    </ion-grid>  \n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\cleaning-sale\cleaning-sale.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_9__services_professionals_service__["a" /* ProfessionalsService */], __WEBPACK_IMPORTED_MODULE_8__services_sale_service__["a" /* SaleService */], __WEBPACK_IMPORTED_MODULE_7__services_offer_service__["a" /* OfferService */], __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_11__providers_geocode_service__["a" /* GeocodeServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_10__services_notificacion_service__["a" /* NotificacionService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_audio__["a" /* NativeAudio */]])
], CleaningSalePage);

//# sourceMappingURL=cleaning-sale.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobWithUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        selector: 'page-job-with-us',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\job-with-us\job-with-us.html"*/'<!--\n\n  Generated template for the JobWithUsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <ion-title>JoBid</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n  <h3>Job With Us</h3>\n\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, lacus id tincidunt dapibus, turpis justo aliquet ante, ut vulputate turpis lacus non nulla. Suspendisse potenti. Maecenas arcu massa, volutpat quis auctor eget, mattis sit amet purus. Donec ac laoreet felis. Mauris dictum sapien congue eros ornare, id iaculis nunc pretium. Mauris bibendum blandit nisl, id finibus turpis volutpat nec. Ut interdum elementum tortor, non accumsan ligula interdum at. Donec mauris arcu, pellentesque lobortis venenatis sit amet, dictum a purus. Nam laoreet tellus quis justo imperdiet, quis placerat lectus pulvinar. Mauris interdum libero vel eleifend sodales. Aliquam ut dolor id mauris condimentum hendrerit. Nam blandit congue nulla ut viverra. Sed suscipit massa non auctor suscipit</p>\n\n  </ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\job-with-us\job-with-us.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], JobWithUsPage);

//# sourceMappingURL=job-with-us.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoliciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        selector: 'page-policies',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\policies\policies.html"*/'<!--\n\n  Generated template for the PoliciesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<h3>Policies</h3>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, lacus id tincidunt dapibus, turpis justo aliquet ante, ut vulputate turpis lacus non nulla. Suspendisse potenti. Maecenas arcu massa, volutpat quis auctor eget, mattis sit amet purus. Donec ac laoreet felis. Mauris dictum sapien congue eros ornare, id iaculis nunc pretium. Mauris bibendum blandit nisl, id finibus turpis volutpat nec. Ut interdum elementum tortor, non accumsan ligula interdum at. Donec mauris arcu, pellentesque lobortis venenatis sit amet, dictum a purus. Nam laoreet tellus quis justo imperdiet, quis placerat lectus pulvinar. Mauris interdum libero vel eleifend sodales. Aliquam ut dolor id mauris condimentum hendrerit. Nam blandit congue nulla ut viverra. Sed suscipit massa non auctor suscipit</p>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\policies\policies.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PoliciesPage);

//# sourceMappingURL=policies.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_states_utils__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_states_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_states_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cities__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_cities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pre_home_pre_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__ = __webpack_require__(84);
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









//page

//service


/**
 * Generated class for the EditUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditUserPage = (function () {
    function EditUserPage(navCtrl, navParams, authServiceProvider, alertCtrl, userService, afAuth, formBuilder, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.afAuth = afAuth;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.codeAreaEstadoSelect = [];
        this.userData = { "username": "", "password": "", "email": "", "name": "", "zipcode": "", "state": "", "picture": "", "verificacion": "", "pais": "", "direccion": "", "tel": "", "uidFace": "" };
        this.ciudades = [];
        this.ciudad = undefined;
        this.stateZipcode = undefined;
        this.estados = [];
        this.disImg = true;
        var stateName = __WEBPACK_IMPORTED_MODULE_5_states_utils___default.a.getStates();
        var stateNameShort = __WEBPACK_IMPORTED_MODULE_5_states_utils___default.a.getUSPSCodes();
        this.pagesUrl = '../assets/lib/codeAreaUsa.json';
        for (var i = 0; stateName.length > i; i++) {
            this.estados.push({ 'name': stateName[i], 'nameShort': stateNameShort[i] });
        }
        this.codeAreaDefi();
        this.getForm();
    }
    EditUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditUserPage');
        this.userData = JSON.parse(localStorage.getItem('userData'));
        this.userActual = this.userData.verificacion;
        console.log(this.userData);
        this.telA = this.userData.tel.substring(1, 4);
        this.telB = this.userData.tel.substring(5);
        this.passwordB = this.userData.password;
        this.passwordActual = this.passwordB;
        this.emailActual = this.userData.email;
        console.log(this.passwordActual);
        console.log(this.emailActual);
        if (this.userData.picture != undefined && this.userData.picture != '') {
            this.foto = this.userData.picture;
            this.disImg = false;
        }
        else {
            this.foto = "assets/img/user.png";
            this.disImg = false;
        }
        var zipcodea = this.userData['zipcode'];
        console.log(zipcodea);
        this.ciudades.zipcode = this.userData['zipcode'];
        console.log(this.telA);
        console.log(this.telB);
        // this.setCity();
    };
    EditUserPage.prototype.goPrehome = function () {
        //verificaque las contraseñas son iguales
        if (this.userData.password == this.passwordB) {
            if (this.passwordActual != this.userData.password) {
                console.info('password changed');
                this.afAuth.auth.currentUser.updatePassword(this.userData.password);
            }
            if (this.emailActual != this.userData.email) {
                console.info('password changed');
                this.afAuth.auth.currentUser.updateEmail(this.userData.email);
            }
            this.updateUserApp();
            var Data = { 'datos': this.userData };
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pre_home_pre_home__["a" /* PreHomePage */], Data);
        }
        else {
            this.showAlertPwd();
        }
    };
    EditUserPage.prototype.updateUserApp = function () {
        this.userData.tel = '(' + this.telA + ')' + this.telB;
        this.userData.picture = this.foto;
        console.log(this.userData);
        localStorage.setItem('userData', JSON.stringify(this.userData));
        this.userService.setUserDB(this.userData, this.userData['verificacion']);
    };
    EditUserPage.prototype.setCity = function () {
        //console.log(this.userData.state);
        var someArray = undefined;
        this.ciudades = [];
        someArray = __WEBPACK_IMPORTED_MODULE_6_cities___default.a.findByState(this.userData.state);
        for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
            var entry = someArray_1[_i];
            //var city= entry['city'];
            if (typeof entry['city'] !== 'undefined' && entry['city'] !== null && entry['city'] !== '') {
                //console.log(entry['city']); // 1, "string", false
                this.ciudades.push({ 'name': entry['city'], 'zipcode': entry['zipcode'] });
            }
        }
        this.findCodeEstado(__WEBPACK_IMPORTED_MODULE_5_states_utils___default.a.getStateName(this.userData.state));
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
    //alert
    EditUserPage.prototype.showAlertSignUp = function () {
        var alert = this.alertCtrl.create({
            title: 'Update',
            subTitle: 'The user was updated',
            buttons: ['OK']
        });
        alert.present();
    };
    EditUserPage.prototype.showAlertPwd = function () {
        var alerteMail = this.alertCtrl.create({
            title: 'Information',
            subTitle: 'The passwords are not the same',
            buttons: ['OK']
        });
        alerteMail.present();
    };
    //-- validacion de formulario
    EditUserPage.prototype.getForm = function () {
        this.editUserForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[A-z]+(\ [A-z]+){0,3}'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            pais: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            zipcode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            // DirecA : ['', Validators.required],
            // DirecB : ['', Validators.required],
            // DirecC : ['', Validators.required],
            // DirecD : ['', Validators.required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[A-z0-9-_.]+@[A-z0-9]+\.(.{1}[A-z0-9]+){1,2}'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            foto: [''],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            passwordB: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telA: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telB: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    EditUserPage.prototype.camaraFoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var file, options, result, image, picture, UploadTask_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = this.userActual + '/foto';
                        console.log('clickCamara');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 60,
                            targetHeight: 100,
                            targetWidth: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = 'data:image/jpeg;base64,' + result;
                        picture = Object(__WEBPACK_IMPORTED_MODULE_7_firebase__["storage"])().ref(file);
                        UploadTask_1 = picture.putString(image, 'data_url');
                        UploadTask_1.on(__WEBPACK_IMPORTED_MODULE_8_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                            var url = UploadTask_1.snapshot.downloadURL;
                            console.log(url);
                            _this.foto = url;
                            _this.disImg = false;
                        }, function (error) { console.log(error); });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
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
        selector: 'page-edit-user',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\edit-user\edit-user.html"*/'<!--\n\n  Generated template for the EditUserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<h3>My profile</h3>\n\n<form id="signup-form3" class="list" padding [formGroup]="editUserForm">\n\n    <ion-list id="signup-list3">\n\n      <ion-item>\n\n        <ion-icon name="person" item-start></ion-icon>\n\n        <ion-input type="text" placeholder="Name" [(ngModel)]="userData.name"  name="name" formControlName="name"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="editUserForm.get(\'name\').errors && editUserForm.get(\'name\').dirty">\n\n        <p color="danger" style="text-align: center;" ion-text *ngIf="editUserForm.get(\'name\').hasError(\'required\')">Field is required</p>\n\n        <p color="danger" style="text-align: center;" ion-text *ngIf="editUserForm.get(\'name\').hasError(\'pattern\')">Name is not valid</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="pin" item-start></ion-icon>\n\n        <ion-select [(ngModel)]="userData.pais" name="pais" formControlName="pais">\n\n          <ion-option value="USA" selected>U.S.A</ion-option>\n\n        </ion-select>\n\n       </ion-item>\n\n      <ion-item>\n\n          <ion-icon name="flag" item-start></ion-icon>\n\n        <ion-select class="mitad" [(ngModel)]="userData.state" name="state" (ngModelChange)="setCity()" placeholder="State" formControlName="state"> \n\n          <ion-option *ngFor="let state of estados | ordenar: \'estados\'" value="{{state.nameShort}}">{{state.name}}</ion-option>\n\n        </ion-select>\n\n        <ion-select  class="mitad" [(ngModel)]="userData.zipcode" name="zipcode" placeholder="City" formControlName="zipcode"> <!--[(ngModel)]="gaming"-->\n\n          <ion-option *ngFor="let city of ciudades | ordenar: \'ciudades\' | remover" value="{{city.zipcode}}">{{city.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <!-- <ion-item>\n\n        <ion-icon name="home" item-start></ion-icon>\n\n        <ion-input type="number" placeholder="1234" class="mitad" [(ngModel)]="DirecA" name="DirecA"></ion-input>\n\n        <ion-input type="text" placeholder="avenue" value="" class="mitad" [(ngModel)]="DirecB" name="DirecB"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-icon name="home" item-start style="background:transparent; color:transparent;"></ion-icon>\n\n        <ion-input type="text" placeholder="City" class="mitad" [(ngModel)]="DirecC" name="DirecC" ></ion-input>\n\n        <ion-input type="text" placeholder="NJ 0000" value="{{DirecD}}" class="mitad" [(ngModel)]="DirecD" name="DirecD"></ion-input>\n\n      </ion-item> -->\n\n      <ion-item>\n\n        <ion-icon name="mail" item-start></ion-icon>\n\n        <ion-input type="email" placeholder="Mail" [(ngModel)]="userData.email" name="email" formControlName="email"></ion-input>\n\n       </ion-item>\n\n       <ion-item *ngIf="editUserForm.get(\'email\').errors && editUserForm.get(\'email\').dirty">\n\n          <p color="danger" style="text-align: center;" ion-text *ngIf="editUserForm.get(\'email\').hasError(\'required\')">Field is required</p>\n\n          <p color="danger"  style="text-align: center;" ion-text *ngIf="editUserForm.get(\'email\').hasError(\'pattern\')">Email is not valid</p>\n\n        </ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="contact" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="User" [(ngModel)]="userData.username"  name="username" formControlName="username"></ion-input>\n\n                <input type="hidden" placeholder="Photography" [(ngModel)]="foto" formControlName="foto" name="foto" />\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col col-2 id="btn-camera">\n\n            <button ion-button color="danger" outline (click)="camaraFoto()"><ion-icon name="camera"></ion-icon></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <ion-item [hidden]="disImg">\n\n        <ion-icon name="home" item-start style="background:transparent; color:transparent;"></ion-icon>\n\n        <img src="{{foto}}"  [hidden]="disImg" >\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="lock" item-start></ion-icon>\n\n        <ion-input type="password" placeholder="Password" [(ngModel)]="userData.password" name="password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="lock" item-start></ion-icon>\n\n        <ion-input type="password" placeholder="Password" [(ngModel)]="passwordB" name="passwordB" formControlName="passwordB"></ion-input>\n\n      </ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-5>\n\n            <ion-item>\n\n              <ion-icon name="call" item-start></ion-icon>this.codeAreaEstadoSelect\n\n               <ion-select [(ngModel)]="telA" name="telA" formControlName="telA">\n\n                <ion-option *ngFor="let stateCod of codeAreaEstadoSelect | ordenar: \'codeEstados\'" value="{{stateCod.code}}">{{stateCod.code}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-7>\n\n            <ion-item>\n\n              <ion-input type="tel" placeholder="Phone #" [(ngModel)]="telB" name="telB" formControlName="telB"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      \n\n      <!-- <div class="btnBottom">\n\n        <button ion-button color="danger" block (click)="goPrehome()" id="sign-in-button">Save <ion-icon name="arrow-dropright"></ion-icon></button>\n\n      </div> -->\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <div class="btnBottom">\n\n          <button ion-button color="danger" block (click)="goPrehome()" [disabled]="!editUserForm.valid">\n\n              Save\n\n          </button> \n\n        </div>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\edit-user\edit-user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_10__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
], EditUserPage);

//# sourceMappingURL=edit-user.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sale_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_offer_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myserviceinfo_myserviceinfo__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//service


//page

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
            _this.OffersList = [];
            // console.log('saleServiceGet');
            // console.log(value);
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
                    // console.log(key);
                    OfferServiceGet = _this.offerService.getOffer(key)
                        .subscribe(function (datos) {
                        // console.log(datos);
                        // if(datos['$value'] == null){
                        // }else{
                        // console.info('get offerKey');
                        if (datos.sale == null || datos.sale == undefined) {
                            datos['sale'] = datos.Clasificacion.informacion.maxOffer;
                        }
                        _this.OffersList.push(datos);
                        // }
                    });
                }
            }
            // OfferServiceGet.unsubscribe();
            SaleServiceGet.unsubscribe();
        });
        // console.log(this.OffersList);
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
        selector: 'page-my-services',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\my-services\my-services.html"*/'<!--\n\n  Generated template for the MyServicesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<h3>My services</h3>\n\n<h4>List:</h4>\n\n\n\n<ion-list>\n\n  <button ion-item *ngFor="let p of OffersList" (click)="goInfoService(p)" class="btnItem">\n\n    <p><strong>Services Code: </strong>{{p[\'$key\']}}</p>\n\n    <p> <strong>{{p.name}}</strong>: {{p.Clasificacion.categoria}}</p>\n\n    <!-- <p>professional:</p> -->\n\n    <p><strong>Status</strong>:{{p.status}}</p>\n\n    <!-- <p *ngIf="p.status != \'Cancelled\' "><strong>Sale</strong>:{{p.sale}}</p> -->\n\n    <p><strong>Sale</strong>:{{p.sale}}</p>\n\n  </button>\n\n</ion-list>\n\n<!-- (click)="openPage(p) -->\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\my-services\my-services.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_sale_service__["a" /* SaleService */],
        __WEBPACK_IMPORTED_MODULE_3__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MyServicesPage);

//# sourceMappingURL=my-services.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyserviceinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__ = __webpack_require__(71);
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
        this.certificateJobr = 'false';
        this.insuranceJobr = 'false';
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
        this.address = this.dataOffer.Address.name;
        if (this.dataOffer.Profession && this.dataOffer.Profession != undefined && this.dataOffer.Profession != null) {
            this.booleanJob = true;
            this.getProfesional();
        }
    };
    MyserviceinfoPage.prototype.getProfesional = function () {
        var _this = this;
        var Jober = this.dataOffer.Profession;
        this.SubServiceActual = this.dataOffer.Clasificacion.categoria;
        console.log(Jober);
        this.professionalsService.getProfessional(Jober).subscribe(function (value) {
            console.log(value);
            _this.workerInfo = value;
            _this.mostrarWorkInfo();
            if (value['prof_picture'] && value['prof_picture'] != '') {
                _this.ImgJobr = value['prof_picture'];
            }
        });
        // let galleryJobr= this.galleryJobDefault;
    };
    MyserviceinfoPage.prototype.mostrarWorkInfo = function () {
        console.log(this.workerInfo);
        this.ImgJobr = this.imgJobDefault;
        // let galleryJobr= this.galleryJobDefault;
        this.nameJobr = this.workerInfo['prof_name'];
        this.idJobr = this.workerInfo['$key'];
        var starJobrBD = Math.round(this.workerInfo['prof_star']);
        var contenido = '';
        if (Math.round(starJobrBD) == 5) {
            contenido += 'cinco';
        }
        if (Math.round(starJobrBD) == 4) {
            contenido += 'cuatro';
        }
        if (Math.round(starJobrBD) == 3) {
            contenido += 'tres';
        }
        if (Math.round(starJobrBD) == 2) {
            contenido += 'dos';
        }
        if (Math.round(starJobrBD) == 1) {
            contenido += 'one';
        }
        this.starJobr = contenido;
        // this.certificateJobr= this.workerInfo['prof_certificate']; 
        // this.insuranceJobr= this.workerInfo['prof_insurance'];     
        if (this.workerInfo['prof_picture'] && this.workerInfo['prof_picture'] != '') {
            this.ImgJobr = this.workerInfo['prof_picture'];
        }
        //info servicion
        for (var service in this.workerInfo.Service) {
            if (this.workerInfo.Service[service].serv_subService == this.SubServiceActual || this.workerInfo.Service[service].serv_subService == 'Full') {
                var infoService = this.workerInfo.Service[service];
                console.log(infoService);
                // console.log(infoService.serv_subService);
                this.certificateJobr = infoService.serv_detail['serv_certificate'];
                this.insuranceJobr = infoService.serv_detail['serv_insurance'];
                console.log(this.certificateJobr);
                console.log(this.insuranceJobr);
                // this.presentationJobr= infoService.serv_detail['serv_moreInformation']; 
            }
        }
    };
    return MyserviceinfoPage;
}());
MyserviceinfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-myserviceinfo',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\myserviceinfo\myserviceinfo.html"*/'<!--\n\n  Generated template for the MyserviceinfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Service</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="barraRoja">\n\n    <h4>Service information</h4>\n\n  </div>\n\n  <h3>Service code: #{{serviceCode}}</h3>\n\n  <p class="textoCentrado">State</p>\n\n  <h6 id="estadoServicio">{{status}}</h6>\n\n  <div padding>\n\n    <p><span class="textRed">*Amount to be paid: </span>${{sale}}</p>\n\n    <p><span class="textRed">Description:</span></p>\n\n    <p>{{information}}</p>\n\n    <p><span class="textRed">Address service:</span></p>\n\n    <p>{{address}}</p>\n\n    <div class="space"></div>\n\n    <div *ngIf="booleanJob">\n\n      <p><span class="textRed">Professional data</span></p>\n\n    </div>\n\n    <ion-grid>\n\n      <ion-row *ngIf="booleanJob">\n\n      <ion-col col-3>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-avatar>\n\n              <img src="{{ImgJobr}}">\n\n            </ion-avatar>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-9>\n\n        <ion-row>\n\n          <ion-col>\n\n            <h4>{{nameJobr}}</h4>\n\n            <p>{{idJobr}}</p>\n\n            <!-- <img src="assets/img/Estrellas.png" alt=""> -->\n\n            <p class="Calificacion Usuario {{starJobr}}">\n\n							<label for="radio1">&#9733;</label>\n\n							<label for="radio2">&#9733;</label>\n\n							<label for="radio3">&#9733;</label>\n\n							<label for="radio4">&#9733;</label>\n\n							<label for="radio5">&#9733;</label>\n\n						</p>\n\n          </ion-col>\n\n        </ion-row>	\n\n        <ion-row>	\n\n            <ion-col col-6 *ngIf="certificateJobr">\n\n              <ion-list><ion-item>\n\n                <ion-label>Certificate</ion-label>\n\n                <ion-radio checked="true" value="Certificate"></ion-radio>\n\n              </ion-item></ion-list>\n\n            </ion-col>\n\n            <ion-col col-6 *ngIf="insuranceJobr">\n\n              <ion-list>\n\n                 <ion-item>\n\n                  <ion-label>Insurance</ion-label>\n\n                  <ion-radio checked="true" value="Insurance"></ion-radio>\n\n                </ion-item>\n\n              </ion-list>\n\n            </ion-col>\n\n          </ion-row>	\n\n        </ion-col>\n\n      </ion-row>\n\n  </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\myserviceinfo\myserviceinfo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__["a" /* ProfessionalsService */]])
], MyserviceinfoPage);

//# sourceMappingURL=myserviceinfo.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(420);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* unused harmony export googleMapsKey */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_geocode_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__agm_core__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_local_notifications__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_list_list__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_singup_singup__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_show_show__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_verify_your_phone_verify_your_phone__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_payment_methods_payment_methods__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_payinfo_payinfo__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_cleaning_cleaning__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_cleaning_info_cleaning_info__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_cleaning_sale_cleaning_sale__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_cleaning_contractor_cleaning_contractor__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_cleaning_info_service_cleaning_info_service__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_cleaning_vote_cleaning_vote__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_cleaning_ok_cleaning_ok__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_pre_home_pre_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_new_address_new_address__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_profession_profession__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_job_with_us_job_with_us__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_policies_policies__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_payments_payments__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_edit_user_edit_user__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_services_care_services_care__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_services_cleaning_services_cleaning__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_services_janotorial_services_janotorial__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_services_transportation_services_transportation__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_services_food_services_food__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_services_legal_services_legal__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_services_beauty_services_beauty__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_my_services_my_services__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_myserviceinfo_myserviceinfo__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_add_payment_method_add_payment_method__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__services_braintree_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__services_offer_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__services_professionals_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__services_professions_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__services_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__services_encripty_service__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__services_careProfessions_service__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__services_cleaningProfessions_service__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__services_sale_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__services_notificacion_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pipes_ordenar_ordenar__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pipes_remover_remover__ = __webpack_require__(666);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















//import firebase from 'firebase';
//import { EmailComposer } from '@ionic-native/email-composer';
//---pages

































//import { ProfessionPage } from '../pages/profession/profession';
//---services










//pipe


// import { NewAddressPipe } from '../pipes/new-address/new-address';
// import { UpdateUserPipe } from '../pipes/update-user/update-user';
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
            __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_singup_singup__["a" /* SingupPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_show_show__["a" /* ShowPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_verify_your_phone_verify_your_phone__["a" /* VerifyYourPhonePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_payment_methods_payment_methods__["a" /* PaymentMethodsPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_payinfo_payinfo__["a" /* PayinfoPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_profession_profession__["a" /* ProfessionPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_cleaning_cleaning__["a" /* CleaningPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_cleaning_info_cleaning_info__["a" /* CleaningInfoPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_cleaning_contractor_cleaning_contractor__["a" /* CleaningContractorPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_cleaning_info_service_cleaning_info_service__["a" /* CleaningInfoServicePage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_cleaning_vote_cleaning_vote__["a" /* CleaningVotePage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_cleaning_ok_cleaning_ok__["a" /* CleaningOkPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_pre_home_pre_home__["a" /* PreHomePage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_new_address_new_address__["a" /* NewAddressPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_job_with_us_job_with_us__["a" /* JobWithUsPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_policies_policies__["a" /* PoliciesPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_payments_payments__["a" /* PaymentsPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_edit_user_edit_user__["a" /* EditUserPage */],
            __WEBPACK_IMPORTED_MODULE_49__pages_my_services_my_services__["a" /* MyServicesPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_services_care_services_care__["a" /* ServicesCarePage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_services_cleaning_services_cleaning__["a" /* ServicesCleaningPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_services_janotorial_services_janotorial__["a" /* ServicesJanotorialPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_services_transportation_services_transportation__["a" /* ServicesTransportationPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_services_food_services_food__["a" /* ServicesFoodPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_services_legal_services_legal__["a" /* ServicesLegalPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_services_beauty_services_beauty__["a" /* ServicesBeautyPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_myserviceinfo_myserviceinfo__["a" /* MyserviceinfoPage */],
            __WEBPACK_IMPORTED_MODULE_51__pages_add_payment_method_add_payment_method__["a" /* AddPaymentMethodPage */],
            __WEBPACK_IMPORTED_MODULE_62__pipes_ordenar_ordenar__["a" /* OrdenarPipe */],
            __WEBPACK_IMPORTED_MODULE_63__pipes_remover_remover__["a" /* RemoverPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__mydb',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            }),
            __WEBPACK_IMPORTED_MODULE_14__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: googleMapsKey
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_singup_singup__["a" /* SingupPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_show_show__["a" /* ShowPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_verify_your_phone_verify_your_phone__["a" /* VerifyYourPhonePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_payment_methods_payment_methods__["a" /* PaymentMethodsPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_payinfo_payinfo__["a" /* PayinfoPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_profession_profession__["a" /* ProfessionPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_cleaning_cleaning__["a" /* CleaningPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_cleaning_info_cleaning_info__["a" /* CleaningInfoPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_cleaning_sale_cleaning_sale__["a" /* CleaningSalePage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_cleaning_contractor_cleaning_contractor__["a" /* CleaningContractorPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_cleaning_info_service_cleaning_info_service__["a" /* CleaningInfoServicePage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_cleaning_vote_cleaning_vote__["a" /* CleaningVotePage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_cleaning_ok_cleaning_ok__["a" /* CleaningOkPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_pre_home_pre_home__["a" /* PreHomePage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_new_address_new_address__["a" /* NewAddressPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_job_with_us_job_with_us__["a" /* JobWithUsPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_policies_policies__["a" /* PoliciesPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_payments_payments__["a" /* PaymentsPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_edit_user_edit_user__["a" /* EditUserPage */],
            __WEBPACK_IMPORTED_MODULE_49__pages_my_services_my_services__["a" /* MyServicesPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_services_care_services_care__["a" /* ServicesCarePage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_services_cleaning_services_cleaning__["a" /* ServicesCleaningPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_services_janotorial_services_janotorial__["a" /* ServicesJanotorialPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_services_transportation_services_transportation__["a" /* ServicesTransportationPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_services_food_services_food__["a" /* ServicesFoodPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_services_legal_services_legal__["a" /* ServicesLegalPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_services_beauty_services_beauty__["a" /* ServicesBeautyPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_myserviceinfo_myserviceinfo__["a" /* MyserviceinfoPage */],
            __WEBPACK_IMPORTED_MODULE_51__pages_add_payment_method_add_payment_method__["a" /* AddPaymentMethodPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_geocode_service__["a" /* GeocodeServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_52__services_braintree_service__["a" /* BraintreeService */],
            __WEBPACK_IMPORTED_MODULE_54__services_professionals_service__["a" /* ProfessionalsService */],
            __WEBPACK_IMPORTED_MODULE_53__services_offer_service__["a" /* OfferService */],
            __WEBPACK_IMPORTED_MODULE_55__services_professions_service__["a" /* ProfessionsService */],
            __WEBPACK_IMPORTED_MODULE_58__services_careProfessions_service__["a" /* CareProfessionsService */],
            __WEBPACK_IMPORTED_MODULE_59__services_cleaningProfessions_service__["a" /* CleaningProfessionsService */],
            __WEBPACK_IMPORTED_MODULE_60__services_sale_service__["a" /* SaleService */],
            __WEBPACK_IMPORTED_MODULE_56__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_57__services_encripty_service__["a" /* EncriptyService */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__["a" /* Facebook */],
            // Media,
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_61__services_notificacion_service__["a" /* NotificacionService */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_address_new_address__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_show__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_geocode_service__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
// import * as geonames from 'search-geonames';
// import * as firebase from 'firebase/app';
//-pages

// import { PreHomePage } from '../pre-home/pre-home';

//-service


/**
 * Generated class for the PreHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PreHomePage = PreHomePage_1 = (function () {
    function PreHomePage(navCtrl, navParams, 
        //public authServiceProvider: AuthServiceProvider,
        userService, geo, platform, afAuth, 
        // private nativeGeocoder: NativeGeocoder,
        geocodeServiceProvider) {
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
        // console.log(this.userData);
        console.log(this.userActual);
        //this.getUrlDataAddres(); 
        this.getAddressUser(this.userActual);
    };
    PreHomePage.prototype.goShow = function (item) {
        //console.log(item);
        var DataItem = { 'datos': item };
        localStorage.setItem('address', JSON.stringify(item));
        //console.log(DataItem);  
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__show_show__["a" /* ShowPage */], DataItem);
    };
    PreHomePage.prototype.goNewAddress = function () {
        var DataItem = { 'datos': this.userData };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__new_address_new_address__["a" /* NewAddressPage */], DataItem);
    };
    PreHomePage.prototype.DropAddress = function (item) {
        console.log(item);
        this.userService.dropAddress(this.userActual, item.keyAddress);
        // this.getAddressUser(this.userActual);
        var Data = { 'datos': this.userData };
        this.navCtrl.setRoot(PreHomePage_1, Data);
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
            // console.log(result);
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
                // console.log(usuario);
                console.log(datosUsuario[usuario]);
                _this.address.push({ "label": datosUsuario[usuario]['addr_label'], "name": datosUsuario[usuario]['addr_info'], "keyAddress": usuario });
                if (cont == 1) {
                    if (!localStorage.getItem('address')) {
                        localStorage.setItem('address', JSON.stringify({ "label": datosUsuario[usuario]['addr_label'], "name": datosUsuario[usuario]['addr_info'] }));
                        cont += 1;
                    }
                }
                //console.log(this.address);
            }
            //console.log(datosUsuario);
        });
        // console.info(localStorage);
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
                console.info('geoLocation');
                // console.log(resp);
                // console.log(resp.coords);
                // console.info(JSON.stringify(resp));
                // console.info(resp.coords.latitude);
                // console.info(resp.coords.longitude);
                // alert(resp.coords.latitude);
                // alert(resp.coords.longitude);
                _this.lat = resp.coords.latitude;
                _this.lng = resp.coords.longitude;
                _this.getNameAddress();
            }).catch(function () {
                console.log("Error to get location");
                // alert('e get location');
                _this.getUserLocation();
            });
        });
    };
    PreHomePage.prototype.getUserLocation = function () {
        var _this = this;
        /// locate the user
        // console.info('get User location2');
        // alert('get User location2');
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
        // console.log(geolocationz);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.info('Location');
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                // console.info(position.coords.latitude);
                // console.info(position.coords.longitude);
                // alert('pos-lat:'+position.coords.latitude);
                // alert('pos-lng:'+position.coords.longitude);
                _this.getNameAddress();
            });
        }
    };
    PreHomePage.prototype.guardarDireccionGeo = function (geoDireccion) {
        var booleanGuardarDireccion = true;
        var label = 'My Address';
        this.ObjAddress.push({ "label": label, "name": geoDireccion });
        //console.log(DataItem);  
        // console.log(this.ObjAddress);
        // console.log(this.ObjAddress['0']);
        for (var key in this.address) {
            // console.log(this.address[key]['name']);
            if (this.address[key]['name'] == geoDireccion) {
                booleanGuardarDireccion = false;
            }
        }
        if (booleanGuardarDireccion != false) {
            // console.log(JSON.stringify(this.ObjAddress['0']));
            this.userService.newAddress(this.userActual, this.ObjAddress);
            localStorage.setItem('address', JSON.stringify({ "label": label, "name": geoDireccion }));
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__show_show__["a" /* ShowPage */]);
        }
        else {
            localStorage.setItem('address', JSON.stringify({ "label": label, "name": geoDireccion }));
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__show_show__["a" /* ShowPage */]);
        }
        // console.info(localStorage);
    };
    return PreHomePage;
}());
PreHomePage = PreHomePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pre-home',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\pre-home\pre-home.html"*/'<!--\n\n  Generated template for the PreHomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n  	<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="card-background-page">\n\n  <ion-card>\n\n    <img src="assets/img/JoBidUsuario.jpg"/>\n\n    <div class="card-title"><h3>{{userName}}</h3></div>\n\n    <div class="card-subtitle"><p>¿Where you want your service?</p></div>\n\n	</ion-card>\n\n  <ion-grid class="btnAddress">\n\n  	<ion-row>\n\n  		<!-- <ion-col col-6> -->\n\n  		<ion-col>\n\n			<ion-list>\n\n				<button ion-item (click)="goLocation()" >\n\n					<ion-icon name="pin" item-start></ion-icon>\n\n					<ion-label>Current location</ion-label>\n\n				</button>\n\n			</ion-list>\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n  		<!-- <ion-col col-6> -->\n\n  		<ion-col>\n\n  			<ion-list>\n\n	  			<button ion-item (click)="goNewAddress()">\n\n  					<ion-icon name="add-circle" item-start></ion-icon>\n\n  					<ion-label>New Address</ion-label>\n\n	  			</button>\n\n  			</ion-list>\n\n  		</ion-col>\n\n  	</ion-row>\n\n  </ion-grid>\n\n	<ion-list>\n\n		<ion-grid>\n\n			<ion-row *ngFor="let item of address">\n\n				<ion-col col-10>\n\n					<button ion-item (click)="goShow(item)">\n\n						<h3>{{ item.label }}</h3>\n\n						<p>{{ item.name }}</p>\n\n					</button>  \n\n				</ion-col>\n\n				<ion-col col-2>\n\n						<button  ion-button block (click)="DropAddress(item)" icon-only round color="danger">\n\n								<ion-icon name=\'close\'></ion-icon>\n\n						</button>\n\n				</ion-col>\n\n			</ion-row>\n\n		</ion-grid>\n\n	</ion-list>\n\n	<!-- <button ion-button (click)="clickCamara()">camara</button> -->\n\n</ion-content>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\pre-home\pre-home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_7__providers_geocode_service__["a" /* GeocodeServiceProvider */]])
], PreHomePage);

var PreHomePage_1;
//# sourceMappingURL=pre-home.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_show_show__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_job_with_us_job_with_us__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_policies_policies__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pre_home_pre_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_payment_method_add_payment_method__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_edit_user_edit_user__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_my_services_my_services__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__(31);
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

//--page








//import { CleaningContractorPage } from '../pages/cleaning-contractor/cleaning-contractor';
//import { CleaningPage } from '../pages/cleaning/cleaning';
//import { PreHomePage } from '../pages/pre-home/pre-home';
//import { CleaningSalePage } from '../pages/cleaning-sale/cleaning-sale';
//import { PaymentMethodsPage } from '../pages/payment-methods/payment-methods';
//import { PaymentsPage } from '../pages/payments/payments';
// import { CleaningSalePage } from '../pages/cleaning-sale/cleaning-sale';
//-service

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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.menu_is_enabled = true;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Edit', component: __WEBPACK_IMPORTED_MODULE_11__pages_edit_user_edit_user__["a" /* EditUserPage */] },
            { title: 'Menu', component: __WEBPACK_IMPORTED_MODULE_6__pages_show_show__["a" /* ShowPage */] },
            { title: 'My services', component: __WEBPACK_IMPORTED_MODULE_12__pages_my_services_my_services__["a" /* MyServicesPage */] },
            { title: 'Address', component: __WEBPACK_IMPORTED_MODULE_9__pages_pre_home_pre_home__["a" /* PreHomePage */] },
            { title: 'Payments', component: __WEBPACK_IMPORTED_MODULE_10__pages_add_payment_method_add_payment_method__["a" /* AddPaymentMethodPage */] },
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
        //let userDBLoad:any;
        //let goPagePrehomeLoad = false;
        this.afAuth.authState.subscribe(function (userAuth) {
            //console.log('find user menu');
            //console.log(userAuth);
            if (userAuth) {
                // let email=  userAuth.providerData["0"].email;
                if (userAuth.providerData["0"].providerId == 'password') {
                    var email = userAuth.providerData["0"].email;
                    console.log(email);
                    var Userexists_1 = _this.userService.getUserEmailPerfil(email).subscribe(function (User) {
                        console.log('User Logueado');
                        console.log(User);
                        if (User['0']) {
                            _this.loadViewUser(User['0']);
                            if (Userexists_1 != undefined) {
                                Userexists_1.unsubscribe();
                            }
                        }
                    });
                }
                else {
                    var faceUid = userAuth.uid;
                    console.log(faceUid);
                    var Userexists_2 = _this.userService.getUserUidFace(faceUid).subscribe(function (User) {
                        console.log('User Logueado');
                        console.log(User);
                        if (User['0']) {
                            _this.loadViewUser(User['0']);
                            if (Userexists_2 != undefined) {
                                Userexists_2.unsubscribe();
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
            }
            else {
                console.info('find user menu - no');
            }
        });
    };
    MyApp.prototype.loadViewUser = function (user) {
        this.userMenu = { "email": user['user_email'], "name": user['user_name'], "pais": user['user_pais'], "password": user['user_password'], "picture": user['user_picture'], "state": user['user_state'], "tel": user['user_tel'], "username": user['user_username'], "verificacion": user['$key'], "zipcode": user['user_zipcode'] };
        this.userName = user['user_username'];
        if (user['user_picture'] && user['user_picture'] != '' && user['user_picture'] != null && user['user_picture'] != undefined) {
            this.srcUser = user['user_picture'];
        }
        if (user['user_star'] && user['user_star'] != '' && user['user_star'] != null && user['user_star'] != undefined) {
            this.star = Math.round(user['user_star']);
            var contenido = '';
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
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title class="tittleMenu">JoBid</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n        <ion-item class="imgUser">\n\n          <ion-thumbnail item-start>\n\n            <img src="{{srcUser}}" alt="userLogo">\n\n          </ion-thumbnail>\n\n          <p>{{userName}}</p>\n\n          <!-- <p><ion-icon name="star" class="nota" item-start></ion-icon> {{star}}</p> -->\n\n          <p class="Calificacion Usuario {{starUser}}">\n\n							<label for="radio1">&#9733;</label>\n\n							<label for="radio2">&#9733;</label>\n\n							<label for="radio3">&#9733;</label>\n\n							<label for="radio4">&#9733;</label>\n\n							<label for="radio5">&#9733;</label>\n\n						</p>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n      <button ion-item class="loginOut" menuToggle (click)="cerrarSeccion()">\n\n        Login out\n\n      </button> \n\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer>\n\n      <ion-toolbar>\n\n          <ion-list>\n\n              <button ion-item (click)="goJobWithUs()" menuToggle>\n\n                Job with us\n\n              </button>\n\n              <button ion-item (click)="goPolicies()" menuToggle>\n\n                Policies <p class="version">V.1</p>\n\n              </button> \n\n               \n\n            </ion-list>\n\n      </ion-toolbar>\n\n    </ion-footer>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" ></ion-nav>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        selector: 'page-list',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyYourPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_methods_payment_methods__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(31);
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
        selector: 'page-verify-your-phone',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\verify-your-phone\verify-your-phone.html"*/'<!--\n\n  Generated template for the VerifyYourPhonePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>verifyYourPhone</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n    <img src="assets/img/JoBidUsuario.jpg">\n\n    <h5 id="verifyYourPhone-heading3">Verify your phone </h5>\n\n    <div id="verifyYourPhone-markdown3" class="show-list-numbers-and-dots">\n\n      <p style="color:#000000;">Enter the confirmation number </p>\n\n    </div>\n\n    <form id="verifyYourPhone-form4" class="list" padding>\n\n     <ion-list>\n\n        <ion-item class="iconJunto">\n\n          <ion-icon name="lock" item-start></ion-icon>\n\n          <ion-input type="text" placeholder="Confirmation number" [(ngModel)]="codVerificacion" name="codVerificacion"></ion-input>\n\n        </ion-item>\n\n     </ion-list>\n\n    </form>\n\n    <div class="spacer"></div>\n\n    <div class="btnBottom" padding>\n\n      <button id="verifyYourPhone-button6" ion-button block color="danger" (click)="goPayMethod()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\verify-your-phone\verify-your-phone.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
], VerifyYourPhonePage);

//# sourceMappingURL=verify-your-phone.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pre_home_pre_home__ = __webpack_require__(48);
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
        selector: 'page-payinfo',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\payinfo\payinfo.html"*/'<!--\n\n  Generated template for the PayinfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>payinfo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n	<img src="assets/img/JoBidUsuario.jpg">\n\n    <h5 id="payinfo1">Payment information </h5>\n\n    <h6 id="payinfo2">Complete the next form with all data requeried</h6>\n\n    <div class="spacer"></div>\n\n    <form id="formPayinfo" class="list" padding>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n                <ion-icon name="card" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Card number"></ion-input>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col col-2 id="btn-camera">\n\n              <button ion-button color="danger" outline><ion-icon name="camera"></ion-icon></button>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n          <ion-list><ion-item>\n\n            <ion-icon name="calendar" item-start></ion-icon>\n\n              <ion-input type="number" placeholder="MM"></ion-input>\n\n              <!-- <ion-label>/</ion-label> -->\n\n              <ion-input type="number" placeholder="YY"></ion-input>\n\n          </ion-item></ion-list>\n\n          </ion-col>\n\n          <ion-col col-6> \n\n            <ion-list><ion-item> \n\n              <ion-icon name="lock" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="###"></ion-input>\n\n            </ion-item></ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-list><ion-item>\n\n              <ion-icon name="person" item-start></ion-icon>\n\n              <ion-input type="text" placeholder="Credit card user name"></ion-input>\n\n            </ion-item></ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-list><ion-item>\n\n              <ion-icon name="calendar" item-start></ion-icon>\n\n              <ion-label>Date of birth</ion-label>\n\n              <ion-input type="date" placeholder="10/31/2013"></ion-input>\n\n            </ion-item></ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col> \n\n            <div class="btnBottom">\n\n              <button ion-button color="danger" block icon-left (click)="goIndex()">Save payment method<ion-icon name="arrow-dropright"></ion-icon></button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\payinfo\payinfo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PayinfoPage);

//# sourceMappingURL=payinfo.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_sale_cleaning_sale__ = __webpack_require__(39);
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
        selector: 'page-cleaning-info',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\cleaning-info\cleaning-info.html"*/'<!--\n\n  Generated template for the CleaningInfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<div class="imgCenter">\n\n	 <ion-icon name="contact" [ngClass]="dataService.class"></ion-icon> \n\n  	</div>\n\n	<div class="TituloRojo"><h4>{{dataService.name}}</h4></div>\n\n	<h4>Service information</h4>\n\n	<p padding>Describes what the professional requires.</p>\n\n<form id="formPayinfo" class="list" padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-icon name="cash" item-start></ion-icon>\n\n            <ion-input type="text" placeholder="Maximum offer value"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-10>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-icon name="logo-usd" item-start></ion-icon>\n\n            <ion-input type="text" placeholder="Photography\n\n"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-2 id="btn-camera">\n\n          <button ion-button color="danger" outline><ion-icon name="camera"></ion-icon></button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-8>\n\n      <ion-list><ion-item>\n\n         <ion-icon name="information-circle" item-start></ion-icon>\n\n          <ion-select class="mitad"> <!--[(ngModel)]="gaming"-->\n\n              <ion-option selected value="1R" >1 Room</ion-option>\n\n              <ion-option value="2R" >2 Rooms</ion-option>\n\n              <ion-option value="3R" >3 Rooms</ion-option>\n\n              <ion-option value="4R" >4 Rooms</ion-option>\n\n              <ion-option value="5R" >5 Rooms</ion-option>\n\n              <ion-option value="5RM" >5 Rooms</ion-option>\n\n              <ion-option value="NR" >No</ion-option>\n\n            </ion-select>\n\n            <ion-select  class="mitad"> <!--[(ngModel)]="gaming"-->\n\n              <ion-option selected value="1B">1 Bath</ion-option>\n\n              <ion-option value="2B">2 Bathrooms</ion-option>\n\n              <ion-option value="3B">3 Bathrooms</ion-option>\n\n              <ion-option value="NB">N Bathrooms</ion-option>\n\n            </ion-select>\n\n      </ion-item></ion-list>\n\n      </ion-col>\n\n      <ion-col col-4> \n\n        <ion-list><ion-item> \n\n          <ion-input type="number" placeholder="Mts\n\n"></ion-input>\n\n        </ion-item></ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-list><ion-item>\n\n          <ion-icon name="paper" item-start></ion-icon>\n\n          <ion-textarea type="text" placeholder="More information"></ion-textarea>\n\n        </ion-item></ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col> \n\n        <div class="btnBottom">\n\n          <button ion-button color="danger" block icon-left (click)="goCleaningSale()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n	</ion-grid>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\cleaning-info\cleaning-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CleaningInfoPage);

//# sourceMappingURL=cleaning-info.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        selector: 'page-profession',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\profession\profession.html"*/'<!--\n\n  Generated template for the ProfessionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<p style="text-align: center; color:black;">page profession 2</p>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\profession\profession.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ProfessionPage);

//# sourceMappingURL=profession.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_payment_method_add_payment_method__ = __webpack_require__(211);
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
        selector: 'page-payments',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\payments\payments.html"*/'<!--\n\n  Generated template for the PaymentsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<h3>My payments</h3>\n\n<h4>List:</h4>\n\n  <ion-list>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <div class="btnBottom">\n\n        <button ion-button color="danger" block (click)="goAddPaymentMethod()">\n\n          Add payment method\n\n        </button> \n\n      </div>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\payments\payments.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PaymentsPage);

//# sourceMappingURL=payments.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncriptyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js_sha256__ = __webpack_require__(661);
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

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareProfessionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(58);
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
            case "Child care/Nany": {
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
        // 	case "Child care/Nany":{
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

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CleaningProfessionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(58);
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

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenarPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the OrdenarPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var OrdenarPipe = (function () {
    function OrdenarPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    OrdenarPipe.prototype.transform = function (value, ordenar) {
        // console.log(value);
        if (ordenar == 'estados') {
            return value.sort(function (a, b) {
                // console.log(a);
                // console.log(a.name);
                // console.log(b);
                // console.log(b.name);
                // console.log(a.name.localeCompare(b.name));
                // console.log('---');
                return a.name.localeCompare(b.name);
            });
        }
        if (ordenar == 'codeEstados') {
            return value.sort(function (a, b) {
                // console.log(a);
                // console.log(a.code);
                // console.log(b);
                // console.log(b.code);
                // console.log('---');
                return a.code - b.code;
            });
        }
        if (ordenar == 'ciudades') {
            return value.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
        }
        // {
        //   return value.sort();
        // }
    };
    return OrdenarPipe;
}());
OrdenarPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'ordenar',
    })
], OrdenarPipe);

//# sourceMappingURL=ordenar.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoverPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the RemoverPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var RemoverPipe = (function () {
    function RemoverPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RemoverPipe.prototype.transform = function (value) {
        if (value !== undefined && value !== null) {
            return __WEBPACK_IMPORTED_MODULE_1_lodash__["uniqBy"](value, 'name');
        }
        return value;
    };
    return RemoverPipe;
}());
RemoverPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'remover',
    })
], RemoverPipe);

//# sourceMappingURL=remover.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cleaning_cleaning__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_professions_service__ = __webpack_require__(195);
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
    function ShowPage(navCtrl, navParams, professionsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professionsService = professionsService;
        this.direccion = [];
        this.professions = [];
        this.showProfessionals();
    }
    ShowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowPage');
        // console.log(localStorage);
        this.direccion = JSON.parse(localStorage.getItem('address'));
    };
    ShowPage.prototype.onSuccess = function () {
        console.log(' success');
    };
    ShowPage.prototype.onError = function () {
        console.log('error');
    };
    ShowPage.prototype.Cleaning = function (item) {
        // console.log(item);
        var DataService = { 'datos': item };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cleaning_cleaning__["a" /* CleaningPage */], DataService);
    };
    ShowPage.prototype.showProfessionals = function () {
        this.professions = this.professionsService.getProfessions();
        console.log(this.professions);
    };
    return ShowPage;
}());
ShowPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-show',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\show\show.html"*/'<!--\n\n  Generated template for the ShowPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<!-- <button ion-button block color="light"(click)="profession()">login</button> -->\n\n<h3>Address: </h3>\n\n<p><strong>{{direccion.label}}</strong></p>\n\n<p>{{direccion.name}}</p>\n\n<ion-grid class="gridProfession">\n\n     <ion-row wrap>\n\n      <ion-col *ngFor="let item of professions"  (click)="Cleaning(item)" col-4 >\n\n        <button ion-button block color="light">\n\n          <ion-grid>\n\n            <ion-row>\n\n              <!-- <ion-icon name="contact" [ngClass]="item.class"></ion-icon> -->\n\n              <img src="{{item.img}}" >\n\n            </ion-row>  \n\n            <ion-row>\n\n             <p>{{item.name}}</p>\n\n            </ion-row>\n\n          </ion-grid> \n\n        </button>\n\n      </ion-col>\n\n     </ion-row>\n\n    </ion-grid>  \n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\UsuarioApp_JoBid\src\pages\show\show.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_professions_service__["a" /* ProfessionsService */]])
], ShowPage);

//# sourceMappingURL=show.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionalsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(58);
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
        //  console.log('load ProfessionalsService');
        //  console.log(this.professionals);
        //  console.log(this.afDB);
    }
    //-get
    ProfessionalsService.prototype.getProfessionals = function () {
        // console.log(this.afDB.list('/professionals/'));
        return this.afDB.list('/professionals/');
    };
    ProfessionalsService.prototype.getProfessional = function (id) {
        // console.log('getProfessionalId');
        // console.log(id);
        return this.afDB.object('/professionals/' + id);
        //this.afDB.ref('/professionals/prof_1'); 
    };
    //-set
    ProfessionalsService.prototype.setComment = function (keyProvider, Object, keyComment) {
        var key = undefined;
        // console.log('key:'+key);
        console.log('keyNew:' + keyComment);
        if (keyComment && keyComment != null && keyComment != undefined) {
            keyComm = keyComment;
        }
        else {
            var d = new Date();
            key = d.getTime();
            var keyComm = "comm_" + (key);
        }
        console.log('comment');
        this.afDB.object('/professionals/' + keyProvider + '/prof_comments/' + keyComm).set({ 'comm_description': Object['comment'], 'comm_qualification': Object['estrellas'], 'user_username': Object['userId'] }).catch(function () { return console.log('error set commets'); });
    };
    ProfessionalsService.prototype.setStar = function (keyProvider, calificacion) {
        console.log('comment');
        this.afDB.object('/professionals/' + keyProvider + '/prof_star').set(calificacion).catch(function () { return console.log('error set star'); });
    };
    return ProfessionalsService;
}());
ProfessionalsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], ProfessionalsService);

//# sourceMappingURL=professionals.service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(167);
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

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BraintreeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(167);
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



var apiUrlBase = "https://us-central1-usuarioappjobid.cloudfunctions.net/api";
var BraintreeService = (function () {
    function BraintreeService(http) {
        this.http = http;
        console.log('Hello BraintreeServiceProvider Provider');
    }
    BraintreeService.prototype.CrearCustomer = function (keyCustomer) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var getCrearCustom = _this.http.get(apiUrlBase + '/customer/create/' + keyCustomer).subscribe(function (result) {
                console.log(result);
                console.log(JSON.stringify(result));
                resolve(result);
                getCrearCustom.unsubscribe();
            }, function (err) {
                reject(err);
                console.log('error CrearCustomer');
                console.log(err);
                //alert('error service'+err);
                getCrearCustom.unsubscribe();
            });
        });
    };
    BraintreeService.prototype.CrearTokenCustomer = function (keyCustomer) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var getCrearCustom = _this.http.get(apiUrlBase + '/getTokenCustom/' + keyCustomer).subscribe(function (result) {
                console.log(result);
                // console.log(result['_body']);
                // console.log(JSON.parse( result['_body']).clientToken);
                // console.log(JSON.stringify(result));
                resolve(JSON.parse(result['_body']).clientToken);
                getCrearCustom.unsubscribe();
            }, function (err) {
                reject(err);
                console.log('error CrearTokenCustomer');
                console.log(err);
                //alert('error service'+err);
                getCrearCustom.unsubscribe();
            });
        });
    };
    BraintreeService.prototype.CrearSaleCustomer = function (keyCustomer, sale, provider, offer, subService) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log(apiUrlBase + '/SaleCustomer/' + keyCustomer + '/' + sale + '/' + provider + '/' + offer + '/' + subService);
            var setSaleCustomSubs = _this.http.get(apiUrlBase + '/SaleCustomer/' + keyCustomer + '/' + sale + '/' + provider + '/' + offer + '/' + subService).subscribe(function (result) {
                console.log(result);
                // console.log(result['_body']);
                // console.log(JSON.parse( result['_body']).clientToken);
                console.log(JSON.stringify(result));
                // resolve (JSON.parse( result['_body']).clientToken);
                setSaleCustomSubs.unsubscribe();
            }, function (err) {
                reject(err);
                console.log('error CrearTokenCustomer');
                console.log(err);
                //alert('error service'+err);
                setSaleCustomSubs.unsubscribe();
            });
        });
    };
    BraintreeService.prototype.CancelSaleCustomer = function (keyCustomer, sale) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log(apiUrlBase + '/SaleCancel/' + keyCustomer + '/' + sale);
            var setSaleCustomSubs = _this.http.get(apiUrlBase + '/SaleCancel/' + keyCustomer + '/' + sale).subscribe(function (result) {
                console.log(result);
                // console.log(result['_body']);
                // console.log(JSON.parse( result['_body']).clientToken);
                console.log(JSON.stringify(result));
                // resolve (JSON.parse( result['_body']).clientToken);
                setSaleCustomSubs.unsubscribe();
            }, function (err) {
                reject(err);
                console.log('error CrearTokenCustomer');
                console.log(err);
                //alert('error service'+err);
                setSaleCustomSubs.unsubscribe();
            });
        });
    };
    return BraintreeService;
}());
BraintreeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], BraintreeService);

//# sourceMappingURL=braintree.service.js.map

/***/ })

},[403]);
//# sourceMappingURL=main.js.map