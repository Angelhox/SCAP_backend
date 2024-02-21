import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanillasService } from './planillas.service';
import { CreatePlanillaDto } from './dto/create-planilla.dto';
import { UpdatePlanillaDto } from './dto/update-planilla.dto';

@Controller('planillas')
export class PlanillasController {
  constructor(private readonly planillasService: PlanillasService) {}

  @Post()
  create(@Body() createPlanillaDto: CreatePlanillaDto) {
    return this.planillasService.create(createPlanillaDto);
  }

  @Get()
  findAll() {
    return this.planillasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planillasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanillaDto: UpdatePlanillaDto) {
    return this.planillasService.update(+id, updatePlanillaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planillasService.remove(+id);
  }
}
