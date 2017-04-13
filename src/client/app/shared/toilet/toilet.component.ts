import { Component, Input, OnInit } from '@angular/core';
import { ToiletInterface } from "../config/toilet.interface";
import { ToiletBrokerService } from "../toilet-broker/toilet-broker.service";
import { MqttConnectionState } from "ngx-mqtt";

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'fart-toilet',
  templateUrl: 'toilet.component.html',
  styleUrls: ['toilet.component.css'],
})
export class ToiletComponent implements OnInit {
  @Input() public officeId: string|number;
  @Input() public configuration: ToiletInterface;

  constructor(private _toiletSerivce: ToiletBrokerService) {
  }

  ngOnInit(): void {
    this._toiletSerivce
      .state
      .filter((serviceState:MqttConnectionState) => serviceState == MqttConnectionState.CONNECTED)
      .subscribe(() => {
        // this._bindSubscription
        this._toiletSerivce
          .getToilet(<string>this.officeId, <string>this.configuration.id)
          .subscribe((data) => {
            console.log(data);
          })
      });
  }

  private _bindSubscription() {

  }
}
