import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URL } from '../config';
import { Paint } from '../models/paint';
import { MatTableDataSource } from '@angular/material/table';

export class Car{
    model: string;
    engine: string;
    transition: string;
    tires: string;
    paint: string;
    time: string;
    price: number;
    status: string;
  }

@Injectable({ providedIn: 'root' })
export class PaintsService {
    car: Car;
    dataSource: MatTableDataSource<Car>;

    constructor(private http: HttpClient,
                private url: URL) {
                    this.car = new Car();
                }

    getAll() {
        // tslint:disable-next-line:max-line-length
        return this.http.get<Paint[]>(this.url.url + `/paints`);
    }

    setData(){
        this.car.model = 'Volvo';
        this.car.engine = '1.6 FSI';
        this.car.transition = 'Opel Automatic - 6 gears';
        this.car.tires = 'Debica';
        this.car.paint = 'red';
        this.car.time = '11 days';
        this.car.price = 12000.23;
        this.car.status = 'ACCEPTED';
        this.dataSource = new MatTableDataSource();
        this.dataSource.data.push(this.car);
    }

    getData(){
        return this.dataSource;
    }

    clearData(){
        this.dataSource = new MatTableDataSource<Car>();
    }

}
