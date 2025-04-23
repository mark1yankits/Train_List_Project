import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('trains')
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
