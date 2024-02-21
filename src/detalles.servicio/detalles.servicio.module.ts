import { Module } from '@nestjs/common';
import { DetallesServicioService } from './detalles.servicio.service';
import { DetallesServicioController } from './detalles.servicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallesServicio } from './entities/detalles.servicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetallesServicio])],
  controllers: [DetallesServicioController],
  providers: [DetallesServicioService],
})
export class DetallesServicioModule {}
