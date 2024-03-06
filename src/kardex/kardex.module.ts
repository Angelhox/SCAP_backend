import { Module } from '@nestjs/common';
import { KardexService } from './kardex.service';
import { KardexController } from './kardex.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kardex } from './entities/kardex.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kardex])],
  controllers: [KardexController],
  providers: [KardexService],
})
export class KardexModule {}
