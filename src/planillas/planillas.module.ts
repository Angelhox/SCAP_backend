import { Module } from '@nestjs/common';
import { PlanillasService } from './planillas.service';
import { PlanillasController } from './planillas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Planilla } from './entities/planilla.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Planilla])],
  controllers: [PlanillasController],
  providers: [PlanillasService],
})
export class PlanillasModule {}
