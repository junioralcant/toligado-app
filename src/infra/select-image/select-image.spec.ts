import { mockeSelectImage } from '@domain/mocks';
import * as ImagePicker from 'expo-image-picker';
import { SelectImage } from './select-image';

type SutTypes = {
  sut: SelectImage;
};

function makeSut(): SutTypes {
  const sut = new SelectImage();

  return {
    sut,
  };
}

declare module 'expo-image-picker' {
  export function launchCameraAsync(): Promise<{
    assets: ImagePicker.ImagePickerAsset[] | null;
  }>;

  export function launchImageLibraryAsync(): Promise<{
    assets: ImagePicker.ImagePickerAsset[] | null;
  }>;
}

describe('SelectImage', () => {
  it('Should select camera image', async () => {
    const { sut } = makeSut();
    const value = mockeSelectImage();

    jest.spyOn(ImagePicker, 'launchCameraAsync').mockResolvedValueOnce({
      assets: value,
    });

    const result = await sut.openCamera();

    expect(result).toEqual(value[0]);
  });

  it('Should return object empty if not select camera image', async () => {
    const { sut } = makeSut();

    jest.spyOn(ImagePicker, 'launchCameraAsync').mockResolvedValueOnce({
      assets: null,
    });

    const result = await sut.openCamera();

    expect(result).toEqual({});
  });

  it('Should select gallery image', async () => {
    const { sut } = makeSut();
    const value = mockeSelectImage();

    jest.spyOn(ImagePicker, 'launchImageLibraryAsync').mockResolvedValueOnce({
      assets: value,
    });

    const result = await sut.openGallery();

    expect(result).toEqual(value[0]);
  });

  it('Should return object empty if not select gallery image', async () => {
    const { sut } = makeSut();
    const value = mockeSelectImage();

    jest.spyOn(ImagePicker, 'launchImageLibraryAsync').mockResolvedValueOnce({
      assets: null,
    });

    const result = await sut.openGallery();

    expect(result).toEqual({});
  });
});
