import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureManagementComponent } from './facture-management.component';

describe('FactureManagementComponent', () => {
  let component: FactureManagementComponent;
  let fixture: ComponentFixture<FactureManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
