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
  initialValue = 'Initial value in app';
  attValue = ''
  type = 'password';

  onFocus() {
    this.type = 'text';
  }

  changeValue(value: string) {
    this.initialValue = value;
  }
}
