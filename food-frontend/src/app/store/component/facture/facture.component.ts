import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  constructor() { }
  @Input() carShop
  @Output() buyFinish = new EventEmitter();
  ngOnInit(): void {
  }

  buy(){
    this.buyFinish.emit();
  }

}
