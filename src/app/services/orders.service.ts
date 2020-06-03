import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URL } from '../config';
import { Order } from '../models/order';

@Injectable({ providedIn: 'root' })
export class OrdersService {
    constructor(private http: HttpClient,
                private url: URL) { }

    post(order: Order) {
        // tslint:disable-next-line:max-line-length
        return this.http.post<Order>(this.url.url + `/order`, order);
    }

}
