import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { GeocodeServiceProvider } from '../providers/geocode-service';
import { NativeAudio } from '@ionic-native/native-audio';
import { StatusBar } from '@ionic-native/status-bar';
import {  NativeGeocoder } from '@ionic-native/native-geocoder';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicStorageModule } from '@ionic/storage';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Facebook } from '@ionic-native/facebook';
//import firebase from 'firebase';
//import { EmailComposer } from '@ionic-native/email-composer';

//---pages
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
import { JobWithUsPage } from '../pages/job-with-us/job-with-us';
import { PoliciesPage } from '../pages/policies/policies';
import { PaymentsPage } from '../pages/payments/payments';
import { EditUserPage } from '../pages/edit-user/edit-user';
import { ServicesCarePage } from '../pages/services-care/services-care';
import { ServicesCleaningPage } from '../pages/services-cleaning/services-cleaning';
import { ServicesJanotorialPage } from '../pages/services-janotorial/services-janotorial';
import { ServicesTransportationPage } from '../pages/services-transportation/services-transportation';
import { ServicesFoodPage } from '../pages/services-food/services-food';
import { ServicesLegalPage } from '../pages/services-legal/services-legal';
import { ServicesBeautyPage } from '../pages/services-beauty/services-beauty';
import { MyServicesPage } from '../pages/my-services/my-services';
import { MyserviceinfoPage } from '../pages/myserviceinfo/myserviceinfo';
import { AddPaymentMethodPage } from '../pages/add-payment-method/add-payment-method';
//import { ProfessionPage } from '../pages/profession/profession';

//---services
import { BraintreeService } from '../services/braintree.service';
import { OfferService } from '../services/offer.service';
import { ProfessionalsService } from '../services/professionals.service';
import { ProfessionsService } from '../services/professions.service';
import { UserService } from '../services/user.service';
import { EncriptyService } from '../services/encripty.service';
import { SaleService } from '../services/sale.service';
import { NotificacionService } from '../services/notificacion.service';


//pipe

import { OrdenarPipe } from '../pipes/ordenar/ordenar';
import { RemoverPipe } from '../pipes/remover/remover';
import { NewAddressPipe } from '../pipes/new-address/new-address';
import { UpdateUserPipe } from '../pipes/update-user/update-user';
export const firebaseConfig = {
  apiKey: "AIzaSyBmrc2CjBbIJD_Pu_kkCcV8qNXJfsEBaxo",
  authDomain: "usuarioappjobid.firebaseapp.com",
  databaseURL: "https://usuarioappjobid.firebaseio.com",
  projectId: "usuarioappjobid",
  storageBucket: "usuarioappjobid.appspot.com",
    messagingSenderId: "679089691484"
};

export const googleMapsKey = 'AIzaSyB8zF6lhZegDjsV_mrqxd9Fb3YFTw2__AA';

// AIzaSyAQX3yZ5oIh8mXpohNBapYrfvT7qr19IK4


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
    JobWithUsPage,
    PoliciesPage,
    PaymentsPage,
    EditUserPage,
    MyServicesPage,
    ServicesCarePage,
    ServicesCleaningPage,
    ServicesJanotorialPage,
    ServicesTransportationPage,
    ServicesFoodPage,
    ServicesLegalPage,
    ServicesBeautyPage,
    MyserviceinfoPage,
    AddPaymentMethodPage,    
    OrdenarPipe,
    RemoverPipe,
    NewAddressPipe,
    UpdateUserPipe,
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
    }),
    AgmCoreModule.forRoot({
      apiKey: googleMapsKey
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
    JobWithUsPage,
    PoliciesPage,
    PaymentsPage,
    EditUserPage,
    MyServicesPage,
    ServicesCarePage,
    ServicesCleaningPage,
    ServicesJanotorialPage,
    ServicesTransportationPage,
    ServicesFoodPage,
    ServicesLegalPage,
    ServicesBeautyPage,
    MyserviceinfoPage,
    AddPaymentMethodPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    GeocodeServiceProvider,
    BraintreeService,
    ProfessionalsService,
    OfferService,
    ProfessionsService,
    SaleService,
    UserService,
    EncriptyService,
    Geolocation,
    NativeGeocoder,
    Facebook,
    // Media,
    NativeAudio,
    Camera,
    LocalNotifications,
    NotificacionService,
    // EmailComposer
  ]
})
export class AppModule {}
