
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'user',
          protoPath: join(__dirname, '../../../../libs/proto/user.proto'),
          url: process.env.USER_GRPC_URL || 'localhost:50052',
        },
      },
    ])
  ],
  exports: [ClientsModule],
})
export class UserGrpcClientModule {}
