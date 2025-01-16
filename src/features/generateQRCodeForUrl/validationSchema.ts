import { z } from 'zod';

import validationMessages from '@/shared/validationMessages';

import { FORM_FIELDS } from './constants';

export const validationSchema = z.object({
  [FORM_FIELDS.URL]: z
    .string()
    .trim()
    .min(1, { message: validationMessages.requiredField })
    .url({ message: validationMessages.incorrectUrl }),
  [FORM_FIELDS.LOGO]: z.any().nullable().optional(),
});
