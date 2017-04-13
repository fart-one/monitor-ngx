import { Component, Input } from '@angular/core';
import { OfficeInterface } from "../config/office.interface";

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'fart-office',
  templateUrl: 'office.component.html',
  styleUrls: ['office.component.css'],
})
export class OfficeComponent {
  @Input() public configuration: OfficeInterface;
}
