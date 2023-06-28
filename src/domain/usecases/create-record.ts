export interface ICreateRecord {
  create(params: ICreateRecord.Params): Promise<void>;
}

export namespace ICreateRecord {
  export type Params = {
    place: string;
    description: string;
    riskCategory: string;
    dataImage: {
      fileName: string;
      uri: string;
      type: string;
    };
  };
}
