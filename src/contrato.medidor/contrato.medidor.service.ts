import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { CreateContratoMedidorDto } from './dto/create-contrato.medidor.dto';
import { UpdateContratoMedidorDto } from './dto/update-contrato.medidor.dto';
import { ContratosService } from '../contratos/contratos.service';
import { MedidorService } from 'src/medidor/medidor.service';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Contrato } from 'src/contratos/entities/contrato.entity';
import { Medidor } from 'src/medidor/entities/medidor.entity';
import { Socio } from 'src/socios/entities/socio.entity';
@Injectable()
export class ContratoMedidorService {
  constructor(
    @InjectRepository(Contrato)
    private readonly contratoRepository: Repository<Contrato>,
    @InjectRepository(Medidor)
    private readonly medidorRepository: Repository<Medidor>,
    @InjectRepository(Socio)
    private readonly socioRepository: Repository<Socio>,
    private dataSource: DataSource,
  ) {}
  async createWithQueryRunner(
    createContratoMedidorDto: CreateContratoMedidorDto,
  ) {
    // Cambio 2
    // const queryRunner = this.dataSource.createQueryRunner();
    // await queryRunner.connect();
    // queryRunner.startTransaction();
    // await this.validateCodigoContrato(createContratoMedidorDto.contrato.codigo);
    // const socio = await this.validateSocio(
    //   createContratoMedidorDto.contrato.sociosId,
    // );
    // await this.validateCodigoMedidor(createContratoMedidorDto.medidor.codigo);
    // try {
    //   const newContrato = this.contratoRepository.create({
    //     ...createContratoMedidorDto.contrato,
    //     socio,
    //   });
    //   const savedContrato = await queryRunner.manager.save(newContrato);
    //   const newMedidor = this.medidorRepository.create({
    //     ...createContratoMedidorDto.medidor,
    //     contrato: savedContrato,
    //   });
    //   await queryRunner.manager.save(newMedidor);
    //   return await queryRunner.commitTransaction();
    // } catch (error) {
    //   await queryRunner.rollbackTransaction();
    //   throw new BadRequestException(
    //     'Error al crear el contrato y medidor: ' + error.message,
    //   );
    // }
  }

  findAll() {
    return `This action returns all contratoMedidor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contratoMedidor`;
  }

  update(id: number, updateContratoMedidorDto: UpdateContratoMedidorDto) {
    return `This action updates a #${id} contratoMedidor`;
  }

  remove(id: number) {
    return `This action removes a #${id} contratoMedidor`;
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
  private async validateCodigoMedidor(codigo: string) {
    const medidorFound = await this.medidorRepository.findOneBy({ codigo });
    if (medidorFound) {
      throw new BadRequestException(
        `Ya existe un medidor con el çodigo ${codigo}`,
      );
    }
  }
}
