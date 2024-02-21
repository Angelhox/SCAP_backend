import { Empleado } from 'src/empleados/entities/empleado.entity';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'cargosempleados' })
export class Cargo {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 45 })
  cargo: string;
  @Column({ type: 'varchar', length: 100 })
  cargodescipcion: string;
  @OneToMany(() => Empleado, (empleado) => empleado.cargo)
  empleado: Empleado;
}
