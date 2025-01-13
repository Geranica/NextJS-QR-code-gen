export const FORM_FIELDS = {
  TEXT: 'text',
  LOGO: 'logo',
} as const;

export const FORM_INITIAL_VALUES = {
  [FORM_FIELDS.TEXT]: '',
  [FORM_FIELDS.LOGO]: null,
};

export const FORM_FIELDS_ATTRIBUTES = {
  [FORM_FIELDS.TEXT]: {
    ID: 'text',
  },
  [FORM_FIELDS.LOGO]: {
    ID: 'logo',
  },
};
