import { PartialType } from '@nestjs/mapped-types';
import { CreateTarifaDto } from './create-tarifa.dto';

export class UpdateTarifaDto extends PartialType(CreateTarifaDto) {}
