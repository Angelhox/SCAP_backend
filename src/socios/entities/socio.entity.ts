import { Contrato } from 'src/contratos/entities/contrato.entity';
import { EstadoCuenta } from 'src/estado.cuenta/entities/estado.cuenta.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Index,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
@Entity({ name: 'socios' })
export class Socio {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'char', unique: true, length: 15 })
  cedulaPasaporte: string;
  // El modelo indica un length de 15 para esta columna, podria no ser suficiente !!
  @Column({ type: 'varchar', length: 45 })
  primerNombre: string;
  @Column({ type: 'varchar', length: 45, default: 'NA', nullable: true })
  segundoNombre: string;
  @Column({ type: 'varchar', length: 45 })
  primerApellido: string;
  @Column({ type: 'varchar', length: 45, default: 'NA', nullable: true })
  segundoApellido: string;
  @Column({ type: 'date', default: '2023-12-11' })
  fechaNacimiento: Date;
  @Column({
    type: 'varchar',
    length: 100,
    default: 'actualizarCorreo@gmail.com',
    nullable: true,
  })
  correo: string;
  @Column({ type: 'char', length: 15, default: '0999999999' })
  telefonoMovil: string;
  @Column({ type: 'char', length: 15, default: '0999999999', nullable: true })
  telefonoFijo: string;
  @Column({ type: 'varchar', length: 45, default: 'Pichincha' })
  provincia: string;
  @Column({ type: 'varchar', length: 45, default: 'Cayambe' })
  canton: string;
  @Column({ type: 'varchar', length: 45, default: 'Ayora' })
  parroquia: string;
  @Column({ type: 'varchar', length: 45, default: 'NA' })
  barrio: string;
  @Column({ type: 'varchar', length: 55, default: 'Principal', nullable: true })
  callePrincipal: string;
  @Column({
    type: 'varchar',
    length: 55,
    default: 'Secundaria',
    nullable: true,
  })
  calleSecundaria: string;
  @Column({ type: 'char', length: 8, nullable: true, default: '999' })
  numeroCasa: string;
  @Column({ type: 'varchar', length: 100, default: 'Referencia' })
  referencia: string;
  @OneToMany(() => EstadoCuenta, (estadoCuenta) => estadoCuenta.socio)
  estadoCuenta: EstadoCuenta;
  @OneToMany(() => Contrato, (contrato) => contrato.socio)
  contrato: Contrato;
  @OneToMany(() => Usuario, (usuario) => usuario.socio)
  usuario: Usuario;
}
