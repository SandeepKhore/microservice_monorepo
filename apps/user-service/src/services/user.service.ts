
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUser(userId: string) {
    const user = await this.userModel.findById(userId);
    if (!user) return { userId: "", email: "" };
    return { userId: user._id.toString(), email: user.email };
  }

  async getUsers() {
    const list = await this.userModel.find();
    return {
      users: list.map(u => ({ userId: u._id.toString(), email: u.email })),
    };
  }
}
