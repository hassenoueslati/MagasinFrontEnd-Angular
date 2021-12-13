import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductManagementComponent } from './product-management.component';
import {ProduitComponent} from "./produit/produit.component";
import {ProduitMainComponent} from "./produit-main/produit-main.component";
import {ProduitFormAddComponent} from "./produit-form-add/produit-form-add.component";
import {DetailProduitComponent} from "./detail-produit/detail-produit.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ProductManagementComponent,
    ProduitComponent,
    ProduitMainComponent,
    ProduitFormAddComponent,
    DetailProduitComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class ProductManagementModule { }
