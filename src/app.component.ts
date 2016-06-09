import { Component }         from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DialogService } from './dialog.service';
import { HeroService }   from './heroes/hero.service';

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
  providers: [
    DialogService,
    HeroService
  ],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
