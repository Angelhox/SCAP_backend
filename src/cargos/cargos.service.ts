import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cargo } from './entities/cargo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CargosService {
  constructor(
    @InjectRepository(Cargo)
    private readonly cargoRepository: Repository<Cargo>,
  ) {}
  create(createCargoDto: CreateCargoDto) {
    return 'This action adds a new cargo';
  }

  async findAll() {
    return await this.cargoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cargo`;
  }

  update(id: number, updateCargoDto: UpdateCargoDto) {
    return `This action updates a #${id} cargo`;
  }

  remove(id: number) {
    return `This action removes a #${id} cargo`;
  }
}
