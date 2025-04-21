import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('trains')
export class Train {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: 'Unnamed Train' })
  trainName!: string;

  @Column({ nullable: true })
  trainNumber!: string;

  @Column({ default: 'Default City' })
  departureCity!: string;

  @Column({ default: 'Default City' })
  arrivalCity!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  departureTime!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  arrivalTime!: Date;

  @Column({ default: '0h 0m' }) 
  duration!: string;
}
