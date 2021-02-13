import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningFormLocationComponent } from './mining-form-location.component';

describe('MiningFormLocationComponent', () => {
  let component: MiningFormLocationComponent;
  let fixture: ComponentFixture<MiningFormLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiningFormLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningFormLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
