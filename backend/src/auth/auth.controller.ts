import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
constructor(private readonly authService: AuthService) {}

@Post('login')
async login(@Body() body: LoginDto) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
        return { message: 'Invalid credentials' };
    }
    return { message: 'Login successful', user };
}

  @Post('register') // Add this decorator
    async register(@Body() body: RegisterDto) {
    if (!body.email || !body.password || !body.name || !body.surname) {
        return { message: 'Missing required fields' };
    }

    const newUser = await this.authService.register(
        body.email,
        body.password,
        body.name,
        body.surname
    );
    return { message: 'User registered', newUser };
}
}