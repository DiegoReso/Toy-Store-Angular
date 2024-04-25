
import { Component,computed,input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule } from '@angular/material/grid-list'

import { Toy } from '../interfaces/toy.interface';

@Component({
  selector: 'app-toycard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatGridListModule],
  templateUrl: './toycard.component.html',
  styleUrl: './toycard.component.css'
})
export class ToycardComponent {

  toy = input.required<Toy>()

  toyId = computed(()=> this.toy().id)
  toyName = computed(()=> this.toy().toyName)
  toyBrand = computed(()=> this.toy().toyBrand)
  toyPrice = computed(()=> this.toy().price)


}
