import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSortHeader } from '@angular/material/sort';

export class Car{
  model: string;
  engine: string;
  transition: string;
  tires: string;
  paint: string;
  time: string;
  price: number;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  car = new Car();
  dataSource: MatTableDataSource<Car>;

  displayedColumns: string[] = ['Model', 'Engine', 'Transition',
   'Tires', 'Paint', 'Time', 'Price', 'Operations'];

  constructor() {
    this.car.model = 'Volvo';
    this.car.engine = '1.6 FSI';
    this.car.transition = 'Opel Automatic - 6 gears';
    this.car.tires = 'Debica';
    this.car.paint = 'red';
    this.car.time = '11 days';
    this.car.price = 12000.23;
    this.dataSource = new MatTableDataSource();
    this.dataSource.data.push(this.car);
  }

  ngOnInit(): void {
  }

  continue(){
    this.dataSource = new MatTableDataSource();
  }
}
