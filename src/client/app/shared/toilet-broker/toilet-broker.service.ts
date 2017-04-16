import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MqttService, MqttMessage } from 'ngx-mqtt';
import { Config } from '../config/index';
import { BeaconModel } from './model/beacon.model';
import 'rxjs/add/operator/map';

/**
 * This class provides aceess to MQTT broker and quick access to fart-one commication structure
 */
@Injectable()
export class ToiletBrokerService extends MqttService {

  /**
   *
   * @param officeId UID of the office , allowed mqtt wildcards
   * @param toiletId UID of toilet
   * @returns {Observable<MqttMessage>}
   */
  public getToilet(officeId: string, toiletId:string): Observable<BeaconModel> {

    let filter = Config.TOILET_FILTER_FORMAT
      .replace('{officeId}', officeId)
      .replace('{toiletId}', toiletId);

    return this
      .observe(filter)
      .map((response: MqttMessage) => JSON.parse(response.payload.toString()));

  }

  /**
   * Injects configuration to mqtt
   */
  constructor() {
    super(Config.MQTT_SERVICE);
  }

}
