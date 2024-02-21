import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Contrato } from 'src/contratos/entities/contrato.entity';
import { Servicio } from 'src/servicios/entities/servicio.entity';
import { TipoDescuento } from 'src/tipo.descuento/entities/tipo.descuento.entity';
import { DetallesServicio } from 'src/detalles.servicio/entities/detalles.servicio.entity';

@Entity({ name: 'serviciosContratados' })
export class ServicioContratado {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'date', nullable: true })
  fechaEmision: Date;
  @Column({ type: 'char', length: 15, nullable: true })
  estado: string;
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  valorIndividual: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  numeroPagosIndividual: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  valorPagosIndividual: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  descuentoValor: number;
  @ManyToOne(() => Contrato, (contrato) => contrato.servicioContratado, {
    nullable: false,
  })
  @JoinColumn({ name: 'contratosId' })
  contrato: Contrato;
  @ManyToOne(() => Servicio, (servicio) => servicio.servicioContratado, {
    nullable: false,
  })
  @JoinColumn({ name: 'serviciosId' })
  servicio: Servicio;
  @ManyToOne(
    () => TipoDescuento,
    (tipoDescuento) => tipoDescuento.servicioContratado,
    { nullable: false },
  )
  @JoinColumn({ name: 'descuentosId' })
  tipoDescuento: TipoDescuento;
  @OneToMany(
    () => DetallesServicio,
    (detallesServicio) => detallesServicio.servicioContratado,
  )
  detallesServicio: DetallesServicio;
}
