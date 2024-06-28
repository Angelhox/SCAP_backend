import { Module, forwardRef } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Rol } from '../rol/entities/rol.entity';
import { AuthModule } from '../auth/auth.module';
import { Empleado } from 'src/empleados/entities/empleado.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario, Rol, Empleado]),
    forwardRef(() => AuthModule),
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
