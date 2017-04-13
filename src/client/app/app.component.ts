import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import {ToiletBrokerService} from "./shared/toilet-broker/toilet-broker.service";

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'fart-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  constructor(private _toiletService: ToiletBrokerService) {
    console.log('Environment config', Config);

    this._toiletService.connect();
  }
}
