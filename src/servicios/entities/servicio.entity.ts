import { ServicioContratado } from 'src/servicio.contratado/entities/servicio.contratado.entity';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'servicios' })
export class Servicio {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 45 })
  nombre: string;
  @Column({ type: 'varchar', length: 100, nullable: true })
  descripcion: string;
  @Column({ type: 'char', length: 20 })
  tipo: string;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor: number;
  @Column({ type: 'char', length: 15, nullable: true })
  aplazableSn: string;
  @Column({ type: 'date' })
  fechaCreacion: Date;
  @Column({ type: 'int', width: 11, nullable: true })
  numeroPagos: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valorPagos: number;
  @Column({ type: 'char', length: 15, nullable: true })
  valoresDistintosSn: string;
  @Column({ type: 'char', length: 15, nullable: true })
  individualSn: string;
  @Column({ type: 'tinyint' })
  base: number;
  @OneToMany(
    () => ServicioContratado,
    (servicioContratado) => servicioContratado.servicio,
  )
  servicioContratado: ServicioContratado;
}
