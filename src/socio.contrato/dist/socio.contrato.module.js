"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SocioContratoModule = void 0;
var common_1 = require("@nestjs/common");
var socio_contrato_service_1 = require("./socio.contrato.service");
var socio_contrato_controller_1 = require("./socio.contrato.controller");
var typeorm_1 = require("@nestjs/typeorm");
var socio_contrato_entity_1 = require("./entities/socio.contrato.entity");
var socio_entity_1 = require("src/socios/entities/socio.entity");
var contrato_entity_1 = require("src/contratos/entities/contrato.entity");
var SocioContratoModule = /** @class */ (function () {
    function SocioContratoModule() {
    }
    SocioContratoModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([socio_contrato_entity_1.SocioContrato, socio_entity_1.Socio, contrato_entity_1.Contrato])],
            controllers: [socio_contrato_controller_1.SocioContratoController],
            providers: [socio_contrato_service_1.SocioContratoService]
        })
    ], SocioContratoModule);
    return SocioContratoModule;
}());
exports.SocioContratoModule = SocioContratoModule;
