import { Injectable } from '@nestjs/common';
import { CreateKardexDto } from './dto/create-kardex.dto';
import { UpdateKardexDto } from './dto/update-kardex.dto';

@Injectable()
export class KardexService {
  create(createKardexDto: CreateKardexDto) {
    return 'This action adds a new kardex';
  }

  findAll() {
    return `This action returns all kardex`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kardex`;
  }

  update(id: number, updateKardexDto: UpdateKardexDto) {
    return `This action updates a #${id} kardex`;
  }

  remove(id: number) {
    return `This action removes a #${id} kardex`;
  }
}
