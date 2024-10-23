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
exports.__esModule = true;
exports.UpdateContratoDto = void 0;
var mapped_types_1 = require("@nestjs/mapped-types");
var create_contrato_dto_1 = require("./create-contrato.dto");
var UpdateContratoDto = /** @class */ (function (_super) {
    __extends(UpdateContratoDto, _super);
    function UpdateContratoDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateContratoDto;
}(mapped_types_1.PartialType(create_contrato_dto_1.CreateContratoDto)));
exports.UpdateContratoDto = UpdateContratoDto;
