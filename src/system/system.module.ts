// import { Module } from '@nestjs/common';

// @Module({})
// export class SystemModule {
    
// }
import { Module } from '@nestjs/common';
import { SystemService } from './system.service';
import { SystemController } from './system.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemSchema } from './system.model';


@Module({
    imports: [MongooseModule.forFeature([{name: 'System', schema: SystemSchema}])],
    controllers: [SystemController],
    providers: [SystemService]
})
export class SystemModule {}
