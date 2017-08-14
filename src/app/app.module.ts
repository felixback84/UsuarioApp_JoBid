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
import { Profesion2Page } from '../pages/profesion2/profesion2';
import { Profesion3Page } from '../pages/profesion3/profesion3';
import { Profesion4Page } from '../pages/profesion4/profesion4';
import { Profesion5Page } from '../pages/profesion5/profesion5';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';
//import { EmailComposer } from '@ionic-native/email-composer';

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
    Profesion2Page,
    Profesion3Page,
    Profesion4Page,
    Profesion5Page
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
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
    Profesion2Page,
    Profesion3Page,
    Profesion4Page,
    Profesion5Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    Facebook,
    // EmailComposer
  ]
})
export class AppModule {}
