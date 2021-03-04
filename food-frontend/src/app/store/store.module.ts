import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { FoodListComponent } from './component/food-list/food-list.component';
import { FactureComponent } from './component/facture/facture.component';
import { CustomizeComponent } from './component/customize/customize.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [StoreComponent, FoodListComponent, FactureComponent, CustomizeComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    StoreComponent
  ]
})
export class StoreModule { }
