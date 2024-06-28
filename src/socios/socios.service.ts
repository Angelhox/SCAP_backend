import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateSocioDto } from './dto/create-socio.dto';
import { UpdateSocioDto } from './dto/update-socio.dto';
import { Repository } from 'typeorm';
import { Socio } from './entities/socio.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SociosService {
  constructor(
    @InjectRepository(Socio)
    private readonly socioRepository: Repository<Socio>,
  ) {}
  async create(createSocioDto: CreateSocioDto) {
    const { cedulaPasaporte } = createSocioDto;
    await this.validateCedulaPasaporte(cedulaPasaporte);
    const newSocio = this.socioRepository.create(createSocioDto);
    return await this.socioRepository.save(newSocio);
  }

  async findAll() {
    return await this.socioRepository.find();
  }

  async findOne(id: number) {
    return await this.socioRepository.findOneBy({ id });
  }

  async update(id: number, updateSocioDto: UpdateSocioDto) {
    const { cedulaPasaporte } = updateSocioDto;
    await this.validateUpdateCedulaPasaporte(id, cedulaPasaporte);
    return await this.socioRepository.update(id, updateSocioDto);
  }

  async remove(id: number) {
    await this.validateSocio(id);
    return await this.socioRepository.softDelete({ id });
  }
  private async validateCedulaPasaporte(cedulaPasaporte: string) {
    const socioFound = await this.socioRepository.findOneBy({
      cedulaPasaporte,
    });
    if (socioFound) {
      throw new BadRequestException(
        'Ya existe un socio con cédula/pasaporte ' + cedulaPasaporte,
      );
    }
  }
  private async validateSocio(id: number) {
    const socioFound = await this.socioRepository.findOneBy({ id });
    if (!socioFound) {
      throw new ConflictException('No se ha podido encontrar el socio');
    }
    return socioFound;
  }
  private async validateUpdateCedulaPasaporte(
    id: number,
    cedulaPasaporte: string,
  ) {
    const { cedulaPasaporte: cedulaPasaporteFound } = await this.validateSocio(
      id,
    );
    if (cedulaPasaporte !== cedulaPasaporteFound) {
      await this.validateCedulaPasaporte(cedulaPasaporte);
    }
  }
}
