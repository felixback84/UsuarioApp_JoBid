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
import { IndexPage } from '../pages/index/index';
import { VerifyYourPhonePage } from '../pages/verify-your-phone/verify-your-phone';
import { PaymentMethodsPage } from '../pages/payment-methods/payment-methods';
import { PayinfoPage } from '../pages/payinfo/payinfo';
import { ProfessionPage } from '../pages/profession/profession';
import { CleaningPage } from '../pages/cleaning/cleaning';
import { CleaningInfoPage } from '../pages/cleaning-info/cleaning-info';
import { CleaningSalePage } from '../pages/cleaning-sale/cleaning-sale';
import { CleaningContractorPage } from '../pages/cleaning-contractor/cleaning-contractor';
import { CleaningInfoServicePage } from '../pages/cleaning-info-service/cleaning-info-service';
import { CleaningVotePage } from '../pages/cleaning-vote/cleaning-vote';
import { CleaningOkPage } from '../pages/cleaning-ok/cleaning-ok';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SingupPage,
    IndexPage,
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
    CleaningOkPage
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
    IndexPage,
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
    CleaningOkPage
  ],
  providers: [
    StatusBar,
    SplashScreen, AuthServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
