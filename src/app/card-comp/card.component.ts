import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

interface IPlan {
  info: Iinfo
}

interface Iinfo {
  type: string,
}

@Component({
  selector: 'app-card',
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  plan = {
    info: {
      type: "Simples",
      value: 100,
    }
  }
}
