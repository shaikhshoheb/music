import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 10 })
  rating_classification: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'date' })
  release_date: Date;
}
