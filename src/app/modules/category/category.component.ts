import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CategoryService } from './category.service';
import { Category } from './model/category';
import { CategoryProducts } from './model/categoryProducts';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  categoryProducts!: CategoryProducts;
  private sub!: Subscription;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.getCategoryWithProducts(0, 10));

    this.getCategoryWithProducts(0, 10);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getCategoryWithProducts(page: number, size: number) {
    let url = this.route.snapshot.params['url'];
    this.categoryService.getCategoryWithProducts(url, page, size)
      .subscribe(categoryProducts => this.categoryProducts = categoryProducts);
  }

  onPageChange(event: PageEvent) {
    this.getCategoryWithProducts(event.pageIndex, event.pageSize);
  }

}
