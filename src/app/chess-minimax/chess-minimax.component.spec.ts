import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessMinimaxComponent } from './chess-minimax.component';

describe('ChessMinimaxComponent', () => {
  let component: ChessMinimaxComponent;
  let fixture: ComponentFixture<ChessMinimaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessMinimaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessMinimaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
