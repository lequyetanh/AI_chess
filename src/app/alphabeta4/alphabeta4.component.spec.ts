import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alphabeta4Component } from './alphabeta4.component';

describe('Alphabeta4Component', () => {
  let component: Alphabeta4Component;
  let fixture: ComponentFixture<Alphabeta4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Alphabeta4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Alphabeta4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
