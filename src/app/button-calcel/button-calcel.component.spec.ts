import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCalcelComponent } from './button-calcel.component';

describe('ButtonCalcelComponent', () => {
  let component: ButtonCalcelComponent;
  let fixture: ComponentFixture<ButtonCalcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCalcelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCalcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
