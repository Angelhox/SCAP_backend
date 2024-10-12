"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Contrato = void 0;
var typeorm_1 = require("typeorm");
var medidor_entity_1 = require("src/medidor/entities/medidor.entity");
var servicio_contratado_entity_1 = require("src/servicio.contratado/entities/servicio.contratado.entity");
var planilla_entity_1 = require("src/planillas/entities/planilla.entity");
var socio_contrato_entity_1 = require("src/socio.contrato/entities/socio.contrato.entity");
var sector_contrato_entity_1 = require("src/sector.contrato/entities/sector.contrato.entity");
var Contrato = /** @class */ (function () {
    function Contrato() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], Contrato.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 15, unique: true })
    ], Contrato.prototype, "codigo");
    __decorate([
        typeorm_1.Column({ type: 'date' })
    ], Contrato.prototype, "fecha");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 15 })
    ], Contrato.prototype, "estado");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 15 })
    ], Contrato.prototype, "medidorSn");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 50, nullable: true })
    ], Contrato.prototype, "barrio");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 50, nullable: true })
    ], Contrato.prototype, "callePrincipal");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 50, nullable: true })
    ], Contrato.prototype, "calleSecundaria");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 10, nullable: true })
    ], Contrato.prototype, "numeroCasa");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 100, nullable: true })
    ], Contrato.prototype, "referencia");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 10, nullable: true })
    ], Contrato.prototype, "principalSn");
    __decorate([
        typeorm_1.Column({ type: 'int', width: 11, nullable: true })
    ], Contrato.prototype, "serviciosCompartidos");
    __decorate([
        typeorm_1.OneToMany(function () { return medidor_entity_1.Medidor; }, function (medidor) { return medidor.contrato; }, { eager: true })
    ], Contrato.prototype, "medidor");
    __decorate([
        typeorm_1.OneToMany(function () { return planilla_entity_1.Planilla; }, function (planilla) { return planilla.contrato; })
    ], Contrato.prototype, "planilla");
    __decorate([
        typeorm_1.OneToMany(function () { return servicio_contratado_entity_1.ServicioContratado; }, function (servicioContratado) { return servicioContratado.contrato; })
    ], Contrato.prototype, "servicioContratado");
    __decorate([
        typeorm_1.OneToMany(function () { return socio_contrato_entity_1.SocioContrato; }, function (socioContrato) { return socioContrato.contrato; })
    ], Contrato.prototype, "socioContrato");
    __decorate([
        typeorm_1.OneToMany(function () { return sector_contrato_entity_1.SectorContrato; }, function (sectorContrato) { return sectorContrato.contrato; })
    ], Contrato.prototype, "sectorContrato");
    Contrato = __decorate([
        typeorm_1.Entity({ name: 'contratos' })
    ], Contrato);
    return Contrato;
}());
exports.Contrato = Contrato;
