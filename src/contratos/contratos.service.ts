import { Injectable } from '@nestjs/common';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contrato } from './entities/contrato.entity';

@Injectable()
export class ContratosService {
  constructor(
    @InjectRepository(Contrato)
    private readonly contratoRepository: Repository<Contrato>,
  ) {}
  async create(createContratoDto: CreateContratoDto) {
    const newContrato = this.contratoRepository.create(createContratoDto);
    return await this.contratoRepository.save(newContrato);
  }

  async findAll() {
    console.log('Fetching...');
    return await this.contratoRepository.find({
      relations: ['socio', 'medidor'],
    });
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
