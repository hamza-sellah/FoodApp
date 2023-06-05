import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[]=[];
  constructor(private _foodservice:FoodService,actevatedRoute:ActivatedRoute){
    actevatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.foods=this._foodservice.getAllFoodsBySearchTerm(params.searchTerm);
      else
      this.foods=this._foodservice.getAll();
    })
  }




}
