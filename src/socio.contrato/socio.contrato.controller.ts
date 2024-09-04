import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SocioContratoService } from './socio.contrato.service';
import { CreateSocioContratoDto } from './dto/create-socio.contrato.dto';
import { UpdateSocioContratoDto } from './dto/update-socio.contrato.dto';

@Controller('socio.contrato')
export class SocioContratoController {
  constructor(private readonly socioContratoService: SocioContratoService) {}

  @Post()
  create(@Body() createSocioContratoDto: CreateSocioContratoDto) {
    return this.socioContratoService.create(createSocioContratoDto);
  }

  @Get()
  findAll() {
    return this.socioContratoService.findAll();
  }

  @Get('/socio/:id')
  findBySocio(@Param('id') id: string) {
    return this.socioContratoService.findBySocio(+id);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socioContratoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSocioContratoDto: UpdateSocioContratoDto,
  ) {
    return this.socioContratoService.update(+id, updateSocioContratoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socioContratoService.remove(+id);
  }
}
