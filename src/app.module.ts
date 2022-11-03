import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './db/database.module';
import { UserModule } from './user/user.module';
import { SystemModule } from './system/system.module';
import { LocationModule } from './location/location.module';
import { RequestModule } from './request/request.module';
import { ManagerModule } from './manager/manager.module';



@Module({

  imports: [AuthModule, MongooseModule.forRoot('mongodb+srv://yehuditCohen:yehudit8824@cluster0.mlo2siz.mongodb.net/?retryWrites=true&w=majority'),UserModule, SystemModule, LocationModule, RequestModule,ManagerModule],
 
  // imports: [AuthModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/finalProjectDB'),UserModule, SystemModule, LocationModule, RequestModule,ManagerModule],
  controllers: [],
  providers: [],

})

export class AppModule { 
  
}
