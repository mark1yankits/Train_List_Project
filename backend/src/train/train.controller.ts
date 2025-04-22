import {
  Controller,
  Post,
  Get,
  Body,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TrainService } from './train.service';
import { CreateTrainDto } from './dto/create-train.dto';
import { Train } from './entities/train.entity';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';

@Controller('trains')

export class TrainController {
  constructor(private readonly trainService: TrainService) {}

  // Створити новий поїзд
  @Post()
  async create(@Body() createTrainDto: CreateTrainDto) {
    const train = await this.trainService.create(createTrainDto);
    return {
      message: 'Train created successfully',
      train,
    };
  }

  // Отримати всі поїзди з фільтрами
  @Get()
  async findAll(
    @Query('departureCity') departureCity?: string,
    @Query('arrivalCity') arrivalCity?: string,
  ): Promise<Train[]> {
    return this.trainService.findAllFiltered({
      departureCity,
      arrivalCity,
    });
  }
}
