import { ToiletStatusEnum } from '../enum/toilet-status.enum';
import { MeasurementModel } from './mesurement.model';

/**
 * Beacon data transfer interface
 */
export interface BeaconModel {

  /**
   * Id of device (a.k.a. toiletID)
   */
  deviceId: string | number;

  /**
   * Current toilet status
   */
  status: ToiletStatusEnum;

  /**
   * Version of communication frame
   */
  version: string | number;

  /**
   * Raw measuremets of beacon
   */
  measurements: MeasurementModel[];

}
