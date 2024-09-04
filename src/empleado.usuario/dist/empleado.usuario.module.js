"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmpleadoUsuarioModule = void 0;
var common_1 = require("@nestjs/common");
var empleado_usuario_service_1 = require("./empleado.usuario.service");
var empleado_usuario_controller_1 = require("./empleado.usuario.controller");
var usuarios_module_1 = require("src/usuarios/usuarios.module");
var empleados_module_1 = require("src/empleados/empleados.module");
var typeorm_1 = require("@nestjs/typeorm");
var empleado_entity_1 = require("src/empleados/entities/empleado.entity");
var cargo_entity_1 = require("src/cargos/entities/cargo.entity");
var usuario_entity_1 = require("src/usuarios/entities/usuario.entity");
var rol_entity_1 = require("src/rol/entities/rol.entity");
var auth_module_1 = require("src/auth/auth.module");
var EmpleadoUsuarioModule = /** @class */ (function () {
    function EmpleadoUsuarioModule() {
    }
    EmpleadoUsuarioModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([empleado_entity_1.Empleado, cargo_entity_1.Cargo, usuario_entity_1.Usuario, rol_entity_1.Rol]),
                usuarios_module_1.UsuariosModule,
                empleados_module_1.EmpleadosModule,
                auth_module_1.AuthModule,
            ],
            controllers: [empleado_usuario_controller_1.EmpleadoUsuarioController],
            providers: [empleado_usuario_service_1.EmpleadoUsuarioService]
        })
    ], EmpleadoUsuarioModule);
    return EmpleadoUsuarioModule;
}());
exports.EmpleadoUsuarioModule = EmpleadoUsuarioModule;
