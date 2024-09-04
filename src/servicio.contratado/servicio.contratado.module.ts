import { Module } from '@nestjs/common';
import { ServicioContratadoService } from './servicio.contratado.service';
import { ServicioContratadoController } from './servicio.contratado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioContratado } from './entities/servicio.contratado.entity';
import { Servicio } from 'src/servicios/entities/servicio.entity';
import { Contrato } from 'src/contratos/entities/contrato.entity';
import { TipoDescuento } from 'src/tipo.descuento/entities/tipo.descuento.entity';
import { Medidor } from 'src/medidor/entities/medidor.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ServicioContratado,
      Contrato,
      Servicio,
      TipoDescuento,
      Medidor,
    ]),
  ],
  controllers: [ServicioContratadoController],
  providers: [ServicioContratadoService],
})
export class ServicioContratadoModule {}
