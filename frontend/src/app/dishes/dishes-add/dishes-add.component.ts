import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/Dish';
import { DishesService } from '../dishes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dishes-add',
  templateUrl: './dishes-add.component.html',
  styleUrls: ['./dishes-add.component.css']
})
export class DishesAddComponent implements OnInit {
dish: Dish
  constructor(
    private disherService: DishesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.dish = new Dish
  }

onSaveDish(dish: Dish){
  this.disherService.addDish(dish)
      .subscribe(() => this.router.navigate(['../../dishes'], {relativeTo: this.route}))
}

}
