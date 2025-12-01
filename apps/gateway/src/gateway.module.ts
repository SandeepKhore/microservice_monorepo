
import { Module } from '@nestjs/common';
import { AuthGrpcClientModule } from './services/auth-grpc.client';
import { UserGrpcClientModule } from './services/user-grpc.client';

import { AuthController } from './controllers/auth.controller';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [
    AuthGrpcClientModule,
    UserGrpcClientModule,
  ],
  controllers: [
    AuthController,
    UserController
  ],
})
export class GatewayModule {}
