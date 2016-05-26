import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router';
import { ROUTES } from './routes';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1 class="title">Router Blog</h1>

    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/blog/posts">Blog</a>
      <a routerLink="/blog/post/1">Post 1</a>
      <a routerLink="/search?query=test">Search</a>
      <a routerLink="/fragment#myanchor">Hash</a>
    </nav>

    <router-outlet></router-outlet>
  `
})
export class App implements OnInit {
  routes: RouteConfig = ROUTES;

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    this.router.resetConfig(this.routes);
    this.router.navigateByUrl(this.location.path());
  }
}
