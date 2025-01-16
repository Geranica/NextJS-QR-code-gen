const validationMessages = {
  requiredField: 'This field cannot be empty!',
  onlyAlphabetCharacters: 'This field must contain only alphabet characters!',
  maximumLength: (characters: number) =>
    `Maximum length for this field is ${characters} characters!`,
  minimumLength: (characters: number) =>
    `Minimum length for this field is ${characters} characters!`,
  maximumPhotoSize: (size: number) => `Maximum photo size is ${size} MB!`,
  incorrectPhoneNumber: 'Phone number is not valid!',
  incorrectEmail: 'Email is not valid!',
  unsupportedFileFormat: 'Unsupported file format!',
  requiredMinOneTag: 'Please select at least one tag!',
  incorrectPrice: 'Price is not valid!',
  maxVideoDuration: (duration: number) => `Maximum video duration is ${duration} seconds!`,
  photosCount: (photosCount: number) =>
    `Please select ${photosCount} photo${photosCount > 1 ? 's' : ''}!`,
  incorrectUrl: 'Url is not valid!',
};

export default validationMessages;
