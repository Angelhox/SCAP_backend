import { Medidor } from 'src/medidor/entities/medidor.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'planillas' })
export class Planilla {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fechaEmision: Date;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor: number;
  @Column({ type: 'char', length: 10 })
  estado: string;
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  lecturaActual: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  lecturaAnterior: number;
  @Column({ type: 'varchar', length: 45, nullable: true })
  tarifa: string;
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  tarifaValor: number;
  @Column({ type: 'char', length: 30, unique: true })
  codigo: string;
  @ManyToOne(() => Medidor, (medidor) => medidor.planilla)
  @JoinColumn({ name: 'medidoresId' })
  medidor: Medidor;
}
