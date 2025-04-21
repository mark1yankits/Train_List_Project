// src/train/dto/create-train.dto.ts
export class CreateTrainDto {
    trainName!: string;
    departureCity!: string;
    arrivalCity!: string;
    departureTime!: Date;
    arrivalTime!: Date;
    duration!: string;
    trainNumber?: string;
}
