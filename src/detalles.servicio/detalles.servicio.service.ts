import { Injectable } from '@nestjs/common';
import { CreateDetallesServicioDto } from './dto/create-detalles.servicio.dto';
import { UpdateDetallesServicioDto } from './dto/update-detalles.servicio.dto';

@Injectable()
export class DetallesServicioService {
  create(createDetallesServicioDto: CreateDetallesServicioDto) {
    return 'This action adds a new detallesServicio';
  }

  findAll() {
    return `This action returns all detallesServicio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detallesServicio`;
  }

  update(id: number, updateDetallesServicioDto: UpdateDetallesServicioDto) {
    return `This action updates a #${id} detallesServicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} detallesServicio`;
  }
}
