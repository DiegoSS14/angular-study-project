import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card-comp/card.component';
import { ButtonCalcelComponent } from '../button-calcel/button-calcel.component';
import { MatSlideToggle } from '@angular/material/slide-toggle'


@NgModule({
  imports: [
    CommonModule,
    CardComponent,
    ButtonCalcelComponent,
    MatSlideToggle,
  ],
  exports: [
    CardComponent, 
    ButtonCalcelComponent
  ]
})
export class CardModule { }
