import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTrainDto {
    @IsString()
    @IsNotEmpty()
    trainName!: string;

    @IsString()
    @IsNotEmpty()
    trainNumber!: string;

    @IsString()
    @IsNotEmpty()
    departureCity!: string;

    @IsString()
    @IsNotEmpty()
    arrivalCity!: string;

    @IsString()
    @IsNotEmpty()
    departureTime!: string;

    @IsString()
    @IsNotEmpty()
    arrivalTime!: string;

    @IsString()
    @IsNotEmpty()
    duration?: string;
}