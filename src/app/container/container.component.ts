import { Component } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  title = "Hot deals";
  addToCart = 0;
  product = {
    name: 'Iphone',
    color: 'Metallic Red',
    price: 4999,
    discount: 8.5,
    stock: 10,
    min_quantity: 1,
    image: 'assets/shopping.webp'
  }

  productList: string[] = ['Iphone 12', 'Iphone 12 pro max', 'Iphone 12 pro', 'Iphone 13', 'Iphone 13', 'Iphone 13 pro max']

  getDiscount() {
    var discount = this.product.price - (this.product.price * this.product.discount / 100);
    return discount;
  }

  onChangeQuantityMinus() {
    this.product.min_quantity > 1 ? this.product.min_quantity-- : '';
  }
  onChangeQuantityPlus() {
    this.product.min_quantity < this.product.stock ? this.product.min_quantity++ : '';
  }

  searchText: string = "";

  searchProductText(value: string) {
    this.searchText = value;
  }
}
