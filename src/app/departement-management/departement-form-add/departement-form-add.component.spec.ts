import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementFormAddComponent } from './departement-form-add.component';

describe('DepartementFormAddComponent', () => {
  let component: DepartementFormAddComponent;
  let fixture: ComponentFixture<DepartementFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementFormAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
