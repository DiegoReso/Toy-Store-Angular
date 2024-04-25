import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule } from '@angular/material/grid-list'

@Component({
  selector: 'app-toycard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,NgFor,MatGridListModule],
  templateUrl: './toycard.component.html',
  styleUrl: './toycard.component.css'
})
export class ToycardComponent {

  toys: any[] = []

  httpClient = inject(HttpClient)

  ngOnInit(){
    this.httpClient.get<any>('api/products').subscribe((toys)=>{
      this.toys = toys
    })
  }
  
}
