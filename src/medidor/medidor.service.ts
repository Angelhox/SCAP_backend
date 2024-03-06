import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMedidorDto } from './dto/create-medidor.dto';
import { UpdateMedidorDto } from './dto/update-medidor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Medidor } from './entities/medidor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MedidorService {
  constructor(
    @InjectRepository(Medidor)
    private readonly medidorRepository: Repository<Medidor>,
  ) {}
  async create(createMedidorDto: CreateMedidorDto) {
    const { codigo } = createMedidorDto;
    const medidorFound = await this.medidorRepository.findOneBy({
      codigo,
    });
    if (medidorFound) {
      throw new BadRequestException(
        'Ya existe un medidor con el codigo ',
        codigo,
      );
    }
    const newMedidor = this.medidorRepository.create(createMedidorDto);
    return await this.medidorRepository.save(newMedidor);
  }

  async findAll() {
    return await this.medidorRepository.find();
  }

  async findOne(id: number) {
    return await this.medidorRepository.findOneBy({ id });
  }

  async update(id: number, updateMedidorDto: UpdateMedidorDto) {
    await this.findOne(id);
    // Catchear la excepcion en caso de no existir el medidor
    return await this.medidorRepository.update(id, updateMedidorDto);
  }

  async remove(id: number) {
    await this.findOne(id);
    // Catchear la excepcion en caso de no existir el medidor
    return this.medidorRepository.delete({ id }); //;
  }
}
