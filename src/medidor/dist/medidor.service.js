"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.MedidorService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var medidor_entity_1 = require("./entities/medidor.entity");
var contrato_entity_1 = require("src/contratos/entities/contrato.entity");
var MedidorService = /** @class */ (function () {
    function MedidorService(medidorRepository, contratoRepository, dataSource) {
        this.medidorRepository = medidorRepository;
        this.contratoRepository = contratoRepository;
        this.dataSource = dataSource;
    }
    MedidorService.prototype.create = function (createMedidorDto) {
        return __awaiter(this, void 0, void 0, function () {
            var codigo, medidorFound, newMedidor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        codigo = createMedidorDto.codigo;
                        return [4 /*yield*/, this.medidorRepository.findOneBy({
                                codigo: codigo
                            })];
                    case 1:
                        medidorFound = _a.sent();
                        if (medidorFound) {
                            throw new common_1.BadRequestException('Ya existe un medidor con el codigo ', codigo);
                        }
                        newMedidor = this.medidorRepository.create(createMedidorDto);
                        return [4 /*yield*/, this.medidorRepository.save(newMedidor)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MedidorService.prototype.changeMedidor = function (createMedidorDto, updateMedidorDto, updateMedidorId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, contrato, newMedidor, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryRunner = this.dataSource.createQueryRunner();
                        queryRunner.connect();
                        queryRunner.startTransaction();
                        return [4 /*yield*/, this.validateContrato(createMedidorDto.contratosId)];
                    case 1:
                        contrato = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, 8, 10]);
                        return [4 /*yield*/, queryRunner.manager.update(medidor_entity_1.Medidor, { id: updateMedidorId }, updateMedidorDto)];
                    case 3:
                        _a.sent();
                        newMedidor = this.medidorRepository.create(__assign(__assign({}, createMedidorDto), { contrato: contrato }));
                        return [4 /*yield*/, queryRunner.manager.save(newMedidor)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6:
                        error_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 7:
                        _a.sent();
                        throw new common_1.BadRequestException('Error al actualizar el medidor del contrato: ', error_1.message);
                    case 8: return [4 /*yield*/, queryRunner.release()];
                    case 9:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    MedidorService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.medidorRepository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MedidorService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.medidorRepository.findOneBy({ id: id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MedidorService.prototype.update = function (id, updateMedidorDto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne(id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.medidorRepository.update(id, updateMedidorDto)];
                    case 2: 
                    // Catchear la excepcion en caso de no existir el medidor
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MedidorService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne(id)];
                    case 1:
                        _a.sent();
                        // Catchear la excepcion en caso de no existir el medidor
                        return [2 /*return*/, this.medidorRepository["delete"]({ id: id })]; //;
                }
            });
        });
    };
    MedidorService.prototype.validateContrato = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var contratoFound;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contratoRepository.findOneBy({ id: id })];
                    case 1:
                        contratoFound = _a.sent();
                        if (!contratoFound) {
                            throw new common_1.BadRequestException('Contrato not found');
                        }
                        return [2 /*return*/, contratoFound];
                }
            });
        });
    };
    MedidorService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(medidor_entity_1.Medidor)),
        __param(1, typeorm_1.InjectRepository(contrato_entity_1.Contrato))
    ], MedidorService);
    return MedidorService;
}());
exports.MedidorService = MedidorService;
