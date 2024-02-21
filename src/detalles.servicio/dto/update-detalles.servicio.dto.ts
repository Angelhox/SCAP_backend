import { PartialType } from '@nestjs/mapped-types';
import { CreateDetallesServicioDto } from './create-detalles.servicio.dto';

export class UpdateDetallesServicioDto extends PartialType(CreateDetallesServicioDto) {}
