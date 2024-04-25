import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-toycard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,NgFor],
  templateUrl: './toycard.component.html',
  styleUrl: './toycard.component.css'
})
export class ToycardComponent {

@Input() toys!: any[]


}
