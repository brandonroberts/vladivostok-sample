import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'blog-posts',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h2 class="title">Posts</h2>

    <ul class="items">
      <li *ngFor="let post of posts">
        <span class="badge">{{post.id}}</span>
        <a [routerLink]="'/blog/post/' + post.id">{{ post.title }}</a>
      </li>
    </ul>
  `
})
export class BlogPosts {
  posts: any[] = [
    {
      id: 1,
      title: 'My First Post'
    },
    {
      id: 2,
      title: 'My Second Post'
    },
    {
      id: 3,
      title: 'My Third Post'
    }
  ]
}
