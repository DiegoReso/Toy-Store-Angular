import { NgFor } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule } from '@angular/material/grid-list'
import { ToysService } from '../../services/toys.service';

@Component({
  selector: 'app-toycard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,NgFor,MatGridListModule],
  templateUrl: './toycard.component.html',
  styleUrl: './toycard.component.css'
})
export class ToycardComponent {

  toys: any[] = []

  toysService = inject(ToysService)

  ngOnInit(){
    this.toysService.getAll().subscribe((toys)=>{
      this.toys = toys
    })
  }
}
