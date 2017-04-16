import { EnvConfig } from './env-config.interface';
import { MqttServiceInterface } from '../../src/client/app/shared/config/mqtt-service.interface';
import { OfficeInterface } from '../../src/client/app/shared/config/office.interface';
import { ToiletTypeEnum } from '../../src/client/app/shared/config/enum/toilet-type.enum';
import { ToiletInterface } from '../../src/client/app/shared/config/toilet.interface';

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
          toiletType: ToiletTypeEnum.Man
        }),
        (<ToiletInterface>{
          id: 'some-toilet-12',
          toiletName: 'Woman toilet',
          toiletType: ToiletTypeEnum.Woman
        }),
        (<ToiletInterface>{
          id: 'some-toilet-13',
          toiletName: 'Toilet for disabled',
          toiletType: ToiletTypeEnum.ForDisabled
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
          toiletType: ToiletTypeEnum.Unspecified
        })
      ]
    })
  ],
  TOILET_FREE_SOUNDS: [
    '/assets/sound/free/1.mp3',
    '/assets/sound/free/2.mp3'
  ],
  TOILET_OCCUPIED_SOUNDS: [
    '/assets/sound/occupied/1.mp3',
    '/assets/sound/occupied/2.mp3',
    '/assets/sound/occupied/3.mp3',
    '/assets/sound/occupied/4.mp3',
    '/assets/sound/occupied/5.mp3',
    '/assets/sound/occupied/6.mp3',
    '/assets/sound/occupied/7.mp3'
  ]
};

export = BaseConfig;

