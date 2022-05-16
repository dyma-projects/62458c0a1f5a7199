import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  @HostBinding("style.color") color?: string;
  constructor() {}

  @HostListener("window:keyup", ["$event"]) windowClick($event) {
    switch ($event.keyCode) {
      case 38:
        this.color = "blue";
        break;
      case 40:
        this.color = "green";
        break;
      case 37:
        this.color = "red";
        break;
      case 39:
        this.color = "yellow";
        break;
      default:
        this.color = "black";
        break;
    }
  }
}
