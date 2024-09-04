import { CreateEmpleadoDto } from 'src/empleados/dto/create-empleado.dto';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';

// Create empleado.usuario.rol.dto
export class CreateEmpleadoUsuarioDto {
  empleado: CreateEmpleadoDto;
  usuario: CreateUsuarioDto;
}
