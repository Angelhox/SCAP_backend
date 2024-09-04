import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Servicio } from './entities/servicio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiciosService {
  constructor(
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
  ) {}
  async create(createServicioDto: CreateServicioDto) {
    const { nombre } = createServicioDto;
    await this.validateNombreServicio(nombre);
    createServicioDto.base = await this.isServicioBase();
    const newServicio = this.servicioRepository.create(createServicioDto);
    return await this.servicioRepository.save(newServicio);
  }

  async findAll() {
    return await this.servicioRepository.find();
  }

  async findOne(id: number) {
    console.log(':)');
    return await this.servicioRepository.findOneBy({ id });
  }
  async findServicioBase() {
    const base = 1;
    return await this.servicioRepository.findOne({ where: { base } });
  }

  async update(id: number, updateServicioDto: UpdateServicioDto) {
    const { nombre } = updateServicioDto;
    await this.validateUpdateNombreServicio(id, nombre);
    return await this.servicioRepository.update(id, updateServicioDto);
  }

  async remove(id: number) {
    await this.validateServicio(id);
    return await this.servicioRepository.delete({ id });
  }
  private async validateNombreServicio(nombre: string) {
    const servicioFound = await this.servicioRepository.findOneBy({ nombre });
    if (servicioFound) {
      throw new BadRequestException(
        'Ya existe un servicio con el nombre ' + nombre,
      );
    }
  }
  private async validateServicio(id: number) {
    const servicioFound = this.servicioRepository.findOneBy({ id });
    if (!servicioFound) {
      throw new ConflictException('No se ha podido encontrar el servicio');
    }
    return servicioFound;
  }
  private async validateUpdateNombreServicio(id: number, nombre: string) {
    const { nombre: nombreFound } = await this.validateServicio(id);
    if (nombre !== nombreFound) {
      await this.validateNombreServicio(nombre);
    }
  }
  private async isServicioBase() {
    const othersServices = await this.servicioRepository.find();
    if (othersServices.length > 0) {
      return 0;
    }
    return 1;
  }
}
