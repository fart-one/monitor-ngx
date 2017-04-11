import { MqttServiceOptions } from 'ngx-mqtt/src/mqtt.model';

// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
  MQTT_SERVICE?: MqttServiceOptions;
  ENV?: string;
}
