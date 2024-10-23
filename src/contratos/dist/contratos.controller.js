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
exports.ContratosController = void 0;
var common_1 = require("@nestjs/common");
var ContratosController = /** @class */ (function () {
    function ContratosController(contratosService) {
        this.contratosService = contratosService;
    }
    ContratosController.prototype.create = function (createContratoDto) {
        return this.contratosService.create(createContratoDto);
    };
    ContratosController.prototype.findAll = function () {
        return this.contratosService.findAll();
    };
    ContratosController.prototype.findBySocio = function (id) {
        return this.contratosService.findBySocio(+id);
    };
    ContratosController.prototype.findOne = function (id) {
        return this.contratosService.findOne(+id);
    };
    ContratosController.prototype.updateSector = function (id, sectorId, updateContratoDto) {
        console.log('Updating: ', updateContratoDto);
        console.log('Con sector controller');
        return this.contratosService.updateSector(+id, +sectorId, updateContratoDto);
    };
    ContratosController.prototype.update = function (id, updateContratoDto) {
        console.log('Updating: ', updateContratoDto);
        console.log('Sin sector controller');
        return this.contratosService.update(+id, updateContratoDto);
    };
    ContratosController.prototype.remove = function (id) {
        return this.contratosService.remove(+id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], ContratosController.prototype, "create");
    __decorate([
        common_1.Get()
    ], ContratosController.prototype, "findAll");
    __decorate([
        common_1.Get('/socio/:id'),
        __param(0, common_1.Param('id'))
    ], ContratosController.prototype, "findBySocio");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], ContratosController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id/:sectorId'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Param('sectorId')),
        __param(2, common_1.Body())
    ], ContratosController.prototype, "updateSector");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], ContratosController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], ContratosController.prototype, "remove");
    ContratosController = __decorate([
        common_1.Controller('contratos')
    ], ContratosController);
    return ContratosController;
}());
exports.ContratosController = ContratosController;
