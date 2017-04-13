import {ToiletStatusEnum} from "../enum/toilet-status.enum";
import {MeasurementModel} from "./mesurement.model";

/**
 * Beacon data transfer interface
 */
export interface BeaconModel {
  deviceId: string | number;
  status: ToiletStatusEnum;
  version: string | number;
  measurements: MeasurementModel[];
}
