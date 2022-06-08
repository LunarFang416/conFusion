import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish'
import { DishService } from '../services/dish.service'

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {

  dish: Dish | any = null;

  constructor(private route: ActivatedRoute, private dishService: DishService, private location: Location) {
    // this.dish = null;
  }

  ngOnInit(): void {
    this.dish = this.dishService.getDish(this.route.snapshot.params['id']);
  }

  goBack(): void {
    this.location.back();
  }
}
