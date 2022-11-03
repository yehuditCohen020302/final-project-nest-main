import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { locationDTO } from 'src/DTO/location.dto';
import { Location } from './location.model';

@Injectable()
export class LocationService {
    constructor(
        @InjectModel('Location') private readonly locationModel: Model<Location>) { }
    
    async create(location: Location) {
        const createdLocation = new this.locationModel({
            manager_id: location.manager_id,
            system_id:location.system_id,
            location_geolocation:{
                lat:location.location_geolocation.lat,
                len:location.location_geolocation.len},
            description:location.description,
            name: location.name,
            notes: location.notes,
            communication_details:{
                email:location.communication_details.email,
                phone:location.communication_details.phone}
        });
        await createdLocation.save();
    }
    
    findAll(): Promise<Location[]> {
        return this.locationModel.find().exec();
    }

    async findOne(locationId: string): Promise<Location[]> {
        return await this.locationModel.find({ system_id: locationId });
    }

    async update(updateLocation: Location, id:string) {
      const _updatelocation = this.locationModel.findOne({_id :id});
      const _location={$set:({
            manager_id: updateLocation.manager_id,
            system_id:updateLocation.system_id,
            location_geolocation:{
                lat:updateLocation.location_geolocation.lat,
                len:updateLocation.location_geolocation.len},
            description:updateLocation.description,
            name: updateLocation.name,
            notes: updateLocation.notes,
            communication_details:{
                email:updateLocation.communication_details.email,
                phone:updateLocation.communication_details.phone}
      })};
      await this.locationModel.updateOne({_id:Object(id)},updateLocation);
    }
    async delete(idS:string) {
      await this.locationModel.deleteOne({_id:idS});
  }
}
