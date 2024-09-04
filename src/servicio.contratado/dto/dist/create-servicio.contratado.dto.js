"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateMedidorServicioContratadoDto = exports.CreateServicioContratadoDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var CreateServicioContratadoDto = /** @class */ (function () {
    function CreateServicioContratadoDto() {
    }
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsDateString()
    ], CreateServicioContratadoDto.prototype, "fechaEmision");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.MaxLength(15),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateServicioContratadoDto.prototype, "estado");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], CreateServicioContratadoDto.prototype, "valorIndividual");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber(),
        class_validator_1.IsInt()
    ], CreateServicioContratadoDto.prototype, "numeroPagosIndividual");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], CreateServicioContratadoDto.prototype, "valorPagosIndividual");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], CreateServicioContratadoDto.prototype, "descuentoValor");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber(),
        class_validator_1.IsInt()
    ], CreateServicioContratadoDto.prototype, "contratosId");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber(),
        class_validator_1.IsInt()
    ], CreateServicioContratadoDto.prototype, "serviciosId");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber(),
        class_validator_1.IsInt()
    ], CreateServicioContratadoDto.prototype, "descuentosId");
    return CreateServicioContratadoDto;
}());
exports.CreateServicioContratadoDto = CreateServicioContratadoDto;
var CreateMedidorServicioContratadoDto = /** @class */ (function () {
    function CreateMedidorServicioContratadoDto() {
    }
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsDateString()
    ], CreateMedidorServicioContratadoDto.prototype, "fechaEmision");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.MaxLength(15),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateMedidorServicioContratadoDto.prototype, "estado");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], CreateMedidorServicioContratadoDto.prototype, "valorIndividual");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber(),
        class_validator_1.IsInt()
    ], CreateMedidorServicioContratadoDto.prototype, "numeroPagosIndividual");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], CreateMedidorServicioContratadoDto.prototype, "valorPagosIndividual");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], CreateMedidorServicioContratadoDto.prototype, "descuentoValor");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber(),
        class_validator_1.IsInt()
    ], CreateMedidorServicioContratadoDto.prototype, "contratosId");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber(),
        class_validator_1.IsInt()
    ], CreateMedidorServicioContratadoDto.prototype, "serviciosId");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber(),
        class_validator_1.IsInt()
    ], CreateMedidorServicioContratadoDto.prototype, "descuentosId");
    return CreateMedidorServicioContratadoDto;
}());
exports.CreateMedidorServicioContratadoDto = CreateMedidorServicioContratadoDto;
