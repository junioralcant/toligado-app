import { ICreateRecord } from '@domain/usecases';
import { faker } from '@faker-js/faker';

export function mockCreateRecordParams(): ICreateRecord.Params {
  return {
    description: faker.database.collation(),
    location: faker.database.collation(),
    riskCategory: faker.database.collation(),
  };
}
