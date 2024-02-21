"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TipoDescuento = void 0;
var servicio_contratado_entity_1 = require("src/servicio.contratado/entities/servicio.contratado.entity");
var typeorm_1 = require("typeorm");
var TipoDescuento = /** @class */ (function () {
    function TipoDescuento() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], TipoDescuento.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 50 })
    ], TipoDescuento.prototype, "descripcion");
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    ], TipoDescuento.prototype, "valor");
    __decorate([
        typeorm_1.OneToMany(function () { return servicio_contratado_entity_1.ServicioContratado; }, function (servicioContratado) { return servicioContratado.tipoDescuento; })
    ], TipoDescuento.prototype, "servicioContratado");
    TipoDescuento = __decorate([
        typeorm_1.Entity({ name: 'tiposdescuento' })
    ], TipoDescuento);
    return TipoDescuento;
}());
exports.TipoDescuento = TipoDescuento;
