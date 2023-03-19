export interface ISelectImage {
  openCamera(): Promise<object>;
  openGallery(): Promise<object>;
}
