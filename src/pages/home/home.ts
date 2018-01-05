import { Facebook } from '@ionic-native/facebook';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

//--page
import { PreHomePage } from '../pre-home/pre-home';
import { LoginPage } from '../login/login';
import { SingupPage } from '../singup/singup';

//--service
import { UserService } from '../../services/user.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
userData = null;
mensage :string = '';
displayName;  
providerFaceBook:any;
userDataUpdate:any;
  constructor(
    public navCtrl: NavController, 
    private fb: Facebook,
    private userService : UserService,
    public afAuth: AngularFireAuth, 
  ) {
    //-identifica y redirecciona usuario logeado.
    this.usuarioLogeado();
    
  }
ionViewDidLoad() {
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
  }

  googleir(){
    this.navCtrl.setRoot(PreHomePage);
    //this.navCtrl.pop();
    //this.navCtrl.push(PreHomePage); 
  }

  facebookir(){
    // let goPagePrehome:boolean = false;
    // let userDB:any;
    this.fb.login(['email'])
    .then((res) => {
      console.log('Logged into Facebook!', res);
      // alert(JSON.stringify(res));
      let credencial = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      firebase.auth().signInWithCredential(credencial).then(
        (info)=>{
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
            this.singup();
          // }
        }
      ).catch();
    })
    .catch(e => {
      console.log('Error zing into Facebook', e)
      alert(JSON.stringify(e));
    });
  }

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
  goNextPagePrehome(datos:any){
    //console.log(datos);
    //console.log(datos['$key']);
    this.userDataUpdate ={ "email":datos['user_email'],"name":datos['user_name'],"pais":datos['user_pais'],"password":datos['user_password'],"picture":datos['user_picture'],"state":datos['user_state'],"tel":datos['user_tel'],"username":datos['user_username'],"verificacion":datos['$key'],"zipcode":datos['user_zipcode']};
    //console.log(this.userDataUpdate);
    let Data = {'datos':this.userDataUpdate}
    this.navCtrl.setRoot(PreHomePage,Data);
  }

 	login(){
 		this.navCtrl.push(LoginPage);
 	}
 	singup(UserDB?:any){
 		this.navCtrl.push(SingupPage);
   }

   
  usuarioLogeado(){
    console.log('userLogeado');
    //let goPagePrehomeLoad = false;
    this.afAuth.authState.subscribe( userAuth => {
    //let homeStatus=this.afAuth.authState.subscribe( userAuth => {
      if (userAuth){
            console.info('find user home login');
            if(userAuth.providerData["0"].providerId == 'password'){
              let email =  userAuth.providerData["0"].email;
              console.log(email);
  
              let Userexists= this.userService.getUserEmailPerfil(email).subscribe( (User) => {
                console.log('User Logueado');
                console.log(User);
                console.log(Userexists);
                if(User['0']){
                  this.goNextPagePrehomeFace(User['0']);
                  if(Userexists != undefined){
                    Userexists.unsubscribe();
                  }
                }
              });
            }else{
              let faceUid =  userAuth.uid;
              console.log(faceUid);
              let Userexists= this.userService.getUserUidFace(faceUid).subscribe( (User) => {
                console.log('User Logueado');
                console.log(Userexists);
                console.log(User);
                if(User['0']){
                  this.goNextPagePrehomeFace(User['0']);
                  if(Userexists != undefined){
                    Userexists.unsubscribe();
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
      } else {
        console.info('find user home login - no');
      }
    });
    // homeStatus.unsubscribe();
  }

  goNextPagePrehomeFace(datos:any){
    this.userDataUpdate ={ "email":datos['user_email'],"name":datos['user_name'],"pais":datos['user_pais'],"password":datos['user_password'],"picture":datos['user_picture'],"state":datos['user_state'],"tel":datos['user_tel'],"username":datos['user_username'],"verificacion":datos['$key'],"zipcode":datos['user_zipcode']};
    let Data = {'datos':this.userDataUpdate};
    this.navCtrl.setRoot(PreHomePage,Data);
  } 
}
