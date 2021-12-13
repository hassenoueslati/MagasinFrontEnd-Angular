import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureComponent } from './facture/facture.component';
import { HomeComponent } from './home/home.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { StockComponent } from './stock-management/stock/stock.component';
import { ReclamationComponent } from './reclamation-management/reclamation/reclamation.component';
import { RayonComponent } from './rayon-management/rayon/rayon.component';
import {MainUserComponent} from "./user-management/main-user/main-user.component";
import {LoginComponent} from "./user-management/login/login.component";
import {RegisterUserComponent} from "./user-management/register/register-user.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'facture', component: FactureComponent},
  {path: 'user', component: MainUserComponent},
  {path: 'stock', component: StockComponent},
  {path: 'reclamation', component: ReclamationComponent},
  {path: 'rayon', component: RayonComponent},
  {path: 'detailFacture', component: DetailFactureComponent},
  {path: 'register',component: RegisterUserComponent },
  { path: 'ProductManagement', loadChildren: () => import('./product-management/product-management.module').then(m => m.ProductManagementModule) },
  { path: 'FournisseurManagement', loadChildren: () => import('./fournisseur-management/fournisseur-management.module').then(m => m.FournisseurManagementModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
