import { MqttServiceOptions } from 'ngx-mqtt/src/mqtt.model';

// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
  MQTT_SERVICE?: any;
  TOILET_FILTER_FORMAT?: string;
  TOILET_LISTS?: any;
  ENV?: string;
}
