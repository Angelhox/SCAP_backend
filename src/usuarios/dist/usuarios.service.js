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
exports.UsuariosService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var usuario_entity_1 = require("./entities/usuario.entity");
var UsuariosService = /** @class */ (function () {
    function UsuariosService(usuariosRepository) {
        this.usuariosRepository = usuariosRepository;
    }
    UsuariosService.prototype.create = function (createUsuarioDto) {
        return 'This action adds a new usuario';
    };
    UsuariosService.prototype.findAll = function () {
        // return `This action returns all usuarios`;
        return this.usuariosRepository.find({ relations: ['rol', 'empleado'] });
    };
    UsuariosService.prototype.findOne = function (id) {
        return "This actions returns a #" + id + " usuario";
    };
    UsuariosService.prototype.findOneByUser = function (usuario) {
        return this.usuariosRepository.findOne({
            where: { usuario: usuario },
            relations: ['rol', 'empleado']
        });
    };
    UsuariosService.prototype.findOneByUserWithPass = function (usuario) {
        return this.usuariosRepository.findOne({
            where: { usuario: usuario },
            select: ['id', 'usuario', 'clave', 'fechaModificacion'],
            relations: ['rol']
        });
    };
    UsuariosService.prototype.update = function (id, updateUsuarioDto) {
        return "This action updates a #" + id + " usuario";
    };
    UsuariosService.prototype.remove = function (id) {
        return "This action removes a #" + id + " usuario";
    };
    UsuariosService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(usuario_entity_1.Usuario))
    ], UsuariosService);
    return UsuariosService;
}());
exports.UsuariosService = UsuariosService;
