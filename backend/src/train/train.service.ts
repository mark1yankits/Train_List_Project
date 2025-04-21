// backend/src/train/train.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Train } from './entities/train.entity';
import { CreateTrainDto } from './dto/create-train.dto';

@Injectable()
export class TrainService {
  constructor(
    @InjectRepository(Train)
    private trainRepository: Repository<Train>,
  ) {}

  async create(createTrainDto: CreateTrainDto): Promise<Train> {
    const newTrain = this.trainRepository.create({
      ...createTrainDto,
      departureTime: new Date(createTrainDto.departureTime),
      arrivalTime: new Date(createTrainDto.arrivalTime),
    });
    return this.trainRepository.save(newTrain);
  }

  async findAll(): Promise<Train[]> {
    return this.trainRepository.find();
  }
}