import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRayonComponent } from './main-rayon.component';

describe('MainRayonComponent', () => {
  let component: MainRayonComponent;
  let fixture: ComponentFixture<MainRayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
