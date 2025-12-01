
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'auth',
      protoPath: join(__dirname, '../../../libs/proto/auth.proto'),
      url: '0.0.0.0:50051'
    },
  });
  await app.listen();
  console.log("Auth service running (gRPC) on 50051");
}
bootstrap();
