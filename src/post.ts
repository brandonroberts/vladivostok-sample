import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'post-page',
  directives: [],
  template: `
    <h2>Post</h2>

    Post ID: {{ id$ | async }}

    <br><br>

    <button (click)="goToPosts()">Back to Posts</button>
  `
})
export class PostPage implements OnInit {
  id$: any;
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('constructor');
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
    });
    
    this.id$ = this.route.params.map(p => p['id']);
  }

  goToPosts() {
    this.router.navigateByUrl('/blog/posts');
  }
}
