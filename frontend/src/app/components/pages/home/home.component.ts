import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{


  foods: Food[] = [];

  constructor(private foodService:FoodService, private activatedRoute : ActivatedRoute){
    activatedRoute.params.subscribe((params) => {
       if(params.searchTerm){
        this.foods = this.foodService.getAllFoodBySearchTerm(params.searchTerm);
       } else if(params.tag){
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
       } else {
        this.foods = foodService.getAll()
       }
    })
  }

  ngOnInit(): void {
  }



}
