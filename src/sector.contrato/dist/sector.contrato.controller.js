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
exports.SectorContratoController = void 0;
var common_1 = require("@nestjs/common");
var SectorContratoController = /** @class */ (function () {
    function SectorContratoController(sectorContratoService) {
        this.sectorContratoService = sectorContratoService;
    }
    SectorContratoController.prototype.create = function (createSectorContratoDto) {
        return this.sectorContratoService.create(createSectorContratoDto);
    };
    SectorContratoController.prototype.findAll = function () {
        return this.sectorContratoService.findAll();
    };
    SectorContratoController.prototype.findOne = function (id) {
        return this.sectorContratoService.findOne(+id);
    };
    SectorContratoController.prototype.update = function (id, updateSectorContratoDto) {
        return this.sectorContratoService.update(+id, updateSectorContratoDto);
    };
    SectorContratoController.prototype.remove = function (id) {
        return this.sectorContratoService.remove(+id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], SectorContratoController.prototype, "create");
    __decorate([
        common_1.Get()
    ], SectorContratoController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], SectorContratoController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], SectorContratoController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], SectorContratoController.prototype, "remove");
    SectorContratoController = __decorate([
        common_1.Controller('sector.contrato')
    ], SectorContratoController);
    return SectorContratoController;
}());
exports.SectorContratoController = SectorContratoController;
