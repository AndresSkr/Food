import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent implements OnInit {

  constructor() { }

  @Input() itemBuy;
  @Output() final = new EventEmitter();
  control = 0;
  itemCustom = {
    name:undefined,
    price: undefined,
    steps:[]
  }

  ngOnInit(): void {
    this.itemCustom = {
      name:this.itemBuy.name,
      price: this.itemBuy.price,
      steps:[]
    }
    
  }

  finish(){
    this.final.emit(this.itemCustom);
  }

  select(stepSelected){
    this.itemCustom.steps.push(stepSelected);
    this.validateControl();
  }

  validateControl(){
    this.control +=1;
    if(this.control>=this.itemBuy.steps.length){
      this.finish();
    }
  }

}
