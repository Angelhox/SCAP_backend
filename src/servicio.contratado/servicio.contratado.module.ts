import { Module } from '@nestjs/common';
import { ServicioContratadoService } from './servicio.contratado.service';
import { ServicioContratadoController } from './servicio.contratado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioContratado } from './entities/servicio.contratado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServicioContratado])],
  controllers: [ServicioContratadoController],
  providers: [ServicioContratadoService],
})
export class ServicioContratadoModule {}
