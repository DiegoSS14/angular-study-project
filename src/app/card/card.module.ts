import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPurpleComponent } from '../card-purple/card.component';



@NgModule({
  imports: [
    CommonModule,
    CardPurpleComponent
  ],
  exports: [
    CardPurpleComponent
  ]
})
export class CardModule { }
