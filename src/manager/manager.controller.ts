import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Manager } from './manager.model';
import { ManagerService } from "./manager.service";

@Controller('manager')
export class ManagerController {

    constructor(private managerService: ManagerService) {
    }

    @Post()
    createManager(@Body() newManager: Manager) {
        this.managerService.create(newManager);
    }
    @Get()
    getAllManagers() {
        return this.managerService.findAll();
    };

    @Get('/:id')
    getOneManager(@Param('id') id:string) {
        return this.managerService.findOne(id);
    };
    
    @Put('/:id')
    updateManager(@Body() updateManager:Manager, @Param('id') id:string) {
        return this.managerService.update(updateManager , id);
    };

    @Delete('/:id')
    deleteManager(@Param('id') id:string){
        return this.managerService.delete(id);
    }

}


