import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URL } from '../config';
import { Transmission } from '../models/transmission';

@Injectable({ providedIn: 'root' })
export class TransmissionService {
    constructor(private http: HttpClient,
                private url: URL) { }

    getAll() {
        // tslint:disable-next-line:max-line-length
        return this.http.get<Transmission[]>(this.url.url + `/transmissions`);
    }

}
