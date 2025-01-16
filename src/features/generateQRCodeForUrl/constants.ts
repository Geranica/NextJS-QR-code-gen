export const FORM_FIELDS = {
  URL: 'url',
  LOGO: 'logo',
} as const;

export const FORM_INITIAL_VALUES = {
  [FORM_FIELDS.URL]: '',
  [FORM_FIELDS.LOGO]: null,
};

export const FORM_FIELDS_ATTRIBUTES = {
  [FORM_FIELDS.URL]: {
    ID: 'url',
  },
  [FORM_FIELDS.LOGO]: {
    ID: 'logo',
  },
};
