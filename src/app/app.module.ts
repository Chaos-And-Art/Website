import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { NgParticlesModule } from 'ng-particles';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/_pages/dashboard/dashboard.component';
import { HomeComponent } from './components/_pages/home/home.component';
import { AppsComponent } from './components/_pages/apps/apps.component';
import { ArtComponent } from './components/_pages/art/art.component';
import { BusinessInfoComponent } from './components/_pages/business-info/business-info.component';
import { ChaosComponent } from './components/_pages/chaos/chaos.component';
import { ContactComponent } from './components/_pages/contact/contact.component';
import { MusicComponent } from './components/_pages/music/music.component';
import { PrivacyPolicyComponent } from './components/_pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/_pages/terms-conditions/terms-conditions.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PopupsComponent } from './components/popups/popups.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { ArtCarouselComponent } from './components/carousel/art-carousel.component';
import { AppsCarouselComponent } from './components/carousel/apps-carousel.component';

import { MatTabScrollToCenterDirective } from './utils/scrolling.directive';
import { CustomImageComponent } from './components/custom-image/custom-image.component';
import { BlankComponent } from './components/_pages/blank/blank.component';
import { FireworksComponent } from './components/_pages/chaosProjects/fireworks/fireworks.component';
import { X2048Component } from './components/_pages/chaosProjects/x2048/x2048.component';

@NgModule({
  declarations: [
    //Page Components
    AppComponent,
    DashboardComponent,
    HomeComponent,
    AppsComponent,
    ArtComponent,
    BusinessInfoComponent,
    ChaosComponent,
    ContactComponent,
    MusicComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,

    //Other Components
    NavBarComponent,
    PopupsComponent,
    FooterComponent,
    CustomCardComponent,
    ArtCarouselComponent,

    MatTabScrollToCenterDirective,
    CustomImageComponent,
    AppsCarouselComponent,
    BlankComponent,
    FireworksComponent,
    X2048Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatIconModule,
    NgParticlesModule,
    NgxTinySliderModule,
    LazyLoadImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
