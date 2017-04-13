import { MqttServiceInterface } from "../../src/client/app/shared/config/mqtt-service.interface";
import { OfficeInterface } from "../../src/client/app/shared/config/office.interface";

// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
  ENV?: string,
  MQTT_SERVICE?: MqttServiceInterface,
  TOILET_FILTER_FORMAT?: string,
  TOILET_LISTS?: OfficeInterface[]
}
