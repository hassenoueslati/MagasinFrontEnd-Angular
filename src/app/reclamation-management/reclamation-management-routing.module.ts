import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationManagementComponent } from './reclamation-management.component';
import { ReclamationComponent } from './reclamation/reclamation.component';

const routes: Routes = [{ path: '', component: ReclamationManagementComponent },
{path: 'reclamation', component: ReclamationComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationManagementRoutingModule { }
