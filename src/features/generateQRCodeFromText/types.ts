import { FORM_FIELDS } from './constants';

export interface FormInput {
  [FORM_FIELDS.TEXT]: string;
  [FORM_FIELDS.LOGO]: File[] | null;
}
