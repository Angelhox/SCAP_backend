import { Module } from '@nestjs/common';
import { SectorContratoService } from './sector.contrato.service';
import { SectorContratoController } from './sector.contrato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectorContrato } from './entities/sector.contrato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SectorContrato])],
  controllers: [SectorContratoController],
  providers: [SectorContratoService],
})
export class SectorContratoModule {}
