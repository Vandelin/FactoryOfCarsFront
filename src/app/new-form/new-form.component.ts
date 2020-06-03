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
import { ModelsService } from '../services/models.service';
import { EnginesService } from '../services/engines.service';
import { PaintsService } from '../services/paint.service';
import { TiresService } from '../services/tires.service';
import { TransmissionService } from '../services/transmissions.service';

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

  models: Models[];
  engines: Engines[];
  order: Order;
  paints: Paint[];
  transmissions: Transmission[];
  tires: Tires[];
  price = 0;

  constructor(public dialog: MatDialog,
              public modelService: ModelsService,
              public enginesService: EnginesService,
              public paintService: PaintsService,
              public tiresService: TiresService,
              public transmissionsService: TransmissionService) {
                modelService.getAll().subscribe(models => {
                  this.models = models;
                });
                enginesService.getAll().subscribe(engines => {
                  this.engines = engines;
                });
                paintService.getAll().subscribe(paints => {
                  this.paints = paints;
                  console.log(paints);
                });
                tiresService.getAll().subscribe(tires => {
                  this.tires = tires;
                });
                transmissionsService.getAll().subscribe(transmissions => {
                  this.transmissions = transmissions;
                });
                this.form.valueChanges.subscribe(order => {
                  this.getPriceByOrder(order);
                });
              }


  form: FormGroup = new FormGroup({
    model: new FormControl(),
    engine: new FormControl(),
    transmission: new FormControl(),
    paint: new FormControl(),
    tire: new FormControl(),
    price: new FormControl()
  });

  ngOnInit(): void {
  }

  getPriceByOrder(order){
    this.price = 0;
    if (order.model != null){
      this.price += this.models.find(model => {
        return model.id === order.model;
      }).price;
    }
    if (order.engine != null){
      this.price += this.engines.find(engine => {
        return engine.id === order.engine;
      }).price;
    }
    if (order.tire != null){
      this.price += this.tires.find(tire => {
        return tire.id === order.tire;
      }).price;
    }
    if (order.transmission != null){
      this.price += this.transmissions.find(transmission => {
        return transmission.id === order.transmission;
      }).price;
    }
    if (order.paint != null){
      this.price += this.paints.find(paint => {
        return paint.id === order.paint;
      }).price;
    }
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
