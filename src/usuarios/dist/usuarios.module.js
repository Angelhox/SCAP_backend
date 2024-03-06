"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsuariosModule = void 0;
var common_1 = require("@nestjs/common");
var usuarios_service_1 = require("./usuarios.service");
var usuarios_controller_1 = require("./usuarios.controller");
var typeorm_1 = require("@nestjs/typeorm");
var usuario_entity_1 = require("./entities/usuario.entity");
var rol_entity_1 = require("src/rol/entities/rol.entity");
var UsuariosModule = /** @class */ (function () {
    function UsuariosModule() {
    }
    UsuariosModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([usuario_entity_1.Usuario, rol_entity_1.Rol])],
            controllers: [usuarios_controller_1.UsuariosController],
            providers: [usuarios_service_1.UsuariosService],
            exports: [usuarios_service_1.UsuariosService]
        })
    ], UsuariosModule);
    return UsuariosModule;
}());
exports.UsuariosModule = UsuariosModule;
