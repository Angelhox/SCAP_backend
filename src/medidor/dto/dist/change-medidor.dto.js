"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChangeMedidorDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var create_medidor_dto_1 = require("./create-medidor.dto");
var update_medidor_dto_1 = require("./update-medidor.dto");
var ChangeMedidorDto = /** @class */ (function () {
    function ChangeMedidorDto() {
    }
    __decorate([
        class_validator_1.ValidateNested(),
        class_transformer_1.Type(function () { return create_medidor_dto_1.CreateMedidorDto; }),
        class_validator_1.IsNotEmpty()
    ], ChangeMedidorDto.prototype, "newMedidor");
    __decorate([
        class_validator_1.ValidateNested(),
        class_transformer_1.Type(function () { return update_medidor_dto_1.UpdateMedidorDto; }),
        class_validator_1.IsNotEmpty()
    ], ChangeMedidorDto.prototype, "updateMedidor");
    return ChangeMedidorDto;
}());
exports.ChangeMedidorDto = ChangeMedidorDto;
