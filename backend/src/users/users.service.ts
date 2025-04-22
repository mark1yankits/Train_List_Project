import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async findOneByEmail(email: string): Promise<User | null> {
        return this.usersRepository.findOne({ where: { email } });
    }

    async create(email: string, password: string, name: string, surname: string, role: 'user' | 'admin' = 'user'): Promise<User> {
        const user = this.usersRepository.create({ email, password, name, surname, role });
        return this.usersRepository.save(user);
    }
}