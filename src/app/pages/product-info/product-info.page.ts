import { Component, OnInit } from '@angular/core';
import { IProduct, ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss'],
})
export class ProductInfoPage implements OnInit {
  product: IProduct;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit() {
    let id;

    this.route.paramMap.subscribe((params) => {
      id = params.get('id');
    });

    this.product = this.productService
      .getProducts()
      .find((product) => product.id === Number(id));
  }

  handleAddCartClick(id: number) {
    const product = this.productService
      .getProducts()
      .find((currentProduct) => currentProduct.id === id);

    this.productService.addToCart(product);
  }
}
