import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../interface/food';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http:HttpClient) { }

  async getDataApi(){
    return await this.http.get<Food[]>('http://localhost:3000/food').toPromise()
  }
}
