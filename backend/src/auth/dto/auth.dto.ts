import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsNotEmpty()
    password!: string;
}

export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsNotEmpty()
    password!: string;

    @IsNotEmpty()
    name!: string;

    @IsNotEmpty()
    surname!: string;
    
    @IsNotEmpty()
    role!: 'user' | 'admin';
    
}
