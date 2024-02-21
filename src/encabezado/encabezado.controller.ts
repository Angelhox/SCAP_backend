import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncabezadoService } from './encabezado.service';
import { CreateEncabezadoDto } from './dto/create-encabezado.dto';
import { UpdateEncabezadoDto } from './dto/update-encabezado.dto';

@Controller('encabezado')
export class EncabezadoController {
  constructor(private readonly encabezadoService: EncabezadoService) {}

  @Post()
  create(@Body() createEncabezadoDto: CreateEncabezadoDto) {
    return this.encabezadoService.create(createEncabezadoDto);
  }

  @Get()
  findAll() {
    return this.encabezadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.encabezadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEncabezadoDto: UpdateEncabezadoDto) {
    return this.encabezadoService.update(+id, updateEncabezadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.encabezadoService.remove(+id);
  }
}
