import { FORM_FIELDS } from './constants';

export interface FormInput {
  [FORM_FIELDS.URL]: string;
  [FORM_FIELDS.LOGO]: File[] | null;
}
