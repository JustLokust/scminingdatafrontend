import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningFormShipComponent } from './mining-form-ship.component';

describe('MiningFormShipComponent', () => {
  let component: MiningFormShipComponent;
  let fixture: ComponentFixture<MiningFormShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiningFormShipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningFormShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
