import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureComponent } from './facture/facture.component';
import { HomeComponent } from './home/home.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'facture', component: FactureComponent},
  {path: 'detailFacture', component: DetailFactureComponent},
  { path: 'ProductManagement', loadChildren: () => import('./product-management/product-management.module').then(m => m.ProductManagementModule) },
  { path: 'FournisseurManagement', loadChildren: () => import('./fournisseur-management/fournisseur-management.module').then(m => m.FournisseurManagementModule) },
  { path: 'UserManagement', loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule) },
  { path: 'RayonManagement', loadChildren: () => import('./rayon-management/rayon-management.module').then(m => m.RayonManagementModule) },
  { path: 'StockManagement', loadChildren: () => import('./stock-management/stock-management.module').then(m => m.StockManagementModule) },
  { path: 'ReclamationManagement', loadChildren: () => import('./reclamation-management/reclamation-management.module').then(m => m.ReclamationManagementModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
