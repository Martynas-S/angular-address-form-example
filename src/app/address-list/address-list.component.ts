import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../state/app.state";

@Component({
  selector: "address-list",
  templateUrl: "./address-list.component.html",
  styleUrls: ["./address-list.component.css"],
})
export class AddressListComponent implements OnInit {
  addresses$ = this.store.select("addresses");
  newAddressFormIsOpen = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  openNewAddressForm() {
    this.newAddressFormIsOpen = true;
  }

  closeNewAddressForm() {
    this.newAddressFormIsOpen = false;
  }
}
