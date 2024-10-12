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
exports.ServicioContratadoService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var servicio_contratado_entity_1 = require("./entities/servicio.contratado.entity");
var contrato_entity_1 = require("src/contratos/entities/contrato.entity");
var servicio_entity_1 = require("src/servicios/entities/servicio.entity");
var tipo_descuento_entity_1 = require("src/tipo.descuento/entities/tipo.descuento.entity");
var medidor_entity_1 = require("src/medidor/entities/medidor.entity");
var ServicioContratadoService = /** @class */ (function () {
    function ServicioContratadoService(servicioContratadoRepository, contratoRepository, servicioRepository, tipoDescuentoRepository, medidorRepository, dataSource) {
        this.servicioContratadoRepository = servicioContratadoRepository;
        this.contratoRepository = contratoRepository;
        this.servicioRepository = servicioRepository;
        this.tipoDescuentoRepository = tipoDescuentoRepository;
        this.medidorRepository = medidorRepository;
        this.dataSource = dataSource;
    }
    ServicioContratadoService.prototype.create = function (createServicioContratadoDto) {
        return __awaiter(this, void 0, void 0, function () {
            var contratoValido, servicioValido, descuento, newServicioContratado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Para ingresar: ', createServicioContratadoDto);
                        return [4 /*yield*/, this.validateContrato(createServicioContratadoDto.contratosId)];
                    case 1:
                        contratoValido = _a.sent();
                        return [4 /*yield*/, this.validateServicio(createServicioContratadoDto.serviciosId)];
                    case 2:
                        servicioValido = _a.sent();
                        return [4 /*yield*/, this.validateDescuento(createServicioContratadoDto.descuentosId)];
                    case 3:
                        descuento = _a.sent();
                        return [4 /*yield*/, this.validateContratado(contratoValido.id, servicioValido.id)];
                    case 4:
                        _a.sent();
                        newServicioContratado = this.servicioContratadoRepository.create(__assign(__assign({}, createServicioContratadoDto), { tipoDescuento: descuento, contrato: contratoValido, servicio: servicioValido }));
                        return [4 /*yield*/, this.servicioContratadoRepository.save(newServicioContratado)];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ServicioContratadoService.prototype.createMedidorServicioContratado = function (createMedidorServicioContratado) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, contrato, servicio, descuento, newMedidor, newServicioContratado, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryRunner = this.dataSource.createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        queryRunner.startTransaction();
                        return [4 /*yield*/, this.validateContrato(createMedidorServicioContratado.contratosId)];
                    case 2:
                        contrato = _a.sent();
                        return [4 /*yield*/, this.validateServicio(createMedidorServicioContratado.serviciosId)];
                    case 3:
                        servicio = _a.sent();
                        return [4 /*yield*/, this.validateDescuento(createMedidorServicioContratado.descuentosId)];
                    case 4:
                        descuento = _a.sent();
                        return [4 /*yield*/, this.validateCodigoMedidor(createMedidorServicioContratado.medidor.codigo)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.validateContratado(contrato.id, servicio.id)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        _a.trys.push([7, 12, 14, 16]);
                        newMedidor = this.medidorRepository.create(__assign(__assign({}, createMedidorServicioContratado.medidor), { contrato: contrato }));
                        return [4 /*yield*/, queryRunner.manager.save(newMedidor)];
                    case 8:
                        _a.sent();
                        newServicioContratado = this.servicioContratadoRepository.create(__assign(__assign({}, createMedidorServicioContratado), { contrato: contrato, tipoDescuento: descuento, servicio: servicio }));
                        return [4 /*yield*/, queryRunner.manager.save(newServicioContratado)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.update(contrato_entity_1.Contrato, contrato.id, {
                                medidorSn: 'Si'
                            })];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 11: return [2 /*return*/, _a.sent()];
                    case 12:
                        error_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 13:
                        _a.sent();
                        throw new common_1.BadRequestException('Error al crear el medidor y contratar el servicio: ' + error_1);
                    case 14: return [4 /*yield*/, queryRunner.release()];
                    case 15:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    ServicioContratadoService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.servicioContratadoRepository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ServicioContratadoService.prototype.findAllByServicio = function (servicioId) {
        return __awaiter(this, void 0, void 0, function () {
            var servicioContratadoFound;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.servicioContratadoRepository.find({
                            where: { servicio: { id: servicioId } },
                            relations: ['contrato', 'servicio', 'detallesServicio']
                        })];
                    case 1:
                        servicioContratadoFound = _a.sent();
                        if (!servicioContratadoFound) {
                            throw new common_1.BadRequestException('Servicios contratados not found');
                        }
                        return [2 /*return*/, servicioContratadoFound];
                }
            });
        });
    };
    ServicioContratadoService.prototype.findByContrato = function (contratoId) {
        return __awaiter(this, void 0, void 0, function () {
            var servicioContratadoFound;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.servicioContratadoRepository.find({
                            where: {
                                contrato: { id: contratoId }
                            }
                        })];
                    case 1:
                        servicioContratadoFound = _a.sent();
                        if (!servicioContratadoFound) {
                            throw new common_1.BadRequestException('Servicio Contratado not found');
                        }
                        return [2 /*return*/, servicioContratadoFound];
                }
            });
        });
    };
    ServicioContratadoService.prototype.findOne = function (id) {
        return "This action returns a #" + id + " servicioContratado";
    };
    ServicioContratadoService.prototype.update = function (id, updateServicioContratadoDto) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, descuento, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryRunner = this.dataSource.createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect];
                    case 1:
                        _a.sent();
                        queryRunner.startTransaction();
                        console.log('Received to update: ', updateServicioContratadoDto);
                        return [4 /*yield*/, this.validateDescuento(updateServicioContratadoDto.descuentosId)];
                    case 2:
                        descuento = _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 6, 8, 10]);
                        return [4 /*yield*/, queryRunner.manager.update(servicio_contratado_entity_1.ServicioContratado, id, {
                                estado: updateServicioContratadoDto.estado,
                                fechaEmision: updateServicioContratadoDto.fechaEmision,
                                valorIndividual: updateServicioContratadoDto.valorIndividual,
                                numeroPagosIndividual: updateServicioContratadoDto.numeroPagosIndividual,
                                valorPagosIndividual: updateServicioContratadoDto.valorPagosIndividual,
                                descuentoValor: updateServicioContratadoDto.descuentoValor,
                                tipoDescuento: descuento
                            })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6:
                        error_2 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 7:
                        _a.sent();
                        throw new common_1.BadRequestException('Error al actualizar el servicio contratado: ', error_2);
                    case 8: return [4 /*yield*/, queryRunner.release()];
                    case 9:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ServicioContratadoService.prototype.remove = function (contratadoId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryRunner = this.dataSource.createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        queryRunner.startTransaction();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, 7, 9]);
                        return [4 /*yield*/, queryRunner.manager.update(servicio_contratado_entity_1.ServicioContratado, contratadoId, {
                                estado: 'Inactivo'
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5:
                        error_3 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 6:
                        _a.sent();
                        throw new common_1.BadRequestException('Error al descontratar el servicio: ' + error_3);
                    case 7: return [4 /*yield*/, queryRunner.release()];
                    case 8:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    ServicioContratadoService.prototype.validateServicio = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var servicioEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.servicioRepository.findOneBy({ id: id })];
                    case 1:
                        servicioEntity = _a.sent();
                        if (!servicioEntity) {
                            throw new common_1.BadRequestException('Servicio contratado not found');
                        }
                        return [2 /*return*/, servicioEntity];
                }
            });
        });
    };
    ServicioContratadoService.prototype.validateContrato = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var contratoEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contratoRepository.findOneBy({ id: id })];
                    case 1:
                        contratoEntity = _a.sent();
                        if (!contratoEntity) {
                            throw new common_1.BadRequestException('Contrato not found');
                        }
                        return [2 /*return*/, contratoEntity];
                }
            });
        });
    };
    ServicioContratadoService.prototype.validateDescuento = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var descuentoEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tipoDescuentoRepository.findOneBy({
                            id: id
                        })];
                    case 1:
                        descuentoEntity = _a.sent();
                        if (!descuentoEntity) {
                            throw new common_1.BadRequestException('Descuento not found');
                        }
                        return [2 /*return*/, descuentoEntity];
                }
            });
        });
    };
    ServicioContratadoService.prototype.validateCodigoMedidor = function (codigo) {
        return __awaiter(this, void 0, void 0, function () {
            var medidorFound;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.medidorRepository.findOneBy({ codigo: codigo })];
                    case 1:
                        medidorFound = _a.sent();
                        if (medidorFound) {
                            throw new common_1.BadRequestException('Ya existe un medidor con código: ', codigo);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ServicioContratadoService.prototype.validateContratado = function (contratoId, servicioId) {
        return __awaiter(this, void 0, void 0, function () {
            var contratado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.servicioContratadoRepository.findOne({
                            where: {
                                contrato: { id: contratoId },
                                servicio: { id: servicioId }
                            }
                        })];
                    case 1:
                        contratado = _a.sent();
                        if (contratado) {
                            throw new common_1.BadRequestException('Este servicio ya ha sido contratado');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ServicioContratadoService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(servicio_contratado_entity_1.ServicioContratado)),
        __param(1, typeorm_1.InjectRepository(contrato_entity_1.Contrato)),
        __param(2, typeorm_1.InjectRepository(servicio_entity_1.Servicio)),
        __param(3, typeorm_1.InjectRepository(tipo_descuento_entity_1.TipoDescuento)),
        __param(4, typeorm_1.InjectRepository(medidor_entity_1.Medidor))
    ], ServicioContratadoService);
    return ServicioContratadoService;
}());
exports.ServicioContratadoService = ServicioContratadoService;
