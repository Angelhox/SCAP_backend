import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'kardex' })
export class Kardex {
  @Index({ unique: true })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
  @Column({ type: 'varchar', length: 100 })
  descripcion: string;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor: number;
  @Column({ type: 'char', length: 8 })
  tipo: string;
  // Esta columna representa una relacion literal !!
  @Column({ type: 'int', width: 11 })
  usuariosId: number;
}
