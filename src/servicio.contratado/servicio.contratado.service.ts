import { Injectable } from '@nestjs/common';
import { CreateServicioContratadoDto } from './dto/create-servicio.contratado.dto';
import { UpdateServicioContratadoDto } from './dto/update-servicio.contratado.dto';

@Injectable()
export class ServicioContratadoService {
  create(createServicioContratadoDto: CreateServicioContratadoDto) {
    return 'This action adds a new servicioContratado';
  }

  findAll() {
    return `This action returns all servicioContratado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} servicioContratado`;
  }

  update(id: number, updateServicioContratadoDto: UpdateServicioContratadoDto) {
    return `This action updates a #${id} servicioContratado`;
  }

  remove(id: number) {
    return `This action removes a #${id} servicioContratado`;
  }
}
