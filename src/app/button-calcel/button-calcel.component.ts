import { Component } from '@angular/core';

@Component({
  selector: 'app-button-calcel',
  imports: [],
  templateUrl: './button-calcel.component.html',
  // styleUrl: './button-calcel.component.scss',
  // É possível estilizar um botão diretamente no componente .ts
  styles: [
    `
    @import "variables";
    .button{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 20px;
    border-radius: 100px;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    color: white;
    background-color: $red;
}
    `
  ]
})
export class ButtonCalcelComponent {

}
