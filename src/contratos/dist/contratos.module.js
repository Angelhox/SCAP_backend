"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContratosModule = void 0;
var common_1 = require("@nestjs/common");
var contratos_service_1 = require("./contratos.service");
var contratos_controller_1 = require("./contratos.controller");
var typeorm_1 = require("@nestjs/typeorm");
var contrato_entity_1 = require("./entities/contrato.entity");
var servicio_entity_1 = require("src/servicios/entities/servicio.entity");
var socio_entity_1 = require("src/socios/entities/socio.entity");
var sector_entity_1 = require("src/sector/entities/sector.entity");
var ContratosModule = /** @class */ (function () {
    function ContratosModule() {
    }
    ContratosModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([contrato_entity_1.Contrato, servicio_entity_1.Servicio, socio_entity_1.Socio, sector_entity_1.Sector])],
            controllers: [contratos_controller_1.ContratosController],
            providers: [contratos_service_1.ContratosService],
            exports: [contratos_service_1.ContratosService]
        })
    ], ContratosModule);
    return ContratosModule;
}());
exports.ContratosModule = ContratosModule;
