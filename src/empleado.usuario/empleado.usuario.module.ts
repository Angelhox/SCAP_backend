import { Module } from '@nestjs/common';
import { EmpleadoUsuarioService } from './empleado.usuario.service';
import { EmpleadoUsuarioController } from './empleado.usuario.controller';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { EmpleadosModule } from 'src/empleados/empleados.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from 'src/empleados/entities/empleado.entity';
import { Cargo } from 'src/cargos/entities/cargo.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Rol } from 'src/rol/entities/rol.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Empleado, Cargo, Usuario, Rol]),
    UsuariosModule,
    EmpleadosModule,
  ],
  controllers: [EmpleadoUsuarioController],
  providers: [EmpleadoUsuarioService],
})
export class EmpleadoUsuarioModule {}
