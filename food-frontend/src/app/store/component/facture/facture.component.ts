import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  constructor() { }
  @Input() carShop
  @Input() total
  @Output() FinishedBuy = new EventEmitter();
  ngOnInit(): void {
  }


  finish(confirmBuy){

    this.FinishedBuy.emit(confirmBuy);
  }

  buy(){
    this.finish(true);
  }

  cancelBuy(){
    if(confirm('Do you Wanna cancel the order?')){
      this.finish(false);
    }
  
  }



}
