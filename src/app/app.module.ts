import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from "firebase";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalHabitacionEditPageModule } from './modal-habitacion-edit/modal-habitacion-edit.module';

var config = {
  apiKey: "AIzaSyCTc9Tuh_i6WoOLtipNd6WHVAl6uJNH8ao",
  authDomain: "proyecto-control-edificio.firebaseapp.com",
  databaseURL: "https://proyecto-control-edificio.firebaseio.com",
  projectId: "proyecto-control-edificio",
  storageBucket: "proyecto-control-edificio.appspot.com",
  messagingSenderId: "31137474639"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ModalHabitacionEditPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
