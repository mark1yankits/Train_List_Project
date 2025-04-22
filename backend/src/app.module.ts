import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database/database.service'; // шляхи адаптуй
import { TrainModule } from './train/train.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseService,
    }),
    TrainModule,
    AuthModule,
    UsersModule,
  ],
  providers: [DatabaseService], // 👈 додай сюди, щоб Nest міг його інжектити
})
export class AppModule {}
