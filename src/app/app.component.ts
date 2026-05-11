import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardPurpleComponent } from './card-purple/card.component';
import { CardModule } from './card/card.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'componentProject';
}
