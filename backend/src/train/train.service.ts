import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Train } from './entities/train.entity';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';

@Injectable()
export class TrainService {
	constructor(
		@InjectRepository(Train)
		private readonly trainRepository: Repository<Train>,
	) {
		console.log(
			'TrainService initialized with repository:',
			!!this.trainRepository,
		);
	}

	async create(createTrainDto: CreateTrainDto): Promise<Train> {
		console.log('Creating train with data:', createTrainDto);
		const train = this.trainRepository.create(createTrainDto);
		const savedTrain = await this.trainRepository.save(train);
		console.log('Saved train:', savedTrain);
		return savedTrain;
	}

	async findAllFiltered(filters: {
		departureCity?: string;
		arrivalCity?: string;
	}): Promise<Train[]> {
		console.log('Filtering trains with:', filters);

		const allTrains = await this.trainRepository.find();
		console.log('All trains in database:', allTrains);

		const query = this.trainRepository.createQueryBuilder('train');

		if (filters.departureCity && filters.departureCity.trim()) {
			console.log(
				'Applying departureCity filter:',
				filters.departureCity.trim(),
			);
			query.andWhere('train.departureCity ILIKE :departureCity', {
				departureCity: `%${filters.departureCity.trim()}%`,
			});
		}

		if (filters.arrivalCity && filters.arrivalCity.trim()) {
			console.log('Applying arrivalCity filter:', filters.arrivalCity.trim());
			query.andWhere('train.arrivalCity ILIKE :arrivalCity', {
				arrivalCity: `%${filters.arrivalCity.trim()}%`,
			});
		}

		const trains = await query.getMany();
		console.log('Generated SQL:', query.getSql());
		console.log('Found trains:', trains);
		return trains;
	}

	async findOne(id: number): Promise<Train | null> {
		console.log('Finding train with ID:', id);
		const train = await this.trainRepository.findOneBy({ id });
		console.log('Found train:', train);
		return train;
	}

	async update(
		id: number,
		updateTrainDto: UpdateTrainDto,
	): Promise<Train | null> {
		console.log('Updating train with ID:', id, 'and data:', updateTrainDto);
		const train = await this.trainRepository.findOneBy({ id });
		if (!train) {
			console.log('Train not found for ID:', id);
			return null;
		}
		Object.assign(train, updateTrainDto);
		const updatedTrain = await this.trainRepository.save(train);
		console.log('Updated train:', updatedTrain);
		return updatedTrain;
	}

	async remove(id: number): Promise<boolean> {
		console.log('Deleting train with ID:', id);
		const result = await this.trainRepository.delete(id);
		console.log('Delete result:', result);
		return !!result.affected;
	}
}
