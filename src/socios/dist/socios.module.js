"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SociosModule = void 0;
var common_1 = require("@nestjs/common");
var socios_service_1 = require("./socios.service");
var socios_controller_1 = require("./socios.controller");
var typeorm_1 = require("@nestjs/typeorm");
var socio_entity_1 = require("./entities/socio.entity");
var SociosModule = /** @class */ (function () {
    function SociosModule() {
    }
    SociosModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([socio_entity_1.Socio])],
            controllers: [socios_controller_1.SociosController],
            providers: [socios_service_1.SociosService]
        })
    ], SociosModule);
    return SociosModule;
}());
exports.SociosModule = SociosModule;
