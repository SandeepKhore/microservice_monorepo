
import { Controller, Post, Body, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

interface AuthService {
  register(data: { email: string; password: string }): Promise<any>;
  login(data: { email: string; password: string }): Promise<any>;
  logout(data: { token: string }): Promise<any>;
}

@Controller('auth')
export class AuthController implements OnModuleInit {
  private svc: AuthService;

  constructor(@Inject('AUTH_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.svc = this.client.getService<AuthService>('AuthService');
  }

  @Post('register')
  register(@Body() body) {
    return this.svc.register(body);
  }

  @Post('login')
  login(@Body() body) {
    return this.svc.login(body);
  }

  @Post('logout')
  logout(@Body() body) {
    return this.svc.logout(body);
  }
}
