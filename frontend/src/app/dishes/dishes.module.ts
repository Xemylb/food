import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishesFormComponent } from './dishes-form/dishes-form.component';
import { DishesEditComponent } from './dishes-edit/dishes-edit.component';
import { DishesAddComponent } from './dishes-add/dishes-add.component';
import { DishesRoutingModule } from './dishes-routing.module';
import { DishesService } from './dishes.service';

@NgModule({
  imports: [
    CommonModule,
    DishesRoutingModule,
    FormsModule
  ],
  declarations: [DishesListComponent, DishesFormComponent, DishesEditComponent, DishesAddComponent],
  providers: [DishesService]
})
export class DishesModule { }
