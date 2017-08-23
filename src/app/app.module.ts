import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SingupPage } from '../pages/singup/singup';
import { ShowPage } from '../pages/show/show';
import { VerifyYourPhonePage } from '../pages/verify-your-phone/verify-your-phone';
import { PaymentMethodsPage } from '../pages/payment-methods/payment-methods';
import { PayinfoPage } from '../pages/payinfo/payinfo';
import { CleaningPage } from '../pages/cleaning/cleaning';
import { CleaningInfoPage } from '../pages/cleaning-info/cleaning-info';
import { CleaningSalePage } from '../pages/cleaning-sale/cleaning-sale';
import { CleaningContractorPage } from '../pages/cleaning-contractor/cleaning-contractor';
import { CleaningInfoServicePage } from '../pages/cleaning-info-service/cleaning-info-service';
import { CleaningVotePage } from '../pages/cleaning-vote/cleaning-vote';
import { CleaningOkPage } from '../pages/cleaning-ok/cleaning-ok';
import { PreHomePage } from '../pages/pre-home/pre-home';
import { NewAddressPage } from '../pages/new-address/new-address';
import { ProfessionPage } from '../pages/profession/profession';
import { BraintreeService } from '../services/braintree.service';
import { OfferService } from '../services/offer.service';
import { ProfessionalsService } from '../services/professionals.service';
import { ProfessionsService } from '../services/professions.service';
import { UserService } from '../services/user.service';
import { EncriptyService } from '../services/encripty.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { IonicStorageModule } from '@ionic/storage';

//import { EmailComposer } from '@ionic-native/email-composer';
export const firebaseConfig = {
    apiKey: "AIzaSyBmrc2CjBbIJD_Pu_kkCcV8qNXJfsEBaxo",
    authDomain: "usuarioappjobid.firebaseapp.com",
    databaseURL: "https://usuarioappjobid.firebaseio.com",
    projectId: "usuarioappjobid",
    storageBucket: "usuarioappjobid.appspot.com",
    messagingSenderId: "679089691484"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SingupPage,
    ShowPage,
    VerifyYourPhonePage,
    PaymentMethodsPage,
    PayinfoPage,
    ProfessionPage,
    CleaningPage,
    CleaningInfoPage,
    CleaningSalePage,
    CleaningContractorPage,
    CleaningInfoServicePage,
    CleaningVotePage,
    CleaningOkPage,
    PreHomePage,
    NewAddressPage,
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SingupPage,
    ShowPage,
    VerifyYourPhonePage,
    PaymentMethodsPage,
    PayinfoPage,
    ProfessionPage,
    CleaningPage,
    CleaningInfoPage,
    CleaningSalePage,
    CleaningContractorPage,
    CleaningInfoServicePage,
    CleaningVotePage,
    CleaningOkPage,
    PreHomePage,
    NewAddressPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    Facebook,
    BraintreeService,
    ProfessionalsService,
    OfferService,
    ProfessionsService,
    UserService,
    EncriptyService,
    // EmailComposer
  ]
})
export class AppModule {}
