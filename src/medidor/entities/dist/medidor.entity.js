"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Medidor = void 0;
var typeorm_1 = require("typeorm");
var contrato_entity_1 = require("src/contratos/entities/contrato.entity");
var Medidor = /** @class */ (function () {
    function Medidor() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], Medidor.prototype, "id");
    __decorate([
        typeorm_1.Column({ length: 15, type: 'char', nullable: false, unique: false })
    ], Medidor.prototype, "codigo");
    __decorate([
        typeorm_1.Column({
            type: 'date'
        })
    ], Medidor.prototype, "fechaInstalacion");
    __decorate([
        typeorm_1.Column({ length: 35, type: 'varchar', nullable: true })
    ], Medidor.prototype, "marca");
    __decorate([
        typeorm_1.Column({ length: 100, type: 'varchar', nullable: true })
    ], Medidor.prototype, "observacion");
    __decorate([
        typeorm_1.Column({ length: 15, type: 'char', nullable: false })
    ], Medidor.prototype, "estado");
    __decorate([
        typeorm_1.Column({ type: 'date', nullable: true })
    ], Medidor.prototype, "fechaBaja");
    __decorate([
        typeorm_1.Column({ type: 'decimal', nullable: true, precision: 10.2 })
    ], Medidor.prototype, "ultimaLectura");
    __decorate([
        typeorm_1.ManyToOne(function () { return contrato_entity_1.Contrato; }, function (contrato) { return contrato.medidor; }),
        typeorm_1.JoinColumn({ name: 'contratosId' })
    ], Medidor.prototype, "contrato");
    Medidor = __decorate([
        typeorm_1.Entity({ name: 'medidores' })
    ], Medidor);
    return Medidor;
}());
exports.Medidor = Medidor;
