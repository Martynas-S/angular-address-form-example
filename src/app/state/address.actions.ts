import { createAction, props } from "@ngrx/store";
import { Address } from "../address.model";

export const appendAddress = createAction(
  "[Addresses] Append",
  props<{ address: Address }>()
);

export const deleteAddress = createAction(
  "[Addresses] Delete",
  props<{ index: number }>()
);
