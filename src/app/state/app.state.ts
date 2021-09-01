import { Address } from "../address.model";

export interface AppState {
  addresses: ReadonlyArray<Address>;
}
