import * as ImagePicker from 'expo-image-picker';

import { ISelectImage } from '@data/repositories/select-image';

export class SelectImage implements ISelectImage {
  openCamera(): Promise<object> {
    throw new Error('Method not implemented.');
  }

  async openGallery(): Promise<object> {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });

    const dataImage = result.assets;

    return dataImage ? dataImage[0] : {};
  }
}
