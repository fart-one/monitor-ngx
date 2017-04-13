import { MqttServiceConfig } from "../../src/client/app/shared/config/mqtt-service.config";
import { OfficeConfig } from "../../src/client/app/shared/config/office.config";


// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
  ENV?: string,
  MQTT_SERVICE?: MqttServiceConfig,
  TOILET_FILTER_FORMAT?: string,
  TOILET_LISTS?: OfficeConfig[],
}
