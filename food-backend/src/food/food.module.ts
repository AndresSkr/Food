import { HttpModule, Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';

@Module({
  imports: [HttpModule],
  controllers: [FoodController],
  providers: [FoodService]
})
export class FoodModule {}
