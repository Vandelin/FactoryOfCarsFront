import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URL } from '../config';
import { Models } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ModelsService {
    constructor(private http: HttpClient,
                private url: URL) { }

    getAll() {
        // tslint:disable-next-line:max-line-length
        return this.http.get<Models[]>(this.url.url + `/models`);
    }

}
