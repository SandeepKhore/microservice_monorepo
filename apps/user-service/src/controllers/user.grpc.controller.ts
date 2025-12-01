
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from '../services/user.service';

@Controller()
export class UserGrpcController {
  constructor(private readonly svc: UserService) {}

  @GrpcMethod('UserService', 'GetUser')
  getUser(data) {
    return this.svc.getUser(data.userId);
  }

  @GrpcMethod('UserService', 'GetUsers')
  getUsers() {
    return this.svc.getUsers();
  }
}
