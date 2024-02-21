import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadoCuentaService } from './estado.cuenta.service';
import { CreateEstadoCuentaDto } from './dto/create-estado.cuenta.dto';
import { UpdateEstadoCuentaDto } from './dto/update-estado.cuenta.dto';

@Controller('estado.cuenta')
export class EstadoCuentaController {
  constructor(private readonly estadoCuentaService: EstadoCuentaService) {}

  @Post()
  create(@Body() createEstadoCuentaDto: CreateEstadoCuentaDto) {
    return this.estadoCuentaService.create(createEstadoCuentaDto);
  }

  @Get()
  findAll() {
    return this.estadoCuentaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadoCuentaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadoCuentaDto: UpdateEstadoCuentaDto) {
    return this.estadoCuentaService.update(+id, updateEstadoCuentaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadoCuentaService.remove(+id);
  }
}
