import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URL } from '../config';
import { Engines } from '../models/engines';

@Injectable({ providedIn: 'root' })
export class EnginesService {
    constructor(private http: HttpClient,
                private url: URL) { }

    getAll() {
        // tslint:disable-next-line:max-line-length
        return this.http.get<Engines[]>(this.url.url + `/engines`);
    }

}
