
import { Module } from '@nestjs/common';
import { AuthGrpcController } from './controllers/auth.grpc.controller';
import { AuthService } from './services/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/db_local'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [AuthGrpcController],
  providers: [AuthService],
})
export class AppModule {}
