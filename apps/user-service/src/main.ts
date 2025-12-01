
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(__dirname, '../../../libs/proto/user.proto'),
      url: '0.0.0.0:50052'
    },
  });
  await app.listen();
  console.log("User service running (gRPC) on 50052");
}
bootstrap();
