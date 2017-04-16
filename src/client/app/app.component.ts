import { Component } from '@angular/core';
import { Config, ToiletBrokerService } from './shared/index';

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
    if (Config.ENV === 'DEV') {
      console.log('Environment config', Config);
    }

    this._toiletService.connect();
  }
}
