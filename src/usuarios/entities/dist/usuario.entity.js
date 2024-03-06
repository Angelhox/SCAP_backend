"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Usuario = void 0;
var empleado_entity_1 = require("src/empleados/entities/empleado.entity");
var rol_entity_1 = require("src/rol/entities/rol.entity");
var typeorm_1 = require("typeorm");
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], Usuario.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 20 })
    ], Usuario.prototype, "usuario");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 255 })
    ], Usuario.prototype, "clave");
    __decorate([
        typeorm_1.Column({ type: 'datetime', "default": function () { return 'CURRENT_TIMESTAMP'; } })
    ], Usuario.prototype, "fechaModificacion");
    __decorate([
        typeorm_1.ManyToOne(function () { return rol_entity_1.Rol; }, function (rol) { return rol.usuario; }, { nullable: false }),
        typeorm_1.JoinColumn({ name: 'rolesId' })
    ], Usuario.prototype, "rol");
    __decorate([
        typeorm_1.ManyToOne(function () { return empleado_entity_1.Empleado; }, function (empleado) { return empleado.usuario; }),
        typeorm_1.JoinColumn({ name: 'empleadosId' })
    ], Usuario.prototype, "empleado");
    Usuario = __decorate([
        typeorm_1.Entity({ name: 'usuarios' })
    ], Usuario);
    return Usuario;
}());
exports.Usuario = Usuario;
