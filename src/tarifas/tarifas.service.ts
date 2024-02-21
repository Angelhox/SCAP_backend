import { Injectable } from '@nestjs/common';
import { CreateTarifaDto } from './dto/create-tarifa.dto';
import { UpdateTarifaDto } from './dto/update-tarifa.dto';

@Injectable()
export class TarifasService {
  create(createTarifaDto: CreateTarifaDto) {
    return 'This action adds a new tarifa';
  }

  findAll() {
    return `This action returns all tarifas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tarifa`;
  }

  update(id: number, updateTarifaDto: UpdateTarifaDto) {
    return `This action updates a #${id} tarifa`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarifa`;
  }
}
