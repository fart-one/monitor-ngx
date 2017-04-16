import { ToiletInterface } from './toilet.interface';

/**
 * Office configuration
 */
export interface OfficeInterface{
  id: string | number,
  officeName: string,
  iconUrl?: string,
  toilets: ToiletInterface[]
}
