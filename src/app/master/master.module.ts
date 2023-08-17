import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './property/property/property.component';
import { EnquiryComponent } from 'src/app/master/enquiry/enquiry/enquiry.component';
import { AddEditPropertyComponent } from './property/add-edit-property/add-edit-property.component';
import { MaterialModule } from 'src/app/components/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditEnquiryComponent } from './enquiry/add-edit-enquiry/add-edit-enquiry.component';
import { ComponentsModule } from '../components/components.module';
import { AddRoleComponent } from './role-mapping/add-role/add-role.component';
import { RoleFunctionComponent } from './role-mapping/role-function/role-function.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { UploadsModule } from "@progress/kendo-angular-upload";
import { LoaderComponent } from 'src/app/master/loader/loader.component';
import { AppModule } from '../app.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { BlogComponent } from './blog/blog.component';

import { CKEditorModule } from 'ckeditor4-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    PropertyComponent,
    EnquiryComponent,
    AddEditPropertyComponent,
    AddEditEnquiryComponent,
    AddRoleComponent,
    RoleFunctionComponent,
    LoaderComponent,
    ConfirmationDialogComponent,
    BlogComponent
    


  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ComponentsModule,
    GridModule,
    PDFModule,
    ExcelModule,
    UploadsModule,
    NgxSpinnerModule,
    CKEditorModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class MasterModule { }
