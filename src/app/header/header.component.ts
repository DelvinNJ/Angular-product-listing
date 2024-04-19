import { Component,OnInit } from "@angular/core";
import { ProductService } from "../services/product.service";
import { Observable } from "rxjs";
import { Product } from "../container/models/product";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  product!:Observable<Product>

  constructor(private productService:ProductService){}
  title: string = "eKart"
  ngOnInit(): void {
    this.product = this.productService.selectedProduct;
  }
}
