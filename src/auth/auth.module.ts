import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './outh.controller';

@Module({
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
