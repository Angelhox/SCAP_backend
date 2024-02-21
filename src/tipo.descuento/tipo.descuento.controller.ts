import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoDescuentoService } from './tipo.descuento.service';
import { CreateTipoDescuentoDto } from './dto/create-tipo.descuento.dto';
import { UpdateTipoDescuentoDto } from './dto/update-tipo.descuento.dto';

@Controller('tipo.descuento')
export class TipoDescuentoController {
  constructor(private readonly tipoDescuentoService: TipoDescuentoService) {}

  @Post()
  create(@Body() createTipoDescuentoDto: CreateTipoDescuentoDto) {
    return this.tipoDescuentoService.create(createTipoDescuentoDto);
  }

  @Get()
  findAll() {
    return this.tipoDescuentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoDescuentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoDescuentoDto: UpdateTipoDescuentoDto) {
    return this.tipoDescuentoService.update(+id, updateTipoDescuentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoDescuentoService.remove(+id);
  }
}
