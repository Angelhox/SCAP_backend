import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmpleadoUsuarioService } from './empleado.usuario.service';
import { CreateEmpleadoUsuarioDto } from './dto/create-empleado.usuario.dto';
import { UpdateEmpleadoUsuarioDto } from './dto/update-empleado.usuario.dto';

@Controller('empleado.usuario')
export class EmpleadoUsuarioController {
  constructor(
    private readonly empleadoUsuarioService: EmpleadoUsuarioService,
  ) {}

  @Post()
  create(@Body() createEmpleadoUsuarioDto: CreateEmpleadoUsuarioDto) {
    return this.empleadoUsuarioService.createWithQueryRunner(
      createEmpleadoUsuarioDto,
    );
  }

  @Get()
  findAll() {
    return this.empleadoUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empleadoUsuarioService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmpleadoUsuarioDto: UpdateEmpleadoUsuarioDto,
  ) {
    return this.empleadoUsuarioService.update(+id, updateEmpleadoUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empleadoUsuarioService.remove(+id);
  }
}
