import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import cities from 'cities';
import STATE_UTILS from 'states-utils';
import { AngularFireAuth } from 'angularfire2/auth';
import { storage } from 'firebase';
import * as firebase from 'firebase/app';
//import { Http , Response, Headers, RequestOptions} from '@angular/http';
//import UsaStates from 'usa-states';
//import firebase from 'firebase';
// import { Promise } from 'firebase/app';

//page
import { PaymentMethodsPage } from '../payment-methods/payment-methods';
//import { VerifyYourPhonePage } from '../verify-your-phone/verify-your-phone';

//services
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UserService } from '../../services/user.service';
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

@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {
  DirecA: any; DirecB: any; DirecC: any; DirecD: any; telA: any; telB: any;
  // private pagesUrl: any;
  responseData: any;
  responseDataUser: any;
  findNameEstado: string;

  codeAreaList: any;
  codeAreaEstadoSelect: any = [];
  country: any; area: any; prefix: any; line: any;
  userData = { "username": "", "password": "", "email": "", "name": "", "zipcode": "", "state": "", "picture": "", "verificacion": "", "pais": "", "direccion": "", "tel": "", "uidFace": "" };
  passwordB: any;
  ciudades: any = [];
  ciudad: string = undefined;
  stateZipcode: string = undefined;
  estados: any = [];
  foto: any;
  disImg: boolean = true;
  userActual: any;
  userFacebook: firebase.User;
  //correo enviado
  correoEnviado: boolean = false;
  //--form validator
  private singupForm: FormGroup;

  //-sub
  SubcribeUserexists: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authServiceProvider: AuthServiceProvider,
    public alertCtrl: AlertController,
    private userService: UserService,
    public afAuth: AngularFireAuth,
    private formBuilder: FormBuilder,
    private camera: Camera,
    // public win:WindowService 
  ) {

    // var stateName = STATE_UTILS.getStates();
    // var stateNameShort = STATE_UTILS.getUSPSCodes();
    // this.pagesUrl = '../assets/lib/codeAreaUsa.json';
    // for (var i = 0; stateName.length > i; i++) {
    //   this.estados.push({'name':stateName[i],'nameShort':stateNameShort[i]});
    // }
    //console.log(this.estados);
    //var ciudad :{ name = string; zipcode = number;} =  [];
    // var usStates = new UsaStates();
    // console.log(usStates.states);
    //var UsaStates = require('usa-states').UsaStates;
    //alert(cities.findByState('NJ'));
    // this.codeAreaDefi();
    this.getForm();
    var d = new Date();
    var key = d.getTime();
    this.userActual = "user_" + (key);
    console.log(this.userActual);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingupPage');
    this.foto = "assets/img/user.png";
    this.disImg = false;
    //--guarda el usuario de facebook
    this.userFacebook = firebase.auth().currentUser;
    console.log(this.userFacebook);

    // if(firebase.auth().currentUser != null){
    //   console.log(firebase.auth().currentUser.emailVerified);
    // }
    // let user:any = firebase.auth().currentUser;
    // console.log(user);
    // if (user.isEmailVerified()) {
    //   console.log('user verificado');
    // }else{
    //   console.log('user no verificado');
    // }
    //--toma los datos de facebook para llenar el formulario
    firebase.auth().currentUser
    let aftSbus = this.afAuth.authState.subscribe(user => {
      console.log('find user facebook 2');
      console.log(user);
      if (user) {
        if (user.providerData["0"].providerId == "facebook.com") {
          if (this.userData['picture'] == '' || this.userData['picture'] == undefined || this.userData['picture'] == null) {
            console.info('find user facebook 2 - si');
            this.userData['name'] = this.userData['username'] = user.providerData["0"].displayName;
            this.userData['email'] = user.providerData["0"].email;
            this.userData['uidFace'] = user.uid;
            this.userData['picture'] = user.providerData["0"].photoURL;
            if (user.providerData["0"].photoURL != undefined && user.providerData["0"].photoURL != '') {
              this.foto = user.providerData["0"].photoURL;
              this.disImg = false;
            }
            console.log(this.userData);
          }
        }
        console.log('aftSbus-US singup');
        aftSbus.unsubscribe();
        //this.envioCorreoFacebook();
      } else {
        console.info('find user facebook 2 - no');
        console.log('aftSbus-US singup');
        aftSbus.unsubscribe();
      }
    });
  }

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

  goPhoneV() {
    //verificaque las contraseñas son iguales
    if (this.userData.password == this.passwordB) {
      // this.SubcribeUserexists = this.userService.getUserEmailPerfil(this.userData["email"]).subscribe((value) => {
      //   console.log('SubcribeUserexists-US singup');
      //   console.log('user1');
      //   console.log(value);
      //   if (value['0']) {
      //     console.log(value["0"].user_username);
      //     console.log(this.userData["username"]);
      //     if (value["0"].user_username == this.userData["username"]) {
      //       console.log(value["0"].user_username);
      //       estoyLogueado = true;
      //       console.log(estoyLogueado);
      //     }
      //   }
      //-usuario existe
      this.verificarUsuario().then(
        (estoyLogueado: boolean) => {
          console.log(estoyLogueado);
          console.log('SubcribeUserexists-US singup');
          this.SubcribeUserexists.unsubscribe();
          if (estoyLogueado == false) {
            console.log('creando usuario');
            this.crearCuenta();
          } else {
            console.log('alerta signUp');
            this.showAlertSignUp();
          }
        }).catch(() => { console.log('info verificar usuario') });
      // });
    } else {
      this.showAlertPwd();
    }
  }

  //-usuario existe
  verificarUsuario() {
    return new Promise((resolve, reject) => {
      this.SubcribeUserexists = this.userService.getUserEmailPerfil(this.userData["email"]).subscribe((value) => {
        console.log('SubcribeUserexists-US singup');
        console.log('user1');
        console.log(value);
        if (value['0']) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  crearCuenta() {
    //alert('code:'+this.userData.verificacion);
    this.userData.direccion = this.DirecA + ' ' + this.DirecB + ',' + this.DirecC + ',' + this.DirecD;
    this.userData.zipcode = this.DirecD;
    this.userData.tel = '(' + this.telA + ')' + this.telB;
    this.userData.picture = this.foto;
    //this.userData.verificacion = ''+Math.floor((Math.random() * 99999) + 11111);
    console.log('code:' + this.userData.verificacion);
    this.crearCuentaFirebase();
  }
  // postCode(){
  //   this.authServiceProvider.postData(this.userData,'code').then((result) => {
  //       //this.responseData = result;
  //       //console.log(result);
  //       this.crearCuentaFirebase();
  //     }, (err) => {
  //       //   // Error log
  //       console.log('error envio');
  //       console.log(err);
  //       //   alert('error correo');
  //     });
  // }
  crearCuentaFirebase() {
    //alert('userData'+ JSON.stringify(this.responseData));
    //localStorage.setItem('userData', JSON.stringify(this.responseData));
    // this.userB.sendEmailVerification().then(
    //   (success) => {
    //     console.info("please verify your email - account face");

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
      this.afAuth.auth.createUserWithEmailAndPassword(this.userData['email'], this.userData['password'])
        .then(
        (value) => {
          console.log(value);
          if (value != undefined) {
            // alert(JSON.stringify(value));
            // alert('cuenta correo creada');
            console.log(value);
            this.enviarCorreo();
          }
        }).catch(
        (err) => {
          console.error('error user create');
          console.error(err);
          // this.showAlertSignUp();
          // this.crearUserBD();
        });


    } catch (e) { console.error(e); }
  }

  enviarCorreo() {
    // console.log(this.afAuth.auth.currentUser);

    this.afAuth.auth.currentUser.sendEmailVerification()
      // console.log(value);

      // console.log(firebase.auth());
      // console.log(firebase.auth().currentUser);
      // value.sendEmailVerification()
      .then(
      (success) => {
        // console.log(firebase.auth());
        console.log(success);
        // if (success != undefined) {
        console.info("please verify your email - account correo");
        this.crearUserBD();
        // alert("please verify your email - account correo");
        console.log(success);
        // alert(JSON.stringify(success));
        this.correoEnviado = true;
        // }
      }, (err) => {
        console.error('error envio correo - account correo');
        // alert('error envio correo - account correo');
        console.error(err);
        // alert(JSON.stringify(err));
      }
      ).catch((err) => {
        console.error('error envio correo - account correo');
        // alert('error envio correo - account correo');
        console.error(err);
        // alert(JSON.stringify(err));
      });
  }

  crearUserBD() {
    // console.log(JSON.stringify(this.userData));
    // let Data = {'datos':this.userData};
    // this.navCtrl.push(VerifyYourPhonePage, Data);

    console.log(this.userData);
    //this.traerPost();
    if (this.userFacebook != null) {
      this.userFacebook.updateEmail('facebook-' + this.userData.email).then((userUpdateEmailFirebase) => {
        // alert('correo ligado a cuenta de facebook');
      }
      ).catch((infoC) => {
        // alert(JSON.stringify(infoC));
        // alert('infoC update email');
      });
    }
    this.userData['verificacion'] = this.userActual;
    console.log(this.userData);
    this.userService.newUser(this.userData, this.userActual);
    // if (this.correoEnviado) {
    //   this.showAlertEmail();
    // }
    let Data = { 'datos': this.userData };
    this.navCtrl.push(PaymentMethodsPage, Data);
  }

  setCity() {
    //console.log(this.userData.state);
    this.userData.zipcode = undefined;
    var someArray = undefined;
    this.ciudades = [];
    someArray = cities.findByState(this.userData.state);
    for (let entry of someArray) {
      //var city= entry['city'];
      if (typeof entry['city'] !== 'undefined' && entry['city'] !== null && entry['city'] !== '') {
        //console.log(entry['city']); // 1, "string", false
        this.ciudades.push({ 'name': entry['city'], 'zipcode': entry['zipcode'] });
      }

    }
    this.findCodeEstado(STATE_UTILS.getStateName(this.userData.state));
  }

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
  setZipCode() {
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
    } else {
      this.DirecD = '';
    }
  }

  findCodeEstado(estado: string) {

    //console.log(this.callCodeArea());
    //console.log(this.codeAreaList);
    var codeAreaList = this.codeAreaList;
    //console.log(this.codeAreaList.find(this.findEstado));
    for (let entry of codeAreaList) {
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
  }

  //alerts
  showAlertSignUp() {
    let alert = this.alertCtrl.create({
      title: 'Sign up failed',
      subTitle: 'The user and the mail is already there',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlertPwd() {
    let alerteMail = this.alertCtrl.create({
      title: 'Information',
      subTitle: 'The passwords are not the same',
      buttons: ['OK']
    });
    alerteMail.present();
  }

  // showAlertEmail() {
  //   let alerteMail = this.alertCtrl.create({
  //     title: 'Information',
  //     subTitle: 'An email has been sent to verify your acount',
  //     buttons: ['OK']
  //   });
  //   alerteMail.present();
  // }

  //-- validacion de formulario
  getForm() {
    this.singupForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.pattern('[A-z]+(\ [A-z]+){0,3}'), Validators.required])],
      pais: ['', Validators.required],
      state: ['', Validators.required],
      // zipcode : ['', Validators.required],
      DirecA: ['', Validators.required],
      DirecB: ['', Validators.required],
      DirecC: ['', Validators.required],
      DirecD: ['', Validators.required],
      email: ['', Validators.compose([Validators.pattern('[A-z0-9-_.]+@[A-z0-9]+\.(.{1}[A-z0-9]+){1,2}'), Validators.required])],
      username: ['', Validators.required],
      foto: [''],
      password: ['', Validators.required],
      passwordB: ['', Validators.required],
      telA: ['', Validators.required],
      telB: ['', Validators.required],
    });
  }

  //-- camara
  async  camaraFoto() {
    let file = this.userActual + '/foto';
    console.log('clickCamara');
    try {
      const options: CameraOptions = {
        quality: 60,
        targetHeight: 100,
        targetWidth: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      const result = await this.camera.getPicture(options);
      const image = 'data:image/jpeg;base64,' + result;
      const picture = storage().ref(file);
      let UploadTask = picture.putString(image, 'data_url');
      UploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          let url = UploadTask.snapshot.downloadURL;
          console.log(url);
          this.foto = url;
          this.disImg = false;
        },
        (error) => { console.log(error) },
        // () => { 
        // }
      );
    } catch (e) { console.error(e); }
  }


  //-codigo de area
  codeAreaDefi() {

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
  }
}
