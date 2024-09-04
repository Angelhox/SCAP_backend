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
exports.CreateSocioContratoDto = exports.socioContratoDto = void 0;
var class_validator_1 = require("class-validator");
var enumActivo;
(function (enumActivo) {
    enumActivo["Activo"] = "Activo";
    enumActivo["Inactivo"] = "Inactivo";
})(enumActivo || (enumActivo = {}));
var socioContratoDto = /** @class */ (function () {
    function socioContratoDto() {
    }
    __decorate([
        class_validator_1.IsDateString()
    ], socioContratoDto.prototype, "fechaContratacion");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsDateString()
    ], socioContratoDto.prototype, "fechaBaja");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        class_validator_1.IsEnum(enumActivo)
    ], socioContratoDto.prototype, "estado");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsInt(),
        class_validator_1.Min(1)
    ], socioContratoDto.prototype, "sociosId");
    return socioContratoDto;
}());
exports.socioContratoDto = socioContratoDto;
var CreateSocioContratoDto = /** @class */ (function (_super) {
    __extends(CreateSocioContratoDto, _super);
    function CreateSocioContratoDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreateSocioContratoDto;
}(socioContratoDto));
exports.CreateSocioContratoDto = CreateSocioContratoDto;
