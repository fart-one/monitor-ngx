import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import { OfficeComponent } from './office/office.component';
import { ToiletComponent } from './toilet/toilet.component';

import { ToiletBrokerService } from './toilet-broker/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MomentModule
  ],
  declarations: [
    OfficeComponent,
    ToiletComponent
  ],
  exports: [
    OfficeComponent,
    ToiletComponent,
    CommonModule,
    FormsModule,
    RouterModule
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
