import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServicioContratadoService } from './servicio.contratado.service';
import {
  CreateMedidorServicioContratadoDto,
  CreateServicioContratadoDto,
} from './dto/create-servicio.contratado.dto';
import { UpdateServicioContratadoDto } from './dto/update-servicio.contratado.dto';

@Controller('servicio.contratado')
export class ServicioContratadoController {
  constructor(
    private readonly servicioContratadoService: ServicioContratadoService,
  ) {}
  @Post('/medidor')
  createMedidorServicioContratado(
    @Body()
    createMedidorServicioContratadoDto: CreateMedidorServicioContratadoDto,
  ) {
    return this.servicioContratadoService.createMedidorServicioContratado(
      createMedidorServicioContratadoDto,
    );
  }
  @Post()
  create(@Body() createServicioContratadoDto: CreateServicioContratadoDto) {
    return this.servicioContratadoService.create(createServicioContratadoDto);
  }
  @Get()
  findAll() {
    return this.servicioContratadoService.findAll();
  }

  @Get('/servicio/:id')
  findAllByServicio(@Param('id') servicioId: string) {
    return this.servicioContratadoService.findAllByServicio(+servicioId);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicioContratadoService.findByContrato(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServicioContratadoDto: UpdateServicioContratadoDto,
  ) {
    return this.servicioContratadoService.update(
      +id,
      updateServicioContratadoDto,
    );
  }

  @Delete('/medidor/:id/:contratoId')
  removeWithMedidor(
    @Param('id') id: string,
    @Param('contratoId') contratoId: string,
  ) {
    return this.servicioContratadoService.removeWithMedidor(+id, +contratoId);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicioContratadoService.remove(+id);
  }
}
