import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactureManagementRoutingModule } from './facture-management-routing.module';
import { FactureManagementComponent } from './facture-management.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { FactureComponent } from './facture/facture.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    FactureManagementComponent,
    FactureComponent,
    DetailFactureComponent,
    UpdateFactureComponent,
  ],
  imports: [
    CommonModule,
    FactureManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
   
  
   
    
    DataTablesModule,
    ToastrModule.forRoot(
      {timeOut:10000000,
        progressBar:true,
        progressAnimation: 'increasing',
        preventDuplicates: true


      }
    ),
  ]
})
export class FactureManagementModule { }
