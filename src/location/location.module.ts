// import { Module } from '@nestjs/common';

// @Module({})
// export class SystemModule {
    
// }
import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationSchema } from './location.model';


@Module({
    imports: [MongooseModule.forFeature([{name: 'Location', schema: LocationSchema}])],
    controllers: [LocationController],
    providers: [LocationService]
})
export class LocationModule {}
