import { Injectable } from '@nestjs/common';
import { CreateSocioDto } from './dto/create-socio.dto';
import { UpdateSocioDto } from './dto/update-socio.dto';

@Injectable()
export class SociosService {
  create(createSocioDto: CreateSocioDto) {
    return 'This action adds a new socio';
  }

  findAll() {
    return `This action returns all socios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socio`;
  }

  update(id: number, updateSocioDto: UpdateSocioDto) {
    return `This action updates a #${id} socio`;
  }

  remove(id: number) {
    return `This action removes a #${id} socio`;
  }
}
