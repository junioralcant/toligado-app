import { RecordCapture } from '@presentation/screens/RecordCapture';
import { SelectImage } from '../../../../infra/select-image/select-image';
import { RemoteCreateRecordUseCase } from '@data/usecases/create-record/remote-create-record.usecase';
import { makeApiUrlFactory } from '@main/factories/services/api-url-factory';
import { makeAuthorizationHttpPostClientDecoratorFactory } from '@main/factories/decorators/authorization-http-post-client-decorator-factory';

export function MakeRecordCaptureFactory() {
  const url = makeApiUrlFactory('/dangers');
  const createRecord = new RemoteCreateRecordUseCase(
    url,
    makeAuthorizationHttpPostClientDecoratorFactory()
  );
  const selectImage = new SelectImage();

  return (
    <RecordCapture selectImage={selectImage} createRecord={createRecord} />
  );
}
