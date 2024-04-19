import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  searchText: string = "";
  searchTextSecondMethod: string = "";

  @Output() searchProductText: EventEmitter<string> = new EventEmitter<string>();


  updateSearch(){
    this.searchProductText.emit(this.searchText);
  }

  onSearchProductText(searchInput : HTMLInputElement){
    this.searchTextSecondMethod = searchInput.value;
    this.searchProductText.emit(this.searchTextSecondMethod);
  }

}
