import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-test',
  imports: [],
  templateUrl: './comp-test.component.html',
  styleUrl: './comp-test.component.scss'
})
export class CompTestComponent {
  bgColor = 'lightblue';
  textColor = 'black';
  
  // Css Binding
  isRed = true
  isGreen = false

  buttonStyle = {
    width: '150px',
    backgroundColor: this.bgColor,
    color: this.textColor,
    fontWeight: 'normal'
  }

  onButtonClick() {
    this.bgColor = 'orange'
    this.textColor = 'white'

  }
  onButtonClick2() {
    this.buttonStyle = {
      width: '200px',
      backgroundColor: 'black',
      color: 'white',
      fontWeight: 'bold'
    }
  }

  // Css Binding

  onclickRed() {
    this.isRed = true
    this.isGreen = false
  }
  
  onclickGreen() {
    this.isGreen = true
    this.isRed = false
  }
}
