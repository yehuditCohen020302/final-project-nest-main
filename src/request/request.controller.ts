import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Request } from './request.model';
import { RequestService } from "./request.service";

@Controller('request')
export class RequestController {

    constructor(private requestService: RequestService) {
    }

    @Post()
    createRequest(@Body() newRequest: Request) {
        this.requestService.create(newRequest);
    }
    @Get()
    getAllRequest() {
        return this.requestService.findAll();
    };

    @Get('/:id')
    getOneRequest(@Param('id') id:string) {
        return this.requestService.findOne(id);
    };
    
    @Put('/:id')
    updateRequest(@Body() updateRequest:Request, @Param('id') id:string) {
        return this.requestService.update(updateRequest , id);
    };

    @Delete('/:id')
    deleteRequest(@Param('id') id:string){
        return this.requestService.delete(id);
    }

}


