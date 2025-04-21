import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database/database.service'; // шляхи адаптуй
import { TrainModule } from './train/train.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseService,
    }),
    TrainModule,
  ],
  providers: [DatabaseService], // 👈 додай сюди, щоб Nest міг його інжектити
})
export class AppModule {}
