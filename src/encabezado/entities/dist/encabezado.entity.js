"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Encabezado = void 0;
var comprobante_entity_1 = require("src/comprobantes/entities/comprobante.entity");
var detalles_servicio_entity_1 = require("src/detalles.servicio/entities/detalles.servicio.entity");
var typeorm_1 = require("typeorm");
var Encabezado = /** @class */ (function () {
    function Encabezado() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], Encabezado.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'datetime', "default": function () { return 'CURRENT_TIMESTAMP'; } })
    ], Encabezado.prototype, "fechaEmision");
    __decorate([
        typeorm_1.Column({ type: 'datetime', nullable: true, "default": null })
    ], Encabezado.prototype, "fechaPago");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 15, nullable: true })
    ], Encabezado.prototype, "tipo");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 20, nullable: true })
    ], Encabezado.prototype, "estado");
    __decorate([
        typeorm_1.OneToMany(function () { return comprobante_entity_1.Comprobante; }, function (comprobante) { return comprobante.encabezado; })
    ], Encabezado.prototype, "comprobante");
    __decorate([
        typeorm_1.OneToMany(function () { return detalles_servicio_entity_1.DetallesServicio; }, function (detallesServicio) { return detallesServicio.encabezado; })
    ], Encabezado.prototype, "detallesServicio");
    Encabezado = __decorate([
        typeorm_1.Entity({ name: 'encabezado' })
    ], Encabezado);
    return Encabezado;
}());
exports.Encabezado = Encabezado;
