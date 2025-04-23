import {
	Controller,
	Get,
	Post,
	Put,
	Delete,
	Param,
	Body,
	NotFoundException,
	Query,
} from '@nestjs/common';
import { TrainService } from './train.service';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';
import { Train } from './entities/train.entity';

@Controller('trains')
export class TrainController {
	constructor(private readonly trainService: TrainService) {}

	@Post()
	async create(@Body() createTrainDto: CreateTrainDto) {
		const train = await this.trainService.create(createTrainDto);
		return {
			message: 'Train created successfully',
			train,
		};
	}

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

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<Train> {
		const trainId = parseInt(id, 10);
		if (isNaN(trainId)) {
			throw new NotFoundException(`Invalid ID ${id}`);
		}
		const train = await this.trainService.findOne(trainId);
		if (!train) {
			throw new NotFoundException(`Train with ID ${id} not found`);
		}
		return train;
	}

	@Put(':id')
	async update(
		@Param('id') id: string,
		@Body() updateTrainDto: UpdateTrainDto,
	) {
		const trainId = parseInt(id, 10);
		if (isNaN(trainId)) {
			throw new NotFoundException(`Invalid ID ${id}`);
		}
		const updated = await this.trainService.update(trainId, updateTrainDto);
		if (!updated) {
			throw new NotFoundException(`Train with ID ${id} not found`);
		}
		return {
			message: 'Train updated successfully',
			train: updated,
		};
	}

	@Delete(':id')
	async remove(@Param('id') id: string) {
		const trainId = parseInt(id, 10);
		if (isNaN(trainId)) {
			throw new NotFoundException(`Invalid ID ${id}`);
		}
		const success = await this.trainService.remove(trainId);
		if (!success) {
			throw new NotFoundException(`Train with ID ${id} not found`);
		}
		return { message: 'Train deleted successfully' };
	}
}
