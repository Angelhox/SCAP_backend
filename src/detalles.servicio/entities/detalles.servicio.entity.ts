import { ServicioContratado } from 'src/servicio.contratado/entities/servicio.contratado.entity';
import { Encabezado } from 'src/encabezado/entities/encabezado.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'detallesservicio' })
export class DetallesServicio {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
    default: null,
  })
  subtotal: number;
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
    default: null,
  })
  descuento: number;
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
    default: null,
  })
  total: number;
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
    default: null,
  })
  saldo: number;
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
    default: null,
  })
  abono: number;
  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  fechaEmision: Date;
  @Column({ type: 'char', length: 20, default: 'Por cancelar', nullable: true })
  estado: string;
  // El modelo de base de datos indica el valor null como defecto para esta columna, sin embargo no deberia ser de esa manera !!
  @ManyToOne(() => Encabezado, (encabezado) => encabezado.detallesServicio, {
    nullable: true,
  })
  @JoinColumn({ name: 'encabezadosId' })
  encabezado: Encabezado;
  @ManyToOne(
    () => ServicioContratado,
    (servicioContratado) => servicioContratado.detallesServicio,
    { nullable: false },
  )
  @JoinColumn({ name: 'serviciosContratadosId' })
  servicioContratado: ServicioContratado;
}
