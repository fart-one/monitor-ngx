import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MqttMessage, MqttService } from 'ngx-mqtt';
import {ToiletBrokerService} from "../shared/toilet-broker/toilet-broker.service";
import {BeaconModel} from "../shared/toilet-broker/model/beacon.model";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private _toiletBroker: ToiletBrokerService) {
    this._toiletBroker.connect();
  }

  ngOnInit(): void {

    this._toiletBroker.onConnect.subscribe(() => {
      console.log('connected');
      this._toiletBroker.getToilet('+', '#').subscribe((message: BeaconModel) => {

        console.log(message);
      });
    });

  }
}
