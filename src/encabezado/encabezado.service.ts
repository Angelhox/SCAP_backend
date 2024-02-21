import { Injectable } from '@nestjs/common';
import { CreateEncabezadoDto } from './dto/create-encabezado.dto';
import { UpdateEncabezadoDto } from './dto/update-encabezado.dto';

@Injectable()
export class EncabezadoService {
  create(createEncabezadoDto: CreateEncabezadoDto) {
    return 'This action adds a new encabezado';
  }

  findAll() {
    return `This action returns all encabezado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} encabezado`;
  }

  update(id: number, updateEncabezadoDto: UpdateEncabezadoDto) {
    return `This action updates a #${id} encabezado`;
  }

  remove(id: number) {
    return `This action removes a #${id} encabezado`;
  }
}
