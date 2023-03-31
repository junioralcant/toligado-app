import { SelectImage } from './select-image';
import * as ImagePicker from 'expo-image-picker';

type SutTypes = {
  sut: SelectImage;
};

function mockeSelectImage(): ImagePicker.ImagePickerAsset[] {
  return [
    {
      assetId: null,
      base64: null,
      duration: null,
      exif: null,
      height: 1280,
      type: 'image',
      uri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540jrmarques.dev%252Ftoligado-app/ImagePicker/5fa8404d-87ec-44a7-8d86-378321c73310.jpeg',
      width: 960,
    },
  ];
}

function makeSut(): SutTypes {
  const sut = new SelectImage();

  return {
    sut,
  };
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
    const value = mockeSelectImage();

    jest.spyOn(ImagePicker, 'launchCameraAsync').mockResolvedValueOnce({
      assets: undefined,
    });

    const result = await sut.openCamera();

    expect(result).toEqual({});
  });
});
