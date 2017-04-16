import { MqttServiceInterface } from '../../src/client/app/shared/config/mqtt-service.interface';
import { OfficeInterface } from '../../src/client/app/shared/config/office.interface';

// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
  /**
   * Current application enviroment
   */
  ENV?: string;

  /**
   * Mqtt service configuration
   */
  MQTT_SERVICE?: MqttServiceInterface;

  /**
   * Mqtt toilet address format
   */
  TOILET_FILTER_FORMAT?: string;

  /**
   * Toilet list for watching
   */
  TOILET_LISTS?: OfficeInterface[];

  /**
   * List of audio files
   */
  TOILET_FREE_SOUNDS?: string[];

  /**
   * List of audio files
   */
  TOILET_OCCUPIED_SOUNDS?: string[];
}
