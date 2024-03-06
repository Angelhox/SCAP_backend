"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Comprobante = void 0;
var encabezado_entity_1 = require("src/encabezado/entities/encabezado.entity");
var typeorm_1 = require("typeorm");
var Comprobante = /** @class */ (function () {
    function Comprobante() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], Comprobante.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 50, nullable: true })
    ], Comprobante.prototype, "codigo");
    __decorate([
        typeorm_1.Column({ type: 'date', nullable: true })
    ], Comprobante.prototype, "fechaEmision");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 200, nullable: true })
    ], Comprobante.prototype, "rutaLocal");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 15, nullable: true })
    ], Comprobante.prototype, "estado");
    __decorate([
        typeorm_1.Column({ type: 'date', nullable: true })
    ], Comprobante.prototype, "fechaAnulacion");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 150, nullable: true })
    ], Comprobante.prototype, "motivoAnulacion");
    __decorate([
        typeorm_1.ManyToOne(function () { return encabezado_entity_1.Encabezado; }, function (encabezado) { return encabezado.comprobante; }, {
            nullable: false
        }),
        typeorm_1.JoinColumn({ name: 'encabezadosId' })
    ], Comprobante.prototype, "encabezado");
    Comprobante = __decorate([
        typeorm_1.Entity({ name: 'comprobantes' })
    ], Comprobante);
    return Comprobante;
}());
exports.Comprobante = Comprobante;
