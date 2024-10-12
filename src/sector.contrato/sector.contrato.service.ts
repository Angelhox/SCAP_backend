import { Injectable } from '@nestjs/common';
import { CreateSectorContratoDto } from './dto/create-sector.contrato.dto';
import { UpdateSectorContratoDto } from './dto/update-sector.contrato.dto';

@Injectable()
export class SectorContratoService {
  create(createSectorContratoDto: CreateSectorContratoDto) {
    return 'This action adds a new sectorContrato';
  }

  findAll() {
    return `This action returns all sectorContrato`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sectorContrato`;
  }

  update(id: number, updateSectorContratoDto: UpdateSectorContratoDto) {
    return `This action updates a #${id} sectorContrato`;
  }

  remove(id: number) {
    return `This action removes a #${id} sectorContrato`;
  }
}
