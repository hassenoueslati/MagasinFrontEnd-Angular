import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurManagementComponent } from './fournisseur-management.component';
import {FournisseurMainComponent} from "./fournisseur-main/fournisseur-main.component";

const routes: Routes = [{ path: '', component: FournisseurManagementComponent },
  {path: 'fournisseur', component: FournisseurMainComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurManagementRoutingModule { }
