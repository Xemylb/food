import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DishesService } from '../dishes.service';
import  { Dish }  from '../models/Dish'; 
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  list$: Observable<Dish[]>

  constructor(
    private dishesService: DishesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.list$ = this.dishesService.getList();
  }

  editDish(id) {
    this.router.navigate(['./edit', id], {relativeTo: this.route})
  }

  addDish() {
    this.router.navigate(['./add'], {relativeTo: this.route})
  }
  deleteDish($event,id){
    $event.preventDefault()
   this.list$ = this.dishesService.deleteDish(id)
      .switchMap(()=> this.dishesService.getList())
  }

}
