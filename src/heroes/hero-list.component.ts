// TODO SOMEDAY: Feature Componetized like CrisisCenter
import { Component, OnInit }          from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Hero, HeroService}   from './hero.service';

@Component({
  template: `
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="let hero of heroes | async"
        [class.selected]="isSelected(hero)"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];

  private selectedId: number;

  constructor(
    private service: HeroService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(){
    this.heroes = this.router
      .routerState
      .queryParams
      .map(params => params['id'])
      .do(id => this.selectedId =+ id)
      .mergeMap(id => this.service.getHeroes());
  }

  isSelected(hero: Hero) { return hero.id === this.selectedId; }

  onSelect(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
