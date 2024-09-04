import { BadRequestException, Injectable, forwardRef } from '@nestjs/common';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Contrato } from './entities/contrato.entity';
import { Socio } from 'src/socios/entities/socio.entity';

@Injectable()
export class ContratosService {
  constructor(
    @InjectRepository(Contrato)
    private readonly contratoRepository: Repository<Contrato>,
    @InjectRepository(Socio)
    private readonly socioRepository: Repository<Socio>,
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
    return this.contratoRepository.update(id, updateContratoDto);
  }

  remove(id: number) {
    return `This action removes a #${id} contrato`;
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
}
