"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SocioContrato = void 0;
var contrato_entity_1 = require("src/contratos/entities/contrato.entity");
var socio_entity_1 = require("src/socios/entities/socio.entity");
var typeorm_1 = require("typeorm");
var SocioContrato = /** @class */ (function () {
    function SocioContrato() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], SocioContrato.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'date' })
    ], SocioContrato.prototype, "fechaContratacion");
    __decorate([
        typeorm_1.Column({ type: 'date', nullable: true, "default": null })
    ], SocioContrato.prototype, "fechaBaja");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 15 })
    ], SocioContrato.prototype, "estado");
    __decorate([
        typeorm_1.ManyToOne(function () { return contrato_entity_1.Contrato; }, function (contrato) { return contrato.socioContrato; }),
        typeorm_1.JoinColumn({ name: 'contratosId' })
    ], SocioContrato.prototype, "contrato");
    __decorate([
        typeorm_1.ManyToOne(function () { return socio_entity_1.Socio; }, function (socio) { return socio.socioContrato; }, { eager: true }),
        typeorm_1.JoinColumn({ name: 'sociosId' })
    ], SocioContrato.prototype, "socio");
    SocioContrato = __decorate([
        typeorm_1.Entity({ name: 'socioContrato' })
    ], SocioContrato);
    return SocioContrato;
}());
exports.SocioContrato = SocioContrato;
