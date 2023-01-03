export interface IAuthentication {
  auth(
    params: IAuthentication.Params
  ): Promise<IAuthentication.Model | undefined>;
}

export namespace IAuthentication {
  export type Params = {
    cpf: string;
  };

  export type Model = {
    user: {
      belongsCompany: string;
      blockedUser: boolean;
      id: string;
      name: string;
      cpf: string;
    };
    token: string;
  };
}
