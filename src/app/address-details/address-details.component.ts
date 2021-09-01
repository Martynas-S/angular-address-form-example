import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Address } from "../address.model";
import { deleteAddress } from "../state/address.actions";

@Component({
  selector: "address-details",
  templateUrl: "./address-details.component.html",
  styleUrls: ["./address-details.component.css"],
})
export class AddressDetailsComponent implements OnInit {
  @Input() address: Address;
  @Input() addressIndex: number;

  constructor(private store: Store) {}

  ngOnInit() {}

  onDelete() {
    this.store.dispatch(deleteAddress({ index: this.addressIndex }));
  }
}
