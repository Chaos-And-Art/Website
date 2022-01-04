import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

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
import { CarouselComponent } from './components/carousel/carousel.component';

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
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
