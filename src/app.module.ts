import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SociosModule } from './socios/socios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratosModule } from './contratos/contratos.module';
import { PlanillasModule } from './planillas/planillas.module';
import { ServiciosModule } from './servicios/servicios.module';
import { ComprobantesModule } from './comprobantes/comprobantes.module';
import { EncabezadoModule } from './encabezado/encabezado.module';
import { DetallesServicioModule } from './detalles.servicio/detalles.servicio.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { CargosModule } from './cargos/cargos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TarifasModule } from './tarifas/tarifas.module';
import { EstadoCuentaModule } from './estado.cuenta/estado.cuenta.module';
import { ServicioContratadoModule } from './servicio.contratado/servicio.contratado.module';
import { MedidorModule } from './medidor/medidor.module';
import { TipoDescuentoModule } from './tipo.descuento/tipo.descuento.module';
import { SectorModule } from './sector/sector.module';
import { RolModule } from './rol/rol.module';
import { KardexModule } from './kardex/kardex.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { EmpleadoUsuarioModule } from './empleado.usuario/empleado.usuario.module';
import { ContratoMedidorModule } from './contrato.medidor/contrato.medidor.module';
import { SocioContratoModule } from './socio.contrato/socio.contrato.module';
import { SectorContratoModule } from './sector.contrato/sector.contrato.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
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
        ssl:
          process.env.DB_SSL === 'true'
            ? {
                rejectUnauthorized: false,
              }
            : null,
      },
    }),
    SociosModule,
    ContratosModule,
    PlanillasModule,
    ServiciosModule,
    ComprobantesModule,
    EncabezadoModule,
    DetallesServicioModule,
    EmpleadosModule,
    CargosModule,
    AuthModule,
    UsuariosModule,
    TarifasModule,
    EstadoCuentaModule,
    MedidorModule,
    ServicioContratadoModule,
    MedidorModule,
    TipoDescuentoModule,
    SectorModule,
    RolModule,
    KardexModule,
    EmpleadoUsuarioModule,
    ContratoMedidorModule,
    SocioContratoModule,
    SectorContratoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
