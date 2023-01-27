export interface ISetStorage {
  set(key: string, value: object | undefined): Promise<void>;
}
