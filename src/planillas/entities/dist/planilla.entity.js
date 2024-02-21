"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Planilla = void 0;
var medidor_entity_1 = require("src/medidor/entities/medidor.entity");
var typeorm_1 = require("typeorm");
var Planilla = /** @class */ (function () {
    function Planilla() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], Planilla.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'datetime', "default": function () { return 'CURRENT_TIMESTAMP'; } })
    ], Planilla.prototype, "fechaEmision");
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2 })
    ], Planilla.prototype, "valor");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 10 })
    ], Planilla.prototype, "estado");
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    ], Planilla.prototype, "lecturaActual");
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    ], Planilla.prototype, "lecturaAnterior");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45, nullable: true })
    ], Planilla.prototype, "tarifa");
    __decorate([
        typeorm_1.Column({
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: true
        })
    ], Planilla.prototype, "tarifaValor");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 30, unique: true })
    ], Planilla.prototype, "codigo");
    __decorate([
        typeorm_1.ManyToOne(function () { return medidor_entity_1.Medidor; }, function (medidor) { return medidor.planilla; }),
        typeorm_1.JoinColumn({ name: 'medidoresId' })
    ], Planilla.prototype, "medidor");
    Planilla = __decorate([
        typeorm_1.Entity({ name: 'planillas' })
    ], Planilla);
    return Planilla;
}());
exports.Planilla = Planilla;
