import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.use(express.json());

	app.useGlobalPipes(new ValidationPipe());

	app.enableCors({
		origin: ['http://localhost:3002', 'http://localhost:3000'],
		methods: 'GET,POST,PUT,DELETE,OPTIONS',
		allowedHeaders: ['Content-Type', 'Authorization'],
		credentials: true,
	});

	await app.listen(3009);
}
bootstrap();
