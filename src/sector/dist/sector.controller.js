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
exports.SectorController = void 0;
var common_1 = require("@nestjs/common");
var SectorController = /** @class */ (function () {
    function SectorController(sectorService) {
        this.sectorService = sectorService;
    }
    SectorController.prototype.create = function (createSectorDto) {
        return this.sectorService.create(createSectorDto);
    };
    SectorController.prototype.findAll = function () {
        return this.sectorService.findAll();
    };
    SectorController.prototype.findOne = function (id) {
        return this.sectorService.findOne(+id);
    };
    SectorController.prototype.update = function (id, updateSectorDto) {
        return this.sectorService.update(+id, updateSectorDto);
    };
    SectorController.prototype.remove = function (id) {
        return this.sectorService.remove(+id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], SectorController.prototype, "create");
    __decorate([
        common_1.Get()
    ], SectorController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], SectorController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], SectorController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], SectorController.prototype, "remove");
    SectorController = __decorate([
        common_1.Controller('sector')
    ], SectorController);
    return SectorController;
}());
exports.SectorController = SectorController;
