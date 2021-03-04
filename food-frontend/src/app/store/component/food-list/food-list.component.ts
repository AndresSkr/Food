import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor() { }


  @Input() food;
  @Output() selectedClick = new EventEmitter();
  ngOnInit(): void {
  }

  clickSelectItem(item){

     this.selectedClick.emit(item); 
  }

}
