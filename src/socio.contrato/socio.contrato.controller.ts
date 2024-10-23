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
import {
  CreateSocioContratoDto,
  CreateSocioContratoWithContratoDto,
} from './dto/create-socio.contrato.dto';
import { UpdateSocioContratoDto } from './dto/update-socio.contrato.dto';

@Controller('socio.contrato')
export class SocioContratoController {
  constructor(private readonly socioContratoService: SocioContratoService) {}

  @Post()
  create(
    @Body()
    createSocioContratoWithContratoDto: CreateSocioContratoWithContratoDto,
  ) {
    return this.socioContratoService.create(createSocioContratoWithContratoDto);
  }

  @Get()
  findAll() {
    return this.socioContratoService.findAll();
  }
  @Get('/contrato/:id')
  findOneByContrato(@Param('id') id: string) {
    return this.socioContratoService.findByContrato(+id);
  }
  @Get('/socio/:id')
  findBySocio(@Param('id') id: string) {
    return this.socioContratoService.findBySocio(+id);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socioContratoService.findOne(+id);
  }

  @Patch('/change-socio/:id')
  updateSocio(
    @Param('id') id: string,
    @Body() socioContrato: CreateSocioContratoDto,
  ) {
    return this.socioContratoService.updateSocio(+id, socioContrato);
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
