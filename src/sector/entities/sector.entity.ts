import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sectores' })
export class Sector {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  // El modelo e base de datos indica que estos campos son Nullable:true, no deberia ser asi, se aumento la precisión de los decimales a 10, scale 2 !!
  @Column({ type: 'varchar', length: 50 })
  barrio: string;
  @Column({ type: 'char', length: 10 })
  abreviatura: string;
  @Column({ type: 'char', length: 10 })
  codigo: string;
  @Column({ type: 'char', length: 10 })
  numeroSocios: number;
}
