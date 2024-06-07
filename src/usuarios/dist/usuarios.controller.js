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
exports.UsuariosController = void 0;
var common_1 = require("@nestjs/common");
var auth_decorator_1 = require("src/auth/decorators/auth.decorator");
var rol_enum_1 = require("src/common/enums/rol.enum");
var active_user_decorator_1 = require("src/common/decorators/active-user.decorator");
var UsuariosController = /** @class */ (function () {
    function UsuariosController(usuariosService) {
        this.usuariosService = usuariosService;
    }
    UsuariosController.prototype.create = function (createUsuarioDto) {
        return this.usuariosService.create(createUsuarioDto);
    };
    UsuariosController.prototype.findAll = function () {
        return this.usuariosService.findAll();
    };
    UsuariosController.prototype.findOne = function (id) {
        return this.usuariosService.findOne(+id);
    };
    UsuariosController.prototype.findOneByUser = function (userActiveInterface) {
        return this.usuariosService.findOneByUser(userActiveInterface.email);
    };
    // Usado para pruebas eliminar en caso de no usar !!
    // @Post('login')
    // async findOneByUser(@Body('usuario') usuario: string) {
    //   return await this.usuariosService.findOneByUser(usuario);
    // }
    UsuariosController.prototype.update = function (id, updateUsuarioDto) {
        return this.usuariosService.update(+id, updateUsuarioDto);
    };
    UsuariosController.prototype.remove = function (id) {
        return this.usuariosService.remove(+id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], UsuariosController.prototype, "create");
    __decorate([
        common_1.Get()
    ], UsuariosController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], UsuariosController.prototype, "findOne");
    __decorate([
        common_1.Post('/profile'),
        auth_decorator_1.Auth(rol_enum_1.Role.AUDITOR),
        __param(0, active_user_decorator_1.ActiveUser())
    ], UsuariosController.prototype, "findOneByUser");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], UsuariosController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], UsuariosController.prototype, "remove");
    UsuariosController = __decorate([
        common_1.Controller('usuarios')
    ], UsuariosController);
    return UsuariosController;
}());
exports.UsuariosController = UsuariosController;
