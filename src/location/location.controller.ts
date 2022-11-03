import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Location } from './location.model';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {

    constructor(private locationService: LocationService) {
    }

    @Post()
    createLocation(@Body() newSystem: Location) {
        this.locationService.create(newSystem);
    }
    @Get()
    getLocation() {
        debugger
        return this.locationService.findAll();
    };
    @Get('/:id')
    getOneLocation(@Param('id') id:string) {
        return this.locationService.findOne(id);
    };
    @Put('/:id')
    updateLocation(@Body() updateLocation:Location, @Param('id') id:string) {
        return this.locationService.update(updateLocation , id);
    };
    @Delete('/:id')
    deleteLocation(@Param('id') id:string){
        return this.locationService.delete(id);
    }
}
