import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AdminReviewService } from './admin-review.service';
import { AdminReview } from './model/adminReview ';
import { AdminConfirmDialogService } from '../common/service/admin-confirm-dialog.service';

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.scss']
})
export class AdminReviewComponent implements OnInit {

  displayedColumns: string[] = ["authorName", "content", "moderated", "actions"];
  data: AdminReview[] = [];
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private adminReviewService: AdminReviewService,
    private dialogService: AdminConfirmDialogService
    ) { }

  ngOnInit(): void {
    this.getReviews();
  }

  confirmModerate(element: AdminReview) {
    this.dialogService.openConfirmDialog('Do you want to approve the review?')
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.adminReviewService.moderate(element.id).subscribe(() => {
            this.data.forEach((value, index) => {
              if (element === value) {
                element.moderated = true;
              }
            });
          });
        }
      });
  }

  confirmDelete(element: AdminReview) {
    this.dialogService.openConfirmDialog('Do you want to remove this review?')
    .afterClosed()
    .subscribe(result => {
      if (result) {
        this.adminReviewService.delete(element.id).subscribe(() => {
          this.data.forEach((value, index) => {
            if (element === value) {
              this.data.splice(index, 1);
              this.table.renderRows();
            }
          });
        });
      }
    });
  }

  getReviews() {
    this.adminReviewService.getReviews()
      .subscribe(reviews => this.data = reviews);
  }
}
