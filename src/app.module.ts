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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3309,
      username: 'user_scap',
      password: 'root',
      database: 'bdscap_sd_v3',
      autoLoadEntities: true,
      // Synchronize solo debe estar activo en desarrollo no en produccion !!
      // synchronize: true,
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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
