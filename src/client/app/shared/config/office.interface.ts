import { ToiletInterface } from './toilet.interface';

/**
 * Office configuration
 */
export interface OfficeInterface {

  /**
   * Id of the office
   */
  id: string | number;

  /**
   * Office name
   */
  officeName: string;

  /**
   * Optional icon url for office
   */
  iconUrl?: string;

  /**
   * Toilets configuration in office
   */
  toilets: ToiletInterface[];
}
