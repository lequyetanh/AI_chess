import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alphabeta3Component } from './alphabeta3.component';

describe('Alphabeta3Component', () => {
  let component: Alphabeta3Component;
  let fixture: ComponentFixture<Alphabeta3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Alphabeta3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Alphabeta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
