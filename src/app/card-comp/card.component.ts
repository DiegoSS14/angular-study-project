import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { MatSlideToggle } from "@angular/material/slide-toggle";

interface IPlan {
  info: Iinfo
}

interface Iinfo {
  type: string,
}

@Component({
  selector: 'app-card',
  imports: [ButtonComponent, MatSlideToggle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  // Com essa propriedade consigo tornar o CSS desse componente global
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  plan = {
    info: {
      type: "Simples",
      value: 100,
    }
  }
}
