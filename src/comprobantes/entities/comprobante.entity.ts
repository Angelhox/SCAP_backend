import { Encabezado } from 'src/encabezado/entities/encabezado.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'comprobantes' })
export class Comprobante {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'char', length: 50, nullable: true })
  codigo: string;
  @Column({ type: 'date', nullable: true })
  fechaEmision: Date;
  @Column({ type: 'varchar', length: 50, nullable: true })
  rutaLocal: string;
  @Column({ type: 'char', length: 15, nullable: true })
  estado: string;
  @Column({ type: 'date', nullable: true })
  fechaAnulacion: Date;
  @Column({ type: 'varchar', length: 150, nullable: true })
  motivoAnulacion: string;
  @ManyToOne(() => Encabezado, (encabezado) => encabezado.comprobante, {
    nullable: false,
  })
  @JoinColumn({ name: 'encabezadosId' })
  encabezado: Encabezado;
}
