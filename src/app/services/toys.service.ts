import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Toy } from '../components/interfaces/toy.interface';

@Injectable({
  providedIn: 'root'
})
export class ToysService {

  httpClient  = inject(HttpClient)

    getAll(){
      return this.httpClient.get<Toy[]>('/api/products')
    }

  }

