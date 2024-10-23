import { Module } from '@nestjs/common';
import { ContratosService } from './contratos.service';
import { ContratosController } from './contratos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contrato } from './entities/contrato.entity';
import { Servicio } from 'src/servicios/entities/servicio.entity';
import { Socio } from 'src/socios/entities/socio.entity';
import { Sector } from 'src/sector/entities/sector.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contrato, Servicio, Socio, Sector])],
  controllers: [ContratosController],
  providers: [ContratosService],
  exports: [ContratosService],
})
export class ContratosModule {}
