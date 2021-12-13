import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementManagementComponent } from './departement-management.component';

describe('DepartementManagementComponent', () => {
  let component: DepartementManagementComponent;
  let fixture: ComponentFixture<DepartementManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
