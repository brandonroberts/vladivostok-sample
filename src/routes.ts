import { RouterConfig } from '@angular/router';
import { HomePage } from './home';
import { BlogPage } from './blog';
import { BlogPosts } from './posts';
import { PostPage } from './post';
import { SearchPage } from './search';
import { FragmentPage } from './fragment';

export const ROUTES: RouterConfig = [
  {
    path: '/', // not working
    component: HomePage
  },
  {
    path: '/blog',
    component: BlogPage,
    children: [
      {
        path: '/posts',
        component: BlogPosts
      },
      {
        path: '/post/:id',
        component: PostPage
      }
    ]
  },
  {
    path: '/search',
    component: SearchPage
  },
  {
    path: '/fragment',
    component: FragmentPage
  }
];
