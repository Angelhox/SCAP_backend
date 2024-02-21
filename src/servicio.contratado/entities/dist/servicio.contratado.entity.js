"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServicioContratado = void 0;
var typeorm_1 = require("typeorm");
var contrato_entity_1 = require("src/contratos/entities/contrato.entity");
var servicio_entity_1 = require("src/servicios/entities/servicio.entity");
var tipo_descuento_entity_1 = require("src/tipo.descuento/entities/tipo.descuento.entity");
var detalles_servicio_entity_1 = require("src/detalles.servicio/entities/detalles.servicio.entity");
var ServicioContratado = /** @class */ (function () {
    function ServicioContratado() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], ServicioContratado.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'date', nullable: true })
    ], ServicioContratado.prototype, "fechaEmision");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 15, nullable: true })
    ], ServicioContratado.prototype, "estado");
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    ], ServicioContratado.prototype, "valorIndividual");
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    ], ServicioContratado.prototype, "numeroPagosIndividual");
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    ], ServicioContratado.prototype, "valorPagosIndividual");
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    ], ServicioContratado.prototype, "descuentoValor");
    __decorate([
        typeorm_1.ManyToOne(function () { return contrato_entity_1.Contrato; }, function (contrato) { return contrato.servicioContratado; }, {
            nullable: false
        }),
        typeorm_1.JoinColumn({ name: 'contratosId' })
    ], ServicioContratado.prototype, "contrato");
    __decorate([
        typeorm_1.ManyToOne(function () { return servicio_entity_1.Servicio; }, function (servicio) { return servicio.servicioContratado; }, {
            nullable: false
        }),
        typeorm_1.JoinColumn({ name: 'serviciosId' })
    ], ServicioContratado.prototype, "servicio");
    __decorate([
        typeorm_1.ManyToOne(function () { return tipo_descuento_entity_1.TipoDescuento; }, function (tipoDescuento) { return tipoDescuento.servicioContratado; }, { nullable: false }),
        typeorm_1.JoinColumn({ name: 'descuentosId' })
    ], ServicioContratado.prototype, "tipoDescuento");
    __decorate([
        typeorm_1.OneToMany(function () { return detalles_servicio_entity_1.DetallesServicio; }, function (detallesServicio) { return detallesServicio.servicioContratado; })
    ], ServicioContratado.prototype, "detallesServicio");
    ServicioContratado = __decorate([
        typeorm_1.Entity({ name: 'serviciosContratados' })
    ], ServicioContratado);
    return ServicioContratado;
}());
exports.ServicioContratado = ServicioContratado;
