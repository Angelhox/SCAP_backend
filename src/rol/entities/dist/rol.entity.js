"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Rol = void 0;
var usuario_entity_1 = require("src/usuarios/entities/usuario.entity");
var typeorm_1 = require("typeorm");
var Rol = /** @class */ (function () {
    function Rol() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], Rol.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 20 })
    ], Rol.prototype, "rol");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45 })
    ], Rol.prototype, "rolDescripcion");
    __decorate([
        typeorm_1.OneToMany(function () { return usuario_entity_1.Usuario; }, function (usuario) { return usuario.rol; })
    ], Rol.prototype, "usuario");
    Rol = __decorate([
        typeorm_1.Entity({ name: 'roles' })
    ], Rol);
    return Rol;
}());
exports.Rol = Rol;
