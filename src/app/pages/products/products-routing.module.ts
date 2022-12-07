import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductInfoPage } from '../product-info/product-info.page';

import { ProductsPage } from './products.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsPage,
  },
  {
    path: ':id',
    component: ProductInfoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
