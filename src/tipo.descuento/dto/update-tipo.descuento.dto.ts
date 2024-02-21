import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoDescuentoDto } from './create-tipo.descuento.dto';

export class UpdateTipoDescuentoDto extends PartialType(CreateTipoDescuentoDto) {}
