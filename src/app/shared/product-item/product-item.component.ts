import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;
  constructor(private router: Router) {}

  handleClick() {
    this.router.navigateByUrl(`products/${this.product.id}`);
  }

  ngOnInit() {}
}
