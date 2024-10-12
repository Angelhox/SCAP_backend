"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateContratoDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var enumSn;
(function (enumSn) {
    enumSn["Si"] = "Si";
    enumSn["No"] = "No";
})(enumSn || (enumSn = {}));
var enumActivo;
(function (enumActivo) {
    enumActivo["Activo"] = "Activo";
    enumActivo["Inactivo"] = "Inactivo";
})(enumActivo || (enumActivo = {}));
var CreateContratoDto = /** @class */ (function () {
    function CreateContratoDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.MinLength(6),
        class_validator_1.MaxLength(15),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return value.trim();
        })
    ], CreateContratoDto.prototype, "codigo");
    __decorate([
        class_validator_1.IsDateString()
    ], CreateContratoDto.prototype, "fecha");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.IsEnum(enumActivo)
    ], CreateContratoDto.prototype, "estado");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.IsEnum(enumSn)
    ], CreateContratoDto.prototype, "medidorSn");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.MaxLength(50)
    ], CreateContratoDto.prototype, "barrio");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        class_validator_1.MaxLength(50)
    ], CreateContratoDto.prototype, "callePrincipal");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        class_validator_1.MaxLength(50)
    ], CreateContratoDto.prototype, "calleSecundaria");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        class_validator_1.MaxLength(50)
    ], CreateContratoDto.prototype, "numeroCasa");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        class_validator_1.MaxLength(100)
    ], CreateContratoDto.prototype, "referencia");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.IsEnum(enumSn)
    ], CreateContratoDto.prototype, "principalSn");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsInt(),
        class_validator_1.Max(99999999999)
    ], CreateContratoDto.prototype, "serviciosCompartidos");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsInt(),
        class_validator_1.Min(1)
    ], CreateContratoDto.prototype, "sectoresId");
    return CreateContratoDto;
}());
exports.CreateContratoDto = CreateContratoDto;
