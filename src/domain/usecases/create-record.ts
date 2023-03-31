export interface ICreateRecord {
  create(params: ICreateRecord.Params): Promise<void>;
}

export namespace ICreateRecord {
  export type Params = {
    location: string;
    description: string;
    riskCategory: string;
  };
}
