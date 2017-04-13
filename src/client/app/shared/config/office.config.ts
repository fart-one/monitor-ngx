import { ToiletConfig } from './toilet.config';

export interface OfficeConfig {
  id: string | number,
  officeName: string,
  toilets: ToiletConfig[]
}
