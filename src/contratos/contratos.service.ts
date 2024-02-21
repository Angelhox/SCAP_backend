import { Injectable } from '@nestjs/common';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';

@Injectable()
export class ContratosService {
  create(createContratoDto: CreateContratoDto) {
    return 'This action adds a new contrato';
  }

  findAll() {
    return `This action returns all contratos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contrato`;
  }

  update(id: number, updateContratoDto: UpdateContratoDto) {
    return `This action updates a #${id} contrato`;
  }

  remove(id: number) {
    return `This action removes a #${id} contrato`;
  }
}
