import { Component, OnInit } from '@angular/core';
import { PaintsService } from '../services/paint.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public paintService: PaintsService) {
    paintService.setData();
  }

  ngOnInit(): void {
  }

}
