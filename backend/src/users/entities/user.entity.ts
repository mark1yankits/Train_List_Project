import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ unique: true })
	name!: string;

	@Column({ unique: true })
	surname!: string;

	@Column({ unique: true })
	email!: string;

	@Column()
	password!: string;

	@Column({ default: 'user' })
	role!: 'user' | 'admin';
}
export enum UserRole {
	USER = 'user',
	ADMIN = 'admin',
}
