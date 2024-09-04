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
import { Planilla } from 'src/planillas/entities/planilla.entity';

@Entity({ name: 'medidores' })
export class Medidor {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 15, type: 'char', nullable: true, unique: true })
  codigo: string;
  @Column({
    type: 'date',
  })
  fechaInstalacion: Date;
  @Column({ length: 35, type: 'varchar', nullable: true })
  marca: string;
  @Column({ length: 100, type: 'varchar', nullable: true })
  observacion: string;
  @Column({ length: 15, type: 'char', nullable: false })
  estado: string;
  @Column({ type: 'date', nullable: true })
  fechaBaja: Date;
  @Column({ type: 'decimal', nullable: true, precision: 10.2 })
  ultimaLectura: number;
  @ManyToOne(() => Contrato, (contrato) => contrato.medidor)
  @JoinColumn({ name: 'contratosId' })
  contrato: Contrato;
  // Cambio: 1
  // @OneToMany(() => Planilla, (planilla) => planilla.medidor)
  // planilla: Planilla;
}
