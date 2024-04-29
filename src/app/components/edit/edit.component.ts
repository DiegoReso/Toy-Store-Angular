
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { ToysService } from '../../services/toys.service';
import {MatSnackBar} from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router';
import { Toy } from '../interfaces/toy.interface';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent {


  toyService = inject(ToysService)
  matSnackBar = inject(MatSnackBar)
  router = inject(Router)
  
  toy: Toy = inject(ActivatedRoute).snapshot.data['toy']
  


  form = new FormGroup({
    toyName: new FormControl<string>(this.toy.toyName,{
      nonNullable: true,
      validators: Validators.required
      }),
    toyBrand: new FormControl<string>(this.toy.toyBrand,{
      nonNullable: true,
      validators: Validators.required
      }),
    price: new FormControl<string>(this.toy.price,{
      nonNullable: true,
      validators: Validators.required
        }),
  })

  onSubmit(){

    this.toyService.put(this.toy.id,{
      toyName: this.form.controls.toyName.value,
      toyBrand: this.form.controls.toyBrand.value,
      price: this.form.controls.price.value
    }).subscribe(()=>{
      this.matSnackBar.open('Brinquedo Editado com sucesso','OK',{
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition:'bottom'
    })
    this.router.navigateByUrl('/')
    })
    
  }

}
