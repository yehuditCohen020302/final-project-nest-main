import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Request } from './request.model';
import { InjectModel } from '@nestjs/mongoose';
import { urlencoded } from 'express';
import console from 'console';
import { requestDTO } from 'src/DTO/request.dto';

@Injectable()
export class RequestService {
  constructor(
    @InjectModel('Request') private readonly requestModel: Model<Request>) { }

  async create(request: Request) {
    const createdRequest = new this.requestModel({
      firstName:   request.firstName,
      lastName:    request.lastName,
      email:       request.email,
      phone:       request.phone,
      system_id:   request.system_id,
      display_name:request.display_name,
      status:      request.status,
      notes:       request.notes
    });
    await createdRequest.save();
  }

  findAll(): Promise<Request[]> {
    return this.requestModel.find().exec();
  }

  
  async findOne(reqId: string): Promise<requestDTO> {
    return await this.requestModel.findOne({ _id: reqId });
}

  async update(updateRequest: Request, id:string) {
    const _updateUser = this.requestModel.findOne({_id :id});
    const _user={$set:({
      firstName:   updateRequest.firstName,
      lastName:    updateRequest.lastName,
      email:       updateRequest.email,
      phone:       updateRequest.phone,
      system_id:   updateRequest.system_id,
      display_name:updateRequest.display_name,
      status:      updateRequest.status,
      notes:       updateRequest.notes
    })};
    await this.requestModel.updateOne({_id:Object(id)},updateRequest);
  }

  async delete(id:string) {
    await this.requestModel.deleteOne({_id:id});
}

}


