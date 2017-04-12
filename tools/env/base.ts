import { EnvConfig } from './env-config.interface';

const BaseConfig: EnvConfig = {
  MQTT_SERVICE: {
    hostname: 'broker.hivemq.com',
    port: 8000,
    path: '/mqtt'
  },
  TOILET_FILTER_FORMAT: 'toilet/{officeId}/{toiletId}',
  TOILET_LISTS: [
    {
      id: "some office id",
      officeName: "some office name",
      toilets: [
        {
          id: "some toilet id",
          toiletName: "some toilet name",
          toiletGender: "men/woman/unspecified"
        }
      ]
    }
  ]
};

export = BaseConfig;

