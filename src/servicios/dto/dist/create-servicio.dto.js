"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateServicioDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var IsBase;
(function (IsBase) {
    IsBase[IsBase["Base"] = 1] = "Base";
    IsBase[IsBase["Otro"] = 0] = "Otro";
})(IsBase || (IsBase = {}));
var CreateServicioDto = /** @class */ (function () {
    function CreateServicioDto() {
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.MinLength(3),
        class_validator_1.MaxLength(45),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateServicioDto.prototype, "nombre");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MaxLength(100),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateServicioDto.prototype, "descripcion");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.MaxLength(20),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateServicioDto.prototype, "tipo");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], CreateServicioDto.prototype, "valor");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.MaxLength(15),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateServicioDto.prototype, "aplazableSn");
    __decorate([
        class_validator_1.IsDateString(),
        class_validator_1.IsNotEmpty()
    ], CreateServicioDto.prototype, "fechaCreacion");
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsNotEmpty()
    ], CreateServicioDto.prototype, "numeroPagos");
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsNotEmpty()
    ], CreateServicioDto.prototype, "valorPagos");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateServicioDto.prototype, "valoresDistintosSn");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateServicioDto.prototype, "individualSn");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsEnum(IsBase)
    ], CreateServicioDto.prototype, "base");
    return CreateServicioDto;
}());
exports.CreateServicioDto = CreateServicioDto;
