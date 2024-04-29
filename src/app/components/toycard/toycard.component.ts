
import { Component,computed,EventEmitter,inject,input, Output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule } from '@angular/material/grid-list'

import { Toy } from '../interfaces/toy.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toycard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatGridListModule],
  templateUrl: './toycard.component.html',
  styleUrl: './toycard.component.css'
})
export class ToycardComponent {

  toy = input.required<Toy>()

  @Output() edit = new EventEmitter()
  @Output() delete = new EventEmitter()

  router = inject(Router)

  toyId = computed(()=> this.toy().id)
  toyName = computed(()=> this.toy().toyName)
  toyBrand = computed(()=> this.toy().toyBrand)
  toyPrice = computed(()=> this.toy().price)

  onEdit(){
    this.edit.emit()
  }

  onDelete(){
    this.delete.emit()
  }

}
