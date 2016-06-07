import { HeroListComponent }     from './hero-list.component';
import { HeroDetailComponent }   from './hero-detail.component';

export const HeroesRoutes = [
  { path: '/heroes',  component: HeroListComponent },
  { path: '/hero/:id', component: HeroDetailComponent }
];
