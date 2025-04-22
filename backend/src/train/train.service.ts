import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Train } from './entities/train.entity';
import { CreateTrainDto } from './dto/create-train.dto';

@Injectable()
export class TrainService {
constructor(
    @InjectRepository(Train)
    private readonly trainRepository: Repository<Train>,
) {}

  // create travel
async create(createTrainDto: CreateTrainDto): Promise<Train> {
    const train = this.trainRepository.create(createTrainDto);
    return this.trainRepository.save(train);
}

  // get all trains filter
async findAllFiltered(filters: {
    departureCity?: string;
    arrivalCity?: string;
}): Promise<Train[]> {
    const query = this.trainRepository.createQueryBuilder('train');

    if (filters.departureCity) {
        query.andWhere('train.departureCity ILIKE :departureCity', {
        departureCity: `%${filters.departureCity}%`,
        });
    }

    if (filters.arrivalCity) {
        query.andWhere('train.arrivalCity ILIKE :arrivalCity', {
        arrivalCity: `%${filters.arrivalCity}%`,
        });
    }

    return query.getMany();
}
}
