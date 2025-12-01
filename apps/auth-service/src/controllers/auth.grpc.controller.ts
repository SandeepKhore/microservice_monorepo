
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthGrpcController {
  constructor(private readonly svc: AuthService) {}

  @GrpcMethod('AuthService', 'Register')
  register(data) {
    return this.svc.register(data.email, data.password);
  }

  @GrpcMethod('AuthService', 'Login')
  login(data) {
    return this.svc.login(data.email, data.password);
  }

  @GrpcMethod('AuthService', 'Logout')
  logout(data) {
    return this.svc.logout();
  }
}
