import { Subject } from 'rxjs/internal/Subject';
import { Injectable } from '@angular/core';
import { Product } from '../container/models/product';
import  { Observable } from 'rxjs';


@Injectable({
  providedIn:'root'
})
export class ProductService{
  private cartEmitter:Subject<Product> = new Subject();
  selectedProduct:Observable<Product> = this.cartEmitter.asObservable();

  addToCart(product:Product){
   this.cartEmitter.next(product);
  }
}
