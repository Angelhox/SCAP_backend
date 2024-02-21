"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TipoDescuentoModule = void 0;
var common_1 = require("@nestjs/common");
var tipo_descuento_service_1 = require("./tipo.descuento.service");
var tipo_descuento_controller_1 = require("./tipo.descuento.controller");
var typeorm_1 = require("@nestjs/typeorm");
var tipo_descuento_entity_1 = require("./entities/tipo.descuento.entity");
var TipoDescuentoModule = /** @class */ (function () {
    function TipoDescuentoModule() {
    }
    TipoDescuentoModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([tipo_descuento_entity_1.TipoDescuento])],
            controllers: [tipo_descuento_controller_1.TipoDescuentoController],
            providers: [tipo_descuento_service_1.TipoDescuentoService]
        })
    ], TipoDescuentoModule);
    return TipoDescuentoModule;
}());
exports.TipoDescuentoModule = TipoDescuentoModule;
