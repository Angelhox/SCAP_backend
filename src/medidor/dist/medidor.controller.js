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
exports.MedidorController = void 0;
var common_1 = require("@nestjs/common");
var MedidorController = /** @class */ (function () {
    function MedidorController(medidorService) {
        this.medidorService = medidorService;
    }
    MedidorController.prototype.create = function (createMedidorDto) {
        return this.medidorService.create(createMedidorDto);
    };
    MedidorController.prototype.findAll = function () {
        return this.medidorService.findAll();
    };
    MedidorController.prototype.findOne = function (id) {
        return this.medidorService.findOne(+id);
    };
    MedidorController.prototype.update = function (id, updateMedidorDto) {
        return this.medidorService.update(+id, updateMedidorDto);
    };
    MedidorController.prototype.remove = function (id) {
        return this.medidorService.remove(+id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], MedidorController.prototype, "create");
    __decorate([
        common_1.Get()
    ], MedidorController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], MedidorController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], MedidorController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], MedidorController.prototype, "remove");
    MedidorController = __decorate([
        common_1.Controller('medidor')
    ], MedidorController);
    return MedidorController;
}());
exports.MedidorController = MedidorController;
