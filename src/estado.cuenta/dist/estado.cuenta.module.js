"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EstadoCuentaModule = void 0;
var common_1 = require("@nestjs/common");
var estado_cuenta_service_1 = require("./estado.cuenta.service");
var estado_cuenta_controller_1 = require("./estado.cuenta.controller");
var typeorm_1 = require("@nestjs/typeorm");
var estado_cuenta_entity_1 = require("./entities/estado.cuenta.entity");
var socio_entity_1 = require("src/socios/entities/socio.entity");
var EstadoCuentaModule = /** @class */ (function () {
    function EstadoCuentaModule() {
    }
    EstadoCuentaModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([estado_cuenta_entity_1.EstadoCuenta, socio_entity_1.Socio])],
            controllers: [estado_cuenta_controller_1.EstadoCuentaController],
            providers: [estado_cuenta_service_1.EstadoCuentaService]
        })
    ], EstadoCuentaModule);
    return EstadoCuentaModule;
}());
exports.EstadoCuentaModule = EstadoCuentaModule;
