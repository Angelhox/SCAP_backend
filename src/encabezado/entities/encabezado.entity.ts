import { Comprobante } from 'src/comprobantes/entities/comprobante.entity';
import { DetallesServicio } from 'src/detalles.servicio/entities/detalles.servicio.entity';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'encabezado' })
export class Encabezado {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fechaEmision: Date;
  @Column({ type: 'datetime', nullable: true, default: null })
  fechaPago: Date;
  @Column({ type: 'char', length: 15, nullable: true })
  tipo: string;
  @Column({ type: 'char', length: 20, nullable: true })
  estado: string;
  @OneToMany(() => Comprobante, (comprobante) => comprobante.encabezado)
  comprobante: Comprobante;
  @OneToMany(
    () => DetallesServicio,
    (detallesServicio) => detallesServicio.encabezado,
  )
  detallesServicio: DetallesServicio;
}
