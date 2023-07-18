import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-category-form',
    template: `
    <div [formGroup]="parentForm" fxLayout="column">
        <mat-form-field appearance="fill">
            <mat-label>Name</mat-label>
            <input matInput placeholder="Podaj nazwę produktu" formControlName="name">
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
            <mat-label>Url</mat-label>
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
            <textarea matInput rows="10" placeholder="Enter description" formControlName="description"></textarea>
            <div *ngIf="description?.invalid && (description?.dirty || description?.touched)" class="erroMessages">
                <div *ngIf="description?.errors?.['required']">
                Description is required
                </div>
                <div *ngIf="description?.errors?.['minlength']">
                The description must be at least 4 characters long
                </div>
            </div>
        </mat-form-field>




        <div fxLayoutAlign="end">
            <button mat-flat-button color="primary" >Save</button>
        </div>
</div>`,
    styles: [`
    .erroMessages{
        color:red;
    }`]
})
export class AdminCategoryFormConponent implements OnInit {

    @Input() parentForm!: FormGroup;

    constructor(){}

    ngOnInit(): void {
    }

    get name(){
        return this.parentForm.get("name");
    }

    get description(){
        return this.parentForm.get("description");
    }

    get slug(){
        return this.parentForm.get("slug");
    }
}