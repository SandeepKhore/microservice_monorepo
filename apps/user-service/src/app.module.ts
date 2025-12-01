
import { Module } from '@nestjs/common';
import { UserGrpcController } from './controllers/user.grpc.controller';
import { UserService } from './services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/db_local'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [UserGrpcController],
  providers: [UserService],
})
export class AppModule {}
