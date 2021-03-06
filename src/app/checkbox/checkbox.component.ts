import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.css"],
})
export class CheckboxComponent implements OnInit {
  @Input() label: string;

  constructor() {}

  ngOnInit(): void {}
}
