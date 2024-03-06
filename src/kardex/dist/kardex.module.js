"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.KardexModule = void 0;
var common_1 = require("@nestjs/common");
var kardex_service_1 = require("./kardex.service");
var kardex_controller_1 = require("./kardex.controller");
var typeorm_1 = require("@nestjs/typeorm");
var kardex_entity_1 = require("./entities/kardex.entity");
var KardexModule = /** @class */ (function () {
    function KardexModule() {
    }
    KardexModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([kardex_entity_1.Kardex])],
            controllers: [kardex_controller_1.KardexController],
            providers: [kardex_service_1.KardexService]
        })
    ], KardexModule);
    return KardexModule;
}());
exports.KardexModule = KardexModule;
