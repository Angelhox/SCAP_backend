"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateSocioContratoWithContratoDto = exports.CreateSocioContratoDto = void 0;
var class_validator_1 = require("class-validator");
var enumActivo;
(function (enumActivo) {
    enumActivo["Activo"] = "Activo";
    enumActivo["Inactivo"] = "Inactivo";
})(enumActivo || (enumActivo = {}));
var CreateSocioContratoDto = /** @class */ (function () {
    function CreateSocioContratoDto() {
    }
    __decorate([
        class_validator_1.IsDateString()
    ], CreateSocioContratoDto.prototype, "fechaContratacion");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsDateString()
    ], CreateSocioContratoDto.prototype, "fechaBaja");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.IsEnum(enumActivo)
    ], CreateSocioContratoDto.prototype, "estado");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsInt(),
        class_validator_1.Min(1)
    ], CreateSocioContratoDto.prototype, "sociosId");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsInt(),
        class_validator_1.Min(1)
    ], CreateSocioContratoDto.prototype, "contratosId");
    return CreateSocioContratoDto;
}());
exports.CreateSocioContratoDto = CreateSocioContratoDto;
var CreateSocioContratoWithContratoDto = /** @class */ (function (_super) {
    __extends(CreateSocioContratoWithContratoDto, _super);
    function CreateSocioContratoWithContratoDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreateSocioContratoWithContratoDto;
}(CreateSocioContratoDto));
exports.CreateSocioContratoWithContratoDto = CreateSocioContratoWithContratoDto;
