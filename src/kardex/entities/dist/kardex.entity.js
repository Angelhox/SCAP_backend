"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Kardex = void 0;
var typeorm_1 = require("typeorm");
var Kardex = /** @class */ (function () {
    function Kardex() {
    }
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.PrimaryGeneratedColumn()
    ], Kardex.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'datetime', "default": function () { return 'CURRENT_TIMESTAMP'; } })
    ], Kardex.prototype, "fecha");
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 100 })
    ], Kardex.prototype, "descripcion");
    __decorate([
        typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2 })
    ], Kardex.prototype, "valor");
    __decorate([
        typeorm_1.Column({ type: 'char', length: 8 })
    ], Kardex.prototype, "tipo");
    __decorate([
        typeorm_1.Column({ type: 'int', width: 11 })
    ], Kardex.prototype, "usuariosId");
    Kardex = __decorate([
        typeorm_1.Entity({ name: 'kardex' })
    ], Kardex);
    return Kardex;
}());
exports.Kardex = Kardex;
