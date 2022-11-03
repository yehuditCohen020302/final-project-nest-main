import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { urlencoded } from 'express';
import console from 'console';
import { userDTO } from 'src/DTO/user.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>) { }

  async create(user: User) {
    const createdUser = new this.userModel({
      uid:user.uid,
      // role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      email: user.email
    });
    await createdUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  
  async findOne(uId: string): Promise<userDTO> {
    return await this.userModel.findOne({ uid: uId });
}

  async update(updateUser: User, id:string) {
    const _updateUser = this.userModel.findOne({_id :id});
    const _user={$set:({
      uid:updateUser.uid,
      // role: updateUser.role,
      firstName: updateUser.firstName,
      lastName: updateUser.lastName,
      phone: updateUser.phone,
      email: updateUser.email
    })};
    await this.userModel.updateOne({_id:Object(id)},updateUser);
  }

  async delete(id:string) {
    await this.userModel.deleteOne({_id:id});
}

}



