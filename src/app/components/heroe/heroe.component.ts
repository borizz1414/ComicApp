import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../servicios/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent  {
  heroe:any = {};
  constructor( private _activatedRoute:ActivatedRoute,
               private _heroesServie:HeroesService) {

    this._activatedRoute.params.subscribe(params => {
      // console.log(params['id'])
      this.heroe = this._heroesServie.getHeroe(params['id'])
      console.log(this.heroe)
    })
   }



}
