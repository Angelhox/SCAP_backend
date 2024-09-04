import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreateMedidorServicioContratadoDto,
  CreateServicioContratadoDto,
} from './dto/create-servicio.contratado.dto';
import { UpdateServicioContratadoDto } from './dto/update-servicio.contratado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ServicioContratado } from './entities/servicio.contratado.entity';
import { DataSource, Repository } from 'typeorm';
import { Contrato } from 'src/contratos/entities/contrato.entity';
import { Servicio } from 'src/servicios/entities/servicio.entity';
import { TipoDescuento } from 'src/tipo.descuento/entities/tipo.descuento.entity';
import { Medidor } from 'src/medidor/entities/medidor.entity';

@Injectable()
export class ServicioContratadoService {
  constructor(
    @InjectRepository(ServicioContratado)
    private readonly servicioContratadoRepository: Repository<ServicioContratado>,
    @InjectRepository(Contrato)
    private readonly contratoRepository: Repository<Contrato>,
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
    @InjectRepository(TipoDescuento)
    private readonly tipoDescuentoRepository: Repository<TipoDescuento>,
    @InjectRepository(Medidor)
    private readonly medidorRepository: Repository<Medidor>,
    private dataSource: DataSource,
  ) {}
  async create(createServicioContratadoDto: CreateServicioContratadoDto) {
    console.log('Para ingresar: ', createServicioContratadoDto);
    const contrato = await this.validateContrato(
      createServicioContratadoDto.contratosId,
    );
    const servicio = await this.validateServicio(
      createServicioContratadoDto.serviciosId,
    );
    const descuento = await this.validateDescuento(
      createServicioContratadoDto.descuentosId,
    );
    const newServicioContratado = this.servicioContratadoRepository.create({
      ...createServicioContratadoDto,
      tipoDescuento: descuento,
      contrato,
      servicio,
    });
    return await this.servicioContratadoRepository.save(newServicioContratado);
  }
  async createMedidorServicioContratado(
    createMedidorServicioContratado: CreateMedidorServicioContratadoDto,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    queryRunner.startTransaction();
    const contrato = await this.validateContrato(
      createMedidorServicioContratado.contratosId,
    );
    const servicio = await this.validateServicio(
      createMedidorServicioContratado.serviciosId,
    );
    const descuento = await this.validateDescuento(
      createMedidorServicioContratado.descuentosId,
    );
    await this.validateCodigoMedidor(
      createMedidorServicioContratado.medidor.codigo,
    );
    try {
      const newMedidor = this.medidorRepository.create({
        ...createMedidorServicioContratado.medidor,
        contrato: contrato,
      });
      await queryRunner.manager.save(newMedidor);
      const newServicioContratado = this.servicioContratadoRepository.create({
        ...createMedidorServicioContratado,
        contrato: contrato,
        tipoDescuento: descuento,
        servicio,
      });
      await queryRunner.manager.save(newServicioContratado);
      await queryRunner.manager.update(Contrato, contrato.id, {
        medidorSn: 'Si',
      });

      return await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException(
        'Error al crear el medidor y contratar el servicio: ' + error,
      );
    } finally {
      await queryRunner.release();
    }
  }
  async findAll() {
    return await this.servicioContratadoRepository.find();
  }
  async findAllByServicio(servicioId: number) {
    const servicioContratadoFound =
      await this.servicioContratadoRepository.find({
        where: { servicio: { id: servicioId } },
        relations: ['contrato', 'servicio', 'detallesServicio'],
      });
    if (!servicioContratadoFound) {
      throw new BadRequestException('Servicios contratados not found');
    }
    return servicioContratadoFound;
  }
  async findByContrato(contratoId: number) {
    const servicioContratadoFound =
      await this.servicioContratadoRepository.find({
        where: {
          contrato: { id: contratoId },
        },
      });
    if (!servicioContratadoFound) {
      throw new BadRequestException('Servicio Contratado not found');
    }
    return servicioContratadoFound;
  }

  findOne(id: number) {
    return `This action returns a #${id} servicioContratado`;
  }

  update(id: number, updateServicioContratadoDto: UpdateServicioContratadoDto) {
    return `This action updates a #${id} servicioContratado`;
  }

  remove(id: number) {
    return `This action removes a #${id} servicioContratado`;
  }
  private async validateServicio(id: number) {
    const servicioEntity = await this.servicioRepository.findOneBy({ id });
    if (!servicioEntity) {
      throw new BadRequestException('Servicio contratado not found');
    }
    return servicioEntity;
  }
  private async validateContrato(id: number) {
    const contratoEntity = await this.contratoRepository.findOneBy({ id });
    if (!contratoEntity) {
      throw new BadRequestException('Contrato not found');
    }
    return contratoEntity;
  }
  private async validateDescuento(id: number) {
    const descuentoEntity = await this.tipoDescuentoRepository.findOneBy({
      id,
    });
    if (!descuentoEntity) {
      throw new BadRequestException('Descuento not found');
    }
    return descuentoEntity;
  }
  private async validateCodigoMedidor(codigo: string) {
    const medidorFound = await this.medidorRepository.findOneBy({ codigo });
    if (medidorFound) {
      throw new BadRequestException(
        'Ya existe un medidor con código: ',
        codigo,
      );
    }
  }
}
