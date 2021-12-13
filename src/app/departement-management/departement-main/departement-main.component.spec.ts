import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementMainComponent } from './departement-main.component';

describe('DepartementMainComponent', () => {
  let component: DepartementMainComponent;
  let fixture: ComponentFixture<DepartementMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
