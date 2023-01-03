import { IAuthentication } from '@domain/usecases';
import { faker } from '@faker-js/faker';

export function mockAuthenticationParams(): IAuthentication.Params {
  return {
    cpf: '788.755.890-54',
  };
}

export function mockAccounModel(): IAuthentication.Model {
  return {
    user: {
      belongsCompany: faker.company.name(),
      blockedUser: faker.datatype.boolean(),
      id: faker.datatype.uuid(),
      name: faker.database.column(),
      cpf: faker.datatype.number({ min: 2333444433 }).toString(),
    },
    token: faker.datatype.hexadecimal({}),
  };
}
