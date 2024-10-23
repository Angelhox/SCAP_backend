import { Contrato } from 'src/contratos/entities/contrato.entity';
import { Sector } from 'src/sector/entities/sector.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'sectorContrato' })
export class SectorContrato {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'char', length: 15, unique: true })
  codigo: string;
  @Column({ type: 'char', length: 15 })
  estado: string;
  @Column({ type: 'date' })
  fechaCreacion: Date;
  @Column({ type: 'date', nullable: true, default: null })
  fechaBaja: Date;
  // @ManyToOne(() => Contrato, (contrato) => contrato.sectorContrato)
  // @JoinColumn({ name: 'contratosId' })
  // contrato: Contrato;
  // @ManyToOne(() => Sector, (sector) => sector.sectorContrato)
  // @JoinColumn({ name: 'sectoresId' })
  // sector: Sector;
}
