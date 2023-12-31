import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminMessageService } from '../admin-message.service';
import { AdminProductUpdateService } from '../admin-product-update/admin-product-update.service';
import { AdminProductUpdate } from '../admin-product-update/model/adminProductUpdate';
import { AdminProductAddService } from './admin-product-add.service';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.scss']
})
export class AdminProductAddComponent implements OnInit {

  productForm!: FormGroup;
  requiredFileTypes = "image/jpeg, image/png";
  image: string | null = null;
  imageForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adminProductAddService: AdminProductAddService,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminMessageService: AdminMessageService,
    private adminProductUpdateService: AdminProductUpdateService
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(4)]],
      categoryId: ['', [Validators.required, Validators.minLength(4)]],
      price: ['', [Validators.required, Validators.min(0)]],
      currency: ['$', Validators.required],
      slug: ['', [Validators.required, Validators.minLength(4)]],
      image: ['', [Validators.required, Validators.minLength(4)]],

    });
    this.imageForm = this.formBuilder.group({
      file: ['']
    })
  }

  submit() {
    this.adminProductAddService.saveNewProduct({
      name: this.productForm.get('name')?.value,
      description: this.productForm.get('description')?.value,
      categoryId: this.productForm.get('categoryId')?.value,
      price: this.productForm.get('price')?.value,
      currency: this.productForm.get('currency')?.value,
      // slug: this.productForm.get('slug')?.value,
      // image: this.image
      image: this.productForm.get('image')?.value,

    } as AdminProductUpdate)
      .subscribe({
        next: product => {
          this.router.navigate(["/admin/products/update", product.id])
            .then(() => this.snackBar.open("Product was added", "", { duration: 3000 }))
        },
        error: err => this.adminMessageService.addSpringErrors(err.error)
      })
  }

  uploadFile(){
    let formData = new FormData();
    formData.append('file', this.imageForm.get('file')?.value);
    this.adminProductUpdateService.uploadImage(formData)
      .subscribe(result => this.image = result.filename);
  }

  onFileChange(event: any){
    if(event.target.files.length > 0){
      this.imageForm.patchValue({
        file: event.target.files[0]
      });
    }
  }
}
