import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol) private readonly rolRepository: Repository<Rol>,
  ) {}
  create(createRolDto: CreateRolDto) {
    return 'This action adds a new rol';
  }

  async findAll() {
    return await this.rolRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} rol`;
  }

  update(id: number, updateRolDto: UpdateRolDto) {
    return `This action updates a #${id} rol`;
  }

  remove(id: number) {
    return `This action removes a #${id} rol`;
  }
}
