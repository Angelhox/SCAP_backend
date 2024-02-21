import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'roles' })
export class Rol {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  // Estos dos campos deben ser NOT_NULL sin embargo el modelo no lo indica asi !!
  @Column({ type: 'char', length: 20 })
  rol: string;
  @Column({ type: 'varchar', length: 45 })
  rolDescripcion: string;
  @OneToMany(() => Usuario, (usuario) => usuario.rol)
  usuario: Usuario;
}
