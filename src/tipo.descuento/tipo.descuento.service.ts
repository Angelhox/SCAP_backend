import { Injectable } from '@nestjs/common';
import { CreateTipoDescuentoDto } from './dto/create-tipo.descuento.dto';
import { UpdateTipoDescuentoDto } from './dto/update-tipo.descuento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoDescuento } from './entities/tipo.descuento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoDescuentoService {
  constructor(
    @InjectRepository(TipoDescuento)
    private readonly tiposDescuentoRepository: Repository<TipoDescuento>,
  ) {}
  async create(createTipoDescuentoDto: CreateTipoDescuentoDto) {
    return 'This action return all tipodDescuento';
  }

  async findAll() {
    return await this.tiposDescuentoRepository.find();
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
