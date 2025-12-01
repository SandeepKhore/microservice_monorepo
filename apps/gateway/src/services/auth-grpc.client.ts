
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: join(__dirname, '../../../../libs/proto/auth.proto'),
          url: process.env.AUTH_GRPC_URL || 'localhost:50051',
        },
      },
    ])
  ],
  exports: [ClientsModule],
})
export class AuthGrpcClientModule {}
