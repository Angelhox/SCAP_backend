import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContratosService } from './contratos.service';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';

@Controller('contratos')
export class ContratosController {
  constructor(private readonly contratosService: ContratosService) {}

  @Post()
  create(@Body() createContratoDto: CreateContratoDto) {
    return this.contratosService.create(createContratoDto);
  }

  @Get()
  findAll() {
    return this.contratosService.findAll();
  }

  @Get('/socio/:id')
  findBySocio(@Param('id') id: string) {
    return this.contratosService.findBySocio(+id);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contratosService.findOne(+id);
  }

  @Patch(':id/:sectorId')
  updateSector(
    @Param('id') id: string,
    @Param('sectorId') sectorId: string | null,
    @Body() updateContratoDto: UpdateContratoDto,
  ) {
    console.log('Updating: ', updateContratoDto);
    console.log('Con sector controller');
    return this.contratosService.updateSector(
      +id,
      +sectorId,
      updateContratoDto,
    );
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContratoDto: UpdateContratoDto,
  ) {
    console.log('Updating: ', updateContratoDto);
    console.log('Sin sector controller');
    return this.contratosService.update(+id, updateContratoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contratosService.remove(+id);
  }
}
