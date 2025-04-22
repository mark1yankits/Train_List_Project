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
    const payload = { username: user.username, sub: user.id };
    return {
    access_token: this.jwtService.sign(payload),
    };
}

async register(email: string, password: string, name: string, surname: string): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userService.create(email, hashedPassword, name, surname);
    const { password: _, ...result } = user;
    return result;
}

}