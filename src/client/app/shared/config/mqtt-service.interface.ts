import {MqttServiceOptions} from 'ngx-mqtt/src/mqtt.model';

/**
 * Extends default config, for mqtt.js compatibility
 */
export interface MqttServiceInterface extends MqttServiceOptions {

  /**
   * Is the WebSocket connection options. Default is {}. It's specific for WebSockets. For possible options have a look at: https://github.com/websockets/ws/blob/master/doc/ws.md.
   */
  wsOptions?: any,

  /**
   * Default 10 seconds, set to 0 to disable
   */
  keepalive?: number,

  /**
   * Reschedule ping messages after sending packets (default true)
   */
  reschedulePings?: boolean

  /**
   * Default: 'mqttjs_' + Math.random().toString(16).substr(2, 8)
   */
  clientId?: string,

  /**
   * Default: 'MQTT'
   */
  protocolId?: string,

  /**
   * Default: 4
   */
  protocolVersion?: number

  /**
   * Default true, set to false to receive QoS 1 and 2 messages while offline
   */
  clean?: boolean,

  /**
   * Default: 1000 milliseconds, interval between two reconnections
   */
  reconnectPeriod?: number,

  /**
   * 30 * 1000 milliseconds, time to wait before a CONNACK is received
   */
  connectTimeout?: number,

  /**
   * The username required by your broker, if any
   */
  username?: string,

  /**
   * The password required by your broker, if any
   */
  password?: string,

  /**
   * A Store for the incoming packets
   */
  incomingStore?: any,

  /**
   * A Store for the outgoing packets
   */
  outgoingStore?: any,

  /**
   * If connection is broken, queue outgoing QoS zero messages (default true)
   */
  queueQoSZero?: boolean,

  /**
   * A message that will sent by the broker automatically when the client disconnect badly. The format is:
   *   topic?: the topic to publish
   *   payload?: the message to publish
   *   qos?: the QoS
   *   retain?: the retain flag
   */
  will?: any,

  /**
   * Optional (url, options, client) => url function For ws/wss protocols only.
   * Can be used to implement signing urls which upon reconnect can have become expired.
   */
  transformWsUrl?: any
}
