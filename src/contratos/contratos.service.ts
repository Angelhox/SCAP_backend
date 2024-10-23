import { BadRequestException, Injectable, forwardRef } from '@nestjs/common';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Contrato } from './entities/contrato.entity';
import { Socio } from 'src/socios/entities/socio.entity';
import { Sector } from 'src/sector/entities/sector.entity';

@Injectable()
export class ContratosService {
  constructor(
    @InjectRepository(Contrato)
    private readonly contratoRepository: Repository<Contrato>,
    @InjectRepository(Socio)
    private readonly socioRepository: Repository<Socio>,
    @InjectRepository(Sector)
    private readonly sectorRepository: Repository<Sector>,
    private dataSource: DataSource,
  ) {}
  async create(createContratoDto: CreateContratoDto) {
    // Cambio 2
    // await this.validateCodigoContrato(createContratoDto.codigo);
    // const socio = await this.validateSocio(createContratoDto.sociosId);
    // const newContrato = this.contratoRepository.create({
    //   ...createContratoDto,
    //   socio,
    // });
    // return await this.contratoRepository.save(newContrato);
  }
  async findAll() {
    console.log('Fetching...');
    return await this.contratoRepository.find({
      relations: ['socioContrato', 'medidor'],
      where: {
        socioContrato: { estado: 'Activo' },
      },
    });
  }

  async findBySocio(socioId: number) {
    // Cambio 2
    // await this.validateSocio(socioId);
    // return await this.contratoRepository.find({
    //   where: { socio: { id: socioId } },
    // });
  }

  findOne(id: number) {
    return `This action returns a #${id} contrato`;
  }

  async update(id: number, updateContratoDto: UpdateContratoDto) {
    console.log('Sin sector');
    return this.contratoRepository.update(id, updateContratoDto);
  }
  async updateSector(
    id: number,
    sectorId: number,
    updateContratoDto: UpdateContratoDto,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();
    queryRunner.connect;
    queryRunner.startTransaction();
    const contrato = await this.validateContrato(id);
    const sector = await this.validateSector(sectorId);
    await this.validateCodigoContrato(updateContratoDto.codigo);
    console.log('Con sector: ', sector);
    try {
      await queryRunner.manager.update(Contrato, id, {
        ...updateContratoDto,
        sector,
      });
      await queryRunner.manager.decrement(
        Sector,
        { id: contrato.sector.id },
        'numeroSocios',
        1,
      );
      // await queryRunner.manager.update(Sector, contrato.sector.id, {
      //   numeroSocios: () => 'numeroSocios -1',
      // });
      await queryRunner.manager.increment(
        Sector,
        { id: sectorId },
        'numeroSocios',
        1,
      );
      await queryRunner.manager.increment(
        Sector,
        { id: sectorId },
        'numeroCodigos',
        1,
      );
      // await queryRunner.manager.update(Sector, sectorId, {
      //   numeroSocios: () => 'numeroSocios +1',
      //   numeroCodigos: () => 'numeroCodigos +1',
      // });
      return await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException(
        'Error al actualizar el sector del contrato: ',
        error,
      );
    } finally {
      await queryRunner.release();
    }
    // return this.contratoRepository.update(id, {
    //   ...updateContratoDto,
    //   sector,
    // });
  }

  remove(id: number) {
    return `This action removes a #${id} contrato`;
  }
  private async validateContrato(id: number) {
    const contratoFound = await this.contratoRepository.findOneBy({ id });
    if (!contratoFound) {
      throw new BadRequestException('Contrato not found');
    }
    return contratoFound;
  }
  private async validateCodigoContrato(codigo: string) {
    const contratoFound = await this.contratoRepository.findOneBy({ codigo });
    if (contratoFound) {
      throw new BadRequestException(
        `Ya existe un contrato con código ${codigo}`,
      );
    }
  }
  private async validateSocio(id: number) {
    const socioEntity = await this.socioRepository.findOneBy({ id: id });
    if (!socioEntity) {
      throw new BadRequestException('Socio not found');
    }
    return socioEntity;
  }
  private async validateSector(id: number) {
    const sectorFound = await this.sectorRepository.findOneBy({ id });
    if (!sectorFound) {
      throw new BadRequestException('Sector not found');
    }
    return sectorFound;
  }
}
