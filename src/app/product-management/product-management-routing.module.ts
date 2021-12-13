import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagementComponent } from './product-management.component';
import {ProduitMainComponent} from "./produit-main/produit-main.component";
import {DetailProduitComponent} from "./detail-produit/detail-produit.component";

const routes: Routes = [{ path: '', component: ProductManagementComponent },
  {path: 'produit', component: ProduitMainComponent},
  {path: 'produit/detailProduit/:idProduit', component: DetailProduitComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
