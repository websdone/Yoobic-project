import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ApiData } from '../pages/shared/apidata.service';
import { MasterDetailModule } from '../pages/masterlist/masterlist.module'
// pages
import { HomePage } from '../pages/home/home';
import { comingsoonPage } from '../pages/comingsoon/comingsoon';
import { signinPage } from '../pages/signin/signin';
import { signupPage } from '../pages/signup/signup';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Initialize Firebase
import { AuthProvider } from '../providers/auth/auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

const config = {
  apiKey: "AIzaSyBUZsn4NI_9tznWehwU2bIPL3iHaoCiTKI",
  authDomain: "yoobic-ionic.firebaseapp.com",
  databaseURL: "https://yoobic-ionic.firebaseio.com",
  projectId: "yoobic-ionic",
  storageBucket: "yoobic-ionic.appspot.com",
  messagingSenderId: "399886968901"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    signinPage,
    signupPage,
    comingsoonPage,
  ],
  imports: [
    MasterDetailModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    signinPage,
    signupPage,
    comingsoonPage
  ],
  providers: [
    ApiData,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth
  ]
})
export class AppModule {}
