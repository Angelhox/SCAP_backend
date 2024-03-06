import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private usuariosRepository: Repository<Usuario>,
  ) {}
  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

  findAll() {
    // return `This action returns all usuarios`;
    return this.usuariosRepository.find({ relations: ['rol', 'empleado'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }
  findOneByUser(usuario: string) {
    return this.usuariosRepository.findOne({
      where: { usuario },
      relations: ['rol'],
    });
  }
  findOneByUserWithPass(usuario: string) {
    return this.usuariosRepository.findOne({
      where: { usuario },
      select: ['id', 'usuario', 'clave', 'fechaModificacion'],
      relations: ['rol'],
    });
  }
  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
