import { Contrato } from 'src/contratos/entities/contrato.entity';
import { Socio } from 'src/socios/entities/socio.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'socioContrato' })
export class SocioContrato {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'date' })
  fechaContratacion: Date;
  @Column({ type: 'date', nullable: true, default: null })
  fechaBaja: Date;
  @Column({ type: 'char', length: 15 })
  estado: string;
  @ManyToOne(() => Contrato, (contrato) => contrato.socioContrato)
  @JoinColumn({ name: 'contratosId' })
  contrato: Contrato;
  @ManyToOne(() => Socio, (socio) => socio.socioContrato, { eager: true })
  @JoinColumn({ name: 'sociosId' })
  socio: Socio;
}
