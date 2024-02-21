import { Module } from '@nestjs/common';
import { TipoDescuentoService } from './tipo.descuento.service';
import { TipoDescuentoController } from './tipo.descuento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDescuento } from './entities/tipo.descuento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoDescuento])],
  controllers: [TipoDescuentoController],
  providers: [TipoDescuentoService],
})
export class TipoDescuentoModule {}
