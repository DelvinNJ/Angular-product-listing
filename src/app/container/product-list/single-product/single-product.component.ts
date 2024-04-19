import { Product } from '../../models/product';
import { Component, Input,OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit{
  @Input()
  product!: Product;

  constructor(private productService:ProductService){}

  ngOnInit(): void {
}
  addToCart(product:Product){
     this.productService.addToCart(product);
  }
}
