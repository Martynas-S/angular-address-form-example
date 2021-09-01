import { Component, Injector, Input } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ControlValueAccessorConnector } from "./control-value-accessor-connector";

@Component({
  selector: "pretty-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent extends ControlValueAccessorConnector {
  focused = false;

  @Input() label: string;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {}

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }
}
