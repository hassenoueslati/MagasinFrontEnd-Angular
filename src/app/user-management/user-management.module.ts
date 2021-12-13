import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import {MainUserComponent} from "./main-user/main-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {LoginComponent} from "./login/login.component";
import {RegisterUserComponent} from "./register/register-user.component";
import {ProfilComponent} from "./profil/profil.component";
import {UserFormUpdateComponent} from "./user-form-update/user-form-update.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {DataTablesModule} from "angular-datatables";
import {AppComponent} from "../app.component";


@NgModule({
  declarations: [
    UserManagementComponent,
    MainUserComponent,
    ListUserComponent,
    LoginComponent,
    RegisterUserComponent,
    ProfilComponent,
    UserFormUpdateComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  entryComponents:[LoginComponent]
})
export class UserManagementModule { }
