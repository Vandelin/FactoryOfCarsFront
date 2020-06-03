import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSortHeader } from '@angular/material/sort';
import { PaintsService } from '../services/paint.service';

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

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  car = new Car();
  dataSource: MatTableDataSource<Car>;

  displayedColumns: string[] = ['Model', 'Engine', 'Transition',
   'Tires', 'Paint', 'Price', 'Time', 'Status', 'Operations'];

  constructor(public paintService: PaintsService) {
  }

  ngOnInit(): void {
    this.dataSource = this.paintService.getData();
  }

  submit(){
    this.paintService.clearData();
    this.dataSource = this.paintService.getData();
  }
}
