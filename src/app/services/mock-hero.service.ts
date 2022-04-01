import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';
const mokeData:Hero[]=[{id:22,name:"Dr J"},
{id:28,name:"Murugan"},
{id:26,name:"Bellow"},
{id:25,name:"Geethan"},
{id:44,name:"chinnal"}]
@Injectable({
  providedIn: 'root'
})
export class MockHeroService {

  
}
