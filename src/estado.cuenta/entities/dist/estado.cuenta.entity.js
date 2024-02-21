"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EstadoCuenta = void 0;
var socio_entity_1 = require("src/socios/entities/socio.entity");
var typeorm_1 = require("typeorm");
var EstadoCuenta = /** @class */ (function () {
    function EstadoCuenta() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], EstadoCuenta.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2 })
    ], EstadoCuenta.prototype, "valor");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 15 })
    ], EstadoCuenta.prototype, "tipo");
    __decorate([
        typeorm_1.Column({ type: 'date' })
    ], EstadoCuenta.prototype, "fechaMovimiento");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 45 })
    ], EstadoCuenta.prototype, "motivo");
    __decorate([
        typeorm_1.Column({ type: 'int', width: 11 })
    ], EstadoCuenta.prototype, "responsable");
    __decorate([
        typeorm_1.ManyToOne(function () { return socio_entity_1.Socio; }, function (socio) { return socio.estadoCuenta; }, { nullable: false }),
        typeorm_1.JoinColumn({ name: 'sociosId' })
    ], EstadoCuenta.prototype, "socio");
    EstadoCuenta = __decorate([
        typeorm_1.Entity({ name: 'estadoscuenta' })
    ], EstadoCuenta);
    return EstadoCuenta;
}());
exports.EstadoCuenta = EstadoCuenta;
