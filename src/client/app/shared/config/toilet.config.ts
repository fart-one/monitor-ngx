import { GenderEnum } from './enum/gender.enum';

/**
 * Toilet configuration
 */
export interface ToiletConfig {
  id: string | number,
  toiletName?: string,
  toiletGender?: GenderEnum
}
