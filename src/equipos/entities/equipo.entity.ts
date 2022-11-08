import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'equipos' })
export class Equipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
  })
  nombre: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  estado: boolean;
}
