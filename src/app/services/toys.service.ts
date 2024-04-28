import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Toy } from '../components/interfaces/toy.interface';
import { ToyPayload } from '../components/interfaces/payload-toy.interface';

@Injectable({
  providedIn: 'root'
})
export class ToysService {

  httpClient  = inject(HttpClient)

    getAll(){
      return this.httpClient.get<Toy[]>('/api/products')
    }

    post(payload: ToyPayload){
      return this.httpClient.post('/api/products', payload)
    }
  }

