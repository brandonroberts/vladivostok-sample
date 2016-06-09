import { Component } from '@angular/core';
import { DialogService } from './dialog.service';
import { HeroService } from './heroes/hero.service';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Component Router</h1>
    <nav>
      <a [routerLink]="['/crisis-center']">Crisis Center</a>
      <a [routerLink]="['/heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers:  [
    DialogService,
    HeroService
  ],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  constructor(private router: Router) {}
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
