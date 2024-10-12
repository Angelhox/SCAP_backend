"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateMedidorDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var enumActivo;
(function (enumActivo) {
    enumActivo["Activo"] = "Activo";
    enumActivo["Inactivo"] = "Inactivo";
})(enumActivo || (enumActivo = {}));
var CreateMedidorDto = /** @class */ (function () {
    function CreateMedidorDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.MaxLength(15),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateMedidorDto.prototype, "codigo");
    __decorate([
        class_validator_1.IsDateString()
    ], CreateMedidorDto.prototype, "fechaInstalacion");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        class_validator_1.MaxLength(35),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateMedidorDto.prototype, "marca");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.MaxLength(100),
        class_validator_1.IsString()
    ], CreateMedidorDto.prototype, "observacion");
    __decorate([
        class_validator_1.IsEnum(enumActivo),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.MaxLength(15),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateMedidorDto.prototype, "estado");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsDateString()
    ], CreateMedidorDto.prototype, "fechaBaja");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber(),
        class_validator_1.IsInt()
    ], CreateMedidorDto.prototype, "contratosId");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsNumber(),
        class_validator_1.IsDecimal(),
        class_validator_1.Max(99999999.99)
    ], CreateMedidorDto.prototype, "ultimaLectura");
    return CreateMedidorDto;
}());
exports.CreateMedidorDto = CreateMedidorDto;