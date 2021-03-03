import { HttpService, Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodService {

  constructor(private http: HttpService) {

  }
  create(createFoodDto: CreateFoodDto) {
    return 'This action adds a new food';
  }

  async findAll() {
    let res = await this.http.get<Food[]>('http://cdn.tekus.co/PT2018/Products.json').toPromise();
    return res.data;
  }

  findOne(id: number) {
    return `This action returns a #${id} food`;
  }


  remove(id: number) {
    return `This action removes a #${id} food`;
  }
}
