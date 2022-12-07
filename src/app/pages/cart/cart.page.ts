import { Component, OnInit } from '@angular/core';
import { IProduct, ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  products: IProduct[];
  total: number;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getCartProducts();

    this.productService
      .getCartTotal()
      .subscribe((value) => (this.total = value));
  }
}
