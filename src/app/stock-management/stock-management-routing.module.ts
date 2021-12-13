import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockManagementComponent } from './stock-management.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [{ path: '', component: StockManagementComponent },
{path: 'stock', component: StockComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockManagementRoutingModule { }
