import { ToiletTypeEnum } from './enum/toilet-type.enum';

/**
 * Toilet configuration
 */
export interface ToiletInterface {
  /**
   * Id of toilet (a.k.a. device Id
   */
  id: string | number;

  /**
   * Optional toilet name
   */
  toiletName?: string;

  /**
   * toilet
   */
  toiletType?: ToiletTypeEnum;
}
