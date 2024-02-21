import { Injectable } from '@nestjs/common';
import { CreateTipoDescuentoDto } from './dto/create-tipo.descuento.dto';
import { UpdateTipoDescuentoDto } from './dto/update-tipo.descuento.dto';

@Injectable()
export class TipoDescuentoService {
  create(createTipoDescuentoDto: CreateTipoDescuentoDto) {
    return 'This action adds a new tipoDescuento';
  }

  findAll() {
    return `This action returns all tipoDescuento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoDescuento`;
  }

  update(id: number, updateTipoDescuentoDto: UpdateTipoDescuentoDto) {
    return `This action updates a #${id} tipoDescuento`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoDescuento`;
  }
}
