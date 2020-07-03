import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipCardBackComponent } from './flip-card-back.component';

describe('FlipCardBackComponent', () => {
  let component: FlipCardBackComponent;
  let fixture: ComponentFixture<FlipCardBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlipCardBackComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipCardBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
