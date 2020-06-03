import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URL } from '../config';
import { Tires } from '../models/tires';

@Injectable({ providedIn: 'root' })
export class TiresService {
    constructor(private http: HttpClient,
                private url: URL) { }

    getAll() {
        // tslint:disable-next-line:max-line-length
        return this.http.get<Tires[]>(this.url.url + `/tires`);
    }

}
