import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { Address } from "../address.model";
import { ModalService } from "./modal.service";

@Component({
  selector: "modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit {
  address: Address;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    document.body.appendChild(this.element);

    this.element.addEventListener("click", (el) => {
      if (el.target.className === "modal") {
        this.close();
      }
    });

    this.modalService.bind(this);
  }

  ngOnDestroy() {
    this.element.remove();
  }

  open(address: Address) {
    this.address = address;
    this.element.style.display = "block";
    document.body.classList.add("modal-open");
  }

  close() {
    this.element.style.display = "none";
    document.body.classList.remove("modal-open");
  }
}
