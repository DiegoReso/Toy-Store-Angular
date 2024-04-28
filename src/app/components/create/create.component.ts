import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  form = new FormGroup({
    toyName: new FormControl<string>('',{
      nonNullable: true,
      validators: Validators.required
      }),
    toyBrand: new FormControl<string>('',{
      nonNullable: true,
      validators: Validators.required
      }),
    price: new FormControl<number>(0,{
      nonNullable: true,
      validators: Validators.required
        }),
  })

  onSubmit(){
    const toyName = this.form.controls.toyName
    const toyBrand = this.form.controls.toyBrand
    const price = this.form.controls.price
    
    
  }


}
