import { Module } from '@nestjs/common';
import { ContratosService } from './contratos.service';
import { ContratosController } from './contratos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contrato } from './entities/contrato.entity';
import { Servicio } from 'src/servicios/entities/servicio.entity';
import { Socio } from 'src/socios/entities/socio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contrato, Servicio, Socio])],
  controllers: [ContratosController],
  providers: [ContratosService],
  exports: [ContratosService],
})
export class ContratosModule {}
