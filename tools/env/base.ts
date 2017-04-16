import { EnvConfig } from './env-config.interface';
import { MqttServiceInterface } from "../../src/client/app/shared/config/mqtt-service.interface";
import { OfficeInterface } from "../../src/client/app/shared/config/office.interface";
import { GenderEnum } from "../../src/client/app/shared/config/enum/gender.enum";
import { ToiletInterface } from "../../src/client/app/shared/config/toilet.interface";

const BaseConfig: EnvConfig = {
  MQTT_SERVICE: <MqttServiceInterface>{
    hostname: 'broker.hivemq.com',
    port: 8000,
    path: '/mqtt'
  },
  TOILET_FILTER_FORMAT: 'toilet/{officeId}/{toiletId}',
  TOILET_LISTS: [
    (<OfficeInterface>{
      id: 'office-id-1',
      officeName: 'First office',
      toilets: [
        (<ToiletInterface>{
          id: 'some-toilet-11',
          toiletName: 'Man toilet',
          toiletGender: GenderEnum.Man
        }),
        (<ToiletInterface>{
          id: 'some-toilet-12',
          toiletName: 'Woman toilet',
          toiletGender: GenderEnum.Woman
        }),
        (<ToiletInterface>{
          id: 'some-toilet-13',
          toiletName: 'Toilet for disabled',
          toiletGender: GenderEnum.ForDisabled
        })
      ]
    }),
    (<OfficeInterface>{
      id: 'office-id-2',
      officeName: 'Seccond office',
      toilets: [
        (<ToiletInterface>{
          id: 'some-toilet',
          toiletName: 'All gender toilet',
          toiletGender: GenderEnum.Unspecified
        })
      ]
    })
  ]
};

export = BaseConfig;

