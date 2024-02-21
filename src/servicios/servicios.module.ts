import { Module } from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { ServiciosController } from './servicios.controller';

@Module({
  controllers: [ServiciosController],
  providers: [ServiciosService],
})
export class ServiciosModule {}
