"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetallesServicioModule = void 0;
var common_1 = require("@nestjs/common");
var detalles_servicio_service_1 = require("./detalles.servicio.service");
var detalles_servicio_controller_1 = require("./detalles.servicio.controller");
var typeorm_1 = require("@nestjs/typeorm");
var detalles_servicio_entity_1 = require("./entities/detalles.servicio.entity");
var DetallesServicioModule = /** @class */ (function () {
    function DetallesServicioModule() {
    }
    DetallesServicioModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([detalles_servicio_entity_1.DetallesServicio])],
            controllers: [detalles_servicio_controller_1.DetallesServicioController],
            providers: [detalles_servicio_service_1.DetallesServicioService]
        })
    ], DetallesServicioModule);
    return DetallesServicioModule;
}());
exports.DetallesServicioModule = DetallesServicioModule;
