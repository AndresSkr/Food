import { Component, OnInit } from '@angular/core';
import { Food } from '../interface/food';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private service: StoreService) { }

  food : Food[];
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getDataApi().then(p=> {
      this.food = p;
    });
  }

  carShop = [];
  customizing = false;
  itemBuy:Food;
  total:number = 0;
  
  change() {
    this.customizing = !this.customizing;
  }

  clickBuyItem(itemSelectedBuy) {
    this.change();
    this.itemBuy = itemSelectedBuy;

  }

  final(itemCustomized) {
    this.carShop.push(itemCustomized);
    this.calculateTotal(itemCustomized.price)
    this.change();
  }

  buyFinish(confirmBuy) {
    
    if (confirmBuy) {
      /* Code send backend petition and other*/
      alert('Buy Done')
    }else{
      alert('successfully canceled')
    }
    this.rest();
  }

  rest() {
    this.carShop = [];
    this.total = 0;
  }

  calculateTotal(priceItemSelectedCustom) {
    this.total += priceItemSelectedCustom;
  }
}
