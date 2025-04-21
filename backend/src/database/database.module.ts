import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database.service';

@Module({
imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseService, // Використовуємо DatabaseService для конфігурації
    }),
],
  providers: [DatabaseService], // Додаємо DatabaseService як провайдер
  exports: [DatabaseService], // Експортуємо, якщо потрібно використовувати в інших модулях
})
export class DatabaseModule {}