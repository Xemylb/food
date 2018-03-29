import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Dish } from '../models/Dish';

import 'rxjs/add/operator/switchMap';
import { DishesService } from '../dishes.service';

@Component({
  selector: 'app-dishes-edit',
  templateUrl: './dishes-edit.component.html',
  styleUrls: ['./dishes-edit.component.css']
})
export class DishesEditComponent implements OnInit {
  dish$: Observable<Dish>

  constructor(
     private route: ActivatedRoute,
     private disherService: DishesService,
     private router: Router
    ) { }

  ngOnInit() {
    this.dish$ = this.route.paramMap
      .switchMap((params: ParamMap) => this.disherService.getDish(+params.get('id')))
  }


onSaveDish(dish: Dish){
  this.disherService.updateDish(dish)
      .subscribe(() => this.router.navigate(['../../../dishes'], {relativeTo: this.route}))
}
}
