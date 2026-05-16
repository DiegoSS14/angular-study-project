import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompTestComponent } from '../comp-test/comp-test.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompTestComponent,
  ],
  exports: [
    CompTestComponent
  ]
})
export class TestesModule { }
