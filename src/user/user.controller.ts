import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from './user.model';
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {
    }

    @Post()
    createUser(@Body() newUser: User) {
        this.userService.create(newUser);
    }
    @Get()
    getAllUsers() {
        return this.userService.findAll();
    };

    @Get('/:id')
    getOneUsers(@Param('id') id:string) {
        return this.userService.findOne(id);
    };
    
    @Put('/:id')
    updateUser(@Body() updateUser:User, @Param('id') id:string) {
        return this.userService.update(updateUser , id);
    };

    @Delete('/:id')
    deleteUser(@Param('id') id:string){
        return this.userService.delete(id);
    }

}









