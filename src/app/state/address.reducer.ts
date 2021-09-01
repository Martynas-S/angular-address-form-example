import { createReducer, on } from "@ngrx/store";
import { Address } from "../address.model";
import { appendAddress, deleteAddress } from "./address.actions";

export const initialState: ReadonlyArray<Address> = [
  {
    firstName: "Gesche Amelie",
    lastName: "Ringer",
    street: "Bamberger Str.",
    houseNumber: 53,
    postCode: 10777,
    city: "Berlin",
    country: "Deutschland",
  },
  {
    firstName: "Gesche Amelie",
    lastName: "Ringer",
    company: "rebuy",
    street: "Potsdamer Str.",
    houseNumber: 184,
    postCode: 10783,
    city: "Berlin",
    country: "Deutschland",
  },
];

export const addressReducer = createReducer(
  initialState,
  on(appendAddress, (state, { address }) => [...state, address]),
  on(deleteAddress, (state, { index }) => state.filter((_, i) => i != index))
);
