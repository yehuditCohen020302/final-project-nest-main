import { Body, Controller, Post, Put } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){
        // this.authService.test()
    }

    @Post('signUp')
    signUp(){
       return this.authService.signUp()
    }

    @Post('signIn')
    signIn(){
        return this.authService.signIn()
    }

}