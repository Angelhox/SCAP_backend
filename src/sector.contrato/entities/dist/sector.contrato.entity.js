"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SectorContrato = void 0;
var typeorm_1 = require("typeorm");
var SectorContrato = /** @class */ (function () {
    function SectorContrato() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], SectorContrato.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 15, unique: true })
    ], SectorContrato.prototype, "codigo");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 15 })
    ], SectorContrato.prototype, "estado");
    __decorate([
        typeorm_1.Column({ type: 'date' })
    ], SectorContrato.prototype, "fechaCreacion");
    __decorate([
        typeorm_1.Column({ type: 'date', nullable: true, "default": null })
    ], SectorContrato.prototype, "fechaBaja");
    SectorContrato = __decorate([
        typeorm_1.Entity({ name: 'sectorContrato' })
    ], SectorContrato);
    return SectorContrato;
}());
exports.SectorContrato = SectorContrato;
