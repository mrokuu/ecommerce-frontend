import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-product-form',
    template: `
    <div [formGroup]="parentForm" fxLayout="column">
        <mat-form-field appearance="fill">
            <mat-label>Name</mat-label>
            <input matInput placeholder="Enter name" formControlName="name">
            <div *ngIf="name?.invalid && (name?.dirty || name?.touched)" class="erroMessages">
                <div *ngIf="name?.errors?.['required']">
                    Name is required
                </div>
                <div *ngIf="name?.errors?.['minlength']">
                The name must be at least 4 characters long
                </div>
            </div>
        </mat-form-field>

        <!-- <mat-form-field appearance="fill">
            <mat-label>Friendly url</mat-label>
            <input matInput placeholder="Podaj url" formControlName="slug">
            <div *ngIf="slug?.invalid && (slug?.dirty || slug?.touched)" class="erroMessages">
                <div *ngIf="slug?.errors?.['required']">
                Name is required
                </div>
                <div *ngIf="slug?.errors?.['minlength']">
                The name must be at least 4 characters long
                </div>
            </div>
        </mat-form-field> -->

        <mat-form-field appearance="fill">
            <mat-label>Description</mat-label>
            <textarea matInput rows="20" placeholder="Enter description" formControlName="description"></textarea>
            <div *ngIf="description?.invalid && (description?.dirty || description?.touched)" class="erroMessages">
                <div *ngIf="description?.errors?.['required']">
                Description is required
                </div>
                <div *ngIf="description?.errors?.['minlength']">
                The description must be at least 4 characters long
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Category</mat-label>
            <input matInput placeholder="Enter category" formControlName="category">
            <div *ngIf="category?.invalid && (category?.dirty || category?.touched)" class="erroMessages">
                <div *ngIf="category?.errors?.['required']">
                Category is required
                </div>
                <div *ngIf="category?.errors?.['minlength']">
                The category must be at least 4 characters long
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Price</mat-label>
            <input matInput placeholder="Podaj cenę produktu" formControlName="price">
            <div *ngIf="price?.invalid && (price?.dirty || price?.touched)" class="erroMessages">
                <div *ngIf="price?.errors?.['required']">
                Price is required
                </div>
                <div *ngIf="price?.errors?.['min']">
                The price must be at least 4 characters long
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Currency</mat-label>
            <input matInput placeholder="Enter Currency" formControlName="currency">
            <div *ngIf="currency?.invalid && (currency?.dirty || currency?.touched)" class="erroMessages">
                <div *ngIf="currency?.errors?.['required']">
                Currency is required
                </div>
            </div>
        </mat-form-field>

        

        <div fxLayoutAlign="end">
            <button mat-flat-button color="primary">Save</button>
        </div>
</div>`,
    styles: [`
    .erroMessages{
        color:red;
    }`]
})
export class AdminProductFormConponent implements OnInit {

    @Input() parentForm!: FormGroup;

    ngOnInit(): void {

    }

    get name(){
        return this.parentForm.get("name");
    }

    get description(){
        return this.parentForm.get("description");
    }
    
    get category(){
        return this.parentForm.get("category");
    }

    get price(){
        return this.parentForm.get("price");
    }

    get currency(){
        return this.parentForm.get("currency");
    }

    get slug(){
        return this.parentForm.get("slug");
    }

  
}