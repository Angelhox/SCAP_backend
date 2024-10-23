import { Module } from '@nestjs/common';
import { SectorContratoService } from './sector.contrato.service';
import { SectorContratoController } from './sector.contrato.controller';
@Module({
  controllers: [SectorContratoController],
  providers: [SectorContratoService],
})
export class SectorContratoModule {}
