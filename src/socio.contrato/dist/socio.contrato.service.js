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
exports.SocioContratoService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var contrato_entity_1 = require("src/contratos/entities/contrato.entity");
var socio_entity_1 = require("src/socios/entities/socio.entity");
var socio_contrato_entity_1 = require("./entities/socio.contrato.entity");
var sector_entity_1 = require("src/sector/entities/sector.entity");
var SocioContratoService = /** @class */ (function () {
    function SocioContratoService(contratoRepository, socioRepository, socioContratoRepository, sectorRepository, dataSource) {
        this.contratoRepository = contratoRepository;
        this.socioRepository = socioRepository;
        this.socioContratoRepository = socioContratoRepository;
        this.sectorRepository = sectorRepository;
        this.dataSource = dataSource;
    }
    SocioContratoService.prototype.create = function (createSocioContratoWithContratoDto) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, socio, sector, newContrato, savedContrato, newSocioContrato, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Recibido: ', createSocioContratoWithContratoDto);
                        queryRunner = this.dataSource.createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        queryRunner.startTransaction();
                        return [4 /*yield*/, this.validateCodigoContrato(createSocioContratoWithContratoDto.contrato.codigo)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.validateSocio(createSocioContratoWithContratoDto.sociosId)];
                    case 3:
                        socio = _a.sent();
                        return [4 /*yield*/, this.validateSector(createSocioContratoWithContratoDto.contrato.sectoresId)];
                    case 4:
                        sector = _a.sent();
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 10, , 12]);
                        newContrato = this.contratoRepository.create(__assign(__assign({}, createSocioContratoWithContratoDto.contrato), { sector: sector }));
                        return [4 /*yield*/, queryRunner.manager.update(sector_entity_1.Sector, sector.id, {
                                numeroSocios: function () { return 'numeroSocios +1'; },
                                numeroCodigos: function () { return 'numeroCodigos +1'; }
                            })];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.save(newContrato)];
                    case 7:
                        savedContrato = _a.sent();
                        newSocioContrato = this.socioContratoRepository.create(__assign(__assign({}, createSocioContratoWithContratoDto), { socio: socio, contrato: savedContrato }));
                        return [4 /*yield*/, queryRunner.manager.save(newSocioContrato)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 9: return [2 /*return*/, _a.sent()];
                    case 10:
                        error_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 11:
                        _a.sent();
                        throw new common_1.BadRequestException('Error al crear socioContrato y contrato: ' + error_1.message);
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    SocioContratoService.prototype.findAll = function () {
        return this.socioContratoRepository.find({
            relations: ['socio', 'contrato'],
            where: { estado: 'Activo' }
        });
    };
    SocioContratoService.prototype.findByContrato = function (contratoId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.socioContratoRepository.findOne({
                            where: { contrato: { id: contratoId }, estado: 'Activo' },
                            relations: ['contrato']
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SocioContratoService.prototype.findBySocio = function (socioId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.socioContratoRepository.find({
                            where: { socio: { id: socioId }, estado: 'Activo' },
                            relations: ['contrato']
                        })];
                    case 1: 
                    // No es necesario validar ?
                    // await this.validateSocio(socioId);
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SocioContratoService.prototype.findOne = function (id) {
        return "This action returns a #" + id + " socioContrato";
    };
    SocioContratoService.prototype.updateSocio = function (id, socioContratoDto) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, socio, contrato, newSocioContrato, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryRunner = this.dataSource.createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        queryRunner.startTransaction();
                        return [4 /*yield*/, this.validateSocio(socioContratoDto.sociosId)];
                    case 2:
                        socio = _a.sent();
                        return [4 /*yield*/, this.validateContrato(socioContratoDto.contratosId)];
                    case 3:
                        contrato = _a.sent();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 8, 10, 12]);
                        newSocioContrato = this.socioContratoRepository.create(__assign(__assign({}, socioContratoDto), { socio: socio,
                            contrato: contrato }));
                        return [4 /*yield*/, queryRunner.manager.save(newSocioContrato)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.update(socio_contrato_entity_1.SocioContrato, id, {
                                fechaBaja: socioContratoDto.fechaContratacion,
                                estado: 'Inactivo'
                            })];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 7: return [2 /*return*/, _a.sent()];
                    case 8:
                        error_2 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 9:
                        _a.sent();
                        throw new common_1.BadRequestException('Error al actualizar el socio del contrato: ', error_2);
                    case 10: return [4 /*yield*/, queryRunner.release()];
                    case 11:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    SocioContratoService.prototype.update = function (id, updateSocioContratoDto) {
        return "This action updates a #" + id + " socioContrato";
    };
    SocioContratoService.prototype.remove = function (id) {
        return "This action removes a #" + id + " socioContrato";
    };
    SocioContratoService.prototype.validateContrato = function (id) {
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
    SocioContratoService.prototype.validateSocio = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var socioEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.socioRepository.findOneBy({ id: id })];
                    case 1:
                        socioEntity = _a.sent();
                        if (!socioEntity) {
                            throw new common_1.BadRequestException('Socio not found');
                        }
                        return [2 /*return*/, socioEntity];
                }
            });
        });
    };
    SocioContratoService.prototype.validateCodigoContrato = function (codigo) {
        return __awaiter(this, void 0, void 0, function () {
            var contratoFound;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contratoRepository.findOneBy({ codigo: codigo })];
                    case 1:
                        contratoFound = _a.sent();
                        if (contratoFound) {
                            throw new common_1.BadRequestException("Ya existe un contrato con c\u00F3digo " + codigo);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SocioContratoService.prototype.validateSector = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var sectorFound;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sectorRepository.findOneBy({ id: id })];
                    case 1:
                        sectorFound = _a.sent();
                        if (!sectorFound) {
                            throw new common_1.BadRequestException('Sector not found');
                        }
                        return [2 /*return*/, sectorFound];
                }
            });
        });
    };
    SocioContratoService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(contrato_entity_1.Contrato)),
        __param(1, typeorm_1.InjectRepository(socio_entity_1.Socio)),
        __param(2, typeorm_1.InjectRepository(socio_contrato_entity_1.SocioContrato)),
        __param(3, typeorm_1.InjectRepository(sector_entity_1.Sector))
    ], SocioContratoService);
    return SocioContratoService;
}());
exports.SocioContratoService = SocioContratoService;
