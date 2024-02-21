"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetallesServicio = void 0;
var servicio_contratado_entity_1 = require("src/servicio.contratado/entities/servicio.contratado.entity");
var encabezado_entity_1 = require("src/encabezado/entities/encabezado.entity");
var typeorm_1 = require("typeorm");
var DetallesServicio = /** @class */ (function () {
    function DetallesServicio() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], DetallesServicio.prototype, "id");
    __decorate([
        typeorm_1.Column({
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: true,
            "default": null
        })
    ], DetallesServicio.prototype, "subtotal");
    __decorate([
        typeorm_1.Column({
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: true,
            "default": null
        })
    ], DetallesServicio.prototype, "descuento");
    __decorate([
        typeorm_1.Column({
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: true,
            "default": null
        })
    ], DetallesServicio.prototype, "total");
    __decorate([
        typeorm_1.Column({
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: true,
            "default": null
        })
    ], DetallesServicio.prototype, "saldo");
    __decorate([
        typeorm_1.Column({
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: true,
            "default": null
        })
    ], DetallesServicio.prototype, "abono");
    __decorate([
        typeorm_1.Column({
            type: 'datetime',
            "default": function () { return 'CURRENT_TIMESTAMP'; },
            nullable: true
        })
    ], DetallesServicio.prototype, "fechaEmision");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 20, "default": 'Por cancelar', nullable: true })
    ], DetallesServicio.prototype, "estado");
    __decorate([
        typeorm_1.ManyToOne(function () { return encabezado_entity_1.Encabezado; }, function (encabezado) { return encabezado.detallesServicio; }, {
            nullable: true
        }),
        typeorm_1.JoinColumn({ name: 'encabezadosId' })
    ], DetallesServicio.prototype, "encabezado");
    __decorate([
        typeorm_1.ManyToOne(function () { return servicio_contratado_entity_1.ServicioContratado; }, function (servicioContratado) { return servicioContratado.detallesServicio; }, { nullable: false }),
        typeorm_1.JoinColumn({ name: 'serviciosContratadosId' })
    ], DetallesServicio.prototype, "servicioContratado");
    DetallesServicio = __decorate([
        typeorm_1.Entity({ name: 'detallesservicio' })
    ], DetallesServicio);
    return DetallesServicio;
}());
exports.DetallesServicio = DetallesServicio;
