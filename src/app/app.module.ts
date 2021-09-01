import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AddressListComponent } from "./address-list/address-list.component";
import { AddressDetailsComponent } from "./address-details/address-details.component";
import { AddressFormComponent } from "./address-form/address-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { addressReducer } from "./state/address.reducer";
import { ModalComponent } from './modal/modal.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressListComponent,
    AddressDetailsComponent,
    AddressFormComponent,
    ModalComponent,
    CheckboxComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      addresses: addressReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
