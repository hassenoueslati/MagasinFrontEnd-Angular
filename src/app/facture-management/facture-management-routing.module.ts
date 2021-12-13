import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';


import { FactureManagementComponent } from './facture-management.component';
import { FactureComponent } from './facture/facture.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';


const routes: Routes = [
  { path: 'detailFacture/:idFacture', component: DetailFactureComponent },
  {path: 'updateFacture/:id', component: UpdateFactureComponent},

  {path: 'facture', component: FactureComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureManagementRoutingModule { }
