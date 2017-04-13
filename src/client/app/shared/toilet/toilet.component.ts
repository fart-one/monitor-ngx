import { Component, Input } from '@angular/core';
import { ToiletInterface } from "../config/toilet.interface";

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'fart-toilet',
  templateUrl: 'toilet.component.html',
  styleUrls: ['toilet.component.css'],
})
export class ToiletComponent {
  @Input() public configuration: ToiletInterface;
}
