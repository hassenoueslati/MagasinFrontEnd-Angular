import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayonManagementComponent } from './rayon-management.component';

describe('RayonManagementComponent', () => {
  let component: RayonManagementComponent;
  let fixture: ComponentFixture<RayonManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RayonManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RayonManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
