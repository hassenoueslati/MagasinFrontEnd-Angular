import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurManagementComponent } from './fournisseur-management.component';

describe('FournisseurManagementComponent', () => {
  let component: FournisseurManagementComponent;
  let fixture: ComponentFixture<FournisseurManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
