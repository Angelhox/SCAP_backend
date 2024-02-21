import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetallesServicioService } from './detalles.servicio.service';
import { CreateDetallesServicioDto } from './dto/create-detalles.servicio.dto';
import { UpdateDetallesServicioDto } from './dto/update-detalles.servicio.dto';

@Controller('detalles.servicio')
export class DetallesServicioController {
  constructor(private readonly detallesServicioService: DetallesServicioService) {}

  @Post()
  create(@Body() createDetallesServicioDto: CreateDetallesServicioDto) {
    return this.detallesServicioService.create(createDetallesServicioDto);
  }

  @Get()
  findAll() {
    return this.detallesServicioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detallesServicioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetallesServicioDto: UpdateDetallesServicioDto) {
    return this.detallesServicioService.update(+id, updateDetallesServicioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detallesServicioService.remove(+id);
  }
}
