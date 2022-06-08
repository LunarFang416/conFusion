import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service'
import { Router } from '@angular/router';

import { Dish } from '../shared/dish'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[] | any = null;


  constructor(private dishService: DishService, private router: Router) {}

  ngOnInit(): void { 
    this.dishes = this.dishService.getDishes();
  }
  
  onSelect(dish: Dish): void{
    this.router.navigate([`dishdetail/${dish.id}`]);

  }

}
