"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComprobantesModule = void 0;
var common_1 = require("@nestjs/common");
var comprobantes_service_1 = require("./comprobantes.service");
var comprobantes_controller_1 = require("./comprobantes.controller");
var typeorm_1 = require("@nestjs/typeorm");
var comprobante_entity_1 = require("./entities/comprobante.entity");
var encabezado_entity_1 = require("src/encabezado/entities/encabezado.entity");
var ComprobantesModule = /** @class */ (function () {
    function ComprobantesModule() {
    }
    ComprobantesModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([comprobante_entity_1.Comprobante, encabezado_entity_1.Encabezado])],
            controllers: [comprobantes_controller_1.ComprobantesController],
            providers: [comprobantes_service_1.ComprobantesService]
        })
    ], ComprobantesModule);
    return ComprobantesModule;
}());
exports.ComprobantesModule = ComprobantesModule;
