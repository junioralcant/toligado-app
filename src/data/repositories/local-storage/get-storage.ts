export interface IGetStorage {
  get(key: string): Promise<any>;
}
