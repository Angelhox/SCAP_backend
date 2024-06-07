"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AuthController = void 0;
var common_1 = require("@nestjs/common");
var auth_decorator_1 = require("./decorators/auth.decorator");
var active_user_decorator_1 = require("src/common/decorators/active-user.decorator");
var rol_enum_1 = require("src/common/enums/rol.enum");
var AuthController = /** @class */ (function () {
    function AuthController(authService) {
        this.authService = authService;
    }
    AuthController.prototype.login = function (loginDto) {
        console.log('Recibido en controlle: ', loginDto);
        return this.authService.login(loginDto);
    };
    AuthController.prototype.register = function (registerDto) {
        return this.authService.register(registerDto);
    };
    AuthController.prototype.check = function (user) {
        return user;
    };
    __decorate([
        common_1.Post('login'),
        __param(0, common_1.Body())
    ], AuthController.prototype, "login");
    __decorate([
        common_1.Post('register'),
        __param(0, common_1.Body())
    ], AuthController.prototype, "register");
    __decorate([
        common_1.Get('check'),
        auth_decorator_1.Auth(rol_enum_1.Role.AUDITOR),
        __param(0, active_user_decorator_1.ActiveUser())
    ], AuthController.prototype, "check");
    AuthController = __decorate([
        common_1.Controller('auth')
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
