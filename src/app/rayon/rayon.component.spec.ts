import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayonComponent } from './rayon.component';

describe('RayonComponent', () => {
  let component: RayonComponent;
  let fixture: ComponentFixture<RayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
