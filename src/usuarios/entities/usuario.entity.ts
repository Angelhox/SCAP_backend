import { Empleado } from 'src/empleados/entities/empleado.entity';
import { Rol } from 'src/rol/entities/rol.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'usuarios' })
export class Usuario {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'char', length: 20 })
  usuario: string;
  @Column({ type: 'varchar', length: 45 })
  clave: string;
  // En el modelo no se especifica un valor por defecto para este campo, pero se deberia tomar CURRENT_TIMESTAMP !!
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fechaModificacion: Date;
  @ManyToOne(() => Rol, (rol) => rol.usuario, { nullable: false })
  @JoinColumn({ name: 'rolesId' })
  rol: Rol;
  // En el modelo el valor por defecto de este campo es null, sin embargo, no es lo correcto !!
  @ManyToOne(() => Empleado, (empleado) => empleado.usuario)
  @JoinColumn({ name: 'empleadosId' })
  empleado: Empleado;
}
