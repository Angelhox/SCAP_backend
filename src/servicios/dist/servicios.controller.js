"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ServiciosController = void 0;
var common_1 = require("@nestjs/common");
var ServiciosController = /** @class */ (function () {
    function ServiciosController(serviciosService) {
        this.serviciosService = serviciosService;
    }
    ServiciosController.prototype.create = function (createServicioDto) {
        return this.serviciosService.create(createServicioDto);
    };
    ServiciosController.prototype.findAll = function () {
        return this.serviciosService.findAll();
    };
    ServiciosController.prototype.findServicioBase = function () {
        return this.serviciosService.findServicioBase();
    };
    ServiciosController.prototype.findOne = function (id) {
        return this.serviciosService.findOne(+id);
    };
    ServiciosController.prototype.update = function (id, updateServicioDto) {
        return this.serviciosService.update(+id, updateServicioDto);
    };
    ServiciosController.prototype.remove = function (id) {
        return this.serviciosService.remove(+id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], ServiciosController.prototype, "create");
    __decorate([
        common_1.Get()
    ], ServiciosController.prototype, "findAll");
    __decorate([
        common_1.Get('base')
    ], ServiciosController.prototype, "findServicioBase");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], ServiciosController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], ServiciosController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], ServiciosController.prototype, "remove");
    ServiciosController = __decorate([
        common_1.Controller('servicios')
    ], ServiciosController);
    return ServiciosController;
}());
exports.ServiciosController = ServiciosController;
