import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userService.findOneByEmail(email);
        if (user && (await bcrypt.compare(pass, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id, role: user.role };
        return {
            access_token: this.jwtService.sign(payload),
            user: { email: user.email, role: user.role, name: user.name, surname: user.surname },
        };
    }

    async register(email: string, password: string, name: string, surname: string, role: 'user' | 'admin' = 'user'): Promise<any> {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.userService.create(email, hashedPassword, name, surname, role);
        const { password: _, ...result } = user;
        return result;
    }
}