import { ICreateRecord } from '@domain/usecases';
import { faker } from '@faker-js/faker';

export function mockCreateRecordParams(): ICreateRecord.Params {
  return {
    description: faker.database.collation(),
    place: faker.database.collation(),
    riskCategory: faker.database.collation(),
    dataImage: JSON.parse(faker.datatype.json()),
  };
}
