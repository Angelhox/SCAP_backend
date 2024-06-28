import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Medidor } from 'src/medidor/entities/medidor.entity';
import { ServicioContratado } from 'src/servicio.contratado/entities/servicio.contratado.entity';
import { Socio } from 'src/socios/entities/socio.entity';

@Entity({ name: 'contratos' })
export class Contrato {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'char', length: 15, unique: true })
  codigo: string;
  @Column({ type: 'date' })
  fecha: Date;
  @Column({ type: 'char', length: 15 })
  estado: string;
  @Column({ type: 'char', length: 15 })
  medidorSn: string;
  @Column({ type: 'varchar', length: 50, nullable: true })
  barrio: string;
  @Column({ type: 'varchar', length: 50, nullable: true })
  callePrincipal: string;
  @Column({ type: 'varchar', length: 50, nullable: true })
  calleSecundaria: string;
  @Column({ type: 'char', length: 10, nullable: true })
  numeroCasa: string;
  @Column({ type: 'varchar', length: 100, nullable: true })
  referencia: string;
  @Column({ type: 'char', length: 10, nullable: true })
  principalSn: string;
  // Revisar si se esta haciendo uso de esta columna ??
  @Column({ type: 'int', width: 11, nullable: true })
  serviciosCompartidos: number;
  @OneToMany(() => Medidor, (medidor) => medidor.contrato)
  medidor: Medidor;
  @OneToMany(
    () => ServicioContratado,
    (servicioContratado) => servicioContratado.contrato,
  )
  servicioContratado: ServicioContratado;
  @ManyToOne(() => Socio, (socio) => socio.contrato, { eager: true })
  @JoinColumn({ name: 'sociosId' })
  socio: Socio;
}
