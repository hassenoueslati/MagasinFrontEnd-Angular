import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementManagementRoutingModule } from './departement-management-routing.module';
import { DepartementManagementComponent } from './departement-management.component';
import { DepartementMainComponent } from './departement-main/departement-main.component';
import { DepartementFormAddComponent } from './departement-form-add/departement-form-add.component';
import { DepartementComponent } from './departement/departement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    DepartementManagementComponent,
    DepartementComponent,
    DepartementFormAddComponent,
    DepartementMainComponent,
  ],
  imports: [
    CommonModule,
    DepartementManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    NgxPaginationModule ,
    ToastrModule.forRoot(
      {timeOut:10000000,
        progressBar:true,
        progressAnimation: 'increasing',
        preventDuplicates: true


      }
    ),
  ]
})
export class DepartementManagementModule { }
