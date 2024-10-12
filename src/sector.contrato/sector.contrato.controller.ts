import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SectorContratoService } from './sector.contrato.service';
import { CreateSectorContratoDto } from './dto/create-sector.contrato.dto';
import { UpdateSectorContratoDto } from './dto/update-sector.contrato.dto';

@Controller('sector.contrato')
export class SectorContratoController {
  constructor(private readonly sectorContratoService: SectorContratoService) {}

  @Post()
  create(@Body() createSectorContratoDto: CreateSectorContratoDto) {
    return this.sectorContratoService.create(createSectorContratoDto);
  }

  @Get()
  findAll() {
    return this.sectorContratoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectorContratoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSectorContratoDto: UpdateSectorContratoDto) {
    return this.sectorContratoService.update(+id, updateSectorContratoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sectorContratoService.remove(+id);
  }
}
