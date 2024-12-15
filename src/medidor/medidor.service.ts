import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMedidorDto } from './dto/create-medidor.dto';
import { UpdateMedidorDto } from './dto/update-medidor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Medidor } from './entities/medidor.entity';
import { DataSource, Repository } from 'typeorm';
import { Contrato } from 'src/contratos/entities/contrato.entity';

@Injectable()
export class MedidorService {
  constructor(
    @InjectRepository(Medidor)
    private readonly medidorRepository: Repository<Medidor>,
    @InjectRepository(Contrato)
    private readonly contratoRepository: Repository<Contrato>,
    private dataSource: DataSource,
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
  async changeMedidor(
    createMedidorDto: CreateMedidorDto,
    updateMedidorDto: UpdateMedidorDto,
    updateMedidorId: number,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();
    queryRunner.connect();
    queryRunner.startTransaction();
    const contrato = await this.validateContrato(createMedidorDto.contratosId);
    try {
      await queryRunner.manager.update(
        Medidor,
        { id: updateMedidorId },
        updateMedidorDto,
      );
      const newMedidor = this.medidorRepository.create({
        ...createMedidorDto,
        contrato,
      });
      await queryRunner.manager.save(newMedidor);
      return await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException(
        'Error al actualizar el medidor del contrato: ',
        error.message,
      );
    } finally {
      await queryRunner.release();
    }
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
  private async validateContrato(id: number) {
    const contratoFound = await this.contratoRepository.findOneBy({ id });
    if (!contratoFound) {
      throw new BadRequestException('Contrato not found');
    }
    return contratoFound;
  }
}
