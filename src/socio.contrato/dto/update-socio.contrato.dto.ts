import { PartialType } from '@nestjs/mapped-types';
import { CreateSocioContratoDto } from './create-socio.contrato.dto';

export class UpdateSocioContratoDto extends PartialType(CreateSocioContratoDto) {}
