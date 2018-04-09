import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Dish } from './models/Dish';

import { environment } from '../../environments/environment';

const disher_url = environment.apiUrl + "/api/dishes";

@Injectable()
export class DishesService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Dish[]>{
    return this.http.get<Dish[]>(disher_url);
  }

  getDish(id: number): Observable<Dish>{
    const url = this.getDishUrl(id)
    return this.http.get<Dish>(url);
  }

  addDish(dish:Dish):Observable<Dish> {
    return this.http.post<Dish>(disher_url, dish)
  };

  updateDish(dish:Dish) {
    const url = this.getDishUrl(dish.id)
    return this.http.put<Dish>(url, dish)
  }

  deleteDish(id: number) {
    const url = this.getDishUrl(id)
    return this.http.delete(url)
  }

  getDishUrl(id:number): string {
    return `${disher_url}/${id}`;
  }

}
