// backend/src/train/train.controller.ts
import { Controller, Post, Get, Body } from '@nestjs/common';
import { TrainService } from './train.service';
import { CreateTrainDto } from './dto/create-train.dto';
import { Train } from './entities/train.entity';
@Controller('trains')
export class TrainController {
  constructor(private readonly trainService: TrainService) {}

  @Post()
  async create(@Body() createTrainDto: CreateTrainDto) {
    const train = await this.trainService.create(createTrainDto);
    return { message: 'Train created successfully', train };
  }

  @Get()
  async findAll(): Promise<Train[]> {
    return this.trainService.findAll();
  }
}