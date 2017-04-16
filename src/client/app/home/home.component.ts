import { Component } from '@angular/core';
import { Config, OfficeInterface } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'fart-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {

  public offices: OfficeInterface[];

  constructor() {
    this.offices = Config.TOILET_LISTS;
  }

}
