import { Component, Input, OnInit } from '@angular/core';
import { ToiletInterface } from "../config/toilet.interface";
import { ToiletBrokerService } from "../toilet-broker/toilet-broker.service";
import { MqttConnectionState } from "ngx-mqtt";
import { GenderEnum } from "../config/enum/gender.enum";
import { ToiletStatusEnum } from "../toilet-broker/enum/toilet-status.enum";
import { Observable} from "rxjs";
import { BeaconModel } from "../toilet-broker/model/beacon.model";

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

  public GenderEnum:any = GenderEnum;
  public ToiletStatusEnum:any = ToiletStatusEnum;
  public data:Observable<BeaconModel>;

  constructor(private _toiletSerivce: ToiletBrokerService) {
  }

  ngOnInit(): void {
    this._toiletSerivce
      .state
      .filter((serviceState:MqttConnectionState) => serviceState == MqttConnectionState.CONNECTED)
      .subscribe(() => {

        this.data = this._toiletSerivce
          .getToilet(<string>this.officeId, <string>this.configuration.id);
      });
  }
}
