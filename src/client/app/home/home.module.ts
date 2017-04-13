import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MdGridListModule } from '@angular/material';
import { ToiletBrokerService } from '../shared/toilet-broker/toilet-broker.service';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
    MdGridListModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [ToiletBrokerService]
})
export class HomeModule { }
