import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WapperComponent } from './wapper.component';

describe('WapperComponent', () => {
  let component: WapperComponent;
  let fixture: ComponentFixture<WapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
