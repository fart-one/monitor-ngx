import { GenderEnum } from './enum/gender.enum';

/**
 * Toilet configuration
 */
export interface ToiletInterface {
  id: string | number,
  toiletName?: string,
  toiletGender?: GenderEnum
}
