import { Injectable } from '@nestjs/common';
import { CreateEstadoCuentaDto } from './dto/create-estado.cuenta.dto';
import { UpdateEstadoCuentaDto } from './dto/update-estado.cuenta.dto';

@Injectable()
export class EstadoCuentaService {
  create(createEstadoCuentaDto: CreateEstadoCuentaDto) {
    return 'This action adds a new estadoCuenta';
  }

  findAll() {
    return `This action returns all estadoCuenta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadoCuenta`;
  }

  update(id: number, updateEstadoCuentaDto: UpdateEstadoCuentaDto) {
    return `This action updates a #${id} estadoCuenta`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadoCuenta`;
  }
}
