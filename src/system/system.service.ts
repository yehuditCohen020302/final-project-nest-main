import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { systemDTO } from 'src/DTO/system.dto';
import { User } from 'src/user/user.model';
import { System } from './system.model';
@Injectable()
export class SystemService {
    constructor(
        @InjectModel('System') private readonly systemModel: Model<System>) { }
    
      async create(system: System) {
        const createdSystem = new this.systemModel({
          urlName: system.urlName,
          urlImage: system.urlImage,
          subject:system.subject,
          manager_id:system.manager_id,
          description:system.description,
          communicationDetails: system.communicationDetails
        });
       return await createdSystem.save();
        // const updtUser= this.userModel.findOne({uid:createdSystem.managerUid})
      }
    
      findAll(): Promise<System[]> {
        return this.systemModel.find().exec();
      }

      async find(systemUrlName: string): Promise<systemDTO[]> {
        debugger
        return await this.systemModel.find({ urlName: systemUrlName });
      }

      async findAllUser(userId: string): Promise<System[]> {
      return await this.systemModel.find({ manager_id: userId });
      }

      async update(updateSystem: System, id:string) {
      const _updatesystem = this.systemModel.findOne({_id :id});
      const _system={$set:({
        urlName: updateSystem.urlName,
        urlImage: updateSystem.urlImage,
        subject: updateSystem.subject,
        manager_id: updateSystem.manager_id,
        description: updateSystem.description,
        communicationDetails: updateSystem.communicationDetails,
      })};
      await this.systemModel.updateOne({_id:Object(id)},updateSystem);
      }

      async delete(idS:string) {
      await this.systemModel.deleteOne({_id:idS});
      }
}
