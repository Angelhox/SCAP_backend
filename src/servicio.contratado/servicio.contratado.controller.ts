import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicioContratadoService } from './servicio.contratado.service';
import { CreateServicioContratadoDto } from './dto/create-servicio.contratado.dto';
import { UpdateServicioContratadoDto } from './dto/update-servicio.contratado.dto';

@Controller('servicio.contratado')
export class ServicioContratadoController {
  constructor(private readonly servicioContratadoService: ServicioContratadoService) {}

  @Post()
  create(@Body() createServicioContratadoDto: CreateServicioContratadoDto) {
    return this.servicioContratadoService.create(createServicioContratadoDto);
  }

  @Get()
  findAll() {
    return this.servicioContratadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicioContratadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServicioContratadoDto: UpdateServicioContratadoDto) {
    return this.servicioContratadoService.update(+id, updateServicioContratadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicioContratadoService.remove(+id);
  }
}
