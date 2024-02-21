"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Cargo = void 0;
var empleado_entity_1 = require("src/empleados/entities/empleado.entity");
var typeorm_1 = require("typeorm");
var Cargo = /** @class */ (function () {
    function Cargo() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], Cargo.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45 })
    ], Cargo.prototype, "cargo");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 100 })
    ], Cargo.prototype, "cargodescipcion");
    __decorate([
        typeorm_1.OneToMany(function () { return empleado_entity_1.Empleado; }, function (empleado) { return empleado.cargo; })
    ], Cargo.prototype, "empleado");
    Cargo = __decorate([
        typeorm_1.Entity({ name: 'cargosempleados' })
    ], Cargo);
    return Cargo;
}());
exports.Cargo = Cargo;
