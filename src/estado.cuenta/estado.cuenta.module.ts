import { Module } from '@nestjs/common';
import { EstadoCuentaService } from './estado.cuenta.service';
import { EstadoCuentaController } from './estado.cuenta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoCuenta } from './entities/estado.cuenta.entity';
import { Socio } from 'src/socios/entities/socio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoCuenta, Socio])],
  controllers: [EstadoCuentaController],
  providers: [EstadoCuentaService],
})
export class EstadoCuentaModule {}
