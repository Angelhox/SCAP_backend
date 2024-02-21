import { Module } from '@nestjs/common';
import { ContratosService } from './contratos.service';
import { ContratosController } from './contratos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contrato } from './entities/contrato.entity';
import { Servicio } from 'src/servicios/entities/servicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contrato, Servicio])],
  controllers: [ContratosController],
  providers: [ContratosService],
})
export class ContratosModule {}
