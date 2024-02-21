import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tarifas' })
export class Tarifa {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  // El modelo e base de datos indica que estos campos son Nullable:true, no deberia ser asi, se aumento la precisión de los decimales a 10, scale 2 !!
  @Column({ type: 'varchar', length: 45 })
  tarifa: string;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  desde: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  hasta: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor: number;
}
