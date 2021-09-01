import { Injectable } from "@angular/core";
import { Address } from "../address.model";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  private modal: any;

  constructor() {}

  bind(modal: any) {
    this.modal = modal;
  }

  open(address: Address) {
    this.modal.open(address);
  }
}
