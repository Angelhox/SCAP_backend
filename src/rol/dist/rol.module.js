"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RolModule = void 0;
var common_1 = require("@nestjs/common");
var rol_service_1 = require("./rol.service");
var rol_controller_1 = require("./rol.controller");
var typeorm_1 = require("@nestjs/typeorm");
var rol_entity_1 = require("./entities/rol.entity");
var RolModule = /** @class */ (function () {
    function RolModule() {
    }
    RolModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([rol_entity_1.Rol])],
            controllers: [rol_controller_1.RolController],
            providers: [rol_service_1.RolService]
        })
    ], RolModule);
    return RolModule;
}());
exports.RolModule = RolModule;
