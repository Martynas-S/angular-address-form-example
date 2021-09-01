import { EventEmitter, Component, OnInit, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { appendAddress } from "../state/address.actions";
import { Store } from "@ngrx/store";
import { ModalService } from "../modal/modal.service";

@Component({
  selector: "address-form",
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.css"],
})
export class AddressFormComponent implements OnInit {
  @Output() onSave = new EventEmitter();

  addressForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    company: [""],
    street: ["", Validators.required],
    houseNumber: ["", Validators.required],
    postCode: ["", Validators.required],
    city: ["", Validators.required],
    country: ["", Validators.required],
    phoneNumber: ["", Validators.required],
  });

  countries = ["Deutschland", "Litauen", "Polen", "Frankreich"];

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private modalService: ModalService
  ) {}

  ngOnInit() {}

  onSaveButtonPress() {
    if (!this.addressForm.valid) {
      // Touch fields so that errors get displayed
      Object.keys(this.addressForm.controls).forEach((field) => {
        const control = this.addressForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }

    const address = this.addressForm.value;
    this.modalService.open(address);
    this.store.dispatch(appendAddress({ address }));
    this.onSave.emit();
  }
}
