import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card-comp/card.component';
import { ButtonCalcelComponent } from '../button-calcel/button-calcel.component';



@NgModule({
  imports: [
    CommonModule,
    CardComponent,
    ButtonCalcelComponent
  ],
  exports: [
    CardComponent, 
    ButtonCalcelComponent
  ]
})
export class CardModule { }
