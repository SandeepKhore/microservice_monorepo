
import { Controller, Get, Param, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

interface UserService {
  getUser(data: { userId: string }): Promise<any>;
  getUsers(data: {}): Promise<any>;
}

@Controller('users')
export class UserController implements OnModuleInit {
  private svc: UserService;

  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.svc = this.client.getService<UserService>('UserService');
  }

  @Get()
  getUsers() {
    return this.svc.getUsers({});
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.svc.getUser({ userId: id });
  }
}
