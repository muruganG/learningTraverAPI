import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroMoCK } from 'src/app/services/hero.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }
  heros:Hero[]=HeroMoCK;
  ngOnInit(): void {
  }

  filterText(filterValue:string){
    
  }

}
