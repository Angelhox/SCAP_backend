import { Injectable } from '@nestjs/common';
import { CreateMedidorDto } from './dto/create-medidor.dto';
import { UpdateMedidorDto } from './dto/update-medidor.dto';

@Injectable()
export class MedidorService {
  create(createMedidorDto: CreateMedidorDto) {
    return 'This action adds a new medidor';
  }

  findAll() {
    return `This action returns all medidor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medidor`;
  }

  update(id: number, updateMedidorDto: UpdateMedidorDto) {
    return `This action updates a #${id} medidor`;
  }

  remove(id: number) {
    return `This action removes a #${id} medidor`;
  }
}
