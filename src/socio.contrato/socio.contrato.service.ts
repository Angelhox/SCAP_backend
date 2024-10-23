import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreateSocioContratoDto,
  CreateSocioContratoWithContratoDto,
} from './dto/create-socio.contrato.dto';
import { UpdateSocioContratoDto } from './dto/update-socio.contrato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contrato } from 'src/contratos/entities/contrato.entity';
import { DataSource, Repository } from 'typeorm';
import { Socio } from 'src/socios/entities/socio.entity';
import { SocioContrato } from './entities/socio.contrato.entity';
import { Sector } from 'src/sector/entities/sector.entity';

@Injectable()
export class SocioContratoService {
  constructor(
    @InjectRepository(Contrato)
    private readonly contratoRepository: Repository<Contrato>,
    @InjectRepository(Socio)
    private readonly socioRepository: Repository<Socio>,
    @InjectRepository(SocioContrato)
    private readonly socioContratoRepository: Repository<SocioContrato>,
    @InjectRepository(Sector)
    private readonly sectorRepository: Repository<Sector>,
    private dataSource: DataSource,
  ) {}
  async create(
    createSocioContratoWithContratoDto: CreateSocioContratoWithContratoDto,
  ) {
    console.log('Recibido: ', createSocioContratoWithContratoDto);
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    queryRunner.startTransaction();
    await this.validateCodigoContrato(
      createSocioContratoWithContratoDto.contrato.codigo,
    );
    const socio = await this.validateSocio(
      createSocioContratoWithContratoDto.sociosId,
    );
    const sector = await this.validateSector(
      createSocioContratoWithContratoDto.contrato.sectoresId,
    );
    try {
      const newContrato = this.contratoRepository.create({
        ...createSocioContratoWithContratoDto.contrato,
        sector,
      });
      await queryRunner.manager.update(Sector, sector.id, {
        numeroSocios: () => 'numeroSocios +1',
        numeroCodigos: () => 'numeroCodigos +1',
      });
      const savedContrato = await queryRunner.manager.save(newContrato);
      const newSocioContrato = this.socioContratoRepository.create({
        ...createSocioContratoWithContratoDto,
        socio: socio,
        contrato: savedContrato,
      });
      await queryRunner.manager.save(newSocioContrato);
      return await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException(
        'Error al crear socioContrato y contrato: ' + error.message,
      );
    }
  }

  findAll() {
    return this.socioContratoRepository.find({
      relations: ['socio', 'contrato'],
      where: { estado: 'Activo' },
    });
  }

  async findByContrato(contratoId: number) {
    return await this.socioContratoRepository.findOne({
      where: { contrato: { id: contratoId }, estado: 'Activo' },
      relations: ['contrato'],
    });
  }
  async findBySocio(socioId: number) {
    // No es necesario validar ?
    // await this.validateSocio(socioId);
    return await this.socioContratoRepository.find({
      where: { socio: { id: socioId }, estado: 'Activo' },
      relations: ['contrato'],
    });
  }
  findOne(id: number) {
    return `This action returns a #${id} socioContrato`;
  }
  async updateSocio(id: number, socioContratoDto: CreateSocioContratoDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    queryRunner.startTransaction();
    const socio = await this.validateSocio(socioContratoDto.sociosId);
    const contrato = await this.validateContrato(socioContratoDto.contratosId);
    try {
      const newSocioContrato = this.socioContratoRepository.create({
        ...socioContratoDto,
        socio,
        contrato,
      });
      await queryRunner.manager.save(newSocioContrato);
      await queryRunner.manager.update(SocioContrato, id, {
        fechaBaja: socioContratoDto.fechaContratacion,
        estado: 'Inactivo',
      });
      return await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException(
        'Error al actualizar el socio del contrato: ',
        error,
      );
    } finally {
      await queryRunner.release();
    }
  }
  update(id: number, updateSocioContratoDto: UpdateSocioContratoDto) {
    return `This action updates a #${id} socioContrato`;
  }

  remove(id: number) {
    return `This action removes a #${id} socioContrato`;
  }
  private async validateContrato(id: number) {
    const contratoFound = await this.contratoRepository.findOneBy({ id });
    if (!contratoFound) {
      throw new BadRequestException('Contrato not found');
    }
    return contratoFound;
  }
  private async validateSocio(id: number) {
    const socioEntity = await this.socioRepository.findOneBy({ id: id });
    if (!socioEntity) {
      throw new BadRequestException('Socio not found');
    }
    return socioEntity;
  }
  private async validateCodigoContrato(codigo: string) {
    const contratoFound = await this.contratoRepository.findOneBy({ codigo });
    if (contratoFound) {
      throw new BadRequestException(
        `Ya existe un contrato con código ${codigo}`,
      );
    }
  }
  private async validateSector(id: number) {
    const sectorFound = await this.sectorRepository.findOneBy({ id });
    if (!sectorFound) {
      throw new BadRequestException('Sector not found');
    }
    return sectorFound;
  }
}
