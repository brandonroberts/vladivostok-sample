import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fragment-page',
  directives: [],
  template: `
    <h2>Hash</h2>

    Fragment: {{ fragment | async }}
  `
})
export class FragmentPage implements OnInit {
  fragment: any;
  constructor(private router: Router) {}

  ngOnInit() {
    this.fragment = this.router.routerState.fragment;
  }
}
