import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayonFormAddComponent } from './rayon-form-add.component';

describe('RayonFormAddComponent', () => {
  let component: RayonFormAddComponent;
  let fixture: ComponentFixture<RayonFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RayonFormAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RayonFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
