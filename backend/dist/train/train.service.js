"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const train_entity_1 = require("./entities/train.entity");
let TrainService = class TrainService {
    constructor(trainRepository) {
        this.trainRepository = trainRepository;
    }
    // create travel
    create(createTrainDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const train = this.trainRepository.create(createTrainDto);
            return this.trainRepository.save(train);
        });
    }
    // get all trains filter
    findAllFiltered(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.trainRepository.createQueryBuilder('train');
            if (filters.departureCity) {
                query.andWhere('train.departureCity ILIKE :departureCity', {
                    departureCity: `%${filters.departureCity}%`,
                });
            }
            if (filters.arrivalCity) {
                query.andWhere('train.arrivalCity ILIKE :arrivalCity', {
                    arrivalCity: `%${filters.arrivalCity}%`,
                });
            }
            return query.getMany();
        });
    }
};
exports.TrainService = TrainService;
exports.TrainService = TrainService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(train_entity_1.Train)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TrainService);
