"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Sector = void 0;
var sector_contrato_entity_1 = require("src/sector.contrato/entities/sector.contrato.entity");
var typeorm_1 = require("typeorm");
var Sector = /** @class */ (function () {
    function Sector() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], Sector.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 50 })
    ], Sector.prototype, "barrio");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 10 })
    ], Sector.prototype, "abreviatura");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 10 })
    ], Sector.prototype, "codigo");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 10 })
    ], Sector.prototype, "numeroSocios");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 10 })
    ], Sector.prototype, "numeroCodigos");
    __decorate([
        typeorm_1.OneToMany(function () { return sector_contrato_entity_1.SectorContrato; }, function (sectorContrato) { return sectorContrato.sector; })
    ], Sector.prototype, "sectorContrato");
    Sector = __decorate([
        typeorm_1.Entity({ name: 'sectores' })
    ], Sector);
    return Sector;
}());
exports.Sector = Sector;
