import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitMainComponent } from './produit-main.component';

describe('ProduitMainComponent', () => {
  let component: ProduitMainComponent;
  let fixture: ComponentFixture<ProduitMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
