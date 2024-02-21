import { PartialType } from '@nestjs/mapped-types';
import { CreateEncabezadoDto } from './create-encabezado.dto';

export class UpdateEncabezadoDto extends PartialType(CreateEncabezadoDto) {}
