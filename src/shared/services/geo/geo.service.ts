import { Injectable } from '@nestjs/common';
import * as   config from 'config';
import { Observable } from 'rxjs';
import { Google } from '../../../shared/models/google.config';
import { HttpBaseService } from '../http-base/http-base.service';
import { GeoParams } from './dto/geo.dto';

@Injectable()
export class GeoService {




    geoConfig = config.get<Google>('google');
    headers: Object = {};
    baseUrl: string;
    key: string;
    constructor(private httpBaseService: HttpBaseService) {
        this.key = this.geoConfig.key;
        this.baseUrl = this.geoConfig.baseUrl;

    }



    GetAddress(params: GeoParams): Observable<object> {
        let path = `${this.baseUrl}/geocode/json?key=${this.key}`;
        let options = { params: params }
        return this.httpBaseService.Get<object>(path, options);
    }



}
