import { Injectable } from '@nestjs/common';
import { CreatePlanillaDto } from './dto/create-planilla.dto';
import { UpdatePlanillaDto } from './dto/update-planilla.dto';

@Injectable()
export class PlanillasService {
  create(createPlanillaDto: CreatePlanillaDto) {
    return 'This action adds a new planilla';
  }

  findAll() {
    return `This action returns all planillas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planilla`;
  }

  update(id: number, updatePlanillaDto: UpdatePlanillaDto) {
    return `This action updates a #${id} planilla`;
  }

  remove(id: number) {
    return `This action removes a #${id} planilla`;
  }
}
