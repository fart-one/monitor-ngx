import { Component, Input, OnInit } from '@angular/core';
import { MqttConnectionState } from 'ngx-mqtt';
import { Observable } from 'rxjs';
import {
  Config,
  ToiletInterface,
  ToiletTypeEnum,
  ToiletStatusEnum,
  BeaconModel
} from '../index';
import { ToiletBrokerService } from '../toilet-broker/index';
import 'rxjs/add/operator/skip';

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

  /**
   * Id of the office
   */
  @Input() public officeId: string|number;

  /**
   * Configuration for the office
   */
  @Input() public configuration: ToiletInterface;

  /**
   * View model
   * @type {ToiletTypeEnum}
   */
  public GenderEnum:any = ToiletTypeEnum;

  /**
   * View model
   * @type {ToiletStatusEnum}
   */
  public ToiletStatusEnum:any = ToiletStatusEnum;

  /**
   * Current beacon status observable
   */
  public beaconObservable:Observable<BeaconModel>;

  /**
   * View model for status update
   * @type {Date}
   */
  public lastUpdate:Date = new Date();

  /**
   * View model for status change
   * @type {Date}
   */
  public lastChange:Date = new Date();

  /**
   * Store last toilet status
   * @type {ToiletStatusEnum}
   * @private
   */
  private _lastStatus:ToiletStatusEnum = ToiletStatusEnum.Unknown;

  /**
   *
   * @param _toiletService
   */
  constructor(private _toiletService: ToiletBrokerService) {
  }

  ngOnInit(): void {
    this._toiletService
      .state
      .filter((serviceState:MqttConnectionState) => serviceState === MqttConnectionState.CONNECTED)
      .subscribe(() => {

        // bind toilet observable
        this.beaconObservable = this._toiletService
          .getToilet(<string>this.officeId, <string>this.configuration.id);

        // get last update
        this.beaconObservable
          .subscribe(() => this.lastUpdate = new Date());

        // filter only status changes
        let beaconChangeObservable:Observable<BeaconModel> = this.beaconObservable
          .filter((data: BeaconModel) => this._lastStatus !== data.status);

        // store last data
        beaconChangeObservable
          .subscribe((data: BeaconModel) => {
            this._lastStatus = data.status;
            this.lastChange = new Date();
          });

        // play sound
        beaconChangeObservable
          .skip(1)
          .subscribe((data: BeaconModel) => {
            this._playSound(data);
          });

      });
  }

  private _playSound(data: BeaconModel) {

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
