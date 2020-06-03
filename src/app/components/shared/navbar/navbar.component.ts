import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent implements OnInit {

  constructor( private _activatedRoute:ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
  }
  buscarHeroe(termino:string){
    this._router.navigate(['/search',termino])
  }
}
