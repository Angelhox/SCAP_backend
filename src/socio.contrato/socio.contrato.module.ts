import { Module } from '@nestjs/common';
import { SocioContratoService } from './socio.contrato.service';
import { SocioContratoController } from './socio.contrato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocioContrato } from './entities/socio.contrato.entity';
import { Socio } from 'src/socios/entities/socio.entity';
import { Contrato } from 'src/contratos/entities/contrato.entity';
import { Sector } from 'src/sector/entities/sector.entity';
import { SectorContrato } from 'src/sector.contrato/entities/sector.contrato.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SocioContrato,
      Socio,
      Contrato,
      Sector,
      SectorContrato,
    ]),
  ],
  controllers: [SocioContratoController],
  providers: [SocioContratoService],
})
export class SocioContratoModule {}
