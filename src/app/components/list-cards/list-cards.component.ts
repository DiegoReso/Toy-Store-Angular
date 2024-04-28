import { Component, inject } from '@angular/core';
import { ToysService } from '../../services/toys.service';
import { ToycardComponent } from '../toycard/toycard.component';
import { Toy } from '../interfaces/toy.interface';

@Component({
  selector: 'app-list-cards',
  standalone: true,
  imports: [ToycardComponent],
  templateUrl: './list-cards.component.html',
  styleUrl: './list-cards.component.css'
})
export class ListCardsComponent {


  toys: Toy[] = []

  toysService = inject(ToysService)

  ngOnInit(){
    this.toysService.getAll().subscribe((toys)=>{
      this.toys = toys
    })
  }
}

