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
    get(id:string){
      return this.httpClient.get<Toy>(`/api/products/${id}`)
    }

    post(payload: ToyPayload){
      return this.httpClient.post('/api/products', payload)
    }

    put(id: string, payload: ToyPayload){
      return this.httpClient.put(`/api/products/${id}`, payload)
    }

    delete(id:string){
      return this.httpClient.delete(`/api/products/${id}`)
    }
  }

