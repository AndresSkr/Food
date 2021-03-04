import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private service:StoreService) { }


  food;
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getDataApi().then(p=>{
      this.food=p.valueOf();
    });
  }

  carShop=[];
  selected = true;
  itemBuy;

  change(){
    this.selected = !this.selected;
  }
  
  clickBuyItem(itemSelectedBuy){
    this.change();
    this.itemBuy = itemSelectedBuy;
    
  }

  final(itemCustomized){
    this.carShop.push(itemCustomized);
    this.change();

  }

  buyFinish(){
    this.carShop = [];
  }
}
