import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService,Heroe } from "../../servicios/heroes.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  heroes:Heroe[] = []
  termino:string;
  constructor(private _activatedRoute: ActivatedRoute,
              private _heroesService:HeroesService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {

      this.heroes = this._heroesService.buscarHeroes(params['termino'])
      this.termino = params['termino']
      console.log(this.heroes)
    })

  }

}
