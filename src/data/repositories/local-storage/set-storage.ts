export interface ISetStorage {
  set(key: string, value: object): Promise<void>;
}
