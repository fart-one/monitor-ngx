import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MqttMessage, MqttService} from 'ngx-mqtt';
import {ToiletBrokerService} from "../shared/toilet-broker/toilet-broker.service";
import {BeaconModel} from "../shared/toilet-broker/model/beacon.model";
import { OfficeInterface } from "../shared/config/office.interface";
import { Config } from "../shared/config/env.config";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'fart-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent /*implements OnInit*/ {

  public offices: OfficeInterface[];

  constructor() {
    this.offices = Config.TOILET_LISTS;
  }

  /*
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

   }*/
}
