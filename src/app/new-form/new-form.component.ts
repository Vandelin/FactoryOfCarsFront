import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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

  constructor(public dialog: MatDialog) {}


  form: FormGroup = new FormGroup({
    model: new FormControl(),
    engine: new FormControl(),
    transition: new FormControl(),
    paint: new FormControl(),
    tires: new FormControl()
  });

  ngOnInit(): void {
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
