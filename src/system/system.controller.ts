import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { System } from './system.model';
import { SystemService } from './system.service';

@Controller('system')
export class SystemController {

    constructor(private systemService: SystemService) {
    }

    @Post()
    createSystem(@Body() newSystem: System) {
        this.systemService.create(newSystem);
    }
    @Get()
    getSystem() {
        return this.systemService.findAll();
    };
    @Get('/getSystemByUrlName/:name')
    getOneSystem(@Param('name') name:string) {
        return this.systemService.find(name);
    };
    @Get('/:id')
    getSystemUser(@Param('id') id:string) {
        return this.systemService.findAllUser(id);
    };
    @Put('/:id')
    updateSystem(@Body() updateSystem:System, @Param('id') id:string) {
        return this.systemService.update(updateSystem , id);
    };
    @Delete('/:id')
    deleteSystem(@Param('id') id:string){
        return this.systemService.delete(id);
    }
}
