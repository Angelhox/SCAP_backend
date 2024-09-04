import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContratoMedidorService } from './contrato.medidor.service';
import { CreateContratoMedidorDto } from './dto/create-contrato.medidor.dto';
import { UpdateContratoMedidorDto } from './dto/update-contrato.medidor.dto';

@Controller('contrato.medidor')
export class ContratoMedidorController {
  constructor(
    private readonly contratoMedidorService: ContratoMedidorService,
  ) {}

  @Post()
  create(@Body() createContratoMedidorDto: CreateContratoMedidorDto) {
    return this.contratoMedidorService.createWithQueryRunner(
      createContratoMedidorDto,
    );
  }

  @Get()
  findAll() {
    return this.contratoMedidorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contratoMedidorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContratoMedidorDto: UpdateContratoMedidorDto,
  ) {
    return this.contratoMedidorService.update(+id, updateContratoMedidorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contratoMedidorService.remove(+id);
  }
}
