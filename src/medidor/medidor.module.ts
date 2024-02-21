import { Module } from '@nestjs/common';
import { MedidorService } from './medidor.service';
import { MedidorController } from './medidor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medidor } from './entities/medidor.entity';
import { Contrato } from 'src/contratos/entities/contrato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medidor, Contrato])],
  controllers: [MedidorController],
  providers: [MedidorService],
})
export class MedidorModule {}
