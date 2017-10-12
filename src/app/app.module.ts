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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    signinPage,
    comingsoonPage,
  ],
  imports: [
    MasterDetailModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    comingsoonPage,
    signinPage,
  ],
  providers: [
    ApiData,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
