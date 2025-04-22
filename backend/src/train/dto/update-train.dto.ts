export class UpdateTrainDto {
    trainName?: string;
    trainNumber?: string;
    departureCity?: string; // Виправлено з departCity
    arrivalCity?: string;
    departureTime?: string; // Виправлено з departTime і Date на string
    arrivalTime?: string; // Виправлено з Date на string
    duration?: string;
}