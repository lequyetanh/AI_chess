import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BruceForceComponent } from './bruce-force.component';

describe('BruceForceComponent', () => {
  let component: BruceForceComponent;
  let fixture: ComponentFixture<BruceForceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BruceForceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BruceForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
