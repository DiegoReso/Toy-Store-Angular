import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToycardComponent } from './components/toycard/toycard.component';
import { HeaderComponent } from './partials/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ToycardComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toy-store';



}