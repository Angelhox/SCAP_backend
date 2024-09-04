import { Injectable } from '@nestjs/common';
import { CreateDetallesServicioDto } from './dto/create-detalles.servicio.dto';
import { UpdateDetallesServicioDto } from './dto/update-detalles.servicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DetallesServicio } from './entities/detalles.servicio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DetallesServicioService {
  constructor(
    @InjectRepository(DetallesServicio)
    private readonly detallesServicioRepository: Repository<DetallesServicio>,
  ) {}
  create(createDetallesServicioDto: CreateDetallesServicioDto) {
    return 'This action adds a new detallesServicio';
  }

  async findAll() {
    return await this.detallesServicioRepository.find();
  }

  async findAllByServicio(id: number) {
    return await this.detallesServicioRepository.findOne({ where: { id } });
  }
  async findOne(id: number) {
    return await this.detallesServicioRepository.findOne({ where: { id } });
  }

  update(id: number, updateDetallesServicioDto: UpdateDetallesServicioDto) {
    return `This action updates a #${id} detallesServicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} detallesServicio`;
  }
}
