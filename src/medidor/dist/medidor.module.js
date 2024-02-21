"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MedidorModule = void 0;
var common_1 = require("@nestjs/common");
var medidor_service_1 = require("./medidor.service");
var medidor_controller_1 = require("./medidor.controller");
var typeorm_1 = require("@nestjs/typeorm");
var medidor_entity_1 = require("./entities/medidor.entity");
var contrato_entity_1 = require("src/contratos/entities/contrato.entity");
var MedidorModule = /** @class */ (function () {
    function MedidorModule() {
    }
    MedidorModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([medidor_entity_1.Medidor, contrato_entity_1.Contrato])],
            controllers: [medidor_controller_1.MedidorController],
            providers: [medidor_service_1.MedidorService]
        })
    ], MedidorModule);
    return MedidorModule;
}());
exports.MedidorModule = MedidorModule;
