import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurMainComponent } from './fournisseur-main.component';

describe('FournisseurMainComponent', () => {
  let component: FournisseurMainComponent;
  let fixture: ComponentFixture<FournisseurMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
