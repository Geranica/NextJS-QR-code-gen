export const dictionary = {
  createQRCode: 'Create QR-Code',
  plainTextLink: 'Plain Text',
  inputTextPlaceholder: 'Enter text here',
  fileSizeInKB: (size: string | number) => `File size: ${size} KB`,
  fileName: (name: string) => `File name: ${name}`,
} as const;
