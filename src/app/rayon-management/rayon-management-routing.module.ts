import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RayonManagementComponent } from './rayon-management.component';
import {MainRayonComponent} from "./main-rayon/main-rayon.component";

const routes: Routes = [{ path: '', component: RayonManagementComponent },
  {path: 'rayon', component: MainRayonComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RayonManagementRoutingModule { }
