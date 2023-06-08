import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    let foodObservable:Observable<Food[]>;
    actevatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      foodObservable  = this._foodservice.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
      foodObservable  = this._foodservice.getAllFoodByTag(params.tag);
      else
      foodObservable  = this._foodservice.getAll();

      foodObservable.subscribe(serverFoods =>{
        this.foods = serverFoods;
      })

    })
  }




}
