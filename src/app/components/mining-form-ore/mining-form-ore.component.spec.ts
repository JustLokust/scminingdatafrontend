import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningFormOreComponent } from './mining-form-ore.component';

describe('MiningFormOreComponent', () => {
  let component: MiningFormOreComponent;
  let fixture: ComponentFixture<MiningFormOreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiningFormOreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningFormOreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
