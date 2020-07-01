import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AboutComponent } from './about/about.component';

const config = {
  apiKey: 'AIzaSyChsaG9ii4kJmcCnzhMdIFAEvy5hDNJWJU',
  authDomain: 'shop-universal.firebaseapp.com',
  databaseURL: 'https://shop-universal.firebaseio.com',
  projectId: 'shop-universal',
  storageBucket: 'shop-universal.appspot.com',
  messagingSenderId: '137897705606',
  appId: '1:137897705606:web:f0e0378a974114966ad107',
  measurementId: 'G-XPL4K21LZ6'
};
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
