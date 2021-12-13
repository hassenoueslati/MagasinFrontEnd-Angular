import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitFormAddComponent } from './produit-form-add.component';

describe('ProduitFormAddComponent', () => {
  let component: ProduitFormAddComponent;
  let fixture: ComponentFixture<ProduitFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitFormAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
