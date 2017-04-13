import { ToiletConfig } from './toilet.config';

/**
 * Office configuration
 */
export interface OfficeConfig {
  id: string | number,
  officeName: string,
  toilets: ToiletConfig[]
}
