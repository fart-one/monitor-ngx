import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MdButtonModule, } from '@angular/material';
import { NameListService } from '../shared/name-list/name-list.service';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
    MdButtonModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [NameListService]
})
export class HomeModule { }
