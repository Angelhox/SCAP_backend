import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadoCuentaDto } from './create-estado.cuenta.dto';

export class UpdateEstadoCuentaDto extends PartialType(CreateEstadoCuentaDto) {}
