import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  @Input() allProducts: number = 0;

  @Input() inStock: number = 0;

  @Input() outStock: number = 0;


  selectedRadioButton: string = "all";

  @Output() selectedChangeRadioButton: EventEmitter<string> = new EventEmitter<string>();

  // filtering
  onSelectedChangeRadioButton() {
    this.selectedChangeRadioButton.emit(this.selectedRadioButton);
  }

  // updateSearchText(event : any){
  //   this.searchText = event.target.value;
  // }
}
