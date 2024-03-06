"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Empleado = void 0;
var cargo_entity_1 = require("src/cargos/entities/cargo.entity");
var usuario_entity_1 = require("src/usuarios/entities/usuario.entity");
var typeorm_1 = require("typeorm");
var Empleado = /** @class */ (function () {
    function Empleado() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], Empleado.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 13, unique: true })
    ], Empleado.prototype, "cedula");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45 })
    ], Empleado.prototype, "primerNombre");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45, nullable: true })
    ], Empleado.prototype, "segundoNombre");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45 })
    ], Empleado.prototype, "primerApellido");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45, nullable: true })
    ], Empleado.prototype, "segundoApellido");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 15 })
    ], Empleado.prototype, "telefono");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 100 })
    ], Empleado.prototype, "correo");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 10, "default": 'no' })
    ], Empleado.prototype, "usuarioSn");
    __decorate([
        typeorm_1.ManyToOne(function () { return cargo_entity_1.Cargo; }, function (cargo) { return cargo.empleado; }, { nullable: false }),
        typeorm_1.JoinColumn({ name: 'cargosId' })
    ], Empleado.prototype, "cargo");
    __decorate([
        typeorm_1.OneToMany(function () { return usuario_entity_1.Usuario; }, function (usuario) { return usuario.empleado; })
    ], Empleado.prototype, "usuario");
    Empleado = __decorate([
        typeorm_1.Entity({ name: 'empleados' })
    ], Empleado);
    return Empleado;
}());
exports.Empleado = Empleado;
