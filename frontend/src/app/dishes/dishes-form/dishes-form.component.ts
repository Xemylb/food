import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dish } from '../models/Dish';

@Component({
  selector: 'app-dishes-form',
  templateUrl: './dishes-form.component.html',
  styleUrls: ['./dishes-form.component.css']
})
export class DishesFormComponent implements OnInit {
@Input() dish: Dish;
@Output() saveDish = new EventEmitter<Dish>()
  constructor() { }

  ngOnInit() {
  }

  onSubmit($event, val){
    console.log('val', val)
    $event.preventDefault();
    this.saveDish.emit(this.dish)
  }
}
