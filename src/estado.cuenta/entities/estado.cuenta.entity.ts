import { Socio } from 'src/socios/entities/socio.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'estadoscuenta' })
export class EstadoCuenta {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor: number;
  @Column({ type: 'char', length: 15 })
  tipo: string;
  @Column({ type: 'date' })
  fechaMovimiento: Date;
  @Column({ type: 'varchar', length: 45 })
  motivo: string;
  // Esta columna representa una relacion literal !!
  @Column({ type: 'int', width: 11 })
  responsable: number;
  @ManyToOne(() => Socio, (socio) => socio.estadoCuenta, { nullable: false })
  @JoinColumn({ name: 'sociosId' })
  socio: Socio;
}
