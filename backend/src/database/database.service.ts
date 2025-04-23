import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Train } from '../train/entities/train.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory, OnModuleInit {
	private readonly logger = new Logger(DatabaseService.name);

	createTypeOrmOptions(): TypeOrmModuleOptions {
		return {
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'markkits',
			password: ' ',
			database: 'train_schedule_db',
			entities: [Train, User],
			synchronize: false,
			logging: true,
			schema: 'public',
		};
	}

	async onModuleInit() {
		this.logger.log('DatabaseService initialized');
	}
}
