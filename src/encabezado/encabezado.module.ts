import { Module } from '@nestjs/common';
import { EncabezadoService } from './encabezado.service';
import { EncabezadoController } from './encabezado.controller';

@Module({
  controllers: [EncabezadoController],
  providers: [EncabezadoService],
})
export class EncabezadoModule {}
