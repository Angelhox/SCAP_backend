"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateSocioDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var CreateSocioDto = /** @class */ (function () {
    function CreateSocioDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.MinLength(10),
        class_validator_1.MaxLength(13),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateSocioDto.prototype, "cedulaPasaporte");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.MinLength(1),
        class_validator_1.MaxLength(45),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateSocioDto.prototype, "primerNombre");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        class_validator_1.MaxLength(45),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateSocioDto.prototype, "segundoNombre");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.MinLength(1),
        class_validator_1.MaxLength(45),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateSocioDto.prototype, "primerApellido");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        class_validator_1.MaxLength(45),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateSocioDto.prototype, "segundoApellido");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsDateString(),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateSocioDto.prototype, "fechaNacimiento");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsEmail()
    ], CreateSocioDto.prototype, "correo");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        class_validator_1.MaxLength(10),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateSocioDto.prototype, "telefonoMovil");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        class_validator_1.MaxLength(9),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateSocioDto.prototype, "telefonoFijo");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        class_validator_1.MaxLength(45),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateSocioDto.prototype, "provincia");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.MaxLength(45),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateSocioDto.prototype, "canton");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.MaxLength(45),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateSocioDto.prototype, "parroquia");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.MaxLength(45),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateSocioDto.prototype, "barrio");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.MaxLength(55),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateSocioDto.prototype, "callePrincipal");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.MaxLength(55),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateSocioDto.prototype, "calleSecundaria");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.MaxLength(8),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateSocioDto.prototype, "numeroCasa");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.MaxLength(100),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateSocioDto.prototype, "referencia");
    return CreateSocioDto;
}());
exports.CreateSocioDto = CreateSocioDto;
