import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IProduct, ProductService } from 'src/app/service/product.service';

type Filter = 'new' | 'sale' | 'all';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: IProduct[];
  filteredProducts: IProduct[];
  $activeFilter: BehaviorSubject<string> = new BehaviorSubject<string>('all');
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();

    this.$activeFilter.subscribe((filter) => {
      if (filter === 'all') {
        this.filteredProducts = this.products;
      } else {
        this.filteredProducts = this.products.filter(
          (product) => product.category === filter
        );
      }
    });
  }

  handleFilterClick(filter: Filter) {
    this.$activeFilter.next(filter);
  }
}
