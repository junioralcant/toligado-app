import * as ImagePicker from 'expo-image-picker';

import { ISelectImage } from '@data/repositories/select-image';

export class SelectImage implements ISelectImage {
  async openCamera(): Promise<object> {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });

    const dataImage = result.assets;

    return dataImage ? dataImage[0] : {};
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
