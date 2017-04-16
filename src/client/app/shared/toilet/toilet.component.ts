import { Component, Input, OnInit } from '@angular/core';
import { ToiletInterface } from "../config/toilet.interface";
import { ToiletBrokerService } from "../toilet-broker/toilet-broker.service";
import { MqttConnectionState } from "ngx-mqtt";
import { GenderEnum } from "../config/enum/gender.enum";
import { ToiletStatusEnum } from "../toilet-broker/enum/toilet-status.enum";
import { Observable} from "rxjs";
import { BeaconModel } from "../toilet-broker/model/beacon.model";
import { Config } from "../config/env.config";

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
  public beaconObservable:Observable<BeaconModel>;

  private _lastStatus:ToiletStatusEnum = ToiletStatusEnum.Unknown;

  constructor(private _toiletSerivce: ToiletBrokerService) {
  }

  ngOnInit(): void {
    this._toiletSerivce
      .state
      .filter((serviceState:MqttConnectionState) => serviceState == MqttConnectionState.CONNECTED)
      .subscribe(() => {

        this.beaconObservable = this._toiletSerivce
          .getToilet(<string>this.officeId, <string>this.configuration.id);

        this.beaconObservable.subscribe(this._playSound);
      });
  }

  private _playSound(data: BeaconModel) {

    // check last status
    if (this._lastStatus === data.status) {
      return;
    }
    this._lastStatus = data.status;

    //determinate audio file
    let soundFiles:any[] = [];

    if (data.status === ToiletStatusEnum.Free) {
      soundFiles = Config.TOILET_FREE_SOUNDS;
    } else if (data.status === ToiletStatusEnum.Occupied) {
      soundFiles = Config.TOILET_OCCUPIED_SOUNDS;
    }

    // check if we have file
    if (!soundFiles.length) {
      return;
    }

    //get random file
    let audioFile = soundFiles[Math.floor(Math.random() * soundFiles.length)];

    //play audio
    let audio = new Audio(audioFile);
    audio.play();
  }


}
