import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpleadoUsuarioDto } from './create-empleado.usuario.dto';

export class UpdateEmpleadoUsuarioDto extends PartialType(CreateEmpleadoUsuarioDto) {}
