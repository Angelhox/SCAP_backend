import { Module } from '@nestjs/common';
import { ContratoMedidorService } from './contrato.medidor.service';
import { ContratoMedidorController } from './contrato.medidor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medidor } from 'src/medidor/entities/medidor.entity';
import { Contrato } from 'src/contratos/entities/contrato.entity';
import { Socio } from 'src/socios/entities/socio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medidor, Contrato, Socio])],
  controllers: [ContratoMedidorController],
  providers: [ContratoMedidorService],
})
export class ContratoMedidorModule {}
