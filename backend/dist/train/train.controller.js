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
exports.TrainController = void 0;
const common_1 = require("@nestjs/common");
const train_service_1 = require("./train.service");
const create_train_dto_1 = require("./dto/create-train.dto");
const update_train_dto_1 = require("./dto/update-train.dto");
let TrainController = class TrainController {
    constructor(trainService) {
        this.trainService = trainService;
    }
    create(createTrainDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const train = yield this.trainService.create(createTrainDto);
            return {
                message: 'Train created successfully',
                train,
            };
        });
    }
    findAll(departureCity, arrivalCity) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.trainService.findAllFiltered({
                departureCity,
                arrivalCity,
            });
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const trainId = parseInt(id, 10);
            if (isNaN(trainId)) {
                throw new common_1.NotFoundException(`Invalid ID ${id}`);
            }
            const train = yield this.trainService.findOne(trainId);
            if (!train) {
                throw new common_1.NotFoundException(`Train with ID ${id} not found`);
            }
            return train;
        });
    }
    update(id, updateTrainDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const trainId = parseInt(id, 10);
            if (isNaN(trainId)) {
                throw new common_1.NotFoundException(`Invalid ID ${id}`);
            }
            const updated = yield this.trainService.update(trainId, updateTrainDto);
            if (!updated) {
                throw new common_1.NotFoundException(`Train with ID ${id} not found`);
            }
            return {
                message: 'Train updated successfully',
                train: updated,
            };
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const trainId = parseInt(id, 10);
            if (isNaN(trainId)) {
                throw new common_1.NotFoundException(`Invalid ID ${id}`);
            }
            const success = yield this.trainService.remove(trainId);
            if (!success) {
                throw new common_1.NotFoundException(`Train with ID ${id} not found`);
            }
            return { message: 'Train deleted successfully' };
        });
    }
};
exports.TrainController = TrainController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_train_dto_1.CreateTrainDto]),
    __metadata("design:returntype", Promise)
], TrainController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('departureCity')),
    __param(1, (0, common_1.Query)('arrivalCity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TrainController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrainController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_train_dto_1.UpdateTrainDto]),
    __metadata("design:returntype", Promise)
], TrainController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrainController.prototype, "remove", null);
exports.TrainController = TrainController = __decorate([
    (0, common_1.Controller)('trains'),
    __metadata("design:paramtypes", [train_service_1.TrainService])
], TrainController);
