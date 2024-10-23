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
exports.SocioContratoController = void 0;
var common_1 = require("@nestjs/common");
var SocioContratoController = /** @class */ (function () {
    function SocioContratoController(socioContratoService) {
        this.socioContratoService = socioContratoService;
    }
    SocioContratoController.prototype.create = function (createSocioContratoWithContratoDto) {
        return this.socioContratoService.create(createSocioContratoWithContratoDto);
    };
    SocioContratoController.prototype.findAll = function () {
        return this.socioContratoService.findAll();
    };
    SocioContratoController.prototype.findOneByContrato = function (id) {
        return this.socioContratoService.findByContrato(+id);
    };
    SocioContratoController.prototype.findBySocio = function (id) {
        return this.socioContratoService.findBySocio(+id);
    };
    SocioContratoController.prototype.findOne = function (id) {
        return this.socioContratoService.findOne(+id);
    };
    SocioContratoController.prototype.updateSocio = function (id, socioContrato) {
        return this.socioContratoService.updateSocio(+id, socioContrato);
    };
    SocioContratoController.prototype.update = function (id, updateSocioContratoDto) {
        return this.socioContratoService.update(+id, updateSocioContratoDto);
    };
    SocioContratoController.prototype.remove = function (id) {
        return this.socioContratoService.remove(+id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], SocioContratoController.prototype, "create");
    __decorate([
        common_1.Get()
    ], SocioContratoController.prototype, "findAll");
    __decorate([
        common_1.Get('/contrato/:id'),
        __param(0, common_1.Param('id'))
    ], SocioContratoController.prototype, "findOneByContrato");
    __decorate([
        common_1.Get('/socio/:id'),
        __param(0, common_1.Param('id'))
    ], SocioContratoController.prototype, "findBySocio");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], SocioContratoController.prototype, "findOne");
    __decorate([
        common_1.Patch('/change-socio/:id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], SocioContratoController.prototype, "updateSocio");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], SocioContratoController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], SocioContratoController.prototype, "remove");
    SocioContratoController = __decorate([
        common_1.Controller('socio.contrato')
    ], SocioContratoController);
    return SocioContratoController;
}());
exports.SocioContratoController = SocioContratoController;
