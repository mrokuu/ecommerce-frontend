import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageadminComponent } from './fullpageadmin.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminProductComponent } from '../../modules/admin/admin-product/admin-product.component';
import { AdminComponent } from '../../modules/admin/admin.component';
import { MaterialModule } from '../../shared/material.module';
import { AdminProductUpdateComponent } from 'src/app/modules/admin/admin-product-update/admin-product-update.component';
import { AdminProductFormConponent } from 'src/app/modules/admin/admin-product-form/admin-product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminProductAddComponent } from 'src/app/modules/admin/admin-product-add/admin-product-add.component';
import { AdminMessageComponent } from 'src/app/modules/admin/common/componnent/admin-message/admin-message.component';
import { AdminCategoryComponent } from 'src/app/modules/admin/admin-category/admin-category.component';
import { AdminCategoryUpdateComponent } from 'src/app/modules/admin/admin-category/admin-category-update/admin-category-update.component';
import { AdminCategoryFormConponent } from 'src/app/modules/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminReviewComponent } from 'src/app/modules/admin/admin-review/admin-review.component';
import { AdminCategoryAddComponent } from 'src/app/modules/admin/admin-category/admin-category-add/admin-category-add.component';
import { AdminConfirmDialogComponent } from 'src/app/modules/admin/common/componnent/admin-confirm-dialog/admin-confirm-dialog.component';
import { AdminOrderComponent } from 'src/app/modules/admin/admin-order/admin-order.component';
import { AdminOrderUpdateComponent } from 'src/app/modules/admin/admin-order/admin-order-update/admin-order-update.component';
import { AdminOrderStatsComponent } from 'src/app/modules/admin/admin-order/admin-order-stats/admin-order-stats.component';
import { AdminOrderExportComponent } from 'src/app/modules/admin/admin-order/admin-order-export/admin-order-export.component';

@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminProductComponent,
    AdminProductUpdateComponent,
    AdminProductAddComponent,
    AdminProductFormConponent,
    AdminMessageComponent,
    AdminConfirmDialogComponent,
    AdminCategoryComponent,
    AdminCategoryAddComponent,
    AdminCategoryUpdateComponent,
    AdminCategoryFormConponent,
    AdminReviewComponent,
    AdminOrderComponent,
    AdminOrderUpdateComponent,
    AdminOrderExportComponent,
    AdminOrderStatsComponent
    

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
