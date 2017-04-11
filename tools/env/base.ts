import { EnvConfig } from './env-config.interface';

const BaseConfig: EnvConfig = {
  MQTT_SERVICE: {
    hostname: 'broker.hivemq.com',
    port: 8000,
    path: '/mqtt'
  }
};

export = BaseConfig;

