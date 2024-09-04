import { PartialType } from '@nestjs/mapped-types';
import { CreateContratoMedidorDto } from './create-contrato.medidor.dto';

export class UpdateContratoMedidorDto extends PartialType(CreateContratoMedidorDto) {}
