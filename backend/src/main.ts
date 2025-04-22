import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Це правильний спосіб додати body-parser (він уже в express)
  app.use(express.json());

  // Увімкнення глобального ValidationPipe
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3009);
}
bootstrap();
