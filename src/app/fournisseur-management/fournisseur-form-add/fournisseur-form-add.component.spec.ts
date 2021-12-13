import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurFormAddComponent } from './fournisseur-form-add.component';

describe('FournisseurFormAddComponent', () => {
  let component: FournisseurFormAddComponent;
  let fixture: ComponentFixture<FournisseurFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurFormAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
