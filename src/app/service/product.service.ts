/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  img: string;
  category: string;
  featured: boolean;
  id: number;
}

const products: IProduct[] = [
  {
    name: 'POVA 4 | Helio G99 Gaming Processor',
    description:
      // eslint-disable-next-line max-len
      'Phone Features Wifi,NFC,bluetooth,Expandable Memory,Fingerprint Sensor,Touchscreen,GPS,Reverse wireless charging,Fast Charging,Gyro,Accelerometer,USB power delivery,Proximity,Compass',
    price: 7699.0,
    oldPrice: 8999.0,
    img: 'pova4.png',
    category: 'sale',
    featured: false,
    id: 1,
  },
  {
    name: 'Velcro badge reflective fabric',
    description:
      'Clothing personalized accessories can be pasted on clothes, backpacks, hats and other commodities,DIYCustom made. Show you are different. The Velcro hook supports the tactical hat and hook face Hook backing for attachment to Tactical Hats and Gear',
    price: 61.0,
    oldPrice: 131.0,
    img: 'velcro.png',
    category: 'new',
    featured: false,
    id: 2,
  },
  {
    name: '【Buy 6 get 1 free MASON 3D EMBROIDERED HAT',
    description:
      'Please cherish the COD Right that you have, Refusing to accept the parcel for any reason will cause huge losses(products and shipping costs) for our overseas sellers. Please consider carefully before ordering, otherwise you will be blocked due to your irresponsible behavior! Thank you for understanding!',
    price: 170.0,
    oldPrice: 325.0,
    img: 'mason-hat.png',
    category: 'new',
    featured: false,
    id: 3,
  },
  {
    name: 'Janpan Anime My Boku no Hero Academia Hoodie',
    description:
      '[Hoodie size S] Bust/Chest:104cm, Length:63cm, Shoulders:42cm, Sleeve:60cm, [Hoodie size M] Bust/Chest:107cm, Length:65cm, Shoulders:43cm, Sleeve:62cm, [Hoodie size L] Bust/Chest:110cm, Length:67cm, Shoulders:44cm, Sleeve:64cm, [Hoodie size XL] Bust/Chest:113cm, Length:69cm, Shoulders:45cm, Sleeve:66cm, [Hoodie size XXL] Bust/Chest:116cm, Length:71cm, Shoulders:46cm, Sleeve:68cm, [Hoodie size 3XL] Bust/Chest:119cm, Length:73cm, Shoulders:47cm, Sleeve:70cm, [Hoodie size 4XL] Bust/Chest:122cm, Length:75cm, Shoulders:48cm, Sleeve:72cm, [Hoodie size 5XL] Bust/Chest:125cm, Length:77cm, Shoulders:49cm, Sleeve:74cm,',
    price: 653.0,
    oldPrice: 2041.0,
    img: 'hero-academia.png',
    category: 'sale',
    featured: true,
    id: 4,
  },
  {
    name: 'Aquaflask (22oz) Wide Mouth with Spout Lid',
    description:
      'AQUAFLASK (22oz) Wide mouth w/ spout lid Vacuum Insulated Stainless Steel Drinking Water Bottle • Stainless Steel • Double-wall • Vacuum-insulated • Leak proof • BPA Free • 12 hours hot; 24 hours cold • Durable • Convenient to use • 1 year Limited Warranty',
    price: 700.0,
    oldPrice: 2290.0,
    img: 'aqua-flask.png',
    category: 'sale',
    featured: true,
    id: 5,
  },
  // {
  //   name: '',
  //   description: '',
  //   price: '',
  //   oldPrice: '',
  //   img: '',
  //   category: '',
  //   featured: true,
  // },
];

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cart = [];
  $total = new Subject<number>();

  constructor() {}

  getProducts() {
    return products;
  }

  addToCart(product: IProduct) {
    this.cart.push(product);

    const total = this.cart.reduce(
      (totalPrice, currentProduct) => (totalPrice += currentProduct.price),
      0
    );

    this.$total.next(total);
  }

  getCartTotal(): Observable<number> {
    return this.$total;
  }

  getCartProducts() {
    return this.cart;
  }
}
