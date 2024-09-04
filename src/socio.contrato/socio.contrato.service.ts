import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSocioContratoDto } from './dto/create-socio.contrato.dto';
import { UpdateSocioContratoDto } from './dto/update-socio.contrato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contrato } from 'src/contratos/entities/contrato.entity';
import { DataSource, Repository } from 'typeorm';
import { Socio } from 'src/socios/entities/socio.entity';
import { SocioContrato } from './entities/socio.contrato.entity';

@Injectable()
export class SocioContratoService {
  constructor(
    @InjectRepository(Contrato)
    private readonly contratoRepository: Repository<Contrato>,
    @InjectRepository(Socio)
    private readonly socioRepository: Repository<Socio>,
    @InjectRepository(SocioContrato)
    private readonly socioContratoRepository: Repository<SocioContrato>,
    private dataSource: DataSource,
  ) {}
  async create(createSocioContratoDto: CreateSocioContratoDto) {
    console.log('Recibido: ', createSocioContratoDto);
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    queryRunner.startTransaction();
    await this.validateCodigoContrato(createSocioContratoDto.contrato.codigo);
    const socio = await this.validateSocio(createSocioContratoDto.sociosId);
    try {
      const newContrato = this.contratoRepository.create(
        createSocioContratoDto.contrato,
      );
      const savedContrato = await queryRunner.manager.save(newContrato);
      const newSocioContrato = this.socioContratoRepository.create({
        ...createSocioContratoDto,
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

  async findBySocio(socioId: number) {
    await this.validateSocio(socioId);
    return await this.socioContratoRepository.find({
      where: { socio: { id: socioId }, estado: 'Activo' },
      relations: ['contrato'],
    });
  }
  findOne(id: number) {
    return `This action returns a #${id} socioContrato`;
  }

  update(id: number, updateSocioContratoDto: UpdateSocioContratoDto) {
    return `This action updates a #${id} socioContrato`;
  }

  remove(id: number) {
    return `This action removes a #${id} socioContrato`;
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
}
