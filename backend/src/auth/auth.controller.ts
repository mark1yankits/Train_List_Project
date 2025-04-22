import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { UserRole } from '../users/entities/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() body: LoginDto) {
        const user = await this.authService.validateUser(body.email, body.password);
        if (!user) {
            return { message: 'Invalid credentials' };
        }
        return this.authService.login(user);
    }

    @Post('register')
    async register(@Body() body: RegisterDto) {
        if (!body.email || !body.password || !body.name || !body.surname) {
            return { message: 'Missing required fields' };
        }
        const role = (body.role || UserRole.USER) as 'user' | 'admin';
        const newUser = await this.authService.register(
            body.email,
            body.password,
            body.name,
            body.surname,
            role
        );
        return { message: 'User registered', user: newUser };
    }
}