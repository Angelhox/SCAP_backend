"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Servicio = void 0;
var servicio_contratado_entity_1 = require("src/servicio.contratado/entities/servicio.contratado.entity");
var typeorm_1 = require("typeorm");
var Servicio = /** @class */ (function () {
    function Servicio() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], Servicio.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45 })
    ], Servicio.prototype, "nombre");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 100, nullable: true })
    ], Servicio.prototype, "descripcion");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 20 })
    ], Servicio.prototype, "tipo");
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2 })
    ], Servicio.prototype, "valor");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 15, nullable: true })
    ], Servicio.prototype, "aplazableSn");
    __decorate([
        typeorm_1.Column({ type: 'date' })
    ], Servicio.prototype, "fechaCreacion");
    __decorate([
        typeorm_1.Column({ type: 'int', width: 11, nullable: true })
    ], Servicio.prototype, "numeroPagos");
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2 })
    ], Servicio.prototype, "valorPagos");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 15, nullable: true })
    ], Servicio.prototype, "valoresDistintosSn");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 15, nullable: true })
    ], Servicio.prototype, "individualSn");
    __decorate([
        typeorm_1.Column({ type: 'tinyint' })
    ], Servicio.prototype, "base");
    __decorate([
        typeorm_1.OneToMany(function () { return servicio_contratado_entity_1.ServicioContratado; }, function (servicioContratado) { return servicioContratado.servicio; })
    ], Servicio.prototype, "servicioContratado");
    Servicio = __decorate([
        typeorm_1.Entity({ name: 'servicios' })
    ], Servicio);
    return Servicio;
}());
exports.Servicio = Servicio;
