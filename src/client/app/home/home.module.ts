import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MdButtonModule, } from '@angular/material';
import { ToiletBrokerService } from '../shared/toilet-broker/toilet-broker.service';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
    MdButtonModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [ToiletBrokerService]
})
export class HomeModule { }
