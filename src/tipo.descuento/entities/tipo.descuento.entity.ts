import { ServicioContratado } from 'src/servicio.contratado/entities/servicio.contratado.entity';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tiposdescuento' })
export class TipoDescuento {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 50 })
  descripcion: string;
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  valor: number;
  @OneToMany(
    () => ServicioContratado,
    (servicioContratado) => servicioContratado.tipoDescuento,
  )
  servicioContratado: ServicioContratado;
}
