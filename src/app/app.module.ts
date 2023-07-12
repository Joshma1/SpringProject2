import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeelistComponent,
    UpdateEmployeeComponent,
    CreateDepartmentComponent,
    DepartmentlistComponent,
    UpdateDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
