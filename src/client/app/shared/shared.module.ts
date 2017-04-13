import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OfficeComponent } from './office/office.component';
import { ToiletComponent } from './toilet/toilet.component';

import { ToiletBrokerService } from './toilet-broker/toilet-broker.service';
import { MdCardModule, MdGridListModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdGridListModule,
    MdCardModule,
  ],
  declarations: [
    ToolbarComponent,
    NavbarComponent,
    OfficeComponent,
    ToiletComponent
  ],
  exports: [
    ToolbarComponent,
    NavbarComponent,
    OfficeComponent,
    ToiletComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    MdGridListModule,
    MdCardModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ToiletBrokerService]
    };
  }
}
