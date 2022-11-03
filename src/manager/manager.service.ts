import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Manager } from './manager.model';
import { InjectModel } from '@nestjs/mongoose';
import { urlencoded } from 'express';
import console from 'console';
import { managerDTO } from 'src/DTO/manager.dto';

@Injectable()
export class ManagerService {
  constructor(
    @InjectModel('Manager') private readonly managerModel: Model<Manager>) { }

  async create(manager: Manager) {
    debugger
    const createdManager = new this.managerModel({
        user_id:manager.user_id,
        system_id:manager.system_id,
        active:manager.active,
        display_name:manager.display_name,
        role:manager.role,
        // invitation_sent: manager.invitation_sent,
    });
    debugger
    
  return await createdManager.save();
  }

  findAll(): Promise<Manager[]> {
    return this.managerModel.find().exec();
  }

  
  async findOne(mngId: string): Promise<Manager[]> {
    return await this.managerModel.find({ user_id: mngId });
}

  async update(updateManager: Manager, id:string) {
    const _updateManager = this.managerModel.findOne({_id :id});
    const _user={$set:({
        user_id:updateManager.user_id,
        system_id:updateManager.system_id,
        active:updateManager.active,
        display_name:updateManager.display_name,
        role:updateManager.role,
        invitation_sent: updateManager.invitation_sent,
    })};
    await this.managerModel.updateOne({_id:Object(id)},updateManager);
  }

  async delete(id:string) {
    await this.managerModel.deleteOne({_id:id});
}

}


