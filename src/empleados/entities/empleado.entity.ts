import { Cargo } from 'src/cargos/entities/cargo.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'empleados' })
export class Empleado {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'char', length: 13, unique: true })
  cedula: string;
  @Column({ type: 'varchar', length: 45 })
  primerNombre: string;
  @Column({ type: 'varchar', length: 45, nullable: true })
  segundoNombre: string;
  @Column({ type: 'varchar', length: 45 })
  primerApellido: string;
  @Column({ type: 'varchar', length: 45, nullable: true })
  segundoApellido: string;
  @Column({ type: 'char', length: 15 })
  telefono: string;
  @Column({ type: 'varchar', length: 100 })
  correo: string;
  @Column({ type: 'varchar', length: 10, default: 'no' })
  usuarioSn: string;
  // El modelo indica que el cargo es nullable revisar si es lo correcto ??
  @ManyToOne(() => Cargo, (cargo) => cargo.empleado, { nullable: true })
  @JoinColumn({ name: 'cargosId' })
  cargo: Cargo;
  @OneToMany(() => Usuario, (usuario) => usuario.empleado)
  usuario: Usuario;
}
