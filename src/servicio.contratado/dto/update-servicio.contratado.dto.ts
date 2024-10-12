import { PartialType } from '@nestjs/mapped-types';
import { CreateServicioContratadoDto } from './create-servicio.contratado.dto';

export class UpdateServicioContratadoDto extends PartialType(
  CreateServicioContratadoDto,
) {}
