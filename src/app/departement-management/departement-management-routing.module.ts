import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementMainComponent } from './departement-main/departement-main.component';
import { DepartementManagementComponent } from './departement-management.component';

const routes: Routes = [{ path: '', component: DepartementManagementComponent },
{path: 'departement', component: DepartementMainComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementManagementRoutingModule { }
