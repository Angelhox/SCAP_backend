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
exports.UsuariosService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var usuario_entity_1 = require("./entities/usuario.entity");
var auth_service_1 = require("src/auth/auth.service");
var class_transformer_1 = require("class-transformer");
var register_dto_1 = require("src/auth/dto/register.dto");
var rol_entity_1 = require("src/rol/entities/rol.entity");
var empleado_entity_1 = require("src/empleados/entities/empleado.entity");
var UsuariosService = /** @class */ (function () {
    function UsuariosService(authService, usuariosRepository, rolRepository, empleadosRepository) {
        this.authService = authService;
        this.usuariosRepository = usuariosRepository;
        this.rolRepository = rolRepository;
        this.empleadosRepository = empleadosRepository;
    }
    UsuariosService.prototype.create = function (createUsuarioDto) {
        return __awaiter(this, void 0, void 0, function () {
            var usuario, usuarioFound, rol, empleado, registerDto, clave, newUsuario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usuario = createUsuarioDto.usuario;
                        return [4 /*yield*/, this.usuariosRepository.findOneBy({ usuario: usuario })];
                    case 1:
                        usuarioFound = _a.sent();
                        if (usuarioFound) {
                            throw new common_1.BadRequestException('El nombre de usuario ya esta en uso');
                        }
                        return [4 /*yield*/, this.validateRol(createUsuarioDto.rolesId)];
                    case 2:
                        rol = _a.sent();
                        return [4 /*yield*/, this.validateEmpleado(createUsuarioDto.empleadosId)];
                    case 3:
                        empleado = _a.sent();
                        registerDto = class_transformer_1.plainToClass(register_dto_1.RegisterDto, {
                            clave: createUsuarioDto.clave
                        });
                        return [4 /*yield*/, this.authService.register(registerDto)];
                    case 4:
                        clave = (_a.sent()).clave;
                        createUsuarioDto.clave = clave;
                        newUsuario = this.usuariosRepository.create(__assign(__assign({}, createUsuarioDto), { clave: clave, rol: rol,
                            empleado: empleado }));
                        return [4 /*yield*/, this.usuariosRepository.save(newUsuario)];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsuariosService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuariosRepository.find({
                            relations: ['rol', 'empleado']
                        })];
                    case 1: 
                    // return `This action returns all usuarios`;
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsuariosService.prototype.findOne = function (id) {
        return "This actions returns a #" + id + " usuario";
    };
    UsuariosService.prototype.findOneByUser = function (usuario) {
        return this.usuariosRepository.findOne({
            where: { usuario: usuario },
            relations: ['rol', 'empleado']
        });
    };
    UsuariosService.prototype.findOneByUserWithPass = function (usuario) {
        return this.usuariosRepository.findOne({
            where: { usuario: usuario },
            select: ['id', 'usuario', 'clave', 'fechaModificacion'],
            relations: ['rol']
        });
    };
    UsuariosService.prototype.update = function (id, updateUsuarioDto) {
        return "This action updates a #" + id + " usuario";
    };
    UsuariosService.prototype.remove = function (id) {
        return "This action removes a #" + id + " usuario";
    };
    UsuariosService.prototype.validateRol = function (id) {
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
    UsuariosService.prototype.validateEmpleado = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var empleadoEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.empleadosRepository.findOneBy({ id: id })];
                    case 1:
                        empleadoEntity = _a.sent();
                        if (!empleadoEntity) {
                            throw new common_1.BadRequestException('Empleado not found');
                        }
                        return [2 /*return*/, empleadoEntity];
                }
            });
        });
    };
    UsuariosService = __decorate([
        common_1.Injectable(),
        __param(0, common_1.Inject(common_1.forwardRef(function () { return auth_service_1.AuthService; }))),
        __param(1, typeorm_1.InjectRepository(usuario_entity_1.Usuario)),
        __param(2, typeorm_1.InjectRepository(rol_entity_1.Rol)),
        __param(3, typeorm_1.InjectRepository(empleado_entity_1.Empleado))
    ], UsuariosService);
    return UsuariosService;
}());
exports.UsuariosService = UsuariosService;
