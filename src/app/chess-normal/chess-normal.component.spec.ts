import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessNormalComponent } from './chess-normal.component';

describe('ChessNormalComponent', () => {
  let component: ChessNormalComponent;
  let fixture: ComponentFixture<ChessNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
