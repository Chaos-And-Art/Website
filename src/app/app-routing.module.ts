import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppsComponent } from './components/_pages/apps/apps.component';
import { ArtComponent } from './components/_pages/art/art.component';
import { BlankComponent } from './components/_pages/blank/blank.component';
import { BusinessInfoComponent } from './components/_pages/business-info/business-info.component';
import { ChaosComponent } from './components/_pages/chaos/chaos.component';
import { FireworksComponent } from './components/_pages/chaosProjects/fireworks/fireworks.component';
import { ContactComponent } from './components/_pages/contact/contact.component';
import { DashboardComponent } from './components/_pages/dashboard/dashboard.component';
import { HomeComponent } from './components/_pages/home/home.component';
import { MusicComponent } from './components/_pages/music/music.component';
import { PrivacyPolicyComponent } from './components/_pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/_pages/terms-conditions/terms-conditions.component';

const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Chaos', component: ChaosComponent },
  { path: 'Art', component: ArtComponent },
  { path: 'Apps', component: AppsComponent },
  { path: 'Music', component: MusicComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Business-Information', component: BusinessInfoComponent },
  { path: 'Privacy-Policy', component: PrivacyPolicyComponent },
  { path: 'Terms-And-Conditions', component: TermsConditionsComponent },
  { path: 'blank', component: BlankComponent },

  //Chaos Projects
  { path: 'Chaos/Fireworks', component: FireworksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
