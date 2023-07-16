import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageadminComponent } from './fullpageadmin.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminProductComponent } from '../../modules/admin/admin-product/admin-product.component';
import { AdminComponent } from '../../modules/admin/admin.component';
import { MaterialModule } from '../../shared/material.module';
import { AdminConfirmDialogComponent } from 'src/app/modules/admin/admin-confirm-dialog/admin-confirm-dialog.component';
import { AdminProductUpdateComponent } from 'src/app/modules/admin/admin-product-update/admin-product-update.component';
import { AdminProductFormConponent } from 'src/app/modules/admin/admin-product-form/admin-product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminProductAddComponent } from 'src/app/modules/admin/admin-product-add/admin-product-add.component';

@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent, 
    AdminProductComponent,
    AdminConfirmDialogComponent,
    AdminProductUpdateComponent,
    AdminProductFormConponent,
    AdminProductAddComponent
    

  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FullpageadminModule { }
