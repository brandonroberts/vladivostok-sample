import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-page',
  directives: [],
  template: `
    <h2>Search</h2>

    Query Params:<br><br>

    {{ params | async | json }}
  `
})
export class SearchPage implements OnInit {
  params: any;
  constructor(private router: Router) {}

  ngOnInit() {
    this.params = this.router.currentState.queryParams;
  }
}
