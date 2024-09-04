import { Empleado } from 'src/empleados/entities/empleado.entity';
import { Rol } from 'src/rol/entities/rol.entity';
import { Socio } from 'src/socios/entities/socio.entity';
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
  @Column({ type: 'varchar', length: 255 })
  usuario: string;
  @Column({ type: 'varchar', length: 255, select: false })
  clave: string;
  // En el modelo no se especifica un valor por defecto para este campo, pero se deberia tomar CURRENT_TIMESTAMP !!
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fechaModificacion: Date;
  @ManyToOne(() => Rol, (rol) => rol.usuario, { nullable: false })
  @JoinColumn({ name: 'rolesId', referencedColumnName: 'id' })
  rol: Rol;
  // En el modelo el valor por defecto de este campo es null, sin embargo, no es lo correcto !!
  @ManyToOne(() => Empleado, (empleado) => empleado.usuario, { nullable: true })
  @JoinColumn({ name: 'empleadosId' })
  empleado: Empleado;
  @ManyToOne(() => Socio, (socio) => socio.usuario, { nullable: true })
  @JoinColumn({ name: 'sociosId' })
  socio: Socio;
}
