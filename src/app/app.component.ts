import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from './card/card.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'componentProject';
  input = ''

  onInput(event: Event) {
    let text = (event.target as HTMLInputElement).value
    // this.input = text
    console.log(text)
  }
}
