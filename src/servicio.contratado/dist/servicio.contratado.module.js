"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServicioContratadoModule = void 0;
var common_1 = require("@nestjs/common");
var servicio_contratado_service_1 = require("./servicio.contratado.service");
var servicio_contratado_controller_1 = require("./servicio.contratado.controller");
var typeorm_1 = require("@nestjs/typeorm");
var servicio_contratado_entity_1 = require("./entities/servicio.contratado.entity");
var servicio_entity_1 = require("src/servicios/entities/servicio.entity");
var contrato_entity_1 = require("src/contratos/entities/contrato.entity");
var tipo_descuento_entity_1 = require("src/tipo.descuento/entities/tipo.descuento.entity");
var medidor_entity_1 = require("src/medidor/entities/medidor.entity");
var ServicioContratadoModule = /** @class */ (function () {
    function ServicioContratadoModule() {
    }
    ServicioContratadoModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([
                    servicio_contratado_entity_1.ServicioContratado,
                    contrato_entity_1.Contrato,
                    servicio_entity_1.Servicio,
                    tipo_descuento_entity_1.TipoDescuento,
                    medidor_entity_1.Medidor,
                ]),
            ],
            controllers: [servicio_contratado_controller_1.ServicioContratadoController],
            providers: [servicio_contratado_service_1.ServicioContratadoService]
        })
    ], ServicioContratadoModule);
    return ServicioContratadoModule;
}());
exports.ServicioContratadoModule = ServicioContratadoModule;
