import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SectionThreeComponent } from './components/section-three/section-three.component';
import { SliderComponent } from './components/slider/slider.component';
import { NouisliderModule } from 'ng2-nouislider';
import { LoamFormComponent } from './components/loam-form/loam-form.component';
import { SectionWeComponent } from './components/section-we/section-we.component';
import { SectionMoneyComponent } from './components/section-money/section-money.component';
import { SectionServicesComponent } from './components/section-services/section-services.component';
import { NumberTrackerComponent } from './components/number-tracker/number-tracker.component';
import { SectionReviewComponent } from './components/section-review/section-review.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SectionFaqComponent } from './components/section-faq/section-faq.component';
import { SmsUnsubscribeComponent } from './components/sms-unsubscribe/sms-unsubscribe.component';
import { HomeComponent } from './components/home/home.component';
import { LoanDataService } from './shared/services/loan-data.service';

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
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SliderComponent,
    LoamFormComponent,
    SectionWeComponent,
    SectionMoneyComponent,
    SectionServicesComponent,
    NumberTrackerComponent,
    SectionReviewComponent,
    CarouselComponent,
    SectionFaqComponent,
    SmsUnsubscribeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule
  ],
  providers: [LoanDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
