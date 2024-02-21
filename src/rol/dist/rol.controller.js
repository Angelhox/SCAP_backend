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
exports.RolController = void 0;
var common_1 = require("@nestjs/common");
var RolController = /** @class */ (function () {
    function RolController(rolService) {
        this.rolService = rolService;
    }
    RolController.prototype.create = function (createRolDto) {
        return this.rolService.create(createRolDto);
    };
    RolController.prototype.findAll = function () {
        return this.rolService.findAll();
    };
    RolController.prototype.findOne = function (id) {
        return this.rolService.findOne(+id);
    };
    RolController.prototype.update = function (id, updateRolDto) {
        return this.rolService.update(+id, updateRolDto);
    };
    RolController.prototype.remove = function (id) {
        return this.rolService.remove(+id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], RolController.prototype, "create");
    __decorate([
        common_1.Get()
    ], RolController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], RolController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], RolController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], RolController.prototype, "remove");
    RolController = __decorate([
        common_1.Controller('rol')
    ], RolController);
    return RolController;
}());
exports.RolController = RolController;
