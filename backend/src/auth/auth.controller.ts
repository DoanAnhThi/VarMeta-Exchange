import { Controller, Post, Body } from '@nestjs/common'; // Thêm các import cần thiết
import { AuthService } from './auth.service'; // Import service
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth') // Thêm Controller
export class AuthController {
    constructor(private readonly authService: AuthService) {} // Inject AuthService

    @Post('register')
    async register(@Body() userDto: CreateUserDto) {
        return this.authService.register(userDto);
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}
