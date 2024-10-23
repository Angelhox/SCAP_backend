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
exports.ServicioContratadoController = void 0;
var common_1 = require("@nestjs/common");
var ServicioContratadoController = /** @class */ (function () {
    function ServicioContratadoController(servicioContratadoService) {
        this.servicioContratadoService = servicioContratadoService;
    }
    ServicioContratadoController.prototype.createMedidorServicioContratado = function (createMedidorServicioContratadoDto) {
        return this.servicioContratadoService.createMedidorServicioContratado(createMedidorServicioContratadoDto);
    };
    ServicioContratadoController.prototype.create = function (createServicioContratadoDto) {
        return this.servicioContratadoService.create(createServicioContratadoDto);
    };
    ServicioContratadoController.prototype.findAll = function () {
        return this.servicioContratadoService.findAll();
    };
    ServicioContratadoController.prototype.findAllByServicio = function (servicioId) {
        return this.servicioContratadoService.findAllByServicio(+servicioId);
    };
    ServicioContratadoController.prototype.findOne = function (id) {
        return this.servicioContratadoService.findByContrato(+id);
    };
    ServicioContratadoController.prototype.update = function (id, updateServicioContratadoDto) {
        return this.servicioContratadoService.update(+id, updateServicioContratadoDto);
    };
    ServicioContratadoController.prototype.removeWithMedidor = function (id, contratoId) {
        return this.servicioContratadoService.removeWithMedidor(+id, +contratoId);
    };
    ServicioContratadoController.prototype.remove = function (id) {
        return this.servicioContratadoService.remove(+id);
    };
    __decorate([
        common_1.Post('/medidor'),
        __param(0, common_1.Body())
    ], ServicioContratadoController.prototype, "createMedidorServicioContratado");
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], ServicioContratadoController.prototype, "create");
    __decorate([
        common_1.Get()
    ], ServicioContratadoController.prototype, "findAll");
    __decorate([
        common_1.Get('/servicio/:id'),
        __param(0, common_1.Param('id'))
    ], ServicioContratadoController.prototype, "findAllByServicio");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], ServicioContratadoController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], ServicioContratadoController.prototype, "update");
    __decorate([
        common_1.Delete('/medidor/:id/:contratoId'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Param('contratoId'))
    ], ServicioContratadoController.prototype, "removeWithMedidor");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], ServicioContratadoController.prototype, "remove");
    ServicioContratadoController = __decorate([
        common_1.Controller('servicio.contratado')
    ], ServicioContratadoController);
    return ServicioContratadoController;
}());
exports.ServicioContratadoController = ServicioContratadoController;
