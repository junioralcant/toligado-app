import * as ImagePicker from 'expo-image-picker';
import { faker } from '@faker-js/faker';

export function mockeSelectImage(): ImagePicker.ImagePickerAsset[] {
  return [
    {
      assetId: null,
      base64: null,
      duration: null,
      exif: null,
      height: faker.datatype.number(),
      type: 'image',
      uri: faker.internet.url(),
      width: faker.datatype.number(),
    },
  ];
}
