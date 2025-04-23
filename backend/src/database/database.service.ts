import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Train } from '../train/entities/train.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory, OnModuleInit {
  private readonly logger = new Logger(DatabaseService.name);

  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const databaseUrl = this.configService.get<string>('DATABASE_URL');
    if (!databaseUrl) {
      throw new Error('DATABASE_URL is not defined in environment variables');
    }

    return {
      type: 'postgres',
      url: databaseUrl,
      entities: [Train, User],
      synchronize: false,
      logging: true,
      schema: 'public',
      ssl: databaseUrl.includes('localhost') ? false : { rejectUnauthorized: false },
    };
  }

  async onModuleInit(): Promise<void> {
    this.logger.log('DatabaseService initialized');
  }
}
