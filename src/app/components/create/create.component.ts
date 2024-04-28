import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { ToysService } from '../../services/toys.service';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  toyService = inject(ToysService)

  matSnackBar = inject(MatSnackBar)

  router = inject(Router)

  form = new FormGroup({
    toyName: new FormControl<string>('',{
      nonNullable: true,
      validators: Validators.required
      }),
    toyBrand: new FormControl<string>('',{
      nonNullable: true,
      validators: Validators.required
      }),
    price: new FormControl<string>('',{
      nonNullable: true,
      validators: Validators.required
        }),
  })

  onSubmit(){

    
    this.toyService.post({
      toyName: this.form.controls.toyName.value,
      toyBrand: this.form.controls.toyBrand.value,
      price: this.form.controls.price.value
    }).subscribe(()=>{
      this.matSnackBar.open('Brinquedo Cadastrado com sucesso','OK',{
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition:'bottom'
    })
    this.router.navigateByUrl('/').catch(()=> alert("UII"))
    })
    
  }


}
