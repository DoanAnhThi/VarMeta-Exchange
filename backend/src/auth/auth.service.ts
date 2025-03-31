import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async register(userDto: any) {
        return { message: 'User registered successfully', user: userDto };
    }

    async login(loginDto: any) {
        return { message: 'User logged in successfully', user: loginDto };
    }
}
