import { EnvConfig } from './env-config.interface';
import { MqttServiceConfig } from "../../src/client/app/shared/config/mqtt-service.config";
import { OfficeConfig } from "../../src/client/app/shared/config/office.config";
import { GenderEnum } from "../../src/client/app/shared/config/enum/gender.enum";

const BaseConfig: EnvConfig = {
  MQTT_SERVICE: <MqttServiceConfig>{
    hostname: 'broker.hivemq.com',
    port: 8000,
    path: '/mqtt'
  },
  TOILET_FILTER_FORMAT: 'toilet/{officeId}/{toiletId}',
  TOILET_LISTS: [
    <OfficeConfig>{
      id: "some office id",
      officeName: "some office name",
      toilets: [
        {
          id: "some toilet id",
          toiletName: "some toilet name",
          toiletGender: GenderEnum.Man
        }
      ]
    }
  ]
};

export = BaseConfig;

