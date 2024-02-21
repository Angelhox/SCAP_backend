"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PlanillasModule = void 0;
var common_1 = require("@nestjs/common");
var planillas_service_1 = require("./planillas.service");
var planillas_controller_1 = require("./planillas.controller");
var typeorm_1 = require("@nestjs/typeorm");
var planilla_entity_1 = require("./entities/planilla.entity");
var PlanillasModule = /** @class */ (function () {
    function PlanillasModule() {
    }
    PlanillasModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([planilla_entity_1.Planilla])],
            controllers: [planillas_controller_1.PlanillasController],
            providers: [planillas_service_1.PlanillasService]
        })
    ], PlanillasModule);
    return PlanillasModule;
}());
exports.PlanillasModule = PlanillasModule;
