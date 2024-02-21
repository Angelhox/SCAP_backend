"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Tarifa = void 0;
var typeorm_1 = require("typeorm");
var Tarifa = /** @class */ (function () {
    function Tarifa() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], Tarifa.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45 })
    ], Tarifa.prototype, "tarifa");
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2 })
    ], Tarifa.prototype, "desde");
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2 })
    ], Tarifa.prototype, "hasta");
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2 })
    ], Tarifa.prototype, "valor");
    Tarifa = __decorate([
        typeorm_1.Entity({ name: 'tarifas' })
    ], Tarifa);
    return Tarifa;
}());
exports.Tarifa = Tarifa;
