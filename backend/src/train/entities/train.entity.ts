import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('trains') // Явно вказуємо назву таблиці
export class Train {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  trainName!: string;

  @Column({ nullable: true })
  trainNumber?: string;

  @Column()
  departureCity!: string;

  @Column()
  arrivalCity!: string;

  @Column()
  departureTime!: string;

  @Column()
  arrivalTime!: string;

  @Column()
  duration!: string;
}