"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.EmpleadoUsuarioService = void 0;
var common_1 = require("@nestjs/common");
var usuarios_service_1 = require("src/usuarios/usuarios.service");
var empleados_service_1 = require("src/empleados/empleados.service");
var typeorm_1 = require("@nestjs/typeorm");
var empleado_entity_1 = require("src/empleados/entities/empleado.entity");
var cargo_entity_1 = require("src/cargos/entities/cargo.entity");
var usuario_entity_1 = require("src/usuarios/entities/usuario.entity");
var rol_entity_1 = require("src/rol/entities/rol.entity");
var auth_service_1 = require("src/auth/auth.service");
var EmpleadoUsuarioService = /** @class */ (function () {
    function EmpleadoUsuarioService(usuariosService, authService, empleadosService, dataSource, empleadoRepository, cargoRepository, usuarioRepository, rolRepository) {
        this.usuariosService = usuariosService;
        this.authService = authService;
        this.empleadosService = empleadosService;
        this.dataSource = dataSource;
        this.empleadoRepository = empleadoRepository;
        this.cargoRepository = cargoRepository;
        this.usuarioRepository = usuarioRepository;
        this.rolRepository = rolRepository;
    }
    EmpleadoUsuarioService.prototype.createWithQueryRunner = function (createEmpleadoUsuarioDto) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, cargo, rol, newEmpleado, savedEmpleado, clave, newUsuario, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryRunner = this.dataSource.createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        queryRunner.startTransaction();
                        return [4 /*yield*/, this.validateEmpleado(createEmpleadoUsuarioDto.empleado.cedula)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.validateNombreUsuario(createEmpleadoUsuarioDto.usuario.usuario)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.validateCargo(createEmpleadoUsuarioDto.empleado.cargosId)];
                    case 4:
                        cargo = _a.sent();
                        return [4 /*yield*/, this.validateRol(createEmpleadoUsuarioDto.usuario.rolesId)];
                    case 5:
                        rol = _a.sent();
                        _a.label = 6;
                    case 6:
                        _a.trys.push([6, 11, 13, 15]);
                        newEmpleado = this.empleadoRepository.create(__assign(__assign({}, createEmpleadoUsuarioDto.empleado), { cargo: cargo }));
                        return [4 /*yield*/, queryRunner.manager.save(newEmpleado)];
                    case 7:
                        savedEmpleado = _a.sent();
                        return [4 /*yield*/, this.authService.register(createEmpleadoUsuarioDto.usuario)];
                    case 8:
                        clave = (_a.sent()).clave;
                        console.log('Clave: ', clave);
                        createEmpleadoUsuarioDto.usuario.clave = clave;
                        newUsuario = this.usuarioRepository.create(__assign(__assign({}, createEmpleadoUsuarioDto.usuario), { rol: rol, empleado: savedEmpleado }));
                        return [4 /*yield*/, queryRunner.manager.save(newUsuario)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 10: return [2 /*return*/, _a.sent()];
                    case 11:
                        error_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 12:
                        _a.sent();
                        throw new common_1.BadRequestException('Error al crear empleado y usuario: ' + error_1.message);
                    case 13: return [4 /*yield*/, queryRunner.release()];
                    case 14:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    EmpleadoUsuarioService.prototype.findAll = function () {
        return "This action returns all emple              adoUsuario";
    };
    EmpleadoUsuarioService.prototype.findOne = function (id) {
        return "This action returns a #" + id + " empleadoUsuario";
    };
    EmpleadoUsuarioService.prototype.update = function (id, updateEmpleadoUsuarioDto) {
        return "This action updates a #" + id + " empleadoUsuario";
    };
    EmpleadoUsuarioService.prototype.remove = function (id) {
        return "This action removes a #" + id + " empleadoUsuario";
    };
    EmpleadoUsuarioService.prototype.validateNombreUsuario = function (usuario) {
        return __awaiter(this, void 0, void 0, function () {
            var usuarioFound;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuarioRepository.findOneBy({ usuario: usuario })];
                    case 1:
                        usuarioFound = _a.sent();
                        if (usuarioFound) {
                            throw new common_1.BadRequestException('El nombre de usuario ya esta en uso');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EmpleadoUsuarioService.prototype.validateEmpleado = function (cedula) {
        return __awaiter(this, void 0, void 0, function () {
            var empleadoFound;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.empleadoRepository.findOneBy({ cedula: cedula })];
                    case 1:
                        empleadoFound = _a.sent();
                        if (empleadoFound) {
                            throw new common_1.BadRequestException('Ya existe un empleado con cédula ' + cedula);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EmpleadoUsuarioService.prototype.validateCargo = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cargoEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cargoRepository.findOneBy({ id: id })];
                    case 1:
                        cargoEntity = _a.sent();
                        if (!cargoEntity) {
                            throw new common_1.BadRequestException('Cargo not found');
                        }
                        return [2 /*return*/, cargoEntity];
                }
            });
        });
    };
    EmpleadoUsuarioService.prototype.validateRol = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var rolEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rolRepository.findOneBy({ id: id })];
                    case 1:
                        rolEntity = _a.sent();
                        if (!rolEntity) {
                            throw new common_1.BadRequestException('Rol not found');
                        }
                        return [2 /*return*/, rolEntity];
                }
            });
        });
    };
    EmpleadoUsuarioService = __decorate([
        common_1.Injectable(),
        __param(0, common_1.Inject(common_1.forwardRef(function () { return usuarios_service_1.UsuariosService; }))),
        __param(1, common_1.Inject(common_1.forwardRef(function () { return auth_service_1.AuthService; }))),
        __param(2, common_1.Inject(common_1.forwardRef(function () { return empleados_service_1.EmpleadosService; }))),
        __param(4, typeorm_1.InjectRepository(empleado_entity_1.Empleado)),
        __param(5, typeorm_1.InjectRepository(cargo_entity_1.Cargo)),
        __param(6, typeorm_1.InjectRepository(usuario_entity_1.Usuario)),
        __param(7, typeorm_1.InjectRepository(rol_entity_1.Rol))
    ], EmpleadoUsuarioService);
    return EmpleadoUsuarioService;
}());
exports.EmpleadoUsuarioService = EmpleadoUsuarioService;
