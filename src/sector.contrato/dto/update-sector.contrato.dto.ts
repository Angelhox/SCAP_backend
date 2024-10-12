import { PartialType } from '@nestjs/mapped-types';
import { CreateSectorContratoDto } from './create-sector.contrato.dto';

export class UpdateSectorContratoDto extends PartialType(CreateSectorContratoDto) {}
