import { HttpModule, Module } from '@nestjs/common';
import { GeoService } from './services/geo/geo.service';
import { HttpBaseService } from './services/http-base/http-base.service';
import { SharedService } from './services/shared/shared.service';

@Module({
  imports: [HttpModule],
  providers: [

    HttpBaseService,
    GeoService ,
    SharedService
    
  ],
  exports: [
    HttpBaseService,
    GeoService ,
    SharedService ,
  
  ]
})
export class SharedModule { }
