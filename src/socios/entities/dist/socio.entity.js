"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Socio = void 0;
var estado_cuenta_entity_1 = require("src/estado.cuenta/entities/estado.cuenta.entity");
var typeorm_1 = require("typeorm");
var Socio = /** @class */ (function () {
    function Socio() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], Socio.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'char', unique: true, length: 15 })
    ], Socio.prototype, "cedulaPasaporte");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45 })
    ], Socio.prototype, "primerNombre");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45, "default": 'NA', nullable: true })
    ], Socio.prototype, "segundoNombre");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45 })
    ], Socio.prototype, "primerApellido");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45, "default": 'NA', nullable: true })
    ], Socio.prototype, "segundoApellido");
    __decorate([
        typeorm_1.Column({ type: 'date', "default": '2023-12-11' })
    ], Socio.prototype, "fechaNacimiento");
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            length: 100,
            "default": 'actualizarCorreo@gmail.com',
            nullable: true
        })
    ], Socio.prototype, "correo");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 15, "default": '0999999999' })
    ], Socio.prototype, "telefonoMovil");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 15, "default": '0999999999', nullable: true })
    ], Socio.prototype, "telefonoFijo");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45, "default": 'Pichincha' })
    ], Socio.prototype, "provincia");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45, "default": 'Cayambe' })
    ], Socio.prototype, "canton");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45, "default": 'Ayora' })
    ], Socio.prototype, "parroquia");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45, "default": 'NA' })
    ], Socio.prototype, "barrio");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 55, "default": 'Principal', nullable: true })
    ], Socio.prototype, "callePrincipal");
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            length: 55,
            "default": 'Secundaria',
            nullable: true
        })
    ], Socio.prototype, "calleSecundaria");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 8, nullable: true, "default": '999' })
    ], Socio.prototype, "numeroCasa");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 100, "default": 'Referencia' })
    ], Socio.prototype, "referencia");
    __decorate([
        typeorm_1.OneToMany(function () { return estado_cuenta_entity_1.EstadoCuenta; }, function (estadoCuenta) { return estadoCuenta.socio; })
    ], Socio.prototype, "estadoCuenta");
    Socio = __decorate([
        typeorm_1.Entity({ name: 'socios' })
    ], Socio);
    return Socio;
}());
exports.Socio = Socio;
