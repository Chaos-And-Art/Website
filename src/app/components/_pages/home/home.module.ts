import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { NgParticlesModule } from 'ng-particles';
import { HomeComponent } from './home.component';
import { CarouselComponent } from '../../carousel/carousel.component';

@NgModule({
    declarations: [
        HomeComponent,
        CarouselComponent
    ],
    imports: [
        NgxTinySliderModule,
        NgParticlesModule,
        HomeRoutingModule,
        CommonModule
    ],
    providers: []
})
export class HomeModule { }
