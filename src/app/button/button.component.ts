import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  // É possível utilizar o template para criar um arquivo sem precisar do HTML.
  // template : `
  // <button class="button">Adquirir</button>
  // `,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

}
