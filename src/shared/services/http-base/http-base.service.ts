import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AxiosRequestConfig, AxiosResponse } from 'axios';

@Injectable()
export class HttpBaseService {


    env: string;
    baseUrl: any;
    headers: any;
    config: any;

    constructor(private httpService: HttpService) {

    }




    Get<TRes>(url: string, options: AxiosRequestConfig): Observable<TRes> {

        return this.httpService.get<TRes>(url, options).pipe(
            tap((res: AxiosResponse<TRes>) => {
                if (res.status != 200) {
                    console.log()
                }
            }),
            map(res => res.data)

        );
    }

    Post<TRes, TData>(url: string, data: TData, options: AxiosRequestConfig): Observable<TRes> {

        return this.httpService.post<TRes>(url, data, options).pipe(
            tap((res: AxiosResponse<TRes>) => {
                if (res.status != 200) {
                    console.log()
                }
            }),
            map(res => res.data)

        );
    }



    Put<TRes, TData>(url: string, data: TData, options: AxiosRequestConfig): Observable<TRes> {

        return this.httpService.put<TRes>(url, data, options).pipe(
            tap((res: AxiosResponse<TRes>) => {
                if (res.status != 200) {
                    console.log()
                }
            }),
            map(res => res.data)

        );
    }

    Patch<TRes, TData>(url: string, data: TData, options: AxiosRequestConfig): Observable<TRes> {

        return this.httpService.patch<TRes>(url, data, options).pipe(
            tap((res: AxiosResponse<TRes>) => {
                if (res.status != 200) {
                    console.log()
                }
            }),
            map(res => res.data)

        );
    }

    Delete<TRes>(url: string, options: AxiosRequestConfig): Observable<TRes> {

        return this.httpService.delete<TRes>(url, options).pipe(
            tap((res: AxiosResponse<TRes>) => {
                if (res.status != 200) {
                    console.log()
                }
            }),
            map(res => res.data)

        );
    }

}
