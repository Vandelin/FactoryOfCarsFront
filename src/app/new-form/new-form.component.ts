import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Models } from '../models/models';
import { Engines } from '../models/engines';
import { Order } from '../models/order';
import { Paint } from '../models/paint';
import { Transmission } from '../models/transmission';
import { Tires } from '../models/tires';

export interface Material {
  material: string;
  name: string;
}


@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  model: Models;
  engines: Engines;
  order: Order;
  paint: Paint;
  transmission: Transmission;
  tires: Tires;
  price = 0;

  constructor(public dialog: MatDialog) {}


  form: FormGroup = new FormGroup({
    model: new FormControl(),
    engine: new FormControl(),
    transition: new FormControl(),
    paint: new FormControl(),
    tires: new FormControl()
  });

  ngOnInit(): void {
    this.form.get('model').valueChanges.subscribe(val => {
      this.price += 1;
    });
  }


  submit(){
    if (this.form.controls.paint.value === 'red'){
      const orderMaterials = this.dialog.open(OrderMaterialsComponent, {
        width: '450px',
        data: {name: 'paint',
              material: this.form.controls.paint.value}
      });
    }
  }
}

@Component({
  selector: 'app-order-materials',
  templateUrl: './orderMaterials.html',
})
export class OrderMaterialsComponent {


  constructor(
    public dialogRef: MatDialogRef<OrderMaterialsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Material) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void{
    this.dialogRef.close();
  }

}
