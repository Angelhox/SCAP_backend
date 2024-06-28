import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateEmpleadoDto } from 'src/empleados/dto/create-empleado.dto';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';

// Create empleado.usuario.rol.dto
export class CreateEmpleadoUsuarioDto {
  empleado: CreateEmpleadoDto;
  usuario: CreateUsuarioDto;
}
