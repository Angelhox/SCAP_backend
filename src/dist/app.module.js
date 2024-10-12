"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var socios_module_1 = require("./socios/socios.module");
var typeorm_1 = require("@nestjs/typeorm");
var contratos_module_1 = require("./contratos/contratos.module");
var planillas_module_1 = require("./planillas/planillas.module");
var servicios_module_1 = require("./servicios/servicios.module");
var comprobantes_module_1 = require("./comprobantes/comprobantes.module");
var encabezado_module_1 = require("./encabezado/encabezado.module");
var detalles_servicio_module_1 = require("./detalles.servicio/detalles.servicio.module");
var empleados_module_1 = require("./empleados/empleados.module");
var cargos_module_1 = require("./cargos/cargos.module");
var usuarios_module_1 = require("./usuarios/usuarios.module");
var tarifas_module_1 = require("./tarifas/tarifas.module");
var estado_cuenta_module_1 = require("./estado.cuenta/estado.cuenta.module");
var servicio_contratado_module_1 = require("./servicio.contratado/servicio.contratado.module");
var medidor_module_1 = require("./medidor/medidor.module");
var tipo_descuento_module_1 = require("./tipo.descuento/tipo.descuento.module");
var sector_module_1 = require("./sector/sector.module");
var rol_module_1 = require("./rol/rol.module");
var kardex_module_1 = require("./kardex/kardex.module");
var auth_module_1 = require("./auth/auth.module");
var config_1 = require("@nestjs/config");
var empleado_usuario_module_1 = require("./empleado.usuario/empleado.usuario.module");
var contrato_medidor_module_1 = require("./contrato.medidor/contrato.medidor.module");
var socio_contrato_module_1 = require("./socio.contrato/socio.contrato.module");
var sector_contrato_module_1 = require("./sector.contrato/sector.contrato.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                config_1.ConfigModule.forRoot({ isGlobal: true }),
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: process.env.DB_HOST,
                    port: parseInt(process.env.DB_PORT),
                    username: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE,
                    autoLoadEntities: true,
                    // // Synchronize solo debe estar activo en desarrollo no en produccion !!
                    // synchronize: true,
                    ssl: process.env.DB_SSL === 'true',
                    extra: {
                        ssl: process.env.DB_SSL === 'true'
                            ? {
                                rejectUnauthorized: false
                            }
                            : null
                    }
                }),
                socios_module_1.SociosModule,
                contratos_module_1.ContratosModule,
                planillas_module_1.PlanillasModule,
                servicios_module_1.ServiciosModule,
                comprobantes_module_1.ComprobantesModule,
                encabezado_module_1.EncabezadoModule,
                detalles_servicio_module_1.DetallesServicioModule,
                empleados_module_1.EmpleadosModule,
                cargos_module_1.CargosModule,
                auth_module_1.AuthModule,
                usuarios_module_1.UsuariosModule,
                tarifas_module_1.TarifasModule,
                estado_cuenta_module_1.EstadoCuentaModule,
                medidor_module_1.MedidorModule,
                servicio_contratado_module_1.ServicioContratadoModule,
                medidor_module_1.MedidorModule,
                tipo_descuento_module_1.TipoDescuentoModule,
                sector_module_1.SectorModule,
                rol_module_1.RolModule,
                kardex_module_1.KardexModule,
                empleado_usuario_module_1.EmpleadoUsuarioModule,
                contrato_medidor_module_1.ContratoMedidorModule,
                socio_contrato_module_1.SocioContratoModule,
                sector_contrato_module_1.SectorContratoModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
